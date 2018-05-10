import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { CodeShower }         from 'components'
import coursePromo            from 'assets/course-promo.png'

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
          modalKey="modal-example-3"
          modalState={ui.Modal}
          className="demo-modal-3"
          closeDispatcher={actions.ui.closeModal}
          cssModule={demoModal1Styles}>
          <ModalHeader title="Modal 3 Header Title" />
          <ModalBody>
            Modal 3 body
          </ModalBody>
          <ModalFooter />
        </Modal>

        <Modal
          modalKey="modal-example-2"
          closeDispatcher={actions.ui.closeModal}
          modalState={ui.Modal}>
          <ModalHeader title="Modal 2 Header Title" />
          <ModalBody>
            Modal 2 body
          </ModalBody>
          <ModalFooter/>
        </Modal>

        <Modal
          modalKey="modal-example-1"
          modalState={ui.Modal}
          className="demo-modal-1"
          closeDispatcher={actions.ui.closeModal}
          cssModule={demoModal3Styles}>
          <ModalHeader title="Modal 1 Header Title" />
          <ModalBody>
            Modal 1 body
          </ModalBody>
          <ModalFooter>
            <input type="button" value="Do Something" />
          </ModalFooter>
        </Modal>

        <br />
        <br />
        <br />
        <div>
          <p>Get guidance on developing and architecting a professional React app by an industry expert.</p>
          <p>Check out the course <a href="http://singlepageapplication.com">How To Write A Single Page Application!</a></p>
          <br />
          <a href="http://singlepageapplication.com">
            <img width="300" className="center" src={coursePromo} alt="Promo for course 'How To Write A Single Page Application!'" />
          </a>
          <br />
        </div>

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
