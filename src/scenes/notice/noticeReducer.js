import * as Notice from './notice';
import * as NoticeAction from './noticeAction';

const initialState = {
    maxNumber: null,
    number: 0,
    opend: false,
    theme: null,
    answer: null,
    fakeArtistNumber: null,
    selectedTheme: null
};

export default function notice(state = initialState, action) {
    switch (action.type) {
        case NoticeAction.NOTICE_INIT: {
            return Object.assign({}, state, {
                theme: action.theme,
                fakeArtistNumber: action.fakeArtistNumber,
                selectedTheme: action.selectedTheme
            })
        }

        default:
            return state;
    }
}