import React from 'react'
// import Counter from './1-Counter'
// import LifeCycle from './2-LifeCycle'
// import ForceUpdate from './3-ForceUpdate'
// import LegacyLifeCycles from './4-LegacyLifeCycles'
// import UnMounting from './5-UnMounting'
// import ErrorBoundries from './6-ErrorBoundries'
// import DefaultProps from './7-DefaultProps'
// import ListKeys from './8-ListKeys'
// import Fragment from './9-Fragment'
import Portal from './10-Portal'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Portal />
        {/* <Fragment /> */}
        {/* <ListKeys /> */}
        {/* <DefaultProps color='red' name='Ali' />
        <DefaultProps name='Ali' />
        <DefaultProps color='blue' /> */}
        {/* <ErrorBoundries /> */}
        {/* <UnMounting /> */}
        {/* <LegacyLifeCycles /> */}
        {/* <ForceUpdate /> */}
        {/* <LifeCycle /> */}
        {/* <Counter defaultCounter={5} />
        <Counter defaultCounter={10} />
        <Counter defaultCounter={1} /> */}
      </div>
    )
  }
}

export default App
