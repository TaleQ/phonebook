const selectUser = store => store.auth.user;
const selectToken = store => store.auth.token;
const selectIsLoggedIn = store => store.auth.isLoggedIn;
const selectIsRefreshing = store => store.auth.isLoading;
const selectError = store => store.auth.error;

export const authSelectors = {
  selectUser,
  selectToken,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectError,
};
