const initialState = {
    isLoggedIn: false,
    activeUser: '',
    activeUserID: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN_USER':
            return {
                isLoggedIn: true,
                activeUser: action.name,
                activeUserID: action.id
            }
        case 'LOG_OUT_USER':
            return {
                isLoggedIn: initialState.isLoggedIn,
                activeUser: initialState.activeUser
            }
        default:
            return state;
    }
}
export default userReducer;