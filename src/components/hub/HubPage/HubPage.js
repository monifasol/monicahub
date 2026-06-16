// page.js
"use client";
import { useState, useEffect } from "react";
import { getMessages } from "@/lib/i18n";
import styles from "./HubPage.module.css"
import Header from "@/components/hub/Header/Header";
import Section from "@/components/hub/Section/Section";
import LinkCard from "@/components/hub/LinkCard/LinkCard";
import HomeIntro from "@/components/hub/HomeIntro/HomeIntro";
import LanguageSwitcher from "@/components/hub/LanguageSwitcher/LanguageSwitcher";

export default function HubPage() {

  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") {
      return "en";
    }
    return localStorage.getItem("lang") || "en";
  });

  const t = getMessages(lang);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("lang");

    if (savedLanguage) {
      setLang(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (newLanguage) => {
    console.log("Language changed:", newLanguage);
    setLang(newLanguage);
  };

  return (
    <main className={styles.hubPage}>

      <LanguageSwitcher
        language={lang}
        onChange={handleLanguageChange}
      />

      <div className={styles.constellation} aria-hidden="true"></div>

      <div className={styles.hubPageContent}>

        <Header t={t} />

        <HomeIntro t={t} />

        <Section title={t.hub.sections.humanCenteredTechnology.title}>
          <LinkCard
            title={t.hub.sections.humanCenteredTechnology.cards.whatImBuilding.title}
            description={t.hub.sections.humanCenteredTechnology.cards.whatImBuilding.description}
            href="/building"
            illustration="/illustrations/creating.png"
          />

          <LinkCard
            title={t.hub.sections.humanCenteredTechnology.cards.techProjects.title}
            description={t.hub.sections.humanCenteredTechnology.cards.techProjects.description}
            href="/tech"
            illustration="/illustrations/tech.png"
          />

          <LinkCard
            title={t.hub.sections.humanCenteredTechnology.cards.vecinaDigital.title}
            description={t.hub.sections.humanCenteredTechnology.cards.vecinaDigital.description}
            href="https://vecinadigital.com"
            illustration={"/illustrations/vecina.png"}
          />
        </Section>

        <Section title={t.hub.sections.creativeWork.title}>

          <LinkCard
            title={t.hub.sections.creativeWork.cards.visualCraft.title}
            description={t.hub.sections.creativeWork.cards.visualCraft.description}
            href="/design"
            target="_blank"
            rel="noopener noreferrer"
            illustration={"/illustrations/design.png"}
          />

          <LinkCard
            title={t.hub.sections.creativeWork.cards.writing.title}
            description={t.hub.sections.creativeWork.cards.writing.description}
            href="https://medium.com/@monifasol"
            illustration={"/illustrations/writing.png"}
          />

          <LinkCard
            title={t.hub.sections.creativeWork.cards.music.title}
            description={t.hub.sections.creativeWork.cards.music.description}
            href="#"
            illustration={"/illustrations/music.png"}
          />

          <LinkCard
            title={t.hub.sections.creativeWork.cards.brillaBooks.title}
            description={t.hub.sections.creativeWork.cards.brillaBooks.description}
            href="https://brillabooks.com"
            illustration={"/illustrations/brilla.png"}
          />

        </Section>

        <Section title={t.hub.sections.innerWorld.title}>

          <LinkCard
            title={t.hub.sections.innerWorld.cards.selfCare.title}
            description={t.hub.sections.innerWorld.cards.selfCare.description}
            href="https://monicasaiz.ringana.com/"
            illustration={"/illustrations/selfcare.png"}
          />

        </Section>

        <Section title={t.hub.sections.contact.title}>

          <LinkCard
            title={t.hub.sections.contact.cards.letsTalk.title}
            description={t.hub.sections.contact.cards.letsTalk.description}
            href="#"
            illustration={"/illustrations/contact.png"}
          />

        </Section>
      </div>
    </main>
  );
}