import './Hero.css';

function Hero({ title, subtitle, callToActionText }) {
  return (
    <section className="hero">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <button>{callToActionText}</button>
    </section>
  );
}

export default Hero;