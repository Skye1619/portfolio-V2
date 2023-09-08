import React from "react";
import myPic from "./image/pic.jpg";
import gmail from "./image/gmail.png";
import github from "./image/github.png";
import linkedin from "./image/linkedin.png";
import facebook from "./image/facebook.png";
import { Button, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Carousel from "./Carousel";

function Home() {
  const contactClick = (operation) => {
    if (operation === "gmail") {
      window.open(
        "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDfXgVJFrdlsDjdJxVNzKFmTHFxvFjMztlQQGmzZdbmPFXLVPKTPvNczZQhLpdXPvgDnGW",
        "_blank"
      );
    }
    if (operation === "linkedin") {
      window.open(
        "https://www.linkedin.com/in/johnskyle-sebastian-621767271/",
        "_blank"
      );
    }
    if (operation === "github") {
      window.open("https://github.com/Skye1619", "_blank");
    }
    if (operation === "facebook") {
      window.open("https://www.facebook.com/john.baste.735", "_blank");
    }
  };

  return (
    <div className="homeRootContainer">
      <div className="profileContainer">
        <div className="pictureContainer">
          <img src={myPic} alt="Profile Pic" className="profilePic" />
        </div>
        <div className="profilePicDetails">
          <Typography variant="h6" className="name">
            Johnskyle Sebastian
          </Typography>
          <Typography variant="p">Contact Me</Typography>
          <div className="contactContainer">
            <img
              src={gmail}
              alt="G-mail"
              onClick={() => contactClick("gmail")}
            />
            <span onClick={() => contactClick("gmail")}>G-mail</span>
            <img
              src={linkedin}
              alt="LinkedIn"
              onClick={() => contactClick("linkedin")}
            />
            <span onClick={() => contactClick("linkedin")}>Linked In</span>
            <img
              src={github}
              alt="Github"
              onClick={() => contactClick("github")}
            />
            <span onClick={() => contactClick("github")}>Github</span>
            <img
              src={facebook}
              alt="Facebook"
              onClick={() => contactClick("facebook")}
            />
            <span onClick={() => contactClick("facebook")}>Facebook</span>
          </div>
        </div>
      </div>
      <div className="bodyContainer">
        <Button
          id="prevButton"
          startIcon={<KeyboardDoubleArrowLeftIcon />}
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          Prev
        </Button>
        <Button
          id="nextButton"
          endIcon={<KeyboardDoubleArrowRightIcon />}
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          Next
        </Button>
        <Carousel />
      </div>
    </div>
  );
}

export default Home;
