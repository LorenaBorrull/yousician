import React from React;
import nav from './components/nav'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Unleash your inner musician with Yousician</h1>
    <h2>The first step of learning to play an instrument? Wanting to play. Explore your love of music with us, whether you’re a complete beginner or a seasoned pro. Let’s play!</h2>
    <button type="button">start free trial</button>

    <p><a href="https://www.bababa">Guitar</a></p>
    <p><a href="https://www.bababa">Piano</a></p>
    <p><a href="https://www.bababa">Bass</a></p>
    <p><a href="https://www.bababa">Ukelele</a></p>
    <p><a href="https://www.bababa">Singing</a></p>

    <h4>FUN & EASY</h4>
    <h2>Learn to play music at home, at your own pace</h2>
    <p>
        Yousician makes learning to play an instrument fun and easy, no matter your skill level.
        Follow lesson plans created by real music teachers, learn fast with interactive tutorials, and stay motivated with goals and progress tracking.
        Our award-winning technology listens to you play and gives instant feedback on your accuracy and timing. You always know when you’re hitting the right notes.
    </p>


    <h4>ALL-IN-ONE KITS</h4>
    <h2>Everything you need to start your musical journey</h2>
    <p>
        With Yousician All-In-One Kits, you’ll get an Orangewood Guitar or Bondi Ukulele with all the essential accessories — plus an entire year of lessons with Yousician. Learning an instrument has never been easier!
        Shipping restrictions may apply.
    </p>
    <button type="button">Explore All-In-One Kits</button>

    </div>
  )
}

export default App
