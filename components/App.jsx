var Jumbotron = ReactBootstrap.Jumbotron
var Button = ReactBootstrap.Button

class QuizBody extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      tasks:[{task:'jump'},{task:'buy'},{task:'hello'},{task:'yes'}]
    }
  }
  deleteTask(task){
    this.state.tasks.forEach((action, i) =>{
      for(var key in action){
        if (action[key] === task){
          var newList = this.state.tasks
          newList.splice(i, 1)
          this.setState({
            tasks: newList
          })
        }
      }

    })

  }

  fetchData(context){
    console.log(context)
      $.get( "fetch", function(data){
      // console.log(data)
      var taskData = [];
      data.forEach((task) =>{ taskData.push({task:task.taskname})})
      console.log(taskData)
      this.setState({
        tasks:taskData
      })
      return taskData
    }.bind(this))

  }

  addTask(task){
    console.log(task)
    this.setState({
      tasks: this.state.tasks.concat({task: task})
    })
  }

  render(){
    return(
      <div>
        <p><Button bsStyle="primary" onClick={this.fetchData.bind(this, this)}>Start</Button></p>
        <Input addtask={this.addTask.bind(this)}/>
        {this.state.tasks.map( (element) =>
        ( <QuizQuestion data={element.task}
                        delete={this.deleteTask.bind(this)}/>) )}
      </div>
    )
  }
}


class Input extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      value : ""
    }
  }
  addTaskToDB(e){
    console.log(JSON.stringify({task:this.state.value}), '-------- somewhere')
    var data = {task:this.state.value}
    $.post( "add", data, function(){
      console.log('post successful')
    }).fail(function(err){console.log(err)},
    {"Content-Type": "application/json"}
    )
  }
  handleInputChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  handleSubmit(e){
    // console.log(this.state.value)
    var task = this.state.value
    this.props.addtask(task)
  }

  events(){
    this.handleSubmit.bind(this)()
    this.addTaskToDB.bind(this)()
  }

  render(){
    return(

        <div>
        <Button bsStyle='primary'
        onClick={this.events.bind(this)}
        // onClick={this.handleSubmit.bind(this)}
        // onClick={this.addTaskToDB.bind(this)}
        > Add</Button>
          <input
            className="form-control"
            type="text"
            value={this.props.value}
            onChange={this.handleInputChange.bind(this)}
          />


        </div>
      )

  }
}



var QuizQuestion = (props) => {
  var deleteFromDb = function(data){
    $.post("remove",{taskname:data},function( res ) {
      console.log(res)
    });
  }

  var events = function(){
    props.delete(props.data)
    deleteFromDb(props.data)
  }
  return(
      <div>
      <Button onClick={
              events.bind(this)
              // function(e){
              //   props.delete(props.data)
              //   deleteFromDb()
              // }
            }
      >{props.data}
      </Button>
      </div>
    )
}

class App extends React.Component {
  constructor(props){
    super(props)
  }



  render(){
    return(
        <div>
         <Jumbotron>

            <h1>To Do App</h1>

          <QuizBody data={this.props.data}/>
          </Jumbotron>
        </div>
    )
  }
}


