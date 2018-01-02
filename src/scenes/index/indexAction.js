export const ADD_USER = 'ADD_USER';
export const DEL_USER = 'DEL_USER';

export function addUser() {
    return {
        type: ADD_USER
    }
}

export function delUser() {
    return {
        type: DEL_USER
    }
}