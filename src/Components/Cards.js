import '../App.css'

const Cards = ({name, enroll, mobile, stream, url}) => {
  return (
  <div className="card">
   <div className="dets">
    <div className="frame"><img src={url} alt="" /></div>
    <div className="text">
        <h4>{name}</h4>
        <h5>Enroll: {enroll}</h5>
        <h5>Mobile: {mobile}</h5>
        <h5>Stream: {stream}</h5>
    </div>
   </div>
  </div>
  )
}

export default Cards



 