// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {key1: 0, key2: 0}

  onIncrementMango = () => {
    this.setState(prevState => ({key1: prevState.key1 + 1}))
  }

  onIncrementBanana = () => {
    this.setState(prevState => ({key2: prevState.key2 + 1}))
  }

  render() {
    const {key1, key2} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading-1">
            Bob ate <span className="counter-style">{key1}</span> mangoes{' '}
            <span className="counter-style">{key2}</span> bananas
          </h1>
          <div className="fruits-container">
            <div>
              <div className="fruits-inner-container">
                <img
                  className="img-style"
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  alt="mango"
                />
              </div>
              <div className="button-container">
                <button
                  className="button-style"
                  onClick={this.onIncrementMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div>
              <div className="fruits-inner-container">
                <img
                  className="img-style"
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  alt="banana"
                />
              </div>
              <div className="button-container">
                <button
                  className="button-style"
                  onClick={this.onIncrementBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
