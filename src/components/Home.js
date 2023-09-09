import React, { useEffect, useState } from "react";
import myPic from "./image/pic.jpg";
import gmail from "./image/gmail.png";
import github from "./image/github.png";
import linkedin from "./image/linkedin.png";
import facebook from "./image/facebook.png";
import { Button, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Carousel from "./Carousel";
import { Padding } from "@mui/icons-material";

function Home() {
  const [prevnext, setPrevnext] = useState(["PREV", "NEXT"]);
  const [wid, setWid] = useState(window.innerWidth);

  const handleResize = () => {
    setWid(window.innerWidth);
    
  };
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    const pic = document.querySelector(".profilePic");
    pic.classList.add(".zoom");
    zoomPic()
    
    if (wid <= 545) {
      setPrevnext("", "");
    } else {
      setPrevnext(["PREV", "NEXT"]);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [wid]);

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

  const zoomPic = () => {
    const pic = document.querySelector(".profilePic");
    const picContainer = document.querySelector(".pictureContainer");
    const profileDetails = document.querySelector('.profilePicDetails')

    if (pic.classList.contains(".zoom")) {
      pic.classList.remove(".zoom");
      picContainer.removeEventListener("click", zoomPic);
      pic.style.borderRadius = "50%";

      if (wid <= 850) {
        pic.style.width = "100%";
        picContainer.style.height = "100%";
        picContainer.style.left = "0";
        picContainer.style.top = "0";
        picContainer.style.background = "transparent";
        picContainer.style.paddingLeft = "5px";
        if (wid <= 400) {
          picContainer.style.width = "120px";
          profileDetails.style.paddingLeft = "120px";
        } else {
          picContainer.style.width = "150px";
          profileDetails.style.paddingLeft = "150px";
        }
      } else {
        pic.style.width = "60%";
        picContainer.style.width = "100%";
        picContainer.style.height = "220px";
        picContainer.style.left = "0";
        picContainer.style.top = "0";
        picContainer.style.background = "transparent";
        profileDetails.style.paddingLeft = '0'
      }
    } else {
      picContainer.addEventListener("click", zoomPic);
      pic.classList.add(".zoom");
      pic.style.borderRadius = "0";
      pic.style.width = "40%";
      picContainer.style.width = "100vw";
      picContainer.style.height = "100vh";
      picContainer.style.left = "-16px";
      picContainer.style.top = "-16px";
      picContainer.style.background = "black";
    }
  };

  return (
    <div className="homeRootContainer">
      <div className="profileContainer">
        <div className="pictureContainer">
          <img
            src={myPic}
            alt="Profile Pic"
            className="profilePic"
            onClick={zoomPic}
          />
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
          {prevnext[0]}
        </Button>
        <Button
          id="nextButton"
          endIcon={<KeyboardDoubleArrowRightIcon />}
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          {prevnext[1]}
        </Button>
        <Carousel />
      </div>
    </div>
  );
}

export default Home;
