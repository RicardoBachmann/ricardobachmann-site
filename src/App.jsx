import "./index.css";

function App() {
  return (
    <>
      {/* Navigation for Desktop */}
      <nav className="desktop-nav">
        <span className="desktop-nav__name">Ricardo Bachmann</span>
        <div className="desktop-nav__links">
          <a className="desktop-nav__link">[ Contact ]</a>
          <a className="desktop-nav__link">[ What i do ]</a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <h1 className="hero__title">
            <span>Sensing,</span>
            <span>Atmosphere,</span>
            <span>Matter.</span>
          </h1>
          <h2 className="hero__name">Ricardo Bachmann</h2>
        </section>
        <section className="content">
          <div className="content__text">
            <p>
              Visualizing geo-social conflicts.
              <br /> Mapping where technology, atmosphere & matter become
              political.
            </p>
            <p>
              I am a Multi-disciplinary Cartographer & Researcher. Observing how
              technological systems and environmental phenomena establish
              dynamic networks in moments of uncertainty and change, because in
              stabile situations the networks are invisible.Observing how
              technological systems and environmental phenomena establish
              dynamic networks in moments of uncertainty and change, because in
              stabile situations the networks are invisible.{" "}
            </p>
          </div>
          <section className="content__detail">
            <div className="content__detail_contact">
              <h3>
                <span className="bracket">[</span>
                Contact
                <span className="bracket">]</span>
              </h3>

              <p>
                Based in <br />
                Hamburg, GER
              </p>

              <p>
                For Job, Collaboration or <br />
                say hi:
              </p>

              <a href="mailto:ricardobachmann@mailbox.org">
                ricardobachmann@mailbox.org
              </a>
            </div>
          </section>
        </section>
        <aside className="sidebar"></aside>
        <button className="info-btn">[ about ]</button>
      </main>
    </>
  );
}
export default App;
