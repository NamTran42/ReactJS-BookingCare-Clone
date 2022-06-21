import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
    //fire redux event: actions
  };

  render() {
    return (
      <React.Fragment>
        <div className="section-share section-about">
          <div className="section-about-header">ABOUT BOOKING CARE</div>
          <div className="section-about-content">
            <div className="content-left">
              <iframe
                width="100%"
                height="600px"
                src="https://www.youtube.com/embed/3O1_3zBUKM8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="content-right">
              <h3>
                Check out the official music video for "La la la" by Naughty Boy
                ft. Sam Smith From Naughty Boy's debut album "Hotel Cabana"
              </h3>
              <p>
                AVAILABLE NOW - Download: <a href="">http://po.st/HCiTunes</a>{" "}
                Watch the Hotel Cabana trailer at{" "}
                <a href="">http://www.hotel-cabana.com</a> Follow Naughty Boy
              </p>
              <a href="#">http://www.facebook.com/NBoyMusic</a>
              <a href="">http://www.twitter.com/naughtyboymusic</a>

              <p>
                Video Directed by Ian Pons Jewell Music video by Naughty Boy
                Performing La La La. © 2013 Naughty Boy Recordings Ltd, under
                exclusive licence to Virgin Records Ltd.
              </p>
              <h5>#NaughtyBoy #LaLaLa #Vevo #Pop #SamSmith</h5>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
