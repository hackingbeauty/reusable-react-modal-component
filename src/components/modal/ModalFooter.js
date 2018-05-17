import React, { Component }             from 'react'
import PropTypes                        from 'prop-types'
import { modalFooterStyles }            from './styles.scss'
import { Modal as ReactBootstrapModal } from 'react-bootstrap'

class ModalFooter extends Component {
  constructor(props) {
    super(props)
  }

  onCancel=() => {
    const { handleClose } = this.context
    handleClose()
  }

  getContent=() =>{
    const { children } = this.props

    return (
      <div>
        <div onClick={this.onCancel} className="cancel-btn btn btn-link">Cancel</div>
        <div className="custom-modal-footer-actions">{children}</div>
      </div>
    )
  }

  render() {
    const content = this.getContent()

    return (
      <div className={modalFooterStyles}>
        <ReactBootstrapModal.Footer>
          {content}
        </ReactBootstrapModal.Footer>
      </div>
    )
  }
}

ModalFooter.propTypes = {
  children: PropTypes.node
}

ModalFooter.contextTypes = {
  handleClose: PropTypes.func.isRequired
}

export default ModalFooter
