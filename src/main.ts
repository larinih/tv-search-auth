import renderSearchForm from './components/SearchForm'

import './style.css'

const app = <HTMLDivElement>document.getElementById('app')
const token = localStorage.getItem('token')

if (token) {
    const $ = document.querySelector.bind(document)
    
    const container = <HTMLDivElement>$('#container')
    renderSearchForm(container)
    const resultArea = document.createElement('div')
    resultArea.id = 'result-area'
    container.insertAdjacentElement('beforeend', resultArea)
} else {
  location.href = 'login.html'
}