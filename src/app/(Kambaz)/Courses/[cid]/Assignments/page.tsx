export default function Assignments() {
    return (
      <div id="wd-assignments">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="form-control me-2"
          />
          <div>
            <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
              + Group
            </button>
            <button id="wd-add-assignment" className="btn btn-danger me-2">
              + Assignment
            </button>
            <button className="btn btn-secondary">
              <i className="fa fa-ellipsis-v"></i>
            </button>
          </div>
        </div>
        <ul id="wd-assignment-list" className="list-group">
          <li className="list-group-item list-group-item-secondary wd-assignment-list-item">
            <div className="d-flex justify-content-between align-items-center">
              <h3 id="wd-assignments-title" className="mb-0">
                ASSIGNMENTS 40% of Total
              </h3>
              <div className="d-flex align-items-center">
                <span className="me-2">
                  <i className="fa fa-check-circle text-success"></i>
                </span>
                <button className="btn btn-sm btn-outline-secondary me-2">
                  <i className="fa fa-plus"></i>
                </button>
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="fa fa-ellipsis-v"></i>
                </button>
              </div>
            </div>
          </li>
          <li className="list-group-item wd-assignment-list-item">
            <a
              href="/Courses/1234/Assignments/123"
              className="wd-assignment-link"
            >
              A1 - ENV + HTML
            </a>
            <div className="ms-auto text-secondary">
              <span className="me-2">Not available until Oct 31 at 12:00am</span>
              <span className="me-2"> | </span>
              <span className="me-2">Due Oct 31 at 11:59pm</span>
              <span> | </span>
              <span className="ms-2">100 pts</span>
              <i className="fa fa-ellipsis-v ms-2"></i>
            </div>
          </li>
          <li className="list-group-item wd-assignment-list-item">
            <a
              href="/Courses/1234/Assignments/124"
              className="wd-assignment-link"
            >
              A2 - CSS + BOOTSTRAP
            </a>
            <div className="ms-auto text-secondary">
              <span className="me-2">Not available until Nov 7 at 12:00am</span>
              <span className="me-2"> | </span>
              <span className="me-2">Due Nov 7 at 11:59pm</span>
              <span> | </span>
              <span className="ms-2">100 pts</span>
              <i className="fa fa-ellipsis-v ms-2"></i>
            </div>
          </li>
          <li className="list-group-item wd-assignment-list-item">
            <a
              href="/Courses/1234/Assignments/125"
              className="wd-assignment-link"
            >
              A3 - JAVASCRIPT + REACT
            </a>
            <div className="ms-auto text-secondary">
              <span className="me-2">Not available until Nov 14 at 12:00am</span>
              <span className="me-2"> | </span>
              <span className="me-2">Due Nov 14 at 11:59pm</span>
              <span> | </span>
              <span className="ms-2">100 pts</span>
              <i className="fa fa-ellipsis-v ms-2"></i>
            </div>
          </li>
          <li className="list-group-item wd-assignment-list-item">
            <a
              href="/Courses/1234/Assignments/126"
              className="wd-assignment-link"
            >
              A4 - STATE + REDUX
            </a>
            <div className="ms-auto text-secondary">
              <span className="me-2">Not available until Nov 21 at 12:00am</span>
              <span className="me-2"> | </span>
              <span className="me-2">Due Nov 21 at 11:59pm</span>
              <span> | </span>
              <span className="ms-2">100 pts</span>
              <i className="fa fa-ellipsis-v ms-2"></i>
            </div>
          </li>
        </ul>
      </div>
    );
  }