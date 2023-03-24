export const setToken = (token) => {
  sessionStorage.setItem("token", JSON.stringify(token))
}

export const getToken = () => {
  return sessionStorage.getItem("token")
}

export const removeToken = () => {
  sessionStorage.removeItem("token")
}
