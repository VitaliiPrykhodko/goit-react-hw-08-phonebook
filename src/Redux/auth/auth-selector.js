const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const getUserEmail = state => state.auth.user.email;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getIsFetchingCurrent,
    getUserEmail
};

export default authSelectors;