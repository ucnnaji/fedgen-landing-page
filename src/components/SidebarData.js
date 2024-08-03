import React from "react";

import * as AiIcons from "react-icons/ai";

import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { TbArticle } from "react-icons/tb";
import { MdOutlineUpcoming } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";


export const SidebarData = [

  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

  {
    title: "News",
    path: "/News",
    icon: <FaRegNewspaper />,
    cName: "nav-text",
  },
  {
    title: "People",
    path: "/People",
    icon: <MdOutlinePeopleAlt />,
    cName: "nav-text",
  },
  {
    title: "Published Article",
    path: "/PublishedArticle",
    icon: <TbArticle />,
    cName: "nav-text",
  },
  {
    title: "Upcoming Events",
    path: "/UpcomingEvents",
    icon: <MdOutlineUpcoming />,
    cName: "nav-text",
  },
  
];
