import './SeparatorImage.css';

function SeparatorImage() {
  return(
    <> 
      <div className="separator__image">
        <div className="container">
          <div className="separator__image--text">
            <p>Allenati con noi all'Arco della Pace<br/> Tutte le domeniche</p>
            <button className="btn btn-subscribe">Scopri di più</button>
          </div>
        </div>
      </div>
    </>
  ); 
}

export default SeparatorImage;