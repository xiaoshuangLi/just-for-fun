import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ActionCreators as UndoActionCreators } from 'redux-undo'

import App from './containers/App'
import configureStore from './store/configureStore'
import {add, edit, toggle, valid} from './actions'
import { getState } from './common'

import '../css/index.scss'

let present = getState()

const store = configureStore({present})

// let unsubscribe = store.subscribe(() =>
// 	console.log(store.getState().present.web.invalid)
// )

// store.dispatch(add({name: 'xiaoshuang', val: 'eeee'}, 'hobby'))
// store.dispatch(valid('131979130', 'phone'))
// store.dispatch(valid('13197913032', 'phone'))
// store.dispatch(UndoActionCreators.undo())
// store.dispatch(UndoActionCreators.redo())

// unsubscribe()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
