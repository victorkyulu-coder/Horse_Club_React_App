 import  style from "../css-modules/Services.module.css"
 const Services = () => {
    return (


    <section className={style.services_section} id="services">
      <div className={style.title}>
        <p className="title-sub">some of the things we offer</p>
        <h2 className="title-main">our services</h2>
      </div>
      <div className={style.services_container}>
        
        <div className={style.service_card}>
          <div className={style.service_card_img_wrapper}>
            <img
              src="./src/images/service-vet.png"
              alt="veterinary services"
              className={style.service_image}
            />
          </div>
          <h3 className={style.service_title}>veterinary service</h3>
          <p className={style.service_description}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove.
          </p>
        </div>
    
        <div className={style.service_card}>
          <div className={style.service_card_img_wrapper}>
            <img
              src="./src/images/service-horse-grooming.png"
              alt="horse grooming"
              className={style.service_image}
            />
          </div>
          <h3 className={style.service_title}>horse grooming</h3>
          <p className={style.service_description}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove.
          </p>
        </div>
    
        
        <div className={style.service_card}>
          <div className={style.service_card_img_wrapper}>
            <img
              src="./src/images/service-horse-training.png"
              alt="horse training"
              className={style.service_image}
            />
          </div>
          <h3 className={style.service_title}>horse training</h3>
          <p className={style.service_description}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove.
          </p>
        </div>
    
        
        <div className={style.service_card}>
          <div className={style.service_card_img_wrapper}>
            <img
              src="./src/images/service-horse-feeding.png"
              alt="horse feeding"
              className={style.service_image}
            />
          </div>
          <h3 className={style.service_title}>horse feeding</h3>
          <p className={style.service_description}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove.
          </p>
        </div>
        
        
        <div className={style.service_card}>
          <div className={style.service_card_img_wrapper}>
            <img
              src="./src/images/service-horse-santuary.png"
              alt="sanctuary for horses"
              className={style.service_image}
            />
          </div>
          <h3 className={style.service_title}>Sanctuary for horses</h3>
          <p className={style.service_description}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove.
          </p>
        </div>
        
    
        <div className={style.service_card}>
          <div className={style.service_card_img_wrapper}>
            <img
              src="./src/images/service-horse-tracking.png"
              alt="digital tracking"
              className={style.service_image}
            />
          </div>
          <h3 className={style.service_title}>digital tracking</h3>
          <p className={style.service_description}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove.
          </p>
        </div>
        
      </div>
    </section>

    )
}

export default Services;