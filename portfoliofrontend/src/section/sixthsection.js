import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./SixthSection.css";
import "./newstyles.css";

function SixthSection() {
  return (
    <Container style={{ paddingTop: "12.5vh", animation: "fadeIn 2s" }}>
      <h1
        className="text-center"
        style={{ fontFamily: "Playfair Display", fontSize: "6vh" }}
      >
        Experience
      </h1>
      <p className="text-center" id="Experience" style={{ fontSize: "1.8vh" }}>
        I have been in the Software Development space for over 2 years now.
        <br></br> I'm a passionate individual that is always eager to grow.{" "}
        <br></br>
        <br></br>
      </p>
      <Row className="text-center">
        <Col xs={6} md={6}>
          <h1
            className="section-title"
            style={{ fontSize: "2.5vh", marginBottom: "2vh" }}
          >
            Technologies I've used
          </h1>
          <Row>
            <Col xs={12} md={12}>
              <a href="https://dev.u23s1012.monash-ie.me/">
                <img
                  src={process.env.PUBLIC_URL + "/php.png"}
                  alt="PHP"
                  className="logo"
                />
              </a>
              <a href="https://github.com/appsecandrewlee/Monash-university-parcel-sender-project">
                <img
                  src={process.env.PUBLIC_URL + "/javascript.svg"}
                  alt="JS"
                  className="logo"
                />
              </a>
              <a href="https://github.com/appsecandrewlee/Portfolio.work">
                <img
                  src={process.env.PUBLIC_URL + "/react.svg"}
                  alt="React"
                  className="logo"
                />
              </a>
              <a href="https://github.com/appsecandrewlee/hackathon-ML">
                <img
                  src={process.env.PUBLIC_URL + "/dart.svg"}
                  alt="Dart"
                  className="logo"
                />
              </a>
              <a href="https://github.com/appsecandrewlee/Software-Developer-Industry-Mock-Client-Project">
                <img
                  src={process.env.PUBLIC_URL + "/css.svg"}
                  alt="CSS"
                  className="logo"
                />
              </a>
            </Col>
            <Col xs={12} md={12}>
              <a href="https://github.com/appsecandrewlee/Polyglot-Database-Design">
                <img
                  src={process.env.PUBLIC_URL + "/cassandra.svg"}
                  alt="Cassandra"
                  className="logo"
                />
              </a>
              <a href="https://github.com/appsecandrewlee/Monash-Software-Testing-Analysis-Subject">
                <img
                  src={process.env.PUBLIC_URL + "/python.svg"}
                  alt="Python"
                  className="logo"
                />
              </a>

              <a href="https://github.com/appsecandrewlee/SQL-database-design">
                <img
                  src={process.env.PUBLIC_URL + "/mysql.svg"}
                  alt="MySQL"
                  className="logo"
                />
              </a>
              <a href="https://github.com/appsecandrewlee/Monash-university-parcel-sender-project">
                <img
                  src={process.env.PUBLIC_URL + "/html.svg"}
                  alt="HTML"
                  className="logo"
                />
              </a>
              <a href="https://github.com/appsecandrewlee/Portfolio.work">
                <img
                  src={process.env.PUBLIC_URL + "/bootstrap.svg"}
                  alt="Bootstrap"
                  className="logo"
                />
              </a>
            </Col>
            <Col xs={12} md={12}>
              <a href="https://github.com/appsecandrewlee/Object-Oriented-Programming-Text-Based-Dragonborne-Game">
                <img
                  src={process.env.PUBLIC_URL + "/java.svg"}
                  alt="Java"
                  className="logo"
                />
              </a>
              <a href="https://github.com/appsecandrewlee/Android-Movie-Management-Application">
                <img
                  src={process.env.PUBLIC_URL + "/android-studio.svg"}
                  alt="Android"
                  className="logo"
                />
              </a>
              <a href="https://github.com/appsecandrewlee/Monash-university-parcel-sender-project">
                <img
                  src={process.env.PUBLIC_URL + "/angular.svg"}
                  alt="Angular"
                  className="logo"
                />
              </a>
              <a href="https://github.com/appsecandrewlee/hackathon-ML">
                <img
                  src={process.env.PUBLIC_URL + "/djangoproject.svg"}
                  alt="Django"
                  className="logo"
                />
              </a>
              <a href="https://github.com/appsecandrewlee/MACathon_2023">
                <img
                  src={process.env.PUBLIC_URL + "/npm.svg"}
                  alt="NPM"
                  className="logo"
                />
              </a>
            </Col>
            <Col xs={12} md={12}>
              <a href="https://github.com/appsecandrewlee/Polyglot-Database-Design">
                <img
                  src={process.env.PUBLIC_URL + "/mongodb.svg"}
                  alt="MongoDB"
                  className="logo"
                />
              </a>

              <a href="https://github.com/appsecandrewlee/MACathon_2023">
                <img
                  src={process.env.PUBLIC_URL + "/firebase.svg"}
                  alt="Firebase"
                  className="logo"
                />
              </a>
              <a href="https://github.com/appsecandrewlee/Android-Movie-Management-Application">
                <img
                  src={process.env.PUBLIC_URL + "/json.svg"}
                  alt="Json"
                  className="logo"
                />
              </a>
              <a href="https://github.com/appsecandrewlee?tab=repositories">
                <img
                  src={process.env.PUBLIC_URL + "/github.svg"}
                  alt="github"
                  className="logo"
                />
              </a>

              <a href="https://github.com/appsecandrewlee/Low-Level-System-Scheduling-and-Operating-Systems">
                <img
                  src={process.env.PUBLIC_URL + "/c.svg"}
                  alt="C"
                  className="logo"
                />
              </a>
            </Col>
            <Col xs={12} md={12}>
              <a href="https://dev.u23s1012.monash-ie.me/">
                <img
                  src={process.env.PUBLIC_URL + "/jquery.svg"}
                  alt="Jquery"
                  className="logo"
                />
              </a>
              <a href="https://github.com/appsecandrewlee/Monash-university-parcel-sender-project">
                <img
                  src={process.env.PUBLIC_URL + "/nodejs.svg"}
                  alt="nodejs"
                  className="logo"
                />
              </a>
              <a href="https://github.com/appsecandrewlee/Low-Level-System-Scheduling-and-Operating-Systems">
                <img
                  src={process.env.PUBLIC_URL + "/Linux.png"}
                  alt="Linux"
                  className="logo"
                />
              </a>
              <a href="https://github.com/appsecandrewlee/Polyglot-Database-Design">
                <img
                  src={process.env.PUBLIC_URL + "/neo4j.png"}
                  alt="neo4j"
                  className="logo"
                />
              </a>
              <a href="https://github.com/appsecandrewlee/SQL-database-design.git">
                {" "}
                <img
                  src={process.env.PUBLIC_URL + "/oracle.svg"}
                  alt="oracle"
                  className="logo"
                />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default SixthSection;
