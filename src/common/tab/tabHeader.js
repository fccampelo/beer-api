import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedTab } from './tabActions'; 


class TabHeader extends Component {

  render() {

    const selected = this.props.tab.selected === this.props.target;

    return (
      <li className={ selected ? 'active': ''}>
        <a href='javascript:;'
            data-toogle='tab'
            onClick={() => this.props.selectedTab(this.props.target)}
            data-target={ this.props.target }
          > 
          <i className={`fa fa-${this.props.icon}`}></i> { this.props.label }
        </a>
      </li>
    )
  }
}

const mapStatsToProps = state => ({tab: state.tab})
const mapDispatchToProps = dispatch => bindActionCreators({selectedTab}, dispatch)

export default connect(mapStatsToProps, mapDispatchToProps)(TabHeader);