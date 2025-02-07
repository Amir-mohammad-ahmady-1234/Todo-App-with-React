import react from "react";
import ReactDOM from "react-dom/client";
import App from './components/app'
import './reset.css'
import './style.css'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    <react.StrictMode>
        <App />
    </react.StrictMode>
)