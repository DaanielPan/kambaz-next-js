import Link from "next/link";

export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      <div className="list-group-item active border-0">
        <Link href="/Courses/1234/Home" id="wd-course-home-link">
          Home
        </Link>
      </div>
      <div className="list-group-item text-danger border-0">
        <Link href="/Courses/1234/Modules" id="wd-course-modules-link">
          Modules
        </Link>
      </div>
      <div className="list-group-item text-danger border-0">
        <Link href="/Courses/1234/Piazza" id="wd-course-piazza-link">
          Piazza
        </Link>
      </div>
      <div className="list-group-item text-danger border-0">
        <Link href="/Courses/1234/Zoom" id="wd-course-zoom-link">
          Zoom
        </Link>
      </div>
      <div className="list-group-item text-danger border-0">
        <Link href="/Courses/1234/Assignments" id="wd-course-assignments-link">
          Assignments
        </Link>
      </div>
      <div className="list-group-item text-danger border-0">
        <Link href="/Courses/1234/Quizzes" id="wd-course-quizzes-link">
          Quizzes
        </Link>
      </div>
      <div className="list-group-item text-danger border-0">
        <Link href="/Courses/1234/Grades" id="wd-course-grades-link">
          Grades
        </Link>
      </div>
      <div className="list-group-item text-danger border-0">
        <Link href="/Courses/1234/People/Table" id="wd-course-people-link">
          People
        </Link>
      </div>
    </div>
  );
}