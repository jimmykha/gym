import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src="./gym-logo.png" alt="logo" />
            <h1>
              FITNESS <span className="redtext">HUB</span>
            </h1>
          </div>
          <div className="navlinks">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </div>
        </div>

        <div className="hero-section">
          <div className="hero-text">
            <h1>
              Welcome to Fitness <span className="redtext">Hub</span>{" "}
            </h1>
            <p>Your one stop fitness solution</p>
            <button>Get Started</button>
          </div>
          <div className="hero-image">
            <img src="./heropic.jpeg" alt="gym" />
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            At Fitness Hub, we are committed to helping you achieve your health
            and fitness goals with top-notch equipment, expert trainers, and a
            motivating environment. Our gym offers personalized training
            programs, group fitness classes, and a supportive community to keep
            you inspired. Whether you're a beginner or a fitness enthusiast, we
            provide the perfect space to push your limits and transform your
            lifestyle. Join us today and take the first step toward a healthier,
            stronger you! 💪🔥
          </p>
          <button>Learn More</button>
        </div>
        
      </div>
    </>
  );
}

export default App;
