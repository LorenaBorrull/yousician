import { useState } from 'react'
import nav from './components/nav'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <video
        className="video-inicial"
        playsinline=""
        autoplay=""
        muted=""
        loop=""
        data-poster-webp="https://assets.yousician.com/app/uploads/2021/02/23073002/hero-guitar-1-scaled.jpg.webp"
        data-poster-image="https://assets.yousician.com/app/uploads/2021/02/23073002/hero-guitar-1-scaled.jpg"
        poster="https://assets.yousician.com/app/uploads/2021/02/23073002/hero-guitar-1-scaled.jpg.webp"
      >
        <source
          src="https://assets.yousician.com/app/uploads/2022/06/21081919/YS-landing-page-demo-2-720p-c-p.mp4"
          type="video/mp4"
        />
      </video>
      <div className="green-box" >
        <h1>Unleash your inner musician with Yousician</h1>
        <h2>
        The first step of learning to play an instrument? Wanting to play.
        Explore your love of music with us, whether you’re a complete beginner
        or a seasoned pro. Let’s play!
        </h2>
        <button type="button" className="my-button">start free trial</button>
      </div>
      
{/* 
      <div
        class="heroImage__phoneContent"
        style=""
      >
        <video
          poster="/path/to/poster.jpg"
          playsinline=""
          autoplay=""
          muted=""
          loop=""
        >
          <source
            src="https://assets.yousician.com/app/uploads/2022/06/14060641/iPhone_Enter-sandman_perfect_web_478x222.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="heroImage__phoneCase">
        <img
          src="/app/themes/yousician/assets/images/phone_border.svg?x35885"
          width="100%"
          alt="Phone border"
        />
      </div> */}
      <div className="options" >

      <div className="mini-box">
      <img src= "https://assets.yousician.com/app/uploads/2021/02/18174747/guitar-1-240x240.png.webp" />
        <a href="https://www.bababa">Guitar</a>
      </div>
      
      <div className="mini-box">
      <img src= "https://assets.yousician.com/app/uploads/2021/02/18174749/piano-1-240x240.png.webp" />
        <a href="https://www.bababa">Piano</a>
      </div>

      <div className="mini-box">
      <img src= "https://assets.yousician.com/app/uploads/2021/02/18174743/bass-1-240x240.png.webp" />
        <a href="https://www.bababa">Bass</a>
      </div>

      <div className="mini-box">
      <img src= "https://assets.yousician.com/app/uploads/2021/02/18174754/ukulele-1-240x240.png.webp" />
        <a href="https://www.bababa">Ukelele</a>
      </div>

      <div className="mini-box">
      <img src= "https://assets.yousician.com/app/uploads/2021/02/18174752/singing-1-240x240.png.webp" />
        <a href="https://www.bababa">Singing</a>
      </div>

      </div>

      <div className="box-2">
      <img src= "https://assets.yousician.com/app/uploads/2021/02/10115543/yellow-shirt.jpg.webp" />
      <h4>FUN & EASY</h4>
      <h2>Learn to play music at home, at your own pace</h2>
      <p>
        Yousician makes learning to play an instrument fun and easy, no matter
        your skill level. Follow lesson plans created by real music teachers,
        learn fast with interactive tutorials, and stay motivated with goals and
        progress tracking. Our award-winning technology listens to you play and
        gives instant feedback on your accuracy and timing. You always know when
        you’re hitting the right notes.
      </p>
      </div>

      <div className="box-3">
      <img src= "https://assets.yousician.com/app/uploads/2023/02/28043624/8guitar-product-2048x1455.jpg.webp" />
      <h4>ALL-IN-ONE KITS</h4>
      <h2>Everything you need to start your musical journey</h2>
      <p>
        With Yousician All-In-One Kits, you’ll get an Orangewood Guitar or Bondi
        Ukulele with all the essential accessories — plus an entire year of
        lessons with Yousician. Learning an instrument has never been easier!
        Shipping restrictions may apply.
      </p>
      <button className="my-button2" type="button">Explore All-In-One Kits</button>
      </div>
    </div>
  );
}

export default App;
