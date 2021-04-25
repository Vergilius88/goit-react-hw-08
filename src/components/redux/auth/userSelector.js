const isAuth = (state) => state.authUser.token;
const getUserName = (state) => state.authUser.user.name;
const isLoading = (state) => state.authUser.loading;

export default {
  isAuth,
  getUserName,
  isLoading,
};
