import Hero from "../components/Hero";

function HomePage() {
  return (
    <main>
      <Hero
        title="Welcome to MatiasTech"
        subtitle="Find the latest technology and accessories for your setup."
        callToActionText="Shop Now"
      />

      <section className="home-intro">
        <h2>Why Shop with Us?</h2>
        <p>
          At MatiasTech, we provide quality technology and accessories
          for work, gaming, and everyday use.
        </p>
      </section>
    </main>
  );
}

export default HomePage;