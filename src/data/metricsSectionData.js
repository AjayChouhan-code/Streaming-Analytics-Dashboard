import { BsPeople } from "react-icons/bs";
import { BsPersonCheck } from "react-icons/bs";
import { FaStream } from "react-icons/fa";
import { CiDollar } from "react-icons/ci";

export const metrics = [
  {
    title: "Total Users",
    value: "1,200,000",
    icon: <BsPeople />,
    color: "#FFF0E6",
  },
  {
    title: "Active Users",
    value: "250,000",
    icon: <BsPersonCheck />,
    color: "#E5F7FF",
  },
  {
    title: "Total Streams",
    value: "5,000,000",
    icon: <FaStream />,
    color: "#ECEAFE",
  },
  {
    title: "Revenue",
    value: "$1,500,000",
    icon: <CiDollar />,
    color: "#E5FFF7",
  },
  {
    title: "Top Artist",
    value: "Artist Name",
    icon: <BsPeople />,
    color: "#E1FFCA",
  },
];
