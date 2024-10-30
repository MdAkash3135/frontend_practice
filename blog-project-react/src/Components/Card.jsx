let year = new Date().getFullYear()
let month = new Date().getMonth()
let day = new Date().getDate()
import Data from '../data.json'

function Card(props) {
   console.log(Data)
    return (
      <div className="card">
        <h1> {Data[0].title} </h1>
        <p> Chatro League has banned at this year {year} / {month} / {day} </p>
      </div>
    );
  }
export default Card