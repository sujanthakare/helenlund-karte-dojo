import React from "react";
import LandingImage from "./landing-image.png";

import Image from "next/image";
import { InfoSection } from "./InfoSection";

export function LandingSection() {
  return (
    <section className="w-full">
      <div>
        <Image
          src={LandingImage}
          alt="Karate class lessons"
          className="w-full  object-cover"
        />
        <div className="flex justify-center px-3">
          <div className="container">
            <InfoSection
              title="Välkommen till Helenlund Karate Dojo's officiella hemsida."
              description={
                <>
                  <p>
                    På denna sida finner du information om Solna Karate Dojo.
                    Information om vår organisation, Svenska Inoue-ha Shito-ryu
                    Kai, och dess anslutna klubbar finner du här.
                  </p>
                  <p>
                    Den karatestil vi tränar är traditionell och heter Inoue-ha
                    Shito-ryu Kai. Shito-Ryu är en av de fyra stora japanska
                    stilarna och Inoue-ha Shito-ryu Kai finns nu spridd på ett
                    flertal platser i Sverige.
                  </p>
                </>
              }
            />

            <InfoSection
              title="Karate passar alla åldrar"
              description={
                <>
                  <p>
                    Karaten passar alla åldrar, kvinnor som män, flickor som
                    pojkar. Enda förutsättningen för att börja träna karate är
                    att du har tålamod.
                  </p>
                  <p>
                    Du behöver inte vara i fysisk topptrim som många tror. Det
                    är hos oss DU skall bygga upp Din styrka och kondition.
                  </p>
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
