
import { Suspense } from 'react'
import './App.css'
import FetchMovies from './FetchMovies'
import Signup from './Signup'
function App() {

  return (
    <div className="App">
      {/* <Suspense fallback={<><h1>loading .....</h1></>}>
      <FetchMovies/>
      </Suspense> */}
      <Signup/>
    </div>
  )
}


// octopus@3917428730894
// demo56@yopmail.com
// 917428730894


export default App
