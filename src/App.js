import "./App.css"
import modernMonkCover from "./assets/your_modern_monk_cover.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          style={{ height: '80vw' }}
          // src="https://media.istockphoto.com/id/1196291535/vector/close-up-of-mouth-and-third-eye-and-sunbeams.jpg?s=1024x1024&w=is&k=20&c=6OlnMdevlY4ukqtii1jO_bH-dQLa-s3s0y9_Cfj8Ho4="
          src={modernMonkCover}
          alt="hello"
        />
        <h1>Your Modern Monk </h1>
        <p>Podcast Coming to you soon</p>
      </header>
    </div>
  )
}

export default App
