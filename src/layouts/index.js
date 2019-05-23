import React, { Component } from 'react';
import { connect } from 'dva'
import '@/assets/main.scss'

@connect(({ global }) => ({ user: global.user }))
class BasicLayout extends Component {
  render() {
    const props = this.props
    return (
      <div className="layout-wrapper">
        <h1>{ props.user.name }</h1>
        { props.children }
      </div>
    )
  }
}

export default BasicLayout;
