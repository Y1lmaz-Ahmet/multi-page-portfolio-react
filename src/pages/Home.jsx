import { useEffect, useRef } from "react";
import "../components/styles/Home.css";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

// Importeer technologie-afbeeldingen
import gitLogo from "../images/git.png";
import reactLogo from "../images/react.png";
import angularLogo from "../images/angular.png";
import dotnetLogo from "../images/dotnet.png";
import htmlLogo from "../images/html.png";
import cssLogo from "../images/css.png";
import jsLogo from "../images/javascript.png";

const Home = () => {
  const heroTextRef = useRef();
  const heroSubtextRef = useRef();
  const sectionsRef = useRef([]);
  sectionsRef.current = [];

  useEffect(() => {
    gsap.fromTo(
      heroTextRef.current,
      { text: "" },
      {
        text: "Welkom bij het portfolio van Ahmet Yilmaz",
        duration: 2,
        ease: "power2",
      }
    );
    gsap.fromTo(
      heroSubtextRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 2 }
    );
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: index * 0.5 }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className='home'>
      <header className='hero-banner'>
        <h1 ref={heroTextRef}></h1>
        <p ref={heroSubtextRef}>
          Gedreven door passie voor softwareontwikkeling en innovatie
        </p>
      </header>
      <section className='intro' ref={addToRefs}>
        <h2>Over Mij</h2>
        <p>
          Ik ben een Junior Software Ontwikkelaar uit Zele, België. Ik heb een
          grote passie voor het creëren van efficiënte en innovatieve
          softwareoplossingen.
        </p>
      </section>
      <section className='contact-info' ref={addToRefs}>
        <h2>Contact</h2>
        <p>Email: y.ahmet@outlook.be</p>
        <p>Telefoon: +32 486 65 87 97</p>
        <p>
          GitHub:{" "}
          <a
            href='https://github.com/y1lmaz-ahmet'
            target='_blank'
            rel='noopener noreferrer'
          >
            github.com/y1lmaz-ahmet
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href='https://linkedin.com/in/y1lmaz-ahmet'
            target='_blank'
            rel='noopener noreferrer'
          >
            linkedin.com/in/y1lmaz-ahmet
          </a>
        </p>
      </section>
      <section className='skills' ref={addToRefs}>
        <h2>Enkele Vaardigheden</h2>
        <div className='skills-grid'>
          <img src={gitLogo} alt='Git' />
          <img src={reactLogo} alt='React' />
          <img src={angularLogo} alt='Angular' />
          <img src={dotnetLogo} alt='Dotnet' />
          <img src={htmlLogo} alt='HTML' />
          <img src={cssLogo} alt='CSS' />
          <img src={jsLogo} alt='JavaScript' />
        </div>
      </section>
      <section className='projects' ref={addToRefs}>
        <h2>Recente Projecten</h2>
        <p>
          Bekijk mijn projectenpagina voor een gedetailleerd overzicht van mijn
          werk.
        </p>
      </section>
    </div>
  );
};

export default Home;
