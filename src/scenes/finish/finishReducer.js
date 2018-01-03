import * as Index from './finish';
import * as IndexAction from './finishAction';

const initialState = {
    isShowAnswer : false
};

export default function finish(state = initialState, action) {
    switch (action.type) {
        case IndexAction.FINISH_SHOW_ANSWER: {
            return {isShowAnswer: true};
        }

        case IndexAction.FINISH_HIDE_ANSWER: {
            return {isShowAnswer: false};
        }

        default:
            return state;
    }
}