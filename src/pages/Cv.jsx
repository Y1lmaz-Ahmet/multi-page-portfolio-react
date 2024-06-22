import "../components/styles/Cv.css";
import ScrollReveal from "scrollreveal";
import { studies, talenKennis } from "../data";
import { vaardigheden } from "../data";
import { werkervaring } from "../data";
import { softSkills } from "../data";
import { useEffect } from "react";
const Cv = () => {
  useEffect(() => {
    ScrollReveal().reveal(".profile-section", {
      delay: 200,
      origin: "left",
      distance: "50px",
      reset: false,
    });
    ScrollReveal().reveal(".studies-section", {
      delay: 400,
      origin: "bottom",
      distance: "50px",
      reset: false,
    });
    ScrollReveal().reveal(".tech-stack-section", {
      delay: 600,
      origin: "right",
      distance: "50px",
      reset: false,
    });
    ScrollReveal().reveal(".experience-section", {
      delay: 800,
      origin: "bottom",
      distance: "50px",
      reset: false,
    });
    ScrollReveal().reveal(".skills-section", {
      delay: 1000,
      origin: "left",
      distance: "50px",
      reset: false,
    });
    ScrollReveal().reveal(".languages-section", {
      delay: 1200,
      origin: "right",
      distance: "50px",
      reset: false,
    });
  }, []);
  return (
    <div className='cv-container'>
      <section className='profile-section'>
        <h1>Ahmet Yilmaz</h1>
        <h2>Junior Software Developer</h2>
        <p>Gedreven door passie voor softwareontwikkeling en innovatie</p>
        <div className='contact-info'>
          <p>Adres: Moerstraat 16 w 2, 9240 Zele, België</p>
          <p>
            Email: <a href='mailto:y.ahmet@outlook.be'>y.ahmet@outlook.be</a>
          </p>
          <p>Gsm: +32 486 65 87 97</p>
          <p>
            GitHub:{" "}
            <a href='https://github.com/y1lmaz-ahmet' target='_blank'>
              https://github.com/y1lmaz-ahmet
            </a>
          </p>

          <p>
            LinkedIn:{" "}
            <a href='https://linkedin.com/in/y1lmaz-ahmet' target='_blank'>
              https://linkedin.com/in/y1lmaz-ahmet
            </a>
          </p>
        </div>
      </section>

      <section className='studies-section'>
        <h2>Studies & Opleidingen</h2>
        <ul>
          {studies.map((studie, index) => (
            <li key={index}>
              {studie.title} | {studie.platform} | {studie.date}
            </li>
          ))}
        </ul>
      </section>

      <section className='tech-stack-section'>
        <h2>Tech Stack</h2>
        {vaardigheden.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}
      </section>

      <section className='experience-section'>
        <h2>Werkervaring</h2>
        <h3>
          Junior front-end web developer | Meetmatch, Antwerpen | Feb 2022 – Jun
          2022
        </h3>
        <ul>
          {werkervaring.map((werk, index) => (
            <li key={index}>{werk}</li>
          ))}
        </ul>
      </section>

      <section className='skills-section'>
        <h2>Soft Skills</h2>
        <ul>
          {softSkills.map((skill, index) => (
            <li key={index}>
              {skill.type}: {skill.description}
            </li>
          ))}
        </ul>
      </section>

      <section className='languages-section'>
        <h2>Talen</h2>
        <ul>
          {talenKennis.map((taal, index) => (
            <li key={index}>
              {taal.taal}: {taal.niveau}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Cv;
