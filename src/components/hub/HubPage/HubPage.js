
import styles from "./HubPage.module.css"
import Header from "@/components/hub/Header/Header";
import Section from "@/components/hub/Section/Section";
import LinkCard from "@/components/hub/LinkCard/LinkCard";
import HomeIntro from "@/components/hub/HomeIntro/HomeIntro";

export default function HubPage() {

  return (
    <main className={styles.hubPage}>

      {/* <div className={styles.topBotanical} aria-hidden="true"></div> */}

      <div className={styles.constellation} aria-hidden="true"></div>

      <div className={styles.hubPageContent}>

        <Header />

        <HomeIntro />

        <Section title="Human-centered Technology">
          <LinkCard
            title="What I'm Building"
            description="Exploring AI, memory, meaning, and what makes us human."
            // description="Exploring the space where technology meets meaning // also great"
            href="/building"
            illustration="/illustrations/creating.png"
          />

          <LinkCard
            title="Tech Projects"
            description="Frontend, AI explorations, and product thinking."
            href="/tech"
            illustration="/illustrations/tech.png"
          />

          <LinkCard
            title="Vecina Digital"
            description="Human-centered websites for meaningful local projects."
            href="https://vecinadigital.com"
            illustration={"/illustrations/vecina.png"}
          />

        </Section>

        <Section title="Creative Work">

          <LinkCard
            title="Visual Craft"
            description="My creative universe of digital art."
            // or: "Interfaces, illustration & visual experiments"
            // or: "A creative playground for digital art, interfaces, and visual experiments."
            href="/design"
            target="_blank"
            rel="noopener noreferrer"
            illustration={"/illustrations/design.png"}
          />

          <LinkCard
            title="Writing"
            description="Essays, ideas, reflections."
            href="https://medium.com/@monifasol"
            illustration={"/illustrations/writing.png"}
          />

          <LinkCard
            title="Music"
            description="Electronic explorations."
            href="#"
            illustration={"/illustrations/music.png"}
          />

          <LinkCard
            title="Brilla Books"
            description="Creative publishing."
            href="https://brillabooks.com"
            illustration={"/illustrations/brilla.png"}
          />

        </Section>

        <Section title="Inner World">

          <LinkCard
            title="Self-care"
            description="Rituals & reflection."
            href="https://monicasaiz.ringana.com/"
            illustration={"/illustrations/selfcare.png"}
          />

        </Section>

        <Section title="Contact">

          <LinkCard
            title="Let's talk"
            description="Collaborations & conversations."
            href="#"
            illustration={"/illustrations/contact.png"}
          />

        </Section>
      </div>
    </main>
  );
}