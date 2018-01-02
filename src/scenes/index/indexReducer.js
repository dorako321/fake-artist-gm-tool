import * as Index from './index';
import * as IndexAction from './indexAction';

const initialState = {
    userNumber : 3
};

export default function index(state = initialState, action) {
    switch (action.type) {
        case IndexAction.ADD_USER: {
            const number = state.userNumber + 1;
            return {userNumber: number};
        }

        case IndexAction.DEL_USER: {
            if(state.userNumber <= 3) return state
            const number = state.userNumber - 1;
            return {userNumber: number};
        }

        default:
            return state;
    }
}