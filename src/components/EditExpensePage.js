import React, { Component } from 'react'

class EditExpensePage extends Component { 

  componentDidMount = () => {
    console.log(this.props)
  }
  

  render() {

    return (
      <div>
        Edit expense with id {this.props.match.params.id}
      </div>
    )
  }
}

export default EditExpensePage
