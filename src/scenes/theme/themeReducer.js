import * as Theme from './theme';
import * as ThemeAction from './themeAction';

const initialState = {
    themes: [],
    selectedTheme: null,
    selectedAnswer: null
};

export default function theme(state = initialState, action) {
    switch (action.type) {
        case ThemeAction.SELECT_ANSWER: {
            return Object.assign({}, state, {
                selectedTheme: action.selectedTheme,
                selectedAnswer: action.selectedAnswer
            })
        }
        case ThemeAction.FETCH_THEME_LIST_COMPLETE: {
            return Object.assign({}, state, {
                themes: action.items.themes
            })
        }

        default:
            return state;
    }
}