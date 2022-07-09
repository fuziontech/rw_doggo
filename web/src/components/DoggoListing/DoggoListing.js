const DoggoListing = ({ doggo }) => {
  console.log(doggo.jsonThumbsUrls)
  return (
    <div className="row">
      <li>
        <h1>
          <a href={doggo.permalink}>{doggo.title}</a>
        </h1>
        <div className="row col s8">
          <table>
            <tr>
              <td>Age:</td>
              <td>{doggo.age}</td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>{doggo.gender}</td>
            </tr>
            <tr>
              <td>Weight Category:</td>
              <td>{doggo.weightCategory}</td>
            </tr>
            <tr>
              <td>Species:</td>
              <td>{doggo.species}</td>
            </tr>
            <tr>
              <td>Breed:</td>
              <td>{doggo.breed}</td>
            </tr>
            <tr>
              <td>Color:</td>
              <td>{doggo.color}</td>
            </tr>
            <tr>
              <td>Location:</td>
              <td>{doggo.location}</td>
            </tr>
            <tr>
              <td>Site:</td>
              <td>{doggo.site}</td>
            </tr>
            <tr>
              <td>Last seen:</td>
              <td>{doggo.lastSeen}</td>
            </tr>
          </table>
        </div>
        <div className="row">
          {doggo.jsonThumbsUrls.map((thumb) => {
            return (
              <div key={thumb} className="row">
                <div className="col s6">
                  <img src={thumb} alt="cute doggo" />
                </div>
              </div>
            )
          })}
        </div>
      </li>
    </div>
  )
}

export default DoggoListing
