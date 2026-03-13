import styles from "./Projects.module.css";
import sharedStyles from "../shared.module.css";
import BoxDescription from "../BoxDescription/BoxDescription";
import SectionHead from "../SectionHead/SectionHead";
import ProjectHead from "../ProjectHead/ProjectHead";
import Separator from "../Separator/Separator";
import Quote from "../Quote/Quote";
import Post from "../Post/Post";
import Link from "next/link";
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

          <SectionHead 
            title="Projects UX/UI Design"
            subtitle="A selection of projects and case studies about UX/UI Design, Design Thinking, and User-Centered Design."
          />

          <BoxDescription
            title="Empathize, Define, Ideate, Prototype, Test, Repeat" 
            variant="rose">
              Tackling problems from the point of view of a designer and a user-centered approach
              through the Design Thinking process.
              Research through interviews, surveys, user research methods, assumptions, validations, Personas, problem statements.
              Design of moodboards, style tiles, design systems, UI design for mobile apps and desktop, interactive prototypes
          </BoxDescription>

          <div className={styles.quotes}>
            <Quote author="Antoine de Saint-Exupéry">
              Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.
            </Quote>

            <Quote author="Martin LeBlanc">
              A user interface is like a joke. If you have to explain it, it's not that good.
            </Quote>
          </div>

          <Separator />

          {/* Project: Online Game Save Piggy */}

          <ProjectHead
            title="Project: Online Game Save Piggy"
            subtitle="Vanilla Javascript (ES6), HTML5, CSS3, animations"
          />

          <BoxDescription 
            title="An Online Game: Save Piggy from the butcher!"
            variant="green"> 
            {/* variant green does not work !! */}
              Game for the browser to train DOM manipulation, Javascript classes and objects, 
              developed in HTML5, CSS3 animations, and Vanilla Javascript (ES6).
              The game consists in saving the pig from the butcher. Dodge the knives thrown from the sky, 
              while collecting fruits from the field on his way.
          </BoxDescription>

          <div className={styles.showcase}>
              <img src="/design/img/showcase/piggy1.png"/>
              <img src="/design/img/showcase/piggy2.png"/>
              <img src="/design/img/showcase/piggy3.png"/>
              <img src="/design/img/showcase/piggy4.png"/>
          </div>

          <Separator />

          {/* Project: Mes Amis */}
            
          <ProjectHead
            title="Project: Mes Amis"
            subtitle="User Research and UI Design of an app for children to learn a new language while having fun."
          />

          <BoxDescription 
            title="Save animals while learning a language!"
            variant="orange"
            image="/design/img/design/mesamis-logo.png"
            imageAlt="Mes Amis logo"
            imageWidth={150}
            imageHeight={150}
          >
              <p>
                The project <b>Mes Amis</b> ('my friends' in French) started with just an idea and a blank paper: 
                "Design of an app for children to learn a new language while having fun."
                After a UX research, interviews, and user and market research, 
                these are the high fidelity design screens for the mobile app for kids. 
              </p>
              <p>
                For the complete Case Study, interactive prototype, full set of screens,
                and the whole UX and UI process, visit 
                the <a target="_blank" className={sharedStyles.link} href="https://bootcamp.uxdesign.cc/case-study-designing-a-language-app-for-kids-1f2908430211">
                  Medium article.
                </a> I wrote about it.
              </p>
          </BoxDescription>

          <div className={styles.showcaseDesign}>
            <p className={styles.text}>Style tiles</p>
            <img src="/design/img/design/mesamis-style-tiles.png"/>
          </div>

          <div className={styles.showcaseDesign}>
            <p className={styles.text}>Final screens</p>
            <img src="/design/img/design/mes-amis-group-screens.png"/>
          </div>

          <Link 
            className={sharedStyles.theButton}
            target="_blank"
            href="https://bootcamp.uxdesign.cc/case-study-designing-a-language-app-for-kids-1f2908430211">
              Read Case Study
          </Link>

          <Separator />

          <ProjectHead
            title="UX Articles and Case Studies"
            subtitle="Writing about it all. These below are my favorite case studies and articles about anything related to UX."
          />

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