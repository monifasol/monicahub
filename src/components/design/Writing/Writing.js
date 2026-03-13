
import styles from "./Writing.module.css";
import sharedStyles from "../shared.module.css";
import BoxDescription from "../BoxDescription/BoxDescription";
import SectionHead from "../SectionHead/SectionHead";
import PostText from "../PostText/PostText";
import clsx from "clsx";

export default function Writing() {

  const writingPosts = [
    {
      href: "https://psiloveyou.xyz/a-beautiful-goodbye-ed6f1c1ec6a6?source=friends_link&sk=602738623784e59fc99652b60a3f6c0d",
      title: "A Beautiful Goodbye",
      subtitle: "Alzheimer's didn't allow her to remember, but the force of love worked a miracle",
      publication: "P.S. I love you"
    },
    {
      href: "https://medium.com/fearless-she-wrote/sexually-abused-at-the-age-of-eight-a71b93be26f9?source=friends_link&sk=a92f14d872d085111fbd4e94f2df462b",
      title: "Sexually Abused at The Age of Eight",
      subtitle: "Abusing a kid can destroy their entire existence, and I've seen it up close in the life of a woman I love.",
      publication: "Fearless she wrote"
    },
    {
      href: "https://psiloveyou.xyz/confinement-is-reshaping-the-way-we-connect-c3d8e52cfaec?source=friends_link&sk=0f472a8ca8885545e34a5f54feddca3a",
      title: "Confinement is Reshaping The Way We Connect",
      subtitle: "Nothing will be the same after this pandemic",
      publication: "P.S. I love you"
    },
    {
      href: "https://psiloveyou.xyz/i-love-you-dearly-although-youre-not-yet-born-1f75ddae615c?source=friends_link&sk=0d831047fe008503d087929cb3b5cb64",
      title: "I Love You Dearly — Although You're Not Yet Born",
      subtitle: "A love letter to my baby, who will be in our lives in a few days.",
      publication: "P.S. I love you"
    },
    {
      href: "https://medium.com/the-ascent/two-lovers-who-died-on-the-same-day-f16d77ee7881?source=friends_link&sk=9731d3a9b51d9c065e1375a3fee9c344",
      title: "Two Lovers Who Died the Same Day",
      subtitle: "I just lost my parents, and their end was magical",
      publication: "The ascent"
    },
    {
      href: "https://psiloveyou.xyz/the-simple-joy-of-a-quiet-moment-a3e1fad482be?source=friends_link&sk=bd546243f3f45672405c528b8868ec31",
      title: "The Simple Joy of a Quiet Moment",
      subtitle: "We appreciate life more intensely since confinement",
      publication: "P.S. I love you"
    },
    {
      href: "https://medium.com/the-ascent/who-should-be-your-first-true-love-56f2d434c999?source=friends_link&sk=eb323be27b7e7630f9f5fef2d20bfaf0",
      title: "Who Should Be Your First True Love?",
      subtitle: "After my first love tore me apart, I understood why.",
      publication: "The ascent"
    },
    {
      href: "https://medium.com/fearless-she-wrote/stop-telling-me-i-need-a-man-d457159f65c0?source=friends_link&sk=28c3887c0ac50796b1eaaec498aa40ed",
      title: "Stop Telling Me I Need a Man",
      subtitle: "All my life, they've asked me, “Do you have a boyfriend?”",
      publication: "Fearless she wrote"
    },
    {
      href: "https://psiloveyou.xyz/how-to-deal-with-a-miserable-person-81cc38c5f82d?source=friends_link&sk=a61752f6cb14048796aa091ebfc53278",
      title: "How to Deal with a Miserable Person",
      subtitle: "How pitiful can someone's life be if one can only feel joy over someone else's pain?",
      publication: "P.S. I love you"
    },
    {
      href: "https://medium.com/fearless-she-wrote/pregnancy-in-the-time-of-the-coronavirus-9eedeca4a31?source=friends_link&sk=3f62fa8532459e5116d4e8ae3da0811b",
      title: "Pregnancy in the Time of the Coronavirus",
      subtitle: "Our baby is growing in my belly as we live in a pandemic peak",
      publication: "Fearless she wrote"
    },
    {
      href: "https://medium.com/the-ascent/the-most-painful-call-of-my-life-481df63e2d0?source=friends_link&sk=de1ed5149afdd85310928d5366574cb7",
      title: "The Most Painful Call of My Life",
      subtitle: "I couldn't tell them in person that their daughter died",
      publication: "The ascent"
    },
    {
      href: "https://medium.com/the-ascent/the-last-day-we-saw-her-eyes-open-174690353cdd?source=friends_link&sk=605ec60750b02d7f5a810bb6cf1d01c3",
      title: "The Last Day We Saw Her Eyes Open",
      subtitle: "We will never forget that day; she was going to be a grandmother.",
      publication: "The ascent"
    },
    {
      href: "https://medium.com/fearless-she-wrote/when-your-mum-wants-you-to-hate-your-dad-d8fe2283a66?source=friends_link&sk=d19fc10c860f108cd88ca4a1958f6f4d",
      title: "When Your Mum Wants You to Hate Your Dad",
      subtitle: "Parents shouldn't behave this way if they want their children to lead healthy and happy lives",
      publication: "Fearless she wrote"
    },
  ];

  return (
    <section className={clsx(sharedStyles.section, styles.sectionWriting)} id="sectionWriting">

      <SectionHead 
        title="Also some personal writing"
        subtitle="Writing as my creativity nourisher."
      />

      <BoxDescription
        title="Writing is the closest thing I have to meditation."
        variant="rose">
          The real fuel for my creativity and awakens life awareness. 
          I write about experiences and feelings, people I love, thoughts...  
          By writing I talk to myself and to others, I learn from mistakes, 
          release, reflect, deepen, observe, rearrange, understand.  
          <br />
          Below you can find a selection of my personal writing,
          and if you want to read more, I host them all under
          my <a className={sharedStyles.link} href="https://medium.com/@monifasol">Medium profile</a>,
          where I write regularly.
        </BoxDescription>

      <div className={styles.postsWriting}>

        <div className={styles.postHeadline}>
          <p className={styles.postHeadlineArticleName}>
            Article
          </p>
          <p className={styles.postHeadlinePublication}>
            Publication
          </p>
        </div>

            {writingPosts.map((post, index) => (
              <PostText
                key={index}
                href={post.href}
                title={post.title}
                subtitle={post.subtitle}
                publication={post.publication}
              />
            ))}
        
      </div>
    </section>
  );
}
