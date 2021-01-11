import React, { Component } from 'react'
import './index.css'
import M from 'materialize-css'

export interface ISelectProps {
  id?: string
  children?: any
  multiple?: boolean
  label?: string
}

export interface ISelectState {
  id: string
  children?: any
  multiple: boolean
  label: string
}

// class ComponentName Component<PropsInterface, StateInterface>
class Select extends Component<ISelectProps, ISelectState> {
  // Component State
  state = {
    id: this.props.id ? this.props.id : '',
    children: this.props.children,
    multiple: this.props.multiple ? this.props.multiple : false,
    label: this.props.label ? this.props.label : ''
  }

  // Add style here
  style = {}
  FormSelect: HTMLSelectElement

  // Before the component mounts, we initialise our state
  componentWillMount() {}

  // After the component did mount, we set the state.
  componentDidMount() {
    M.FormSelect.init(this.FormSelect)
  }

  render() {
    return (
      <div className='input-field select'>
        <select
          id={this.state.id}
          multiple={this.state.multiple}
          ref={(FormSelect: HTMLSelectElement) => {
            this.FormSelect = FormSelect
          }}
        >
          {this.state.children}
        </select>
        <label>{this.state.label}</label>
      </div>
    )
  }
}

export default Select
