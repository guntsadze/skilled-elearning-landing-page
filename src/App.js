import "./App.css";
import CardComponent from "./CardComponent";

const assets = {
  hero: "./assets/image-hero-desktop.png",
};

function App() {
  return (
    <>
      <div className="home">
        <section className="section-1">
          <div className="top">
            <h2>skilled</h2>
            <button>Get Started</button>
          </div>
          <header>
            <div className="bottom">
              <h1>Maximize skill, minimize budget</h1>
              <p>
                Our modern courses across a range of in-demand skills will give
                you the knowledge you need to live the life you want.
              </p>
              <button>Get Started</button>
            </div>
            <img className="hero" src={assets.hero} alt="img" />
          </header>
        </section>

        <section className="section-2">
          <div className="first-div">
            <h2 className="h2">Check out our most popular courses</h2>
          </div>
          {/* <CardComponent /> */}
        </section>
      </div>
      <footer>
        <div className="footer">
          <div className="footer-div">
            <h2>skilled</h2>
            <button>Get Started</button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
