import "./index.css";

function App() {
  return (
    <>
      {/* Header for Desktop */}
      <header className="desktop-header">
        <span className="desktop-header__name">Ricardo Bachmann</span>
        <span className="desktop-header__tagline">
          Visualizing geo-social conflicts. Mapping where technology, atmosphere
          & matter become political.
        </span>
      </header>

      <section className="hero">
        <h1 className="hero__title">
          <span>Sensing,</span>
          <span>Atmosphere,</span>
          <span>Matter.</span>
        </h1>
        <h2 className="hero__name">Ricardo Bachmann</h2>
      </section>
      <main>
        {/* Column 1 */}
        <section className="grid-column">
          <div className="grid-column__content">
            <p>
              Visualizing geo-social conflicts.
              <br /> Mapping where technology, atmosphere & matter <br />
              become political.
            </p>{" "}
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
        </section>

        {/* Column 2 */}
        <section className="grid-column">
          <div className="grid-column__content">
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
              ricardobachmann@
              <br />
              mailbox.org
            </a>
          </div>
        </section>

        {/* Column 3 */}
        <section className="grid-column grid-column--empty"></section>
        {/* Column 4 */}
        <section className="grid-column grid-column--empty"></section>
        {/* Column 5 */}
        <section className="grid-column grid-column--empty"></section>
      </main>
      <footer className="footer">
        <p>Impressum ©2025 All Rights Reserved.</p>
      </footer>
    </>
  );
}
export default App;
