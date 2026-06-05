function Services() {
  const services = [
    {
      icon: "🤝",
      title: "Collaborative & Partnership",
      desc: "Building strong relationships that drive growth and innovation."
    },
    {
      icon: "📊",
      title: "Strategic Consulting",
      desc: "Data-driven insights to help businesses make smarter decisions."
    },
    {
      icon: "🚀",
      title: "Digital Confidence",
      desc: "Helping brands adapt and succeed in a fast-changing digital world."
    }
  ];

  return (
    <section className="services">
      <div className="section-tag">
        Our Services
      </div>

      <h2>
        What we can
        <span className="highlight"> offer </span>
        you!
      </h2>

      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              {service.icon}
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>

            <div className="service-arrow">
              →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;