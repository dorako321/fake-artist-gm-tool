export const SELECT_ANSWER = 'SELECT_ANSWER';

export const FETCH_THEME_LIST = 'FETCH_THEME_LIST'
export const FETCH_THEME_LIST_COMPLETE = 'FETCH_THEME_LIST_COMPLITE'

const request = () => ({
    type : FETCH_THEME_LIST
})

const response = (json) => ({
    type : FETCH_THEME_LIST_COMPLETE,
    items: json
})

export function fetchThemeList() {
    return dispatch => {
        dispatch(request())
        console.log('try fetch');
        return fetch('/theme.json')
            .then(res => res.json())
            .then(json => dispatch(response(json)))
            .catch(err => console.log(err))
    }
}

export function selectAnswer(theme, themeList) {
    const answerList = themeList.find(o => o.theme === theme);
    const answer = answerList.list[Math.floor(Math.random() * answerList.list.length)]
    return {
        type: SELECT_ANSWER,
        selectedTheme: theme,
        selectedAnswer: answer
    }
}
