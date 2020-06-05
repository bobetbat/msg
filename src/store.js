import { observable } from 'mobx'
import apiCall from './services/apiCall'

class AppStore {
  @observable login = ''
  @observable password = ''
  @observable messeges = []

  info() {
    console.log('wtf')
    apiCall({login:'user',password:'passwd',service:'sms',method:'GET'})
  }

  loginAuth() {
    
  }
}

export default new AppStore()