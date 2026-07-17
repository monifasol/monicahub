"use client";
import { useEffect, useSyncExternalStore } from "react";
import {
  getMessages,
  subscribeLang,
  getLangSnapshot,
  getServerLangSnapshot,
  setLangPreference,
} from "@/lib/i18n";
import styles from "./HubPage.module.css";
import Header from "@/components/hub/Header/Header";
import Section from "@/components/hub/Section/Section";
import LinkCard from "@/components/hub/LinkCard/LinkCard";
import HomeIntro from "@/components/hub/HomeIntro/HomeIntro";
import LanguageSwitcher from "@/components/hub/LanguageSwitcher/LanguageSwitcher";
import ContactForm from "@/components/hub/ContactForm/ContactForm";

export default function HubPage() {
  const lang = useSyncExternalStore(
    subscribeLang,
    getLangSnapshot,
    getServerLangSnapshot
  );
  const t = getMessages(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <main className={styles.hubPage}>
      <LanguageSwitcher language={lang} onChange={setLangPreference} />

      <div className={styles.hubPageContent}>
        <Header t={t} />

        <HomeIntro t={t} />

        <Section title={t.hub.sections.humanCenteredTechnology.title}>
          <LinkCard
            title={t.hub.sections.humanCenteredTechnology.cards.vecinaDigital.title}
            description={
              t.hub.sections.humanCenteredTechnology.cards.vecinaDigital.description
            }
            href="https://vecinadigital.com"
            illustration="/illustrations/vecina.png"
            featured
          />

          <LinkCard
            title={t.hub.sections.humanCenteredTechnology.cards.techProjects.title}
            description={
              t.hub.sections.humanCenteredTechnology.cards.techProjects.description
            }
            href="/tech"
            illustration="/illustrations/tech.png"
            featured
          />

          <LinkCard
            title={
              t.hub.sections.humanCenteredTechnology.cards.whatImBuilding.title
            }
            description={
              t.hub.sections.humanCenteredTechnology.cards.whatImBuilding
                .description
            }
            href="/building"
            illustration="/illustrations/creating.png"
          />
        </Section>

        <Section title={t.hub.sections.creativeWork.title}>
          <LinkCard
            title={t.hub.sections.creativeWork.cards.visualCraft.title}
            description={t.hub.sections.creativeWork.cards.visualCraft.description}
            href="/design"
            illustration="/illustrations/design.png"
          />

          <LinkCard
            title={t.hub.sections.creativeWork.cards.writing.title}
            description={t.hub.sections.creativeWork.cards.writing.description}
            href="https://medium.com/@monifasol"
            illustration="/illustrations/writing.png"
          />

          <LinkCard
            title={t.hub.sections.creativeWork.cards.music.title}
            description={t.hub.sections.creativeWork.cards.music.description}
            href="#"
            illustration="/illustrations/music.png"
          />

          <LinkCard
            title={t.hub.sections.creativeWork.cards.brillaBooks.title}
            description={t.hub.sections.creativeWork.cards.brillaBooks.description}
            href="https://brillabooks.com"
            illustration="/illustrations/brilla.png"
          />
        </Section>

        <Section title={t.hub.sections.more.title}>
          <LinkCard
            title={t.hub.sections.more.cards.selfCare.title}
            description={t.hub.sections.more.cards.selfCare.description}
            href="https://monicasaiz.ringana.com/"
            illustration="/illustrations/selfcare.png"
          />
        </Section>

        <ContactForm t={t} />
      </div>
    </main>
  );
}
