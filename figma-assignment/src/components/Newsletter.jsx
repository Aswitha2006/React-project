import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() !== "") {
      setSubscribed(true);
    }
  };

  return (
    <section className="newsletter">

      <div className="section-tag">
        Newsletter
      </div>

      <h2>
        Subscribe to our
        <br />
        newsletter
      </h2>

      <p>
        Stay updated with our latest ideas,
        projects and creative insights.
      </p>

      <div className="newsletter-box">

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleSubscribe}>
          Subscribe →
        </button>

      </div>

      {subscribed && (
        <div className="success-message">
          🎉 Thanks for subscribing!
        </div>
      )}

    </section>
  );
}

export default Newsletter;