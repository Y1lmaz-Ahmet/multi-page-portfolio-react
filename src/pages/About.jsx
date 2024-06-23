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
          België. Mijn fascinatie voor technologie begon al op jonge leeftijd
          toen ik voor het eerst in aanraking kwam met computers en digitale
          interacties. De nieuwsgierigheid naar hoe interfaces werkten en hoe
          animaties tot stand kwamen, leidde tot mijn interesse in programmeren.
        </p>
        <p>
          Op 9-jarige leeftijd begon ik te experimenteren met computers, wat
          mijn probleemoplossende vaardigheden aanscherpte. Deze vroege
          ervaringen waren cruciaal in mijn latere programmeercarrière en
          versterkten mijn interesse in het bouwen van gebruiksvriendelijke
          interfaces.
        </p>
        <p>
          In het secundair onderwijs volgde ik Elektrische Installatietechnieken
          aan VTI Dendermonde, waar ik mijn talent voor het programmeren van
          PLCs ontdekte. Na mijn afstuderen in Industriële Onderhoudstechnieken
          aan Sint-Jan Berchmansinstituut vzw, vervolgde ik mijn droom aan de
          Hogeschool Gent met een Graduaat in het Programmeren.
        </p>
      </section>
      <section className='focus' ref={addToRefs}>
        <p>
          Tijdens mijn studie aan de Hogeschool Gent lag de focus op C#, waar ik
          vaardigheden ontwikkelde in objectgeoriënteerd programmeren en
          softwareontwikkeling. Mijn interesse in web development groeide ook
          aanzienlijk tijdens deze periode. Ik begon te werken met HTML, CSS,
          JavaScript en ReactJS, waardoor ik de vaardigheden opdeed om
          interactieve en dynamische websites te creëren.
        </p>
        <p>
          Wat mij onderscheidt is mijn vermogen om ideeën direct om te zetten in
          werkende websites zonder een uitgebreid designproces. Ik hou ervan om
          snel te prototypen en itereren op basis van feedback om zo de best
          mogelijke gebruikerservaring te realiseren. Mijn passie voor front-end
          development heeft me geholpen om complexe problemen op te lossen en
          innovatieve oplossingen te bedenken die zowel functioneel als visueel
          aantrekkelijk zijn.
        </p>
      </section>
    </div>
  );
};

export default About;
