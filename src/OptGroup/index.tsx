import React, { Component } from 'react'
import './index.css'

export interface IOptGroupProps {
  id?: string
  children?: any // options
  label?: string
}

export interface IOptGroupState {
  id: string
  children?: any // options
  label: string
}

// class ComponentName Component<PropsInterface, StateInterface>
class OptGroup extends Component<IOptGroupProps, IOptGroupState> {
  // Component State
  state = {
    id: this.props.id ? this.props.id : '',
    children: this.props.children,
    label: this.props.label ? this.props.label : ''
  }

  // Add style here
  style = {}

  // Before the component mounts, we initialise our state
  componentWillMount() {}

  // After the component did mount, we set the state.
  componentDidMount() {}

  render() {
    return (
      <div className='OptGroup'>
        <optgroup label={this.state.label}>{this.state.children}</optgroup>
      </div>
    )
  }
}

export default OptGroup
