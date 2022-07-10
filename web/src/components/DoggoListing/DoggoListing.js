const DoggoListing = ({ doggo }) => {
  console.log(doggo.jsonThumbsUrls)
  return (
    <figure className="md:flex rounded-xl p-8 md:p-0">
      <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
        <h1 className="text-lg font-bold">
          <a
            className="text-lg text-sky-500 dark:text-sky-400"
            href={doggo.permalink}
          >
            {doggo.title}
          </a>
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
          </table>
        </div>
        <div className="row">
          {doggo.jsonThumbsUrls.map((thumb) => {
            return (
              <div key={thumb} className="row">
                <div className="col s6">
                  <a href={thumb}>
                    <img
                      className="w-64 h-64 flex-shrink-0 mx-auto rounded-lg"
                      src={thumb}
                      alt="cute doggo"
                    />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </li>
    </figure>
  )
}

export default DoggoListing
