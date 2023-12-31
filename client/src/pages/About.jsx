import "../CSS/About.css";

export default function About() {
  return (
    <>
      <header>
        <nav>
          <a id="title-link" href="/">
            <h2 id="about-df-title">Dark Frontier</h2>
          </a>
        </nav>
      </header>
      <section className="about-container">
        <section className="about-game-container">
          <h2 id="about-game">About the game</h2>
          <p id="about-game-desc">
            Dark Frontier is a lightweight text-based action adventure game set
            in space on the fictional planet of Nuccunus, where you get robbed
            by a space pirate who pretends to be a hot shot. You embark on a
            journey to recover the missing pieces from your ship so you can once
            more explore the Dark Frontier...
          </p>
        </section>
        <section className="about-team">
          <aside>
            <h3>Liam W.</h3>
            <p className="aboutlink">
              <a href="https://github.com/liam02walker">> Github</a>
            </p>
          </aside>
          <aside>
            <h3>Sam D.</h3>
            <p className="aboutlink">
              <a href="https://github.com/samueledraper">> Github</a>
            </p>
          </aside>
          <aside>
            <h3>Toby F.</h3>
            <p className="aboutlink">
              <a href="https://github.com/tobyc0de">> Github</a>
            </p>
          </aside>
          <aside>
            <h3>Tyler A.</h3>
            <p className="aboutlink">
              <a href="https://github.com/tylerFromEuropa">> Github</a>
            </p>
          </aside>
        </section>
      </section>
    </>
  );
}
