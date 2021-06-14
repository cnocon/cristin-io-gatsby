import React from "react"
import * as Styled from "./PortfolioList.styles"
import weatherAppImg from "../../images/weather-app-screenshot.png"
import youTubeAppImg from "../../images/youtube-app-screenshot.png"
import flashcardsAppImg from "../../images/flashcards-app-screenshot-white.png"
import statCardImg from "../../images/stat-card-preview.png"
import clqImg from "../../images/clq.png"
import cristinIoImg from "../../images/cristin-io.png"

const PortfolioList = () => {
  return (
    <>
      <div className="row" css={Styled.PortfolioItem}>
        <div className="col-sm-12">
          <h2>GitHub Stats Card for React</h2>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4">
          <header>
            <h4>
              <a href="https://github.com/cnocon/react-github-stats-card-v2" target="_blank" rel="noreferrer">GitHub</a>
              &nbsp;|&nbsp; 
              <a href="https://www.npmjs.com/package/react-github-stats-card-v2" target="_blank" rel="noreferrer">NPM</a>
              &nbsp;|&nbsp; 
              <a href="https://react-github-stats-card-v2-demo.netlify.app" target="_blank" rel="noreferrer">Demo</a>
            </h4>
          </header>
          <img className="screenshot" src={statCardImg} alt="Screenshot of GitHub Stats Card for React" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <h4>Summary</h4>
          <p>A simple card, with or without attached styles, to show some basic GitHub statistics for a given user.</p>
          <h4>Technologies</h4>
          <ul>
            <li>JavaScript</li>
            <li>Node</li>
            <li>React</li>
            <li>Webpack</li>
            <li>Storybook</li>
          </ul>
        </div>
      </div>

      <div className="row" css={Styled.PortfolioItem}>
        <div className="col-sm-12">
          <h2>Front End Development Flash Cards App</h2>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4">
          <header>
            <h4>
              <a href="https://github.com/cnocon/flash-cards" target="_blank" rel="noreferrer">GitHub</a>
              &nbsp;|&nbsp; 
              <a href="https://fed-flash-cards.netlify.app/" target="_blank" rel="noreferrer">Demo</a>
            </h4>
          </header>
          <img className='screenshot' src={flashcardsAppImg} alt="Screenshot of Flash Cards App" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <h4>Summary</h4>
          <p>A flash card app specifically geared toward teaching front end development skills. The questions are pulled in from a custom-built API and MongoDB database.</p>
          <h4>Technologies</h4>
          <ul>
            <li>MongoDB (custom API)</li>
            <li>Mongoose (custom API)</li>
            <li>Express (custom API)</li>
            <li>Node (custom API)</li>
            <li>React</li>
            <li>React Context API</li>
          </ul>
        </div>
      </div>

      <div className="row" css={Styled.PortfolioItem}>
        <div className="col-sm-12">
          <h2>Weather Charts App</h2>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4">
          <header>
            <h4>
              <a href="https://github.com/cnocon/weather-charts-app-new" target="_blank" rel="noreferrer">GitHub</a>
              &nbsp;|&nbsp; 
              <a href="https://weather-charts-app.netlify.app/" target="_blank" rel="noreferrer">Demo</a>
            </h4>
          </header>
          <img src={weatherAppImg} alt="Screenshot of Weather Charts App" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          
          <h4>Summary</h4>
          <p>This app lets you see a 7-day forecast including temperature, pressure, and humidity for any major U.S. city you search for. As a bonus, you can see the city rendered in satellite view in a Google Map.</p>
          <h4>Technologies</h4>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Google Maps API</li>
            <li>Open Weather API</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>

      <div className="row" css={Styled.PortfolioItem}>
        <div className="col-sm-12">
          <h2>CRISTIN.IO</h2>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <header>
            <h4>
              <a href="https://github.com/cnocon/cristin-io" target="_blank" rel="noreferrer">GitHub</a>
              &nbsp;|&nbsp; 
              <a href="https://cristin.io" target="_blank" rel="noreferrer">Demo</a>
            </h4>
          </header>
          <img className="screenshot" src={cristinIoImg} alt="Screenshot of this very website" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-8">
          <h4>Summary</h4>
          <p>CRISTIN.IO is an <b>obvious</b> virtual wonderland that includes a front end web development blog authored by yours truly, my résumé, portfolio (surprise!), and some general information about me and the services I offer.</p>
          <h4>Technologies</h4>
          <ul>
            <li>Gatsby</li>
            <li>GraphQL</li>
            <li>Styled Components</li>
            <li>Node</li>
            <li>React</li>
            <li>Netlify</li>
            <li>ButterCMS (a headless CMS)</li>
          </ul>
        </div>
      </div> 

      <div className="row" css={Styled.PortfolioItem}>
        <div className="col-sm-12">
          <h2>YouTube Search App</h2>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <header>
            <h4>
              <a href="https://github.com/cnocon/youtube-search-new" target="_blank" rel="noreferrer">GitHub</a>
              &nbsp;|&nbsp; 
              <a href="https://youtube-search-new.netlify.app/" target="_blank" rel="noreferrer">Demo</a>
            </h4>
          </header>
          <img className="screenshot" src={youTubeAppImg} alt="Screenshot of YouTube Search App" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-8">
          <h4>Summary</h4>
          <p>Search for and watch content from YouTube.</p>
          <h4>Technologies</h4>
          <ul>
            <li>YouTube API V3</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div> 

      <div className="row" css={Styled.PortfolioItem}>
        <div className="col-sm-12">
          <h2>CenturyLink Small Business</h2>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4">
          <header>
            <h4>
              <a href="https://business.centurylink.com" target="_blank" rel="noreferrer">Demo</a>
            </h4>
          </header>
          <img className="screenshot" src={clqImg} alt="Screenshot of CenturyLink Small Business Site" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <h4>Summary</h4>
          <p>Built using a proprietary component library, this website searches for service in a user's zip code and updates content based on product availability along with showcasing small business products. <em>Please note I cannot provide the repository link because it is private</em>.</p>
          <h4>Technologies</h4>
          <ul>
            <li>Component-based architecture</li>
            <li>Responsive design</li>
            <li>SCSS</li>
            <li>Handlebars</li>
            <li>JavaScript (ES6)</li>
            <li>PHP</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default PortfolioList;