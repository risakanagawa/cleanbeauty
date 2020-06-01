import React, { useEffect, useState, useRef } from "react";
import "./concept.scss";

export default function Concept() {
  const prevScrollY = useRef(0);
  const [shouldFadeIn1, setshouldFadeIn1] = useState(false);
  const [shouldFadeIn2, setshouldFadeIn2] = useState(false);
  const fadeInStyle1 = shouldFadeIn1 ? "effect-fade" : "hidden";
  const fadeInStyle2 = shouldFadeIn2 ? "effect-fade" : "hidden";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current > 650) {
        setshouldFadeIn1(true);
      }
      if (prevScrollY.current > 950) {
        setshouldFadeIn2(true);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldFadeIn1]);
  console.log(fadeInStyle1);

  return (
    <div className="concept-page">
      <div className="concept-box effect-fade">
        <div className="split conceptImg-box concept1"></div>
        <div className="split concept-text">
          <h2>We believe everyone's natural beauty. </h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
      <div className={"concept-box " + fadeInStyle1}>
        <div className="split conceptImg-box concept2"></div>
        <div className="split concept-text">
          <h2>What makes us move. </h2>
          <div className="thanks">
            <p>Thanks for all beautiful photos in this website. </p>
            <ul>
              <li>
                <a href="https://unsplash.com/@ihadissafari">Hadis Safari</a>
              </li>
              <li>
                <a href="https://unsplash.com/@honest">The Honest Company</a>
              </li>
              <li>
                <a href="https://unsplash.com/@noahbuscher">Noah Buscher</a>
              </li>
              <li>
                <a href="https://unsplash.com/@bellebeautymakeup">
                  Belle Beauty
                </a>
              </li>
              <li>
                <a href="https://unsplash.com/@harpersunday">
                  Jess @ Harper Sunday
                </a>
              </li>
              <li>
                <a href="https://unsplash.com/@yunona_uritsky">
                  yunona uritsky
                </a>
              </li>
              <li>
                <a href="https://unsplash.com/@apen">Bryan Apen</a>
              </li>
              <li>
                <a href="https://unsplash.com/@brylove">cindy baffour</a>
              </li>
              <li>
                <a href="https://unsplash.com/@septiansimon">Septian simon</a>
              </li>
            </ul>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          </div>
        </div>
      </div>
      <div className={"concept-box " + fadeInStyle2}>
        <div className="split conceptImg-box concept3"></div>
        <div className="split concept-text">
          <h2>SUSTAINABLE BEAUTY. </h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
    </div>
  );
}
