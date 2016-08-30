var React = require('react')

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
          <QuizBody data={this.props.data}/>
        </div>
    )
  }
}
module.exports = App;

