import { useEffect, useRef } from "react";
import "../components/styles/About.css";
import gsap from "gsap";

const About = () => {
  const aboutRef = useRef([]);
  aboutRef.current = [];

  useEffect(() => {
    aboutRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: index * 0.5 }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !aboutRef.current.includes(el)) {
      aboutRef.current.push(el);
    }
  };

  return (
    <div className='about'>
      <section className='background' ref={addToRefs}>
        <h2>Mijn Verhaal</h2>
        <p>
          Mijn reis begon in Lokeren op 7 december 1998 en bracht me naar Zele,
          België. Mijn fascinatie voor technologie begon met mijn eerste
          PlayStation 2, vooral door het spel Ratchet & Clank. De
          nieuwsgierigheid naar hoe deze karakters bewogen en animeerden leidde
          tot mijn interesse in programmeren.
        </p>
        <p>
          Op 9-jarige leeftijd begon ik te gamen op de computer van mijn broer,
          met name RuneScape, waar ik ook Engels leerde. Deze vroege ervaringen
          hebben mijn probleemoplossende vaardigheden aangescherpt, een cruciaal
          aspect in mijn latere programmeercarrière.
        </p>
        <p>
          In het secundair onderwijs volgde ik Elektrische Installatietechnieken
          aan VTI Dendermonde en ontdekte mijn talent voor het programmeren van
          PLCs. Na mijn afstuderen in Industriële Onderhoudstechnieken aan
          Sint-Jan Berchmansinstituut vzw, vervolgde ik mijn droom aan de
          Hogeschool Gent met een Graduaat in het Programmeren.
        </p>
      </section>
      <section className='focus' ref={addToRefs}>
        <p>
          Tijdens mijn studie aan de Hogeschool Gent lag de focus op C#, waar ik
          vaardigheden ontwikkelde in objectgeoriënteerd programmeren en
          softwareontwikkeling. Mijn interesse in web development groeide ook,
          wat mij onderscheidt door mijn vermogen om ideeën direct om te zetten
          in werkende websites, zonder uitgebreid designproces.
        </p>
      </section>
    </div>
  );
};

export default About;
