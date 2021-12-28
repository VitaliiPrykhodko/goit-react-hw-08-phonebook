const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

const getFetchCurrentUser = state => state.auth.isFetchCurrentUser

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getUserEmail,
    getFetchCurrentUser
};

export default authSelectors;