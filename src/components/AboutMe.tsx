"use client";

import { Grid, Typography, Tooltip, Stack } from "@mui/material";
import Image from "next/image";
import styles from "./aboutme.module.css";
import cppIcon from "../../public/images/cpp-logo.svg";
import TSIcon from "../../public/images/typescript-logo.svg";
import javaIcon from "../../public/images/java-logo.svg";
import JSIcon from "../../public/images/javascript-logo.svg";

import React from "../../public/images/react-logo.svg";
import NextJS from "../../public/images/next-js-seeklogo.svg";
import Redux from "../../public/images/redux-seeklogo.svg";
import Tailwind from "../../public/images/tailwind-css-seeklogo.svg";
import MaterialUI from "../../public/images/material-ui-seeklogo.svg";

import NodeJS from "../../public/images/node-js-seeklogo.svg";
import ExpressJS from "../../public/images/express-js-seeklogo.svg";

import MySQL from "../../public/images/MySQL-logo.png";
import PostgreSQL from "../../public/images/postgresql-seeklogo.svg";
import MongoDB from "../../public/images/mongodb-icon-seeklogo.svg";

import GIT from "../../public/images/git-seeklogo.svg";
import GitHub from "../../public/images/github-seeklogo.svg";
import PostMan from "../../public/images/postman-logo.png";
import VSCode from "../../public/images/visual-studio-code-seeklogo.svg";

const Logo = ({ tt, src, alt }: { tt: string; src: any; alt?: string }) => {
  return (
    <Tooltip title={tt} className={styles.logoImage}>
      <Image
        src={src}
        alt={alt || "Logo"}
        style={{
          backgroundColor: "white",
          padding: "5px",
          borderRadius: "5px",
        }}
      />
    </Tooltip>
  );
};

const AboutMe = () => {
  return (
    <div>
      <Grid container sx={{ mt: "70px" }}>
        <Grid item xs={12} md={6} paddingRight={{ xs: 0, md: 3 }}>
          <Typography
            variant="h4"
            textAlign={{ xs: "center", md: "start" }}
            mb={2}
            id="about-me"
          >
            About Me
          </Typography>
          <Typography textAlign={"justify"}>
            Hi, I&apos;m Mahiuddin Habib, a Computer Science and Engineering
            student driven by a passion for web development. I&apos;m constantly
            learning and mastering the ever-evolving world of web technologies.
            <br />
            <br />
            My journey has equipped me with expertise in languages like C, C++,
            JavaScript, TypeScript and frameworks like React.js, Next.js,
            Node.js, and databases like PostgreSQL, MongoDB. I&apos;m also
            exploring different architectures to broaden my skillset.
            <br />
            <br />
            I&apos;ve built impactful projects utilizing these technologies, and
            I&apos;m eager to showcase them! Let&apos;s work together and bring
            your ideas to life.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} paddingLeft={{ xs: 0, md: 3 }} mb={2}>
          <Typography
            align="center"
            variant="h4"
            mb={2}
            mt={{ xs: "60px", md: 0 }}
          >
            Skills
          </Typography>
          <div className={styles.logos}>
            <div className={styles.logoSlide}>
              <Logo tt="C++" src={cppIcon} />
              <Logo tt="JavaScript" src={JSIcon} />
              <Logo tt="TypeScript" src={TSIcon} />
              <Logo tt="JAVA" src={javaIcon} />
            </div>
            <div className={styles.logoSlide}>
              <Logo tt="C++" src={cppIcon} />
              <Logo tt="JavaScript" src={JSIcon} />
              <Logo tt="TypeScript" src={TSIcon} />
              <Logo tt="JAVA" src={javaIcon} />
            </div>
          </div>
          <div className={styles.logos}>
            <div className={styles.logoSlideReverse}>
              <Logo tt="ReactJS" src={React} />
              <Logo tt="NextJS" src={NextJS} />
              <Logo tt="Redux" src={Redux} />
              <Logo tt="TailwindCSS" src={Tailwind} />
              <Logo tt="MaterialUI" src={MaterialUI} />
            </div>
            <div className={styles.logoSlideReverse}>
              <Logo tt="ReactJS" src={React} />
              <Logo tt="NextJS" src={NextJS} />
              <Logo tt="Redux" src={Redux} />
              <Logo tt="TailwindCSS" src={Tailwind} />
              <Logo tt="MaterialUI" src={MaterialUI} />
            </div>
          </div>
          <div className={styles.logos}>
            <div className={styles.logoSlide}>
              <Logo tt="NodeJS" src={NodeJS} />
              <Logo tt="ExpressJS" src={ExpressJS} />
              <Logo tt="MySQL" src={MySQL} />
              <Logo tt="PostgreSQL" src={PostgreSQL} />
              <Logo tt="MongoDB" src={MongoDB} />
            </div>
            <div className={styles.logoSlide}>
              <Logo tt="NodeJS" src={NodeJS} />
              <Logo tt="ExpressJS" src={ExpressJS} />
              <Logo tt="MySQL" src={MySQL} />
              <Logo tt="PostgreSQL" src={PostgreSQL} />
              <Logo tt="MongoDB" src={MongoDB} />
            </div>
          </div>
          <div className={styles.logos}>
            <div className={styles.logoSlideReverse}>
              <Logo src={GIT} tt="GIT" />
              <Logo src={GitHub} tt="GitHub" />
              <Logo src={PostMan} tt="Postman" />
              <Logo src={VSCode} tt="VS Code" />
            </div>
            <div className={styles.logoSlideReverse}>
              <Logo src={GIT} tt="GIT" />
              <Logo src={GitHub} tt="GitHub" />
              <Logo src={PostMan} tt="Postman" />
              <Logo src={VSCode} tt="VS Code" />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutMe;
