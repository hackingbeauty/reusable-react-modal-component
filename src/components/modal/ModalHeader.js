import React, { Component }             from 'react'
import PropTypes                        from 'prop-types'
import { modalHeaderStyles }            from './styles.scss'
import { Modal as ReactBootstrapModal } from 'react-bootstrap'

class ModalHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children, title } = this.props

    return (
      <div className={modalHeaderStyles}>
        <ReactBootstrapModal.Header>
          <ReactBootstrapModal.Title>{title}</ReactBootstrapModal.Title>
          {children}
        </ReactBootstrapModal.Header>
      </div>
    )
  }
}

ModalHeader.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}

ModalHeader.defaultProps = {}

export default ModalHeader
