import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'

/* actions */
import * as uiActionCreators  from 'core/actions/actions-ui'

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'components/modal'


import {
  styles,
  demoModal1Styles,
  demoModal3Styles
} from './styles.scss'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  openModal=(evt) => {
    const { modalKey } = evt.target.dataset
    const { actions } = this.props
    actions.ui.openModal({modalKey})
  }

  render() {
    const { actions, ui } = this.props

    return (
      <div className={styles}>
        <br />
        <input type="button" value="open modal 1" onClick={this.openModal} data-modal-key="modal-example-1" />
        <br />
        <br />
        <input type="button" value="open modal 2" onClick={this.openModal} data-modal-key="modal-example-2" />

        <Modal
          modalKey="modal-example-1"
          modalState={ui.Modal}
          className="demo-modal-1"
          closeAction={actions.ui.closeModal}
          cssModule={demoModal3Styles}>
          <ModalHeader title="Modal 1 Header Title" />
          <ModalBody>
            Modal 1 body
          </ModalBody>
          <ModalFooter>
            <input type="button" value="Do Something" />
          </ModalFooter>
        </Modal>

        <Modal
          modalKey="modal-example-2"
          closeAction={actions.ui.closeModal}
          modalState={ui.Modal}>
          <ModalHeader title="Modal 2 Header Title" />
          <ModalBody>
            Modal 2 body
          </ModalBody>
          <ModalFooter/>
        </Modal>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ui: state.ui
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
