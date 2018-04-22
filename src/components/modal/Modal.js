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
    const { modalKey, showCancel } = this.props
    return {
      modalKey,
      showCancel,
      handleClose: this.handleClose
    }
  }

  componentWillReceiveProps(nextProps) {
    const modalInstance = nextProps.modalState

    if (modalInstance && (modalInstance.modalKey === this.props.modalKey)) {
      this.setState({
        show: modalInstance.showModal
      })
    }
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
    const { closeDispatcher, modalKey } = this.props
    closeDispatcher({modalKey})
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  cssModule: PropTypes.string,
  closeDispatcher: PropTypes.func.isRequired,
  modalKey: PropTypes.string.isRequired,
  modalState: PropTypes.shape({
    showModal: PropTypes.bool,
    modalKey: PropTypes.string
  }).isRequired,
  showCancel: PropTypes.bool
}

Modal.defaultProps = {
  showCancel: true
}

Modal.childContextTypes = {
  handleClose: PropTypes.func,
  modalKey: PropTypes.string,
  showCancel: PropTypes.bool
}

export default Modal
