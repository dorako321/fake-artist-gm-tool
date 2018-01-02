export const SELECT_THEME = 'SELECT_THEME';

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


export function selectTheme(theme) {
    return {
        type: SELECT_THEME,
        selectedTheme: theme
    }
}
