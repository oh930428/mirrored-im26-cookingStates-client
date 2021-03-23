const port = 4000;

export default {
  USER_LOGIN: `https://server.cookingstates.cf:${port}/user/login`,
  USER_LOGOUT: `https://server.cookingstates.cf:${port}/user/logout`,
  USER_REGISTER: `https://server.cookingstates.cf:${port}/user/register`,
  USER_INFO: `https://server.cookingstates.cf:${port}/user/info`,
  EMAIL_CHECK: `https://server.cookingstates.cf:${port}/user/checkemail`,
  USER_UPDATE: `https://server.cookingstates.cf:${port}/user/:id/update`,
  USER_UNREGISTER: `https://server.cookingstates.cf:${port}/user/:id/unregister`,
  COURSE_INFO: `https://server.cookingstates.cf:${port}/course`,
  COURSE_DETAIL: `https://server.cookingstates.cf:${port}/course`, // /:id
  RECIPE_INFO: `https://server.cookingstates.cf:${port}/recipe`,
  RECIPE_DETAIL: `https://server.cookingstates.cf:${port}/recipe`, // /:id
  RECIPE_UPLOAD: `https://server.cookingstates.cf:${port}/recipe/upload`,
  TOKEN_ACCESS: `https://server.cookingstates.cf:${port}/token/access`,
  TOKEN_REFRESH: `https://server.cookingstates.cf:${port}/token/refresh`,
  OAUTH_GOOGLE: `https://server.cookingstates.cf:${port}/oauth/google`,
  OAUTH_KAKAO: `https://server.cookingstates.cf:${port}/oauth/kakao`,
};
