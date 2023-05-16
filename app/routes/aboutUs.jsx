import image from "../../public/img/aboutUs.jpg";
import styles from "~/styles/aboutUs.css";

export function meta() {
  return [
    {
      title: "GuitarLA - About Us",
      description: "Guitar sales, music blog",
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: image,
      as: "image",
    },
  ];
}

function AboutUs() {
  return (
    <main className="container about">
      <h2 className="heading">About Us</h2>

      <div className="content">
        <img src={image} alt="About us img" />

        <div>
          <p>
            At GuitarLA, we are passionate about music and want to help
            musicians find the right gear to suit their needs. Our store has a
            wide variety of guitars, from entry-level models to high-end
            instruments for the discerning musician. We also have a blog where
            we share our knowledge and experience with our readers, covering
            topics such as guitar maintenance, music theory, and interviews with
            notable musicians.
          </p>

          <p>
            Our staff are all musicians themselves, so they understand the needs
            and concerns of our customers. We pride ourselves on providing
            excellent customer service, and are always happy to help with any
            questions or concerns you may have. Whether you're a beginner or an
            experienced player, we have the expertise and selection you need to
            take your playing to the next level.
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
