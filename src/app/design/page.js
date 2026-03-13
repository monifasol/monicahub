import "./animations.css";
import styles from "./design.module.css";

import Image from "next/image";
import SideBar from "@/components/design/SideBar/SideBar";
import Header from "@/components/design/Header/Header";
import Hero from "@/components/design/Hero/Hero";
import Hello from "@/components/design/Hello/Hello";
import Projects from "@/components/design/Projects/Projects";
import Illustration from "@/components/design/Illustration/Illustration";
import Wave from "@/components/design/Wave/Wave";
import Writing from "@/components/design/Writing/Writing";
import Separator from "@/components/design/Separator/Separator";
import RevealOnScroll from "@/components/design/RevealOnScroll/RevealOnScroll";
import Contact from "@/components/design/Contact/Contact";

export default function DesignPage() {
  return (
    <main className={styles.designPage} lang="en">

      <div className={styles.progressBar}></div>

      <div className={styles.arrowUp}>
        <Image
          src="/design/img/buttonGoUp.png"
          alt="Button Go Up"
          className={styles.buttonGoUp} 
          width={70}
          height={70}
          loading="eager"
        />
      </div>

      <SideBar />

      <Header />

      <div className={styles.wrapperFullContent}>
        <Hero />

        <Wave variant="rosa" />

        <Hello />

        <Wave extraClassName="waveFlipped" variant="green" />

        <RevealOnScroll>
          <Projects />
        </RevealOnScroll>

        <Wave extraClassName="waveFlipped" variant="peach" />

        <Illustration />

        <Separator />

        <Wave variant="rosa" />

        <Writing />

        <section className={styles.gradientToTop}>
        </section>

        <Wave extraClassName="waveContact" variant="green" />

        <Contact />

      </div>

    </main>
  );
}