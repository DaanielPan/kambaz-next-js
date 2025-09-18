import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image 
              src="/images/reactjs.jpg" 
              width={200} 
              height={150} 
              alt="Course image for React JS" 
            />
            <div className="wd-dashboard-course-details">
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3000" className="wd-dashboard-course-link">
            <Image 
              src="/images/cs3000.jpg" 
              width={200} 
              height={150} 
              alt="Course image for CS 3000" 
            />
            <div className="wd-dashboard-course-details">
              <h5>CS3000 Algorithms</h5>
              <p className="wd-dashboard-course-title">
                Introduction to Data Structures and Algorithms
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1365" className="wd-dashboard-course-link">
            <Image 
              src="/images/math1365.jpg" 
              width={200} 
              height={150} 
              alt="Course image for MATH 1365" 
            />
            <div className="wd-dashboard-course-details">
              <h5>MATH1365 Discrete Mathematics</h5>
              <p className="wd-dashboard-course-title">
                Mathematical concepts for computer science
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3001" className="wd-dashboard-course-link">
            <Image 
              src="/images/ds3000.jpg" 
              width={200} 
              height={150} 
              alt="Course image for DS 3000" 
            />
            <div className="wd-dashboard-course-details">
              <h5>DS3000 Introduction to Data Science</h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of data analysis and machine learning
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1112" className="wd-dashboard-course-link">
            <Image 
              src="/images/comm1112.jpg" 
              width={200} 
              height={150} 
              alt="Course image for COMM 1112" 
            />
            <div className="wd-dashboard-course-details">
              <h5>COMM1112 Public Speaking</h5>
              <p className="wd-dashboard-course-title">
                Techniques for effective public communication
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1131" className="wd-dashboard-course-link">
            <Image 
              src="/images/comm1131.jpg" 
              width={200} 
              height={150} 
              alt="Course image for COMM 1131" 
            />
            <div className="wd-dashboard-course-details">
              <h5>COMM1131 Sex, Relationships, and Communication</h5>
              <p className="wd-dashboard-course-title">
                Communication within the context of close relationships
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3500" className="wd-dashboard-course-link">
            <Image 
              src="/images/cs3500.jpg" 
              width={200} 
              height={150} 
              alt="Course image for CS 3500" 
            />
            <div className="wd-dashboard-course-details">
              <h5>CS3500 Object-Oriented Design</h5>
              <p className="wd-dashboard-course-title">
                Principles of modern software design
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}