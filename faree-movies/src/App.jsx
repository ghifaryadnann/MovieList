import Home from "./Component/Home"
import MovieList from "./Component/MovieList"
import Navbar from "./Component/Navbar"


const App = () => {
  return (
    <>
    <Navbar/>

   
      <main>
        <div>
          <Home/>
        </div>
        <div>
          <MovieList/>
        </div>
        
      </main>
    
    </>
  )
}

export default App