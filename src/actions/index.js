export const selectUser = (user) => {
    console.log(user)
    return {
        type: 'USER_SELECTED',
        user: user
    }
}