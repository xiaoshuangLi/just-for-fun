import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ActionCreators as UndoActionCreators } from 'redux-undo'

import App from './containers/App'
import configureStore from './store/configureStore'
import {add, edit, toggle} from './actions'


import '../css/index.scss'

const store = configureStore()

// let unsubscribe = store.subscribe(() =>
// 	console.log(store.getState())
// )

// store.dispatch(add({name: 'xiaoshuang', val: 'eeee'}, 'hobby'))
// store.dispatch(UndoActionCreators.undo())
// store.dispatch(UndoActionCreators.redo())

// unsubscribe()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
