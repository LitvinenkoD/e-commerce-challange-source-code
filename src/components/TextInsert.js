import '../scss/TextInsert.scss'

export default function TextInsert(props){

  let classname;
  if (props.imagebg){
    classname = "TextInsert TextInsertCustom"
  }
  else{
    classname = "TextInsert TextInsertDefault"
  }

  return (
    <div className={classname}>
        <div className="wrapper">
          <h3 className='textinsert-heading'>10R80 XPL PRO-LOC BILLET TORQUE CONVERTER 260MM</h3>
          <p className='textinsert-paragraph'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero’s De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
          <p className='textinsert-paragraph'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero’s De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
        </div>
    </div>

  )
}