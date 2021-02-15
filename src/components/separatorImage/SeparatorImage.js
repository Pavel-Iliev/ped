import './SeparatorImage.css';

function SeparatorImage() {
  return(
    <> 
      <div className="separator__image">
        <div className="container">
          <div className="separator__image--text">
            <div className="separator__image--text-wrap">
              <p>Allenati con noi all'Arco della Pace<br/> Tutte le domeniche</p>
              <button className="btn btn-subscribe">Scopri di più</button>
            </div>
          </div>
          <div className="separator__image--img">
            <img src="/images/separator.jpg" alt="Separator"/>
          </div>
        </div>
      </div>
    </>
  ); 
}

export default SeparatorImage;