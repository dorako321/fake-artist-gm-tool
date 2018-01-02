import { combineReducers } from 'redux'
import indexReducer from '../scenes/index/indexReducer'
import themeReducer from '../scenes/theme/themeReducer'

/**
 * 各reducerをこの処理で纏めます
 */
export default combineReducers({
    indexReducer,
    themeReducer,

})