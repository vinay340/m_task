import C from '../actions/Constants';
import LoginData from '../../utils/LoginData'

const initialState = {
    username: '',
    password: ''
}

export default function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case C.LOGIN:
            if (action.payload) {
                if (action.payload.userName === LoginData.username && action.payload.password === LoginData.password) {
                    return { status: 'loginSuccessful', login: true }
                }
                else if (action.payload.userName !== LoginData.username && action.payload.password !== LoginData.password) {
                    return { status: 'Incorrect UserName & Password', login: false }
                }
                else if (action.payload.userName !== LoginData.username) {
                    return { status: 'Incorrect UserName', login: false }
                }
                else if (action.payload.password !== LoginData.password) {
                    return { status: 'Incorrect Password', login: false }
                }
            }
        default:
            return state;
    }
}