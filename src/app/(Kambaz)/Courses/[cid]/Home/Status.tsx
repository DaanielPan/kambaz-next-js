export default function CourseStatus() {
    return (
      <div id="wd-course-status">
        <h2>Course Status</h2>
        <div className="d-flex mb-2">
          <button className="btn btn-secondary me-2">Unpublish</button>
          <button className="btn btn-success">Publish</button>
        </div>
        <button className="btn btn-secondary w-100 mb-1">Import Existing Content</button>
        <button className="btn btn-secondary w-100 mb-1">Import from Commons</button>
        <button className="btn btn-secondary w-100 mb-1">Choose Home Page</button>
        <button className="btn btn-secondary w-100 mb-1">View Course Stream</button>
        <button className="btn btn-secondary w-100 mb-1">New Announcement</button>
        <button className="btn btn-secondary w-100 mb-1">New Analytics</button>
        <button className="btn btn-secondary w-100 mb-1">View Course Notifications</button>
      </div>
    );
  }