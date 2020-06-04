import { observable } from 'mobx'
// import apiCall from './services/apiCall'

class AppStore {
  @observable login = ''
  @observable password = ''
  @observable messeges = []

  setField(data, field) {
    this[field] = data
  }
  async info() {
    console.log('wtf')
    // apiCall({login:'user',password:'passwd',service:'general',method:'GET'})
  }
}

export default new AppStore()