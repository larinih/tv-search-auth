import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth'
import firebaseApp from '../../../config/firebase'

const $ = document.querySelector.bind(document)

const onClick = () => {
  const auth = getAuth(firebaseApp)
  const provider = new GithubAuthProvider()
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result)
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

const renderButtonGithub = (container: HTMLElement) => {
  const htmlContent = `
        <button class="login-button" id="github-login">
            <img src="/img/github.png" alt="Github">
            <span>Entrar com Github</span>
        </button>
    `

  container.insertAdjacentHTML('beforeend', htmlContent)
  const loginButton = <HTMLButtonElement>$('#github-login')
  loginButton.onclick = onClick
}

export default renderButtonGithub