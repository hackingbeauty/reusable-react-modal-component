import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'

/* actions */
import * as uiActionCreators from 'core/actions/actions-ui'

/* component styles */
import { styles } from './styles.scss'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  handleToggle=() => {
    this.props.actions.ui.openNav()
  }

  render() {

    return (
      <div className={styles}>
        <header>
          Header goes here
        </header>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
