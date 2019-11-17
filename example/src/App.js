import React, { Component } from 'react'

import ExampleComponent, { Button } from 'landing-page-react'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text='Modern React component module' />
        <Button text='BUTTON TEXT' onClick={() => {console.log('button clicked.')}}/>
      </div>
    )
  }
}
