import './SeparatorImage.css';

function SeparatorApp() {
  return(
    <> 
      <div className="separator__image separator__image--app">
        <div className="container">
          <div className="separator__image--text">
            <div className="separator__image--text-wrap">
              <h2 className="title-yellow">Scarica ora la nuova app</h2>
              <a className="app-btn" href="/"><img src="./images/google-btn.png" alt="google"/></a>
              <a className="app-btn" href="/"><img src="./images/apple-btn.png" alt="apple"/></a>
            </div>
          </div>
          <div className="separator__image--img">
            <img src="/images/separator-app.jpg" alt="Separator"/>
          </div>
        </div>
      </div>
    </>
  ); 
}

export default SeparatorApp;