import "./index.css";

function App() {
  return (
    <>
      {/* Header for Desktop */}
      <header className="desktop-header">
        <span className="desktop-header__name">Ricardo Bachmann</span>
        <span className="desktop-header__tagline">
          Visualizing <span className="geo-social__tagline">geo-social</span>{" "}
          conflicts.{" "}
          <span className="mobile-header__tagline">
            Mapping where sensing, atmosphere & matter become political actors.
          </span>
        </span>
      </header>

      <section className="hero">
        <h1 className="hero__title">
          <span>Sensing,</span>
          <span>Atmosphere,</span>
          <span>Matter.</span>
        </h1>
      </section>
      <main>
        {/* Column 1 */}
        <section className="grid-column">
          <div className="grid-column__content">
            <p className="grid-column__tagline">
              Visualizing geo-social conflicts.
              <br /> Mapping where sensing, atmosphere & matter become political
              actors.
            </p>{" "}
            <p>
              I am a multi-disciplinary cartographer, tackling how technological
              systems and environmental phenomena establish dynamic networks in
              moments of uncertainty and change.
              <br /> <p />{" "}
              <p>
                My work maps dependency chains between these actors & agents,
                making visible the material entanglements that shape geo-social
                conflicts—and that traditional maps systematically hide.
                <br /> Working at the intersection of cartographic design, earth
                systems science, and investigative research—I trace atmospheric
                processes, infrastructural networks, and material flows to
                produce counter-cartographies that reveal how territorial
                conflicts are materially grounded.{" "}
              </p>
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
