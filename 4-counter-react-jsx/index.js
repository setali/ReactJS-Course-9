class Counter extends React.Component {
  state = {
    counter: 10
  }

  render () {
    console.log('render', this.state.counter)

    return (
      <div>
        <span>{this.state.counter}</span>
        <button
          style={{ marginLeft: '10px' }}
          className='button'
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increase
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          Decrease
        </button>
      </div>
    )
  }
}

const element = React.createElement(Counter)

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <div>
    {element}
    <Counter />
    <Counter />
    <Counter />
    <Counter></Counter>
  </div>
)
