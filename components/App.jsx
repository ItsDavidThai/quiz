var Jumbotron = ReactBootstrap.Jumbotron
var Button = ReactBootstrap.Button
class QuizBody extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      clicked:false
    }
  }
  wasClicked(){
    this.setState({
      clicked:true
    })
  }

  render(){
    return(
      <div>
        {this.props.data.map( (element) =>
        ( <QuizQuestion data={element}
                        click={this.wasClicked}/>) )}
      </div>
    )
  }
}






var QuizQuestion = (props) => {
  return(

      <div>{props.data}</div>
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
            <h1 onClick={function(){console.log('hello')}}>Quizzer</h1>
            <p>Are you ready for some quizzes?! great!------</p>
            <p><Button bsStyle="primary" onClick={console.log('hello')}>Learn more</Button></p>
          <QuizBody data={this.props.data}/>
          </Jumbotron>
        </div>
    )
  }
}


