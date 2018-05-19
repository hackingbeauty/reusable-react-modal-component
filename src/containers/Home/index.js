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
  demoModal2Styles,
  demoModal3Styles,
  demoModal4Styles
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
        <div className="section">
          <h3>Standard Modal</h3>
          <input type="button" value="open modal 1" onClick={this.openModal} data-modal-key="modal-example-1" />
        </div>
        <div className="section">
          <h3>Modal with customized width</h3>
          <input type="button" value="open modal 2" onClick={this.openModal} data-modal-key="modal-example-2" />
        </div>
        <div className="section">
          <h3>Modal with customized header</h3>
          <input type="button" value="open modal 3" onClick={this.openModal} data-modal-key="modal-example-3" />
        </div>

        <div className="section">
          <h3>Modal with customized footer</h3>
          <input type="button" value="open modal 4" onClick={this.openModal} data-modal-key="modal-example-4" />
        </div>

        <Modal
          modalKey="modal-example-1"
          closeAction={actions.ui.closeModal}
          modalState={ui.Modal}>
          <ModalHeader title="Modal 1 Header Title" />
          <ModalBody>
            Modal 1 body
          </ModalBody>
          <ModalFooter/>
        </Modal>

        <Modal
          modalKey="modal-example-2"
          modalState={ui.Modal}
          className="demo-modal-2"
          closeAction={actions.ui.closeModal}
          cssModule={demoModal2Styles}>
          <ModalHeader title="Modal 2 Header Title" />
          <ModalBody>
            Modal 2 body
          </ModalBody>
          <ModalFooter />
        </Modal>

        <Modal
          modalKey="modal-example-3"
          modalState={ui.Modal}
          className="demo-modal-3"
          closeAction={actions.ui.closeModal}
          cssModule={demoModal3Styles}>
          <ModalHeader title="Modal 3 Header Title">
            <a href="#"><span className="close"></span></a>
          </ModalHeader>
          <ModalBody>
            Modal 3 body
          </ModalBody>
          <ModalFooter />
        </Modal>

        <Modal
          modalKey="modal-example-4"
          modalState={ui.Modal}
          className="demo-modal-4"
          closeAction={actions.ui.closeModal}
          cssModule={demoModal4Styles}>
          <ModalHeader title="Modal 4 Header Title"/>
          <ModalBody>
            Modal 4 body
          </ModalBody>
          <ModalFooter>
            <input type="button" value="Do Something" onTouchTap={() => alert('Do something!')} />
          </ModalFooter>
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
