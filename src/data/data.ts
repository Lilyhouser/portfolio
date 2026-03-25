import js from "../asset/exp/js.png";
import java from "../asset/exp/java.png";
import react from "../asset/exp/react.png";
import tailwind from "../asset/exp/tailwind.png";
import vite from "../asset/exp/vite.png";
import express from "../asset/exp/express.png";
import axios from "../asset/exp/axios.png";
import socket from "../asset/exp/socket.png";
import docker from "../asset/exp/docker.png";
import gitlab from "../asset/exp/gitlab.png";
import github from "../asset/exp/github.png";
import git from "../asset/exp/git.png";
import mongoose from "../asset/exp/mongoose.png";
import nextjs from "../asset/exp/nextjs.png";
import nodejs from "../asset/exp/nodejs.png";
import postman from "../asset/exp/postman.png";
import redux from "../asset/exp/redux.png";
import scss from "../asset/exp/scss.png";
import figma from "../asset/exp/figma.png";
import sqlserver from "../asset/exp/sqlserver.png";
import mongo from "../asset/exp/mongo.png";
import warehouse from "../asset/project/warehouse.png";
import soulsync from "../asset/project/soulsync.png";
import cinema from "../asset/project/cinema.png";

export const study = {
  university: {
    time: "2023 - present",
    name: "FPT University - Software Engineering",
    gpa: 8.4,
    achieve: ["Exelent Student - Fall 2024"],
  },
  languages: ["Vietnamese - Native", "English - IELTS 6.5 (2023)"],
  certifications: [
    {
      name: "User Experience Research and design",
      url: "https://www.coursera.org/account/accomplishments/specialization/4F6ZJDMSQYHN",
    },
    {
      name: "Software development lifecycle and spcialization",
      url: "https://www.coursera.org/account/accomplishments/specialization/EML2XSAL6STO",
    },
    {
      name: "Web Design for Everyone",
      url: "https://www.coursera.org/account/accomplishments/specialization/Z60K20RLMTNB",
    },
  ],
};

export const exp = [
  {
    time: "8/2025 - 12/2025",
    company: "H2Q Solution",
    position: "Internship Frontend",
    description: [
      "Maintain, develop and optimize web pages using NextJS and ReactJS, working with backend, testers, and BAs",
      "Implement real-time features, develop administrator client side used by 99% employees of H2Q",
      "Incorporated feedback to improve UI/UX and website performance",
      "Optimized metadata and page structure for better site efficiency of NextJS webpage (SEO metrics increased from 60% to 96%)",
      "Tech stack: ReactJS, NextJS, Ant Design, Shadcn, TanStack, SignalR, Axios, Tailwind, Redux, SCSS, i18n",
    ],
  },
];

export const skills = {
  languages: {
    java,
    js,
  },
  libraries: {
    react,
    tailwind,
    vite,
    express,
    axios,
    socket,
    docker,
    gitlab,
    github,
    git,
    mongoose,
    nextjs,
    nodejs,
    postman,
    redux,
    scss,
    figma,
  },
  databases: {
    sqlserver,
    mongo,
  },
};

export const projects = [
  {
    name: "Cinema Management System",
    image: cinema,
    review:
      "A manage web which manages activities of customer, admin, manager and staff in a cinema",
    git: "https://github.com/orgs/CinemaManagement/repositories",
    role: "Fullstack developer",
    techstack: [js, react, express, figma, socket, tailwind, axios],
  },
  {
    name: "Warehouse Management System",
    image: warehouse,
    review:
      "A manage web which manages goods receiving/dispatching, and warehouse inventory",
    git: "https://github.com/orgs/swp-wms/repositories",
    role: "Fullstack developer",
    techstack: [js, react, express, figma, socket, tailwind, axios],
  },
  {
    name: "SoulSync",
    image: soulsync,
    review:
      "A chatting web which identifies and analyzes zodiac signs to calculate compatibility and match users accordingly.",
    git: "https://github.com/nobitandoraemon/SoulSync-be",
    role: "Backend leader",
    techstack: [js, express, socket, mongo, mongoose, postman],
  },
];
