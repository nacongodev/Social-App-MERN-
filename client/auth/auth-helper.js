import { signout } from './api-auth.js'

// ways of storing and retrieving JWT credentials on client-side
const auth = {

 // this method will return JWT credentials if the user is sign in
  isAuthenticated() {
    if (typeof window == "undefined")
      return false

    if (sessionStorage.getItem('jwt'))
      return JSON.parse(sessionStorage.getItem('jwt'))
    else
      return false
  },
  // this method stores JWT credentials after ensurring window is defined
  authenticate(jwt, callback) {
    if (typeof window !== "undefined")
      sessionStorage.setItem('jwt', JSON.stringify(jwt))
    callback()
  },
  // Remove JWT credentials from sessionStorage when the user signsout
  clearJWT(callback) {
    if (typeof window !== "undefined")
      sessionStorage.removeItem('jwt')
    callback()
    //optional
    signout().then((data) => {
      document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    })
  }
}

export default auth