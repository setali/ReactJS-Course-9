class Counter extends React.Component {
  //   constructor () {
  //     this.state = {
  //       counter: 10
  //     }
  //   }

  state = {
    counter: 10
  }

  valueElement () {
    return React.createElement('span', {}, this.state.counter)
  }

  increaseButton () {
    return React.createElement(
      'button',
      {
        style: { marginLeft: '10px' },
        className: 'button',
        onClick: () => {
          //   this.state.counter = this.state.counter + 1
          this.setState({ counter: this.state.counter + 1 })
        }
      },
      'Increase'
    )
  }

  decreaseButton () {
    return React.createElement(
      'button',
      {
        onClick: () => this.setState({ counter: this.state.counter - 1 })
      },
      'Decrease'
    )
  }

  render () {
    console.log('render', this.state.counter)
    return React.createElement(
      'div',
      {},
      this.valueElement(),
      this.increaseButton(),
      this.decreaseButton()
    )
  }
}

const element = React.createElement(Counter)

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(element)
