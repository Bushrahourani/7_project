//AlphabeticalB.js
const AlphabeticalB  =()=>{
  return(        
    <div className="btn-group">
    <button id="alphabeticalStyling" type="button" className="btn btn-outline-light text-dark d-flex justify-content-between rounded-end" data-bs-toggle="dropdown">
      <span className="me-auto">Alphabetical</span>
      <span className="ms-auto">
        <i className="fas fa-chevron-down arrwoStyling"></i>
      </span>
    </button>
                  <ul className="dropdown-menu" role="menu">
                  <li><a className="dropdown-item" href="#">Alpha(A-Z)</a></li>
                  <li><a className="dropdown-item" href="#">Alpha(Z-A)</a></li>
                </ul>
              </div>
              );
            }
export default AlphabeticalB;