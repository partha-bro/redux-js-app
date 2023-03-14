import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NavBar from './components/NavBar'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='*' element='<h1>404 Page Not Found!</h1>' />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
