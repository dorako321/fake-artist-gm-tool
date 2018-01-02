import * as Theme from './theme';
import * as ThemeAction from './themeAction';

const initialState = {
    themes: [],
    selectedTheme: null
};

export default function theme(state = initialState, action) {
    switch (action.type) {
        case ThemeAction.SELECT_THEME: {
            return Object.assign({}, state, {
                selectedTheme: action.selectedTheme
            })
        }
        case ThemeAction.FETCH_THEME_LIST_COMPLETE: {
            // console.log('action')
            // console.log(action)
            return Object.assign({}, state, {
                themes: action.items.themes
            })
        }

        default:
            return state;
    }
}