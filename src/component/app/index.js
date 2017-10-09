//packages
import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
//redux store
import createAppStore from '../../lib/store'
//react components
import DashboardContainer from '../dashboard-container'

const store = createAppStore()

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {}
  }

  componentDidMount(){
    //this is a getter for the state
    store.subscribe(() => {
      console.log('__STATE__', store.getState())
    })

    store.dispatch({type: null})
  }

  render(){
    return(
      <section className="kanban-board">
        <h1>This is a thing</h1>
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <Route exact path="/" component={DashboardContainer} />
            </section>
          </BrowserRouter>
        </Provider>
      </section>
    )
  }
}

export default App