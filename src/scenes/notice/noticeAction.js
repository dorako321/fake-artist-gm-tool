export const NOTICE_INIT = 'NOTICE_INIT'

export function noticeInit(maxNumber) {
    const fakeArtistNumber = Math.floor(Math.random() * maxNumber)
    return {
        type: NOTICE_INIT,
        fakeArtistNumber: fakeArtistNumber
    }
}