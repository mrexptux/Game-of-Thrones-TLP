
import "./Gallery.css";


const Gallery = ({ characters }) => {
  return (
    <section>
      <div class="container">
        <div class="row">

          <div class="row justify-content-start">

            <div class="col-8">
              <input className="form-control input-class"></input>
            </div>

            <div class="col-4">
              <button className="btn btn-default input-button"><img className="backgroud-idiomas-esp" /></button>
              <button className="btn btn-default input-button"><img className="backgroud-idiomas-engla" /></button>
            </div>
          </div>

          <br />
          <div className="row gallery-scroll">

            {characters.map(character => (
              <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
                <img id={"scrollspyHeading" + character.id} className="img-responsive" src={"http://localhost:3000" + character.image} alt={character.name} />
              </div>
            ))}

          </div>





        </div>
      </div>
    </section>

  );
};

export default Gallery;