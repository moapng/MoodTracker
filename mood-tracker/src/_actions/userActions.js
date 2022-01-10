export const logIn = (name, id) => {
    return {
        type: 'LOG_IN_USER',
        name: name,
        id: id
    }
}

export const logOut = () => {
    return {
        type: 'LOG_OUT_USER'
    }
}