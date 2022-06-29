import { getAuth, signInWithPopup, OAuthProvider } from 'firebase/auth'
import firebaseApp from '../../../config/firebase'


const $ = document.querySelector.bind(document)

const onClick = () => {
  const auth = getAuth(firebaseApp)
  const provider = new OAuthProvider('microsoft.com')
  provider.setCustomParameters({ tenant: '7edcc692-abb3-4c55-b365-ee511990cd86' })
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = OAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken
      const { user } = result
      const { displayName, photoURL } = user
      localStorage.setItem('token', token || '')
      localStorage.setItem('userName', displayName || '')
      localStorage.setItem('userPhoto', photoURL || '')
      if (token) {
        location.href = 'index.html'
      }
    })
    .catch((error) => {
      const { errorCode, errorMessage } = error
      console.log(errorCode, errorMessage)
    })
}

const renderButtonMicrosoft = (container: HTMLElement) => {
  const htmlContent = `
        <button class="login-button" id="microsoft-login">
            <img src="/img/microsoft.png" alt="Microsoft">
            <span>Entrar com Microsoft</span>
        </button>
    `

    container.insertAdjacentHTML('beforeend', htmlContent)
  const loginButton = <HTMLButtonElement>$('#microsoft-login')
  loginButton.onclick = onClick
}

export default renderButtonMicrosoft