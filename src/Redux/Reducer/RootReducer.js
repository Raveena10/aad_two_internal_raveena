import {combineReducers} from 'redux'
import { FormReducer } from './FormReducer'

export default combineReducers({
    contacts: FormReducer,
})
