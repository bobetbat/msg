import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import routes from './routes'

class App extends React.Component {
  render(){
    console.log('wtfAPP')

    return (
      <Router>
        <Switch>
          {routes.map(({ path, exact, component: Component, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={props => <Component {...props} {...rest} />}
            />
          ))}
      </Switch>
    </Router>
    ) 
  }
}

export default App;
