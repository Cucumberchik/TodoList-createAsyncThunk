import ReactDOM from 'react-dom/client'
import './index.css'
import ReduxProvider from './providers/ReduxProvider'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ReduxProvider children={<App />} />
)
