/**
 * create at 10/08/18
 */
import { createStore } from 'redux'

import { reducer } from '../reducer'

export default ()=>createStore(reducer)