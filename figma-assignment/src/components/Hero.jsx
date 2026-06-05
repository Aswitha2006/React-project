import { useState, useEffect } from "react";

function Hero() {
    const [projects, setProjects] = useState(0);
const [clients, setClients] = useState(0);
const [countries, setCountries] = useState(0);

useEffect(() => {
  let p = 0;
  let c = 0;
  let co = 0;

  const timer = setInterval(() => {
    if (p < 250) {
      p += 5;
      setProjects(p);
    }

    if (c < 120) {
      c += 3;
      setClients(c);
    }

    if (co < 15) {
      co += 1;
      setCountries(co);
    }

    if (p >= 250 && c >= 120 && co >= 15) {
      clearInterval(timer);
    }
  }, 30);

  return () => clearInterval(timer);
}, []);
  return (
    <section className="hero">

      <div className="hero-tag">
        ✨ Creative Digital Agency
      </div>

      <h1>
        The thinkers and
        <br />
        doers were changing
        <br />
        the <span className="highlight">status quo</span>
      </h1>

      <p>
        We are strategists, designers, communicators and researchers.
        Together we believe progress only happens when you refuse
        to play things safe and dare to create something different.
      </p>

      <div className="hero-buttons">
        <button className="primary-btn">
          Get Started
        </button>

        <button className="secondary-btn">
          Learn More
        </button>
      </div>

      <div className="hero-images">
        <img src="https://i.pravatar.cc/150?img=1" alt="" />
        <img src="https://i.pravatar.cc/150?img=2" alt="" />
        <img src="https://i.pravatar.cc/150?img=3" alt="" />
        <img src="https://i.pravatar.cc/150?img=4" alt="" />
      </div>

      <div className="hero-stats">
        <div>
          <h3>250+</h3>
          <p>Projects</p>
        </div>

        <div>
          <h3>120+</h3>
          <p>Clients</p>
        </div>

        <div>
          <h3>15+</h3>
          <p>Countries</p>
        </div>
      </div>

    </section>
  );
}

export default Hero;