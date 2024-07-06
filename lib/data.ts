import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";

import AISaaS from "@/public/AI-SaaS.png";
import ecommerce from "@/public/ecommerce.png";
import skillsprint from "@/public/skillsprint.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer Intern",
    location: "Remote",
    description:
      "Scoped and planned tasks needed to build prototypes for medical image management applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Full-stack Web Developer at Virtury",
    location: "Remote / Islamabad ",
    description:
      "I am playing a pivotal role in building the company's new website. My contributions span the full stack, utilizing Next.js, React, and PostgreSQL technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "SkillSprint",
    description:
      "Co-founded and developed a platform providing personalized career recommendations and learning paths to help users achieve their career goals. It leverages AI to analyze user inputs and suggest the most suitable career trajectories.",
    tags: ["React", "Next.js", "Tailwind", "Python", "Flask", "ether.js"],
    imageUrl: skillsprint,
  },

  {
    title: "AI SaaS",
    description:
      "I created a AI SaaS project with capability of generating text, images, music, and videos through AI.",
    tags: ["React", "Next.js", "Stripe", "Tailwind"],
    imageUrl: AISaaS,
  },
  {
    title: "Full Stack E-Commerce Store",
    description:
      "A scalable e-commerce application built using Next.js 13 with integrated routing. ",
    tags: ["React", "Prisma", "Next.js", "Tailwind", "MySQL"],
    imageUrl: ecommerce,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Solidity",
  "Rust",
  "web3.js",
  "ether.js",
  "hardhat",
  "Git",
  "Tailwind",
  "Prisma",
  "MySQL",
  "Python",
  "C/C++",
  "C#",
  "Java",
  "HTML",
  "CSS",
  "TablePlus",
  "PostMan",
  "XML",
] as const;
