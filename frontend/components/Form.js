import React from 'react'

export default class Form extends React.Component {
  state ={
    name: '',
  }

  onSubmit = evt => {
    
  }

  onChange = evt => {
const{value} = evt.target
    this.setState({
      name: value
    })
  }
  
  render() {
    const {addTodo} = this.props
    return (
      <Form onSubmit={this.onSubmit}>
        <input type='text' value={this.state.name} onChange={this.onChange}/>
        <input type='submit'/>
      </Form>
    )
  }
}
