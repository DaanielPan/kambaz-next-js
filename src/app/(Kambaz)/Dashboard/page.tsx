import Link from "next/link";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardImg from 'react-bootstrap/CardImg';
import CardBody from 'react-bootstrap/CardBody';
import CardTitle from 'react-bootstrap/CardTitle';
import CardText from 'react-bootstrap/CardText';

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1234/Home" className="text-decoration-none text-dark">
                <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={150} />
                <CardBody>
                  <CardTitle className="text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
                  <CardText className="overflow-hidden" style={{ height: "50px" }}>
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Repeat the same Card structure for your other courses... */}

          <Col style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/3000/Home" className="text-decoration-none text-dark">
                <CardImg variant="top" src="/images/cs3000.jpg" width="100%" height={150} />
                <CardBody>
                  <CardTitle className="text-nowrap overflow-hidden">CS3000 Algorithms</CardTitle>
                  <CardText className="overflow-hidden" style={{ height: "50px" }}>
                    Introduction to Data Structures and Algorithms
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1365/Home" className="text-decoration-none text-dark">
                <CardImg variant="top" src="/images/math1365.jpg" width="100%" height={150} />
                <CardBody>
                  <CardTitle className="text-nowrap overflow-hidden">MATH1365 Discrete Mathematics</CardTitle>
                  <CardText className="overflow-hidden" style={{ height: "50px" }}>
                    Mathematical concepts for computer science
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/3001/Home" className="text-decoration-none text-dark">
                <CardImg variant="top" src="/images/ds3000.jpg" width="100%" height={150} />
                <CardBody>
                  <CardTitle className="text-nowrap overflow-hidden">DS3000 Introduction to Data Science</CardTitle>
                  <CardText className="overflow-hidden" style={{ height: "50px" }}>
                    Fundamentals of data analysis and machine learning
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1112/Home" className="text-decoration-none text-dark">
                <CardImg variant="top" src="/images/comm1112.jpg" width="100%" height={150} />
                <CardBody>
                  <CardTitle className="text-nowrap overflow-hidden">COMM1112 Public Speaking</CardTitle>
                  <CardText className="overflow-hidden" style={{ height: "50px" }}>
                    Techniques for effective public communication
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/1131/Home" className="text-decoration-none text-dark">
                <CardImg variant="top" src="/images/comm1131.jpg" width="100%" height={150} />
                <CardBody>
                  <CardTitle className="text-nowrap overflow-hidden">COMM1131 Sex, Relationships...</CardTitle>
                  <CardText className="overflow-hidden" style={{ height: "50px" }}>
                    Communication within the context of close relationships
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/3500/Home" className="text-decoration-none text-dark">
                <CardImg variant="top" src="/images/cs3500.jpg" width="100%" height={150} />
                <CardBody>
                  <CardTitle className="text-nowrap overflow-hidden">CS3500 Object-Oriented Design</CardTitle>
                  <CardText className="overflow-hidden" style={{ height: "50px" }}>
                    Principles of modern software design
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

        </Row>
      </div>
    </div>
  );
}