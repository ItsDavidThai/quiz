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
    // this.setState({

    // })
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

  render(){
    return(

        <div>
        <Button bsStyle='primary' onClick={this.handleSubmit.bind(this)}> Add</Button>
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

  return(
      <div>
      <Button onClick={function(e){
                props.delete(props.data)
              }}
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
            <p><Button bsStyle="primary" onClick={console.log('hello')}>Start</Button></p>
          <QuizBody data={this.props.data}/>
          </Jumbotron>
        </div>
    )
  }
}


