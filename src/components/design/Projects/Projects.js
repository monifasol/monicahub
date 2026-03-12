import styles from "./Projects.module.css";
import sharedStyles from "../shared.module.css";
import SectionDescription from "../SectionDescription/SectionDescription";
import Separator from "../Separator/Separator";
import Quote from "../Quote/Quote";
import Post from "../Post/Post";
import clsx from "clsx";

export default function Projects() {

    const posts = [
    {
      href: "https://medium.com/design-bootcamp/sketchnoting-is-for-you-even-if-you-cant-draw-3818f8bb84ca?sk=8f8c20ecfa4b316af1f89b337557fb31",
      imageSrc: "/design/img/articles/prework1.png",
      title: "Sketchnoting is for you, even if you can't draw",
      subtitle: "Sketchnoting is about capturing ideas, not about creating a piece of art!"
    },
    {
      href: "https://medium.muz.li/from-the-eyes-of-a-backpacker-traveler-a-ux-case-study-d6fa4fac7377?source=friends_link&sk=2fc6356a60b7cff070e5ac2feae9921f",
      imageSrc: "/design/img/articles/prework6.png",
      title: "From the Eyes of a Backpacker Traveler — a UX Case Study",
      subtitle: "I combined my passion for traveling with my early steps as a UX/UI Designer to spot UX improvement areas in a traveling app"
    },
    {
      href: "https://medium.com/design-bootcamp/designing-a-dream-option-for-our-pets-da5894bc16f9?source=friends_link&sk=5cf36b362cb3b115cf5f80a7e66919d6",
      imageSrc: "/design/img/articles/blablapet.png",
      title: "Designing a Dream Option for Our Pets — Blablapet",
      subtitle: "The idea of a new feature so that users can reserve seats for their pets and travel with or without them."
    },
    {
      href: "https://medium.muz.li/this-is-what-happens-when-you-mix-jamon-with-ux-design-831f74b34cf0?source=friends_link&sk=903eddf6f793ee6467aa3d6f3b308cd5",
      imageSrc: "/design/img/articles/hams.png",
      title: "Here is What Happens When You Mix Jamón with UX Design",
      subtitle: "The Jamometre, a yummy Case Study"
    },
    {
      href: "https://medium.com/design-bootcamp/case-study-designing-a-language-app-for-kids-1f2908430211?sk=e0af370fa4383454fa6894a3129d029a",
      imageSrc: "/design/img/articles/mesamis.png",
      title: "Case study: Designing a language app for kids",
      subtitle: "From one initial idea to a mobile app's high fidelity design prototype for children."
    },
    {
      href: "https://uxdesign.cc/my-first-week-back-to-school-at-over-my-thirties-2bc873c82cdd?source=friends_link&sk=87e77f15a6557817a8e89a8a9baef103",
      imageSrc: "/design/img/articles/back-to-school.png",
      title: "First Week Back to School in My Thirties",
      subtitle: "The first five days at a UI/UX Design school was a life-changing experience. Here is my very personal side of the story."
    } 
  ];


  return (
        <section className={clsx(sharedStyles.section, styles.sectionProjects)} id="sectionProjects">

          <h2>Projects UX/UI Design</h2>

          <SectionDescription
            title="UX Design, Design Thinking, Case Studies, UI Design" 
            variant="rose">
              Empathize, Define, Ideate, Prototype, Test, Repeat. Tackling problems from the point of view of a designer with Design Thinking
              and a user-centered approach. <br/>
              Interviews, surveys, user research methods, assumptions, validations, Personas, problem statements.
              Moodboards, style tiles, design systems, UI design for mobile apps and desktop, interactive prototypes
          </SectionDescription>

          <div className={styles.quotes}>
            <Quote author="Antoine de Saint-Exupéry">
              Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.
            </Quote>

            <Quote author="Martin LeBlanc">
              A user interface is like a joke. If you have to explain it, it's not that good.
            </Quote>
          </div>

          {/* Project Mes Amis */}

          <h2>UI Design of an app for children</h2>
            
          <div className={styles.projectWrapper}>

            <h3 className={styles.projectTitle}>
              Project: Mes Amis <small>["my friends"]</small>
              <span className={styles.projectTitleSummary}>
                Mes Amis: UX/UI Design for a language mobile app for kids.
              </span>
            </h3>

            <div className={styles.projectDescription}>
              <img className={styles.logo} src="/design/img/design/mesamis-logo.png" />

              <div className={styles.projectText}>
                <p>Save animals while learning a language!</p>
                <p>
                  The project started with just an idea and a blank paper: 
                  "Design of an app for children to learn a new language while having fun."
                  After a UX research, interviews, and user and market research, 
                  these are the high fidelity design screens for the mobile app for kids. 
                </p>
                <p>
                  For the complete Case Study, interactive prototype, full set of screens,
                  and the whole UX and UI process, visit this
                  <a target="_blank" href="https://bootcamp.uxdesign.cc/case-study-designing-a-language-app-for-kids-1f2908430211">
                    Medium article
                  </a>.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.projectShowcaseDesign}>
            <h3 className={clsx(styles.text, styles.changeOrder)}>Style tiles</h3>
            <img src="/design/img/design/mesamis-style-tiles.png"/>
          </div>

          <div className={styles.projectShowcaseDesign}>
            <h3 className={styles.text}>
              Final screens<span>(short sample)</span>
            </h3>
            <img src="/design/img/design/mes-amis-group-screens.png"/>
          </div>

          <a className={styles.aButton} target="_blank" href="https://bootcamp.uxdesign.cc/case-study-designing-a-language-app-for-kids-1f2908430211">
            <div className={styles.projectButton}>Read Case Study</div>
          </a>

          <Separator />

          {/* Online Game Save Piggy */}

          <div className={styles.sectionWeb} id="sectionWeb">

            <h2>An Online Game
              <span className={styles.subH2}>(Vanilla Javascript (ES6), HTML5, CSS3, animations)</span>
            </h2>

            <div>

              <div className={styles.project}>
                <p className={styles.projectTitle}>Save Piggy from the Butcher! </p>
                
                <p>              
                  Game for the browser to train DOM manipulation, Javascript classes and objects, 
                  developed in HTML5, CSS3 animations, and Vanilla Javascript (ES6).
                  The game consists in saving the pig from the butcher. Dodge the knives thrown from the sky, 
                  while collecting fruits from the field on his way.
                </p>
              </div>

              <div className={clsx(styles.showcase, styles.web, styles.piggy)}>
                  <img src="/design/img/showcase/piggy1.png"/>
                  <img src="/design/img/showcase/piggy2.png"/>
                  <img src="/design/img/showcase/piggy3.png"/>
                  <img src="/design/img/showcase/piggy4.png"/>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className={styles.subTitle}>Writing about it all: UX Articles and Case Studies</h3>

            <p className={styles.titleExplanation}>
              These below are my favorite case studies and articles about anything related to UX.
            </p>
          </div>

          <div className={styles.posts}>

            {posts.map((post, index) => (
              <Post
                key={index}
                href={post.href}
                imageSrc={post.imageSrc}
                title={post.title}
                subtitle={post.subtitle}
              />
            ))}

          </div>
        </section>
  );
}