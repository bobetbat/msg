import loadable from 'react-loadable'
import Loading from './components/Loading'
console.log('assaa')
export default [
  {
    path: '/',
    exact: true,
    component: loadable({
      loader: () => import('./views/Main'),
      loading: Loading
    })
  },
  {
    path: '/login',
    exact: true,
    component: loadable({
      loader: () => import('./views/Login'),
      loading: Loading
    })
  }
]
