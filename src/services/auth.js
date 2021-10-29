import http from './http';

const login = (userCredentials) => {
  return http.post("v1/tenant/login", userCredentials);
}

const func1 = () => {
  return null
}

const auth = {
  login,
  func1
}

export default auth;