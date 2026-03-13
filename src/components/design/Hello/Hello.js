import styles from "./Hello.module.css";
import sharedStyles from "../shared.module.css";
import SectionHead from "../SectionHead/SectionHead";
import clsx from "clsx";

export default function Hello() {
  return (
    <section className={clsx(sharedStyles.section, styles.sectionHello)} id="sectionHello">

      <SectionHead
        title="Hello!"
        subtitle="Creating is simply part of how I move through the world."
      />

      <p>
        Almost every day I make something: a drawing, a small interface, a song, a recipe, an idea, a plan.
        It is my way of expressing myself, connecting with others, learning, making sense of things, having fun, and being alive. 
      </p>

      <p>
        After nearly two decades working in technology, design has always been the thread running through everything I do.
        I enjoy exploring interfaces, illustration, writing, music production, accessibility, and the small details that 
        make digital experiences feel thoughtful and human.
      </p>

      <p>
        This space gathers some of those visual explorations.<br/>
        Pieces where curiosity, craft, and play meet.
      </p>

    </section>
  );
}