import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
const menu = [
  {
    page: "personal",
    icon: <MdArrowDropDown />,
    link: [
      {
        label: "Palmpay App",
        url: "/palmpay",
        icon: <BsArrowRight />,
      },
    ],
  },
  {
    page: "agent",
    url: "/agent",
    link: [{ url: "" }],
  },
  {
    page: "company",
    icon: <MdArrowDropDown />,
    link: [
      { label: "About us", url: "/about", icon: <BsArrowRight /> },
      { label: "Career", url: "/career", icon: <BsArrowRight /> },
      { label: "Blog", url: "/blog", icon: <BsArrowRight /> },
    ],
  },
  {
    page: "press",
    url: "/press",
    link: [{ label: "", url: "/press", icon: "" }],
  },
];

export default menu;
