import cookies from "cookie";

export const getServerCookies = (req) => {
  return (
    req &&
    req.headers &&
    req.headers.cookie &&
    cookies.parse(req.headers.cookie)
  );
};
