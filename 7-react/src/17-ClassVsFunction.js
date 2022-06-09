import { useState } from 'react'

export default function ClassVsFunction () {
  const [count, setCount] = useState(0)

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

// export default class ClassVsFunction extends Component {
//   state = { count: 0 }

//   render () {
//     return (
//       <div>
//         {this.state.count}
//         <button
//           onClick={() => this.setState(state => ({ count: state.count + 1 }))}
//         >
//           +
//         </button>
//       </div>
//     )
//   }
// }
