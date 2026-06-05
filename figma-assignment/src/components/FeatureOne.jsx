function FeatureOne() {
  return (
    <section className="feature feature-one">

      <div className="feature-text">
        <div className="feature-tag">
          Our Vision
        </div>

        <h2>
          Tomorrow should
          <br />
          be better than
          <span className="highlight"> today</span>
        </h2>

        <p>
          We are a team of strategists, designers, communicators and
          researchers. Together we believe that progress only happens
          when you refuse to play things safe and challenge the status quo.
        </p>

        <button className="primary-btn">
          Read More →
        </button>
      </div>

      <div className="feature-image-wrapper">

        <div className="square-shape"></div>

        <img
          className="feature-main-image"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600"
          alt="team"
        />

        <div className="triangle"></div>

      </div>

      <div className="curve-one">
        <svg viewBox="0 0 1000 200">
          <path
            d="M0,100 C250,0 350,200 600,100 C750,0 850,200 1000,100"
            fill="none"
            stroke="#ff7b7b"
            strokeWidth="3"
          />
        </svg>
      </div>

    </section>
  );
}
<div className="section-line">
  <svg viewBox="0 0 1200 120">
    <path
      d="M0 60 C250 0 350 120 600 60 C850 0 950 120 1200 60"
      fill="none"
      stroke="#ff7b7b"
      strokeWidth="3"
    />
  </svg>
</div>

export default FeatureOne;