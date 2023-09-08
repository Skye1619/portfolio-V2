import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "./image/bootstrap.png";
import css from "./image/css-3.png";
import github from "./image/github.png";
import html from "./image/html.png";
import js from "./image/js.png";
import laravel from "./image/laravel.png";
import mui from "./image/mui.png";
import mysql from "./image/mysql.png";
import php from "./image/php.png";
import reac from "./image/science.png";
import mp1 from "./image/mp1.png";
import mp2 from "./image/mp2.png";
import capstone from "./image/capstone.png";
import rwd from "./image/RWD.jpg";
import kgc from "./image/kodego-cert.jpg";
import { Typography } from "@mui/material";

function Carousel() {
  return (
    <div className="carouselRoot">
      <div id="carouselExampleFade" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active myItem">
            <Typography variant="h5" textAlign="center" padding="16px 0">
              Skills
            </Typography>
            <div className="skillsContainer">
              <div className="icon">
                <img src={html} alt="Html icon" />
                <Typography variant="p" sx={{ fontSize: "small" }}>
                  HTML5
                </Typography>
              </div>
              <div className="icon">
                <img src={css} alt="Css icon" />
                <Typography variant="p" sx={{ fontSize: "small" }}>
                  CSS3
                </Typography>
              </div>
              <div className="icon">
                <img src={js} alt="Javascript icon" />
                <Typography variant="p" sx={{ fontSize: "small" }}>
                  Javascript
                </Typography>
              </div>
              <div className="icon">
                <img src={reac} alt="React icon" />
                <Typography variant="p" sx={{ fontSize: "small" }}>
                  React.js
                </Typography>
              </div>
              <div className="icon">
                <img src={bootstrap} alt="Bootstrap icon" />
                <Typography variant="p" sx={{ fontSize: "small" }}>
                  Bootstrap
                </Typography>
              </div>
              <div className="icon">
                <img src={mui} alt="MaterialUI icon" />
                <Typography variant="p" sx={{ fontSize: "small" }}>
                  MaterialUI
                </Typography>
              </div>
              <div className="icon">
                <img src={github} alt="Github icon" />
                <Typography variant="p" sx={{ fontSize: "small" }}>
                  Github
                </Typography>
              </div>
              <div className="icon">
                <img src={php} alt="Php icon" />
                <Typography variant="p" sx={{ fontSize: "small" }}>
                  PHP
                </Typography>
              </div>
              <div className="icon">
                <img src={laravel} alt="Laravel icon" />
                <Typography variant="p" sx={{ fontSize: "small" }}>
                  Laravel
                </Typography>
              </div>
              <div className="icon">
                <img src={mysql} alt="MySql icon" />
                <Typography variant="p" sx={{ fontSize: "small" }}>
                  MySql
                </Typography>
              </div>
            </div>
            <Typography variant="h5" textAlign="center" padding="16px 0">
              Bootcamp Project
            </Typography>
            <div className="projectContainer">
              <a href="https://skye1619.github.io/MP1/" target="_blank">
                <div className="project">
                  <img src={mp1} alt="Mini Project-1" />
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      marginTop: "6px",
                      marginBottom: "6px",
                    }}
                  >
                    Mini Project1
                  </Typography>
                </div>
              </a>
              <a
                href="https://trailer-movie-project.vercel.app/"
                target="_blank"
              >
                <div className="project">
                  <img src={mp2} alt="Mini Project-2" />
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      marginTop: "6px",
                      marginBottom: "6px",
                    }}
                  >
                    Mini Project2
                  </Typography>
                </div>
              </a>
              <a
                href="https://capstone-9cmocnl2f-skye1619.vercel.app/home"
                target="_blank"
              >
                <div className="project">
                  <img src={capstone} alt="Capstone Project" />
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      marginTop: "6px",
                      marginBottom: "6px",
                    }}
                  >
                    Capstone Project
                  </Typography>
                </div>
              </a>
            </div>
          </div>
          <div className="carousel-item myItem">
            <Typography variant="h5" textAlign="center" padding="10px 0">
              Certifications
            </Typography>
            <div className="certificateContainer">
              <a
                href="https://www.freecodecamp.org/certification/fccf31a40c6-6689-4e3b-9635-d798bc3145dc/responsive-web-design"
                target="_blank"
              >
                <div className="certificate">
                  <img
                    className="certificateImage"
                    src={rwd}
                    alt="Responsive web design Certificate"
                  />
                </div>
              </a>
              <a
                href="https://drive.google.com/file/d/1_TFA9P1bA504I0mcY8C07vI2zEs3Mhss/view?usp=sharing"
                target="_blank"
              >
                <div className="certificate">
                  <img
                    className="certificateImage"
                    src={kgc}
                    alt="KodeGo Certificate"
                  />
                </div>
              </a>
            </div>
            <Typography variant="h5" textAlign="center" marginTop="10px">
              Education
            </Typography>
            <div className="educationContainer">
              <Typography variant="h6" textAlign="center" color="#faae41">
                KodeGo Bootcamp
              </Typography>
              <Typography variant="p" textAlign="center" width="100%">
                FullStack Web Development
              </Typography>
              <Typography variant="p" textAlign="center">
                04 / 2023 - 07 / 2023
              </Typography>
              <hr />
              <Typography variant="h6" textAlign="center" color="#faae41">
                Taguig City University
              </Typography>
              <Typography variant="p" textAlign="center">
                BS Industrial Technology major in Electronis
              </Typography>
              <Typography variant="p" textAlign="center">
                2013 - 2017
              </Typography>
            </div>
          </div>
          <div className="carousel-item myItem">
            <Typography variant="h5" textAlign="center" marginTop="10px">
              Work Experience
            </Typography>
            <div className="workContainer">
              <Typography variant="h6" textAlign="center" color="#faae41">
                La Suerte Cigar and Cigarette Factory
              </Typography>
              <Typography variant="p" textAlign="center">
                Electrical and Electronic Technician
              </Typography>
              <Typography variant="p" textAlign="center">
                2020 - Present
              </Typography>
              <hr />
              <Typography variant="h6" textAlign='center' color='#faae41'>
                    Richburg Corporation
                    </Typography>
              <Typography variant="p" textAlign="center">
                Appliances Technician
              </Typography>
              <Typography variant="p" textAlign="center">
                2017 - 2020
              </Typography>
            </div>
            <Typography variant="h5" textAlign="center" marginTop='10px'>
              Credit
            </Typography>
            <div className="creditContainer">
                    <Typography variant="p" textAlign="center">
                    Icons are made from <a href="https://www.flaticon.com/" target="_blank">Flaticon.com</a>
                    </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
