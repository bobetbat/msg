import React from 'react';
import  AppStore  from '../store'

class Main extends React.Component {
  componentWillMount() {
    AppStore.info()
  }
  render() {
    console.log('wtfMain')

    return (
      <div>b</div>
    ) 
  }
}

export default Main;
