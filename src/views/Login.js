import React from 'react';
import  AppStore  from '../store'


class Login extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            onChange={e => (AppStore.login = e.target.value)}
            placeholder="login"
            className=""
          />
          <input
            type="password"
            onChange={e => (AppStore.password = e.target.value)}
            placeholder="password"
            className=""
          />
          <button onClick={AppStore.loginAuth()}>Submit</button>
        </div>
      </div>
    ) 
  }
}

export default Login;
