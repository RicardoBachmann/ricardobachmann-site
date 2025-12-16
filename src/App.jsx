import "./index.css";

function App() {
  return (
    <main>
      <section className="hero">
        <h1 className="hero__title">
          <span>Sensing,</span>
          <span>Atmosphere,</span>
          <span>Matter.</span>
        </h1>
        <h2 className="hero__name">RICARDO BACHMANN</h2>
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
            technological systems and environmental phenomena establish dynamic
            networks in moments of uncertainty and change, because in stabile
            situations the networks are invisible.Observing how technological
            systems and environmental phenomena establish dynamic networks in
            moments of uncertainty and change, because in stabile situations the
            networks are invisible.{" "}
          </p>
        </div>
        <section className="content__detail">
          <div className="content__detail_contact">
            <h3>[Contact]</h3>

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
  );
}

export default App;
