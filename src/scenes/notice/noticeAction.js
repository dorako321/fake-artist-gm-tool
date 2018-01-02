export const NOTICE_INIT = 'NOTICE_INIT'
export const NOTICE_SWITCH_USER_ROLE_VIEW = 'NOTICE_SWITCH_USER_ROLE_VIEW'
export const NOTICE_NEXT_USER = 'NOTICE_NEXT_USER'

export function noticeInit(maxNumber, theme, answer) {
    const fakeArtistNumber = Math.floor(Math.random() * maxNumber)
    return {
        type: NOTICE_INIT,
        items: {
            fakeArtistNumber: fakeArtistNumber,
            maxNumber: maxNumber,
            theme: theme,
            answer: answer
        }
    }
}

export function switchUserRoleView() {
    return {
        type: NOTICE_SWITCH_USER_ROLE_VIEW
    }
}

export function nextUser() {
    console.log('action nextUser')
    return {
        type: NOTICE_NEXT_USER
    }
}