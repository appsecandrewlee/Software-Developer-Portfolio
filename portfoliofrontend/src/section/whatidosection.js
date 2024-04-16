import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function WhatIDoSection() {
  const [showImage, setShowImage] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div style={{ paddingTop: "13vh", overflowX: "hidden" }}>
      <h1
        className="text-center"
        style={{ fontFamily: "Playfair Display", fontSize: "6vh" }}
      >
        Professional Values
      </h1>
      <p className="text-center" style={{ fontSize: "2vh" }}>
        Aspiring Traits
      </p>

      <Container
        style={{
          paddingTop: "4vh",
          animation: "fadeIn 7s",
          marginLeft: "-100vw",
        }}
      >
        <Row id="about" noGutters>
          <Col className="text-left extended-text">
            <h1
              className="lift-up-animation"
              style={{
                fontFamily: "Playfair  Display",
                fontSize: "clamp(6vh, 7vw, 4vh)",
                lineHeight: "0.9",
                width: "200vw",
              }}
              onMouseEnter={() =>
                setShowImage(process.env.PUBLIC_URL + "/Desktop.jpg")
              }
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setShowImage(null)}
            >
              <span>
                <sup
                  style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "0.5ch" }}
                >
                  01
                </sup>{" "}
                Continuous Development
              </span>
              <span>
                <sup
                  style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "0.5ch" }}
                >
                  001
                </sup>{" "}
                Continuous Development
              </span>
              <sup
                style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "0.5ch" }}
              >
                001
              </sup>{" "}
              Continuous Development
              <sup
                style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "0.5ch" }}
              >
                001
              </sup>{" "}
              Continuous Development
              <sup
                style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "0.5ch" }}
              >
                001
              </sup>{" "}
              Continuous Development
            </h1>
            <h1
              className="lift-up-animation"
              style={{
                fontFamily: "Playfair Display",
                fontSize: "clamp(6vh, 7vw, 10vh)",
                lineHeight: "0.9",

                marginTop: "4vh",
              }}
              onMouseEnter={() =>
                setShowImage(process.env.PUBLIC_URL + "/servers.jpg")
              }
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setShowImage(null)}
            >
              <sup
                style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "0.5ch" }}
              >
                02
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Team Player
              </span>
              <sup
                style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "0.5ch" }}
              >
                002
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Team Player
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                0 02
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Team Player
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                002
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Team Player
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                002
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Team Player
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                002
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Team Player
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                002
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Team Player
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                002
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Team Player
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                002
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Team Player
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                002
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Team Player
              </span>
            </h1>
            <div style={{ marginBottom: "4vh" }}></div>
            <h1
              className="lift-up-animation"
              style={{
                fontFamily: "Playfair Display",
                fontSize: "clamp(6vh, 7vw, 10vh)",
                lineHeight: "0.9",

                marginTop: "4vh",
              }}
              onMouseEnter={() =>
                setShowImage(process.env.PUBLIC_URL + "/curious.jpg")
              }
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setShowImage(null)}
            >
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                03
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Always Curious
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                003
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Always Curious
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                003
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Always Curious
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                003
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Always Curious
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                003
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Always Curious
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                003
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Always Curious
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                003
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Always Curious
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                003
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Always Curious
              </span>
            </h1>
            <div style={{ marginBottom: "4vh" }}></div>
          </Col>
        </Row>
      </Container>
      {showImage && (
        <img
          className="hover-image"
          src={showImage}
          alt="Hover"
          style={{
            position: "fixed",
            top: position.y,
            left: position.x + 400,
            transform: "translate(-50%, -50%) rotate(-15deg)",
            pointerEvents: "none",
            transition: "all 0.3s ease-out",
          }}
        />
      )}
    </div>
  );
}

export default WhatIDoSection;
