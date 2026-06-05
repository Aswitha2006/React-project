function Testimonial() {
  return (
    <section className="testimonial">

      <div className="section-tag">
        Testimonials
      </div>

      <h2>
        What our customers
        <br />
        say about us
      </h2>

      <div className="testimonial-wrapper">

        <img
          className="avatar avatar-1"
          src="https://i.pravatar.cc/100?img=11"
          alt=""
        />

        <img
          className="avatar avatar-2"
          src="https://i.pravatar.cc/100?img=12"
          alt=""
        />

        <img
          className="avatar avatar-3"
          src="https://i.pravatar.cc/100?img=13"
          alt=""
        />

        <img
          className="avatar avatar-4"
          src="https://i.pravatar.cc/100?img=14"
          alt=""
        />

        <div className="testimonial-card">

          <div className="quote-icon">
            ❝
          </div>

          <p>
            Elementum delivered our project exactly as promised.
            Their communication, creativity and attention to
            detail exceeded expectations. Working with them was
            an amazing experience.
          </p>

          <h4>Dhruv Madaan</h4>

          <span>Founder & CEO</span>

        </div>

      </div>

    </section>
  );
}

export default Testimonial;