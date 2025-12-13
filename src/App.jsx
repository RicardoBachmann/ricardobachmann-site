import "./index.css";

function App() {
  return (
    <main>
      <header className="header">
        <div className="header__container">
          <h2 className="header__title">Ricardo Bachmann</h2>
          <p className="header__subtitle">
            Multi-disciplinary Cartographer & Researcher.
          </p>
        </div>
      </header>
      <aside className="sidebar">
        <div className="sidebar__container">
          <p className="sidebar__text">
            Visualizing geo-social conflicts. Mapping where technology,
            atmosphere & matter become political.
          </p>
        </div>
      </aside>
      <section className="hero">
        <h1 className="hero__title">
          <span>SENSING,</span>
          <span>ATMOSPHERE,</span>
          <span>MATTER.</span>
        </h1>
      </section>
      <footer className="footer">
        <button className="footer__text">INFO</button>
      </footer>
    </main>
  );
}

export default App;
