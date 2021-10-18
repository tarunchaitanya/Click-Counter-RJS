// Write your code here
import {Component} from 'react'
import './index.css'

class clickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="content">
          The button has been clicked <span className="value">{count}</span>{' '}
          times
        </h1>
        <p className="text">Click the button to increase the count!</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default clickCounter
