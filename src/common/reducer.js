import { combineReducers } from 'redux'
import indexReducer from '../scenes/index/indexReducer'
import themeReducer from '../scenes/theme/themeReducer'
import noticeReducer from '../scenes/notice/noticeReducer'
import finishReducer from '../scenes/finish/finishReducer'

/**
 * 各reducerをこの処理で纏めます
 */
export default combineReducers({
    indexReducer,
    themeReducer,
    noticeReducer,
    finishReducer,

})