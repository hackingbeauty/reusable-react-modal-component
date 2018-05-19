import React, { Component }             from 'react'
import PropTypes                        from 'prop-types'
import { modalStyles }                  from './styles.scss'
import { Modal as ReactBootstrapModal } from 'react-bootstrap'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  getChildContext() {
    const { modalKey} = this.props
    return {
      modalKey,
      handleClose: this.handleClose
    }
  }

  static getDerivedStateFromProps(nextProps) {
    const { modalKey, modalState } = nextProps

    if (modalKey === modalState.modalKey) {
      return { show: modalState.showModal }
    }

    return { show: false }
  }

  render() {
    const { show } = this.state
    const { className, cssModule, children } = this.props
    const mergedStyles = modalStyles + ' ' + cssModule

    return (
      <ReactBootstrapModal
        onHide={this.handleClose}
        show={show}
        className={mergedStyles}
        dialogClassName={className}>
        {children}
      </ReactBootstrapModal>
    )
  }

  handleClose=() => {
    const { closeAction, modalKey } = this.props
    closeAction({modalKey})
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  cssModule: PropTypes.string,
  closeAction: PropTypes.func.isRequired,
  modalKey: PropTypes.string.isRequired,
  modalState: PropTypes.shape({
    showModal: PropTypes.bool,
    modalKey: PropTypes.string
  }).isRequired
}

Modal.childContextTypes = {
  handleClose: PropTypes.func,
  modalKey: PropTypes.string
}

export default Modal
