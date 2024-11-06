
import './homepage.css'
export default function Home() {
  return (
    <div className='main-page-box'>
      <div className="results">
        <h1>See our satisfied patients progress!!</h1>
        <div className="results-carousel-main">
          <div className="results-carousel-holder">
            <div className="results-collage">
              <div className="result-img">
                <span className='result-label'>Before</span>
                <img src="results/whitespot-before.jpg" alt="" />
              </div>
              <div className="result-img">
                <span className='result-label'>After</span>
                <img src="results/whitespot-after.jpg" alt="" />
              </div>
            </div>
            <div className="results-details-holder">
              <span>Disease: </span>
              <span style={{ fontWeight: "bold", fontSize: "2rem" }}>White spots</span>
              <br />
              <span>Duration: </span>
              <span>2 months</span>
              <br />
              <span>Patient age: </span>
              <span>16yrs</span>
            </div>
          </div>
          <div className="results-carousel-holder">
            <div className="results-collage">
              <div className="result-img">
                <span className='result-label'>Before</span>
                <img src="results/whitespot-before.jpg" alt="" />
              </div>
              <div className="result-img">
                <span className='result-label'>After</span>
                <img src="results/whitespot-after.jpg" alt="" />
              </div>
            </div>
            <div className="results-details-holder">
              <span>Disease: </span>
              <span style={{ fontWeight: "bold", fontSize: "2rem" }}>White spots</span>
              <br />
              <span>Duration: </span>
              <span>2 months</span>
              <br />
              <span>Patient age: </span>
              <span>16yrs</span>
            </div>
          </div>
          <div className="results-carousel-holder">
            <div className="results-collage">
              <div className="result-img">
                <span className='result-label'>Before</span>
                <img src="results/whitespot-before.jpg" alt="" />
              </div>
              <div className="result-img">
                <span className='result-label'>After</span>
                <img src="results/whitespot-after.jpg" alt="" />
              </div>
            </div>
            <div className="results-details-holder">
              <span>Disease: </span>
              <span style={{ fontWeight: "bold", fontSize: "2rem" }}>White spots</span>
              <br />
              <span>Duration: </span>
              <span>2 months</span>
              <br />
              <span>Patient age: </span>
              <span>16yrs</span>
            </div>
          </div>
        </div>
      </div>
      <div className="pannelists">
        <h1 style={{ color: "blue" }}>Meet our pannelists</h1>
        <div className="pannel-holder">
          <div className="pannel">
            <div className="doctor-personal-info">
              <div className="doctor-img-holder">
                <img src="Dr_Mamta.png" alt="" />
              </div>
              <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Dr. Mamta Garg
              </span>
              <br />
              <span>Senior consultant</span>
              <br />
              <span>Amulya Ayurved,Meerut</span>
            </div>
            <div className="doctor-expand">
              <div className="expertise">Expertise:</div>
              <ul>
                <li>Arthritis</li>
                <li>Joint-pain</li>
                <li>Fatty-liver</li>
                <li>Ladies problem</li>
                <li>Hair fall</li>
                <li>Fat loss</li>
              </ul>
              <div className='consult-button-box'>
                <a target='_blank' href="https://wa.me/917417099103?text=I'm%20interested%20to%20know%20more" className='consult-button'>Consult Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer">

      </div>
    </div>
  );
}
