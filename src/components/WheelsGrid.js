import '../scss/WheelsGrid.scss'

export default function WheelsGrid() {

  return (
    <div className="wheels-grid_wrapper wrapper">
      <div className="WheelsGrid">
        <div className="wheels-grid-item wheels-grid-item-1">
          <img src={process.env.PUBLIC_URL + "/assets/general/converter.png"} className='wheels-grid-item_image' alt="" />
        </div>
        
        <div className="wheels-grid-item wheels-grid-item-2">
          <img src={process.env.PUBLIC_URL + "/assets/general/converter.png"} className='wheels-grid-item_image' alt="" />
        </div>

        <div className="wheels-grid-item wheels-grid-item-3">
          <img src={process.env.PUBLIC_URL + "/assets/general/converter.png"} className='wheels-grid-item_image' alt="" />
        </div>

        <div className="wheels-grid-item wheels-grid-item-4">
          <img src={process.env.PUBLIC_URL + "/assets/general/converter.png"} className='wheels-grid-item_image' alt="" />
        </div>
        
        <div className="wheels-grid-item wheels-grid-item-5">
          <img src={process.env.PUBLIC_URL + "/assets/general/converter.png"} className='wheels-grid-item_image' alt="" />
          <h2 className='wheels-grid-item_text'><span>10R80 </span>XPL PRO-LOC BILLET TORQUE CONVERTER 260MM</h2>
        </div>

        <div className="wheels-grid-item wheels-grid-item-6">
          <img src={process.env.PUBLIC_URL + "/assets/general/converter.png"} className='wheels-grid-item_image' alt="" />
        </div>

      </div>
    </div>
  )
}
