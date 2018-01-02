import * as Notice from './notice';
import * as NoticeAction from './noticeAction';

const initialState = {
    maxNumber: null,
    number: 0,
    opened: false,
    theme: null,
    answer: null,
    fakeArtistNumber: null,
};

export default function notice(state = initialState, action) {
    switch (action.type) {
        case NoticeAction.NOTICE_INIT: {
            console.log(NoticeAction.NOTICE_INIT)
            return Object.assign({}, state, {
                maxNumber: action.items.maxNumber,
                theme: action.items.theme,
                answer: action.items.answer,
                fakeArtistNumber: action.items.fakeArtistNumber,
            })
        }
        case NoticeAction.NOTICE_SWITCH_USER_ROLE_VIEW: {
            console.log(NoticeAction.NOTICE_SWITCH_USER_ROLE_VIEW)
            return Object.assign({}, state, {
                opened: true
            })
        }
        case NoticeAction.NOTICE_NEXT_USER: {
            console.log(NoticeAction.NOTICE_NEXT_USER)
            const number = state.number + 1;
            return Object.assign({}, state, {
                number: number,
                opened: false
            })
        }
        default:
            return state;
    }
}