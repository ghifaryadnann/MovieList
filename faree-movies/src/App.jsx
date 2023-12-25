import Home from "./Component/Home"
import MovieList from "./Component/MovieList"
import Navbar from "./Component/Navbar"
import Trailers from "./Component/Trailers"
import About from "./Component/About"
import Footers from "./Component/Footers"
import NowPlaying from "./Component/NowPlaying"


const App = () => {
  return (
    <>
    <Navbar/>

   
      <main>
        <div id="home">
          <Home/>
        </div>
        <div id="movielist">
          <MovieList/>
        </div>
        <div id="trailers">
          <Trailers/>
        </div>
        <div id="nowplaying">
          <NowPlaying/>
        </div>
        <div id="about">
          <About/>
        </div>
        
        
      </main>
      <div id="contact">
        <Footers/>
      </div>
      
    </>
  )
}

export default App