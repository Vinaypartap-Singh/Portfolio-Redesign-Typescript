import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaShopify,
  FaFigma,
  FaBezierCurve,
  FaPenNib,
} from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { FaFileExcel, FaReact } from "react-icons/fa6";
import { CiDatabase } from "react-icons/ci";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiAndroidstudio,
  SiAppwrite,
  SiKotlin,
  SiSquarespace,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

interface skillsType {
  skill: string;
  icon: React.ReactNode;
  color: string;
}

export default function Skills() {
  const skills: skillsType[] = [
    {
      skill: "HTML",
      icon: <FaHtml5 color="#e34c26" />,
      color: "#e34c26",
    },
    {
      skill: "CSS",
      icon: <FaCss3Alt color="#264de4" />,
      color: "#264de4",
    },
    {
      skill: "Javascript",
      icon: <IoLogoJavascript color="#F0DB4F" />,
      color: "#F0DB4F",
    },
    {
      skill: "Typescript",
      icon: <BiLogoTypescript color="#007acc" />,
      color: "#007acc",
    },
    {
      skill: "React JS",
      icon: <FaReact color="#61dbfb" />,
      color: "#61dbfb",
    },
    {
      skill: "React Native",
      icon: <FaReact color="#61dbfb" />,
      color: "#61dbfb",
    },
    {
      skill: "Firebase",
      icon: <IoLogoFirebase color="#F57C00" />,
      color: "#F57C00",
    },
    {
      skill: "Supabase",
      icon: <CiDatabase color="#2D9F6B" />,
      color: "#2D9F6B",
    },
    {
      skill: "Next JS",
      icon: <TbBrandNextjs color="#000000" />,
      color: "#000000",
    },
    {
      skill: "WordPress",
      icon: <FaWordpress color="#00749C" />,
      color: "#00749C",
    },
    {
      skill: "Shopify",
      icon: <FaShopify color="#95BF47" />,
      color: "#95BF47",
    },
    {
      skill: "Liquid",
      icon: <FaShopify color="#95BF47" />,
      color: "#95BF47",
    },
    {
      skill: "Shopify Theme Development",
      icon: <FaShopify color="#95BF47" />,
      color: "#95BF47",
    },
    {
      skill: "Figma",
      icon: <FaFigma color="#95BF47" />,
      color: "#95BF47",
    },
    {
      skill: "Adobe XD",
      icon: <FaBezierCurve color="#2D001D" />,
      color: "#2D001D",
    },
    {
      skill: "Canva",
      icon: <FaPenNib color="#2A89DA" />,
      color: "#2A89DA",
    },
    {
      skill: "SquareSpace",
      icon: <SiSquarespace color={"#000000"} />,
      color: "#000000",
    },
    {
      skill: "Appwrite",
      icon: <SiAppwrite color={"#fd366e"} />,
      color: "#fd366e",
    },
    {
      skill: "Kotlin",
      icon: <SiKotlin color="#E24462" />,
      color: "#E24462",
    },
  ];
  return (
    <div id="skills" className="mb-32">
      <div className="max-w-4xl m-auto mt-32 px-10 lg:px-0">
        <h1 className="text-2xl">Skills</h1>
        <div className="flex flex-wrap justify-between gap-x-14 pt-12 gap-y-6">
          {skills.map(({ skill, icon, color }, index) => {
            const borderColor = `border-[${color}]`;

            return (
              <div
                key={index}
                className={`flex items-center gap-2 border px-6 py-2 cursor-pointer ${borderColor} rounded-md hover:text-[${color}] transition-all`}
              >
                {icon} {skill}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
