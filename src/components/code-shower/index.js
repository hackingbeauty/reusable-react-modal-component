import React, { Component }     from 'react'
import PropTypes                from 'prop-types'
import SyntaxHighlighter        from 'react-syntax-highlighter/prism'
import { xcode }                from 'react-syntax-highlighter/styles/prism'
import { codeShowerStyles }     from './styles.scss'
import stripIndent              from 'strip-indent'

class CodeShower extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
  }

  render() {
    const { setup, code } = this.props
    const { visibility } = this.state

    return (
      <div className={codeShowerStyles}>
        <div className={`code ${visibility}`}>
          <div className="setup-container">
            <div className="setup">{setup}</div>
            <span className="show-code" onClick={this.showCode}>Show/hide code</span>
          </div>
          <div className="code-section">
            {this.formatCodeSample(code)}
          </div>
        </div>
      </div>
    )
  }

  formatCodeSample(code) {
    const formattedCode = code.map((codeItem, index) => {
      const removedIndentedLines = stripIndent(codeItem.code).split('\n')

      const removedIndentation = removedIndentedLines.map((line) => {
        return line
      }).join('\n')

      return (<div key={`section=${index}`} className="section">
        <span>{codeItem.type}</span>
        <SyntaxHighlighter language="javascript" style={xcode}>{removedIndentation}</SyntaxHighlighter>
      </div>)
    })

    return formattedCode
  }

  showCode=() => {
    const { isVisible } = this.state

    this.setState({
      isVisible: !isVisible,
      visibility: isVisible === false ? 'show' : ''
    })
  }
}

CodeShower.propTypes = {
  setup: PropTypes.element,
  code: PropTypes.array
}

export default CodeShower
