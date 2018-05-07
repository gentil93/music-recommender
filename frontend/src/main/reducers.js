import { combineReducers } from 'redux'
import musicReducer from '../Components/musicReducer'

const rootReducer = combineReducers ({
  musics: musicReducer
})

export default rootReducer