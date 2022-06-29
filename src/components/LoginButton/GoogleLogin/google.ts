import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import firebaseApp from '../../../config/firebase'


const $ = document.querySelector.bind(document)

const onClick = () => {
  const auth = getAuth(firebaseApp)
  auth.languageCode = 'pt-br'
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken
      const { user } = result
      const { photoURL } = user
      const { displayName } = user
      const { email } = user
      localStorage.setItem('token', token || '')
      localStorage.setItem('userName', displayName || '')
      localStorage.setItem('userPhoto', photoURL || '')
      localStorage.setItem('userEmail', email || '')
      if (token) {
        location.href = 'index.html'
      }
    })
    .catch((error) => {
      const { errorCode, errorMessage } = error
      console.log(errorCode, errorMessage)
    })
}

const renderButtonGoogle = (container: HTMLElement) => {
  const htmlContent = `
        <button class="login-button" id="google-login">
            <img src="/img/google.png" alt="Google">
            <span>Entrar com Google</span>
        </button>
    `

    container.insertAdjacentHTML('beforeend', htmlContent)

  const loginButton = <HTMLButtonElement>$('#google-login')
  loginButton.onclick = onClick
}

export default renderButtonGoogle