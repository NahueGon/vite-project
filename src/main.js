import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hola Mundo desde Vite</h1>
  </div>
`

setupCounter(document.querySelector('#counter'))
