import React, { Component }   from 'react'
import injectTapEventPlugin   from 'react-tap-event-plugin'
import { HashRouter, Route }  from 'react-router-dom'


// global styles for entire app
import './styles/app.scss'

/* application containers */
import Header from 'containers/Header'
import Home   from 'containers/Home'

injectTapEventPlugin()

export class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <HashRouter>
            <div>
              <Route exact path="/" component={Home}/>
            </div>
          </HashRouter>
        </div>
        <LeftNavBar />
      </div>

    )
  }
}

export default App
