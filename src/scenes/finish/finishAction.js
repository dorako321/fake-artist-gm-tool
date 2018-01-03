export const FINISH_SHOW_ANSWER = 'FINISH_SHOW_ANSWER';
export const FINISH_HIDE_ANSWER = 'FINISH_HIDE_ANSWER';

export function showAnswer() {
    return {
        type: FINISH_SHOW_ANSWER
    }
}

export function hideAnswer() {
    return {
        type: FINISH_HIDE_ANSWER
    }
}