import { AiFillDollarCircle, AiFillHome } from "react-icons/ai";
import {
  FaHandHoldingUsd,
  FaRegHandshake,
  FaUserCheck,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";
import { BsPiggyBank } from "react-icons/bs";
import { FiUserX } from "react-icons/fi";

export const sidenavs = [
  {
    id: 1,
    title: null,
    child: [
      {
        href: "#",
        pageName: "Dashboard",
        icon: AiFillHome,
      },
    ],
  },
  {
    id: 2,
    title: "CUSTOMERS",
    child: [
      {
        href: "/",
        pageName: "Users",
        icon: FaUserFriends,
      },
      {
        href: "#",
        pageName: "Guarantors",
        icon: FaUsers,
      },
      {
        href: "#",
        pageName: "Loans",
        icon: AiFillDollarCircle,
      },
      {
        href: "#",
        pageName: "Decision Models",
        icon: FaRegHandshake,
      },
      {
        href: "#",
        pageName: "Savings",
        icon: BsPiggyBank,
      },
      {
        href: "#",
        pageName: "Loan Requests",
        icon: FaHandHoldingUsd,
      },
      {
        href: "#",
        pageName: "Whitelist",
        icon: FaUserCheck,
      },
      {
        href: "#",
        pageName: "Karma",
        icon: FiUserX,
      },
    ],
  },
];
