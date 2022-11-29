/******************************************************************************
 *                            Checks if user is authenticated
 *****************************************************************************/
const isUserAuthenticated = () => {
  const user = getLoggedInUser();

  if (!user) return false;
  // if (!user) return true;
  else return true;
};

/******************************************************************************
 *                            Returns the logged in user
 *****************************************************************************/
const getLoggedInUser = () => {
  const user = localStorage.getItem("torgayToken");
  return user ? (typeof user !== "object" ? user : JSON.parse(user)) : null;
};

export { isUserAuthenticated, getLoggedInUser };
