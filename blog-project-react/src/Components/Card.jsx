let year = new Date().getFullYear()
let month = new Date().getMonth()
let day = new Date().getDate()

function Card(props) {
   console.log(props)
    return (
      <div className="card">
        <h1> {props.titleTex}</h1>
        <p> Chatro League has banned at this year {year} / {month} / {day} </p>
      </div>
    );
  }
export default Card