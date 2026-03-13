import styles from "./Illustration.module.css";
import sharedStyles from "../shared.module.css";
import clsx from "clsx";
import Link from "next/link";
import BoxDescription from "../BoxDescription/BoxDescription";
import SectionHead from "../SectionHead/SectionHead";
import IllustrationPost from "./IllustrationPost";

export default function Illustration() {

  const posts = [
    {
      href: "http://www.instagram.com/p/CVI-3vrA_V4/",
      imageSrc: "/design/img/design/monicart1.png",
    },
    {
      href: "https://www.instagram.com/p/CU7LBmCANgR/",
      imageSrc: "/design/img/design/monicart2.png",
    },
    {
      href: "https://www.instagram.com/p/CPjGxRXhHzE/",
      imageSrc: "/design/img/design/monicart3.png",
    },
    {
      href: "https://www.instagram.com/p/COceKZ4hXI9/",
      imageSrc: "/design/img/design/monicart4.png",
    },
    {
      href: "https://www.instagram.com/p/COICzjiBLmF/",
      imageSrc: "/design/img/design/monicart5.png",
    },
    {
      href: "https://www.instagram.com/p/CNyb_35BgXx/",
      imageSrc: "/design/img/design/monicart6.png",
    },
    {
      href: "https://www.instagram.com/p/CPSyJwuB1cb/",
      imageSrc: "/design/img/design/monicart7.png",
    },
    {
      href: "https://www.instagram.com/p/COpWBdBhx-L/",
      imageSrc: "/design/img/design/monicart8.png",
    },
    {
      href: "https://www.instagram.com/p/CO0HOqghKcw/",
      imageSrc: "/design/img/design/monicart9.png",
    },
  ];

  return (
        <section className={clsx(sharedStyles.section, styles.sectionIllustration)} id="sectionIllustration">
            
            <SectionHead 
              title="Illustration"
              subtitle="Keen on children's style and cartoons. Icons for apps or websites, logos, illustrations. Anything that can be drawn by hand can also be vectorized and used in our designs."
            />

            <BoxDescription
              title="Keen on children's style and cartoons." 
              variant="peach">
                In my spare time, I like to design. Anything! 
                I specially enjoy joining drawing challenges and sharing my growing process in this 
                <a className={sharedStyles.link} href="http://www.instagram.com/moni.ca.art" target="_blank"> Instagram account</a> dedicated to it. 
                There's an amazing and supportive artists community out there!
            </BoxDescription>

            <div>
              <div className={styles.illustrationFeedInstagram}>

                {posts.map((post, index) => (
                  <IllustrationPost
                    key={index}
                    href={post.href}
                    imageSrc={post.imageSrc}
                    alt={`moni.ca.art post ${post.href}`}
                  />
                ))}
              </div>
            </div>

            <Link
              className={sharedStyles.theButton}
              target="_blank"
              href="http://www.instagram.com/moni.ca.art">
                See full Instagram feed!
            </Link>
        </section>
  );
}




