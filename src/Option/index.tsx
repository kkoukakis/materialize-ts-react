import React, { Component } from 'react'
import './index.css'

export interface IOptionProps {
  id?: string
  children?: any
  text: string
  value: string
  disabled?: boolean
  selected?: boolean
}

export interface IOptionState {
  id: string
  children?: any
  text: string
  value: string
  disabled: boolean
  selected: boolean
}

// class ComponentName Component<PropsInterface, StateInterface>
class Option extends Component<IOptionProps, IOptionState> {
  // Component State
  state = {
    id: this.props.id ? this.props.id : '',
    children: this.props.children,
    text: this.props.text,
    value: this.props.value,
    disabled: this.props.disabled ? this.props.disabled : false,
    selected: this.props.selected ? this.props.selected : false
  }

  // Add style here
  style = {}

  // Before the component mounts, we initialise our state
  componentWillMount() {}

  // After the component did mount, we set the state.
  componentDidMount() {}

  render() {
    return (
      <div className='Option'>
        <option
          value={this.state.value}
          disabled={this.state.disabled}
          selected={this.state.selected}
        >
          {this.state.text}
        </option>
      </div>
    )
  }
}

export default Option
