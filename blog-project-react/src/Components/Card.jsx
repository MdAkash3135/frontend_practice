let year = new Date().getFullYear()
let month = new Date().getMonth()
let day = new Date().getDate()

function Card() {
    return (
      <div className="card">
        <h1> Todo APP</h1>
        <p> Chatro League has banned at this year {year} / {month} / {day} </p>
      </div>
    );
  }
export default Card