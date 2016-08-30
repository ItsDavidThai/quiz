var React = require('react')
var ReactBootstrap = require('react-bootstrap')
var Jumbotron = ReactBootstrap.Jumbotron
var Button = ReactBootstrap.Button
var QuizBody = (props) =>{
  return(


    <div>
      {props.data.map( (element) => ( <QuizQuestion data={element} />) )}
    </div>
  )


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
            <h1>Quizzer</h1>
            <p>Are you ready for some quizzes?! great!------</p>
            <p><Button bsStyle="primary">Learn more</Button></p>
          <QuizBody data={this.props.data}/>
          </Jumbotron>
        </div>
    )
  }
}
module.exports = App;

