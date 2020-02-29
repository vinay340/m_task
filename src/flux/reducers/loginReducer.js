import C from '../actions/Constants';

export default function (state={}, action) {
    switch(action.type) {
        case C.LOGIN:
            return action.payload;
        default:
            return state;
    }
}