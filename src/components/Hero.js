import '../scss/Hero.scss'

export default function Hero() {

  return (
    <div className="Hero">
      <div className="hero-image-container flexbox-container">
        <img src={process.env.PUBLIC_URL + "/assets/general/converter.png"} className='hero_image' alt="" />
        <div className="hero_wrapper wrapper">
          <div className="hero_text_container flexbox-container-column">
            <h1 className='hero_heading'>PRODUCT LINE</h1>
            <h1 className='hero_subheading'>Subtitle</h1>
          </div>
        </div>
      </div>

      <div className="hero_paragraph-wrapper wrapper">
        <div className="hero_paragraph-container">
          <p className='hero_paragraph'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero’s De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
          <p className='hero_paragraph'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero’s De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
        </div>
      </div>

      <div className="hero_specs">
        <div className="hero_specs-wrapper wrapper">
          <h3 className='hero_specs-heading'>SPECS</h3>
          <div className="hero_specs-grid">
            <div className="hero_grid-item hero_grid-item-1 flexbox-container">
              <span className="hero_specs-number">01</span>
              <span className="hero_specs-text">SPEC 01</span>
            </div>

            <div className="hero_grid-item hero_grid-item-2 flexbox-container">
              <span className="hero_specs-number">02</span>
              <span className="hero_specs-text">SPEC 02</span>
            </div>

            <div className="hero_grid-item hero_grid-item-3 flexbox-container">
              <span className="hero_specs-number">03</span>
              <span className="hero_specs-text">SPEC 03</span>
            </div>

            <div className="hero_grid-item hero_grid-item-4 flexbox-container">
              <span className="hero_specs-number">04</span>
              <span className="hero_specs-text">SPEC 04</span>
            </div>

            <img src={process.env.PUBLIC_URL + "/assets/general/converter.png"} className="hero_specs-image" alt="" />
          </div>
        </div>

      </div>

    </div>
  )
}