import { HomePage } from './components/HomePage/HomePage'
import './app.scss'
import { NavBar } from './components/NavBar/NavBar'
import { StripeContainer } from './components/Payment/StripeContainer/StripeContainer'


function App() {
  return (
    <div className='App'>
      <NavBar />
      <HomePage />
      <StripeContainer />
    </div>
  )
}

export default App
