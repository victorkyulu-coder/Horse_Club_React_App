const About = () => {
  return (
 <section className="about-section" id="about">
      <div class="about-textbox">
        <p class="about-text-subtitle">
          We are here to take care of your horses
        </p>
        <h2 class="about-title">
          we are your horses' best friend now and forever
        </h2>
        <p class="about-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          et nemo odio laudantium modi nihil vel consectetur magnam excepturi
          quis quasi enim omnis incidunt veniam aut esse, error impedit dolores.
        </p>
        <a href="https://github.com/codeme254" target="_blank" class="about-cta"
          >get started now</a
        >
      </div>
      <div class="about-img-wrapper">
        <img
          src="./src/images/about-img.jpg"
          alt="horse running"
          class="about-img-image"
        />
      </div>
    </section>
    
</>
  );
};

export default About;