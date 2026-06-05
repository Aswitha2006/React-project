function FeatureTwo() {
  return (
    <section className="feature feature-two">

      <div className="feature-image-wrapper">

        <img
          className="feature-main-image"
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600"
          alt="team"
        />

        <div className="triangle-two"></div>

        <div className="floating-badge">
          🚀 Growth
        </div>

      </div>

      <div className="feature-text">

        <div className="feature-tag">
          Our Approach
        </div>

        <h2>
          See how we can
          <br />
          help you
          <span className="highlight"> progress</span>
        </h2>

        <p>
          We add a layer of fearless insight and social research
          into your plans in a way that is digital, convenient
          and socially relevant. Our team helps brands move
          faster and smarter.
        </p>

        <button className="primary-btn">
          Read More →
        </button>

      </div>

      <div className="curve-two">
        <svg viewBox="0 0 1000 200">
          <path
            d="M0,100 C250,200 350,0 600,100 C750,150 850,50 1000,100"
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

export default FeatureTwo;