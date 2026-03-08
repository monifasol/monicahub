
import styles from "./HubPage.module.css"
import Header from "@/components/hub/Header/Header";
import Section from "@/components/hub/Section/Section";
import LinkCard from "@/components/hub/LinkCard/LinkCard";
import HomeIntro from "@/components/hub/HomeIntro/HomeIntro";

export default function HubPage() {

  return (
    <main className={styles.hubPage}>

      <div className={styles.topBotanical} aria-hidden="true"></div>

      <div className={styles.hubPageContent} aria-hidden="true">

        <Header />

        <HomeIntro />

        <Section title="Digital Craft">
          <LinkCard
            title="Tech Projects"
            description="Frontend · AI · product thinking"
            href="#"
            illustration="/illustrations/tech.png"
          />

          <LinkCard
            title="Vecina Digital"
            description="Human-centered websites"
            href="#"
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
            description="Essays, ideas, reflections"
            href="#"
            illustration={"/illustrations/writing.png"}
          />

          <LinkCard
            title="Music"
            description="Electronic explorations"
            href="#"
            illustration={"/illustrations/music.png"}
          />

          <LinkCard
            title="Brilla Books"
            description="Creative publishing"
            href="#"
            illustration={"/illustrations/brilla.png"}
          />

        </Section>

        <Section title="Inner World">

          <LinkCard
            title="Self-care"
            description="Rituals & reflection"
            href="#"
            illustration={"/illustrations/selfcare.png"}
          />

        </Section>

        <Section title="Contact">

          <LinkCard
            title="Let's talk"
            description="Collaborations & conversations"
            href="#"
            illustration={"/illustrations/contact.png"}
          />

        </Section>
      </div>
    </main>
  );
}