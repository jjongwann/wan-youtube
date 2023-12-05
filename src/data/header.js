import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbChristmasTree } from "react-icons/tb";
import { GiLoveSong } from "react-icons/gi";
import { TiLeaf } from "react-icons/ti";
import { FaAppleAlt } from "react-icons/fa";
import { GiDreamCatcher } from "react-icons/gi";

export const headerMenus = [
    {
        title: "완튜브",
        icon: <CiBaseball />,
        src: "/"
    },
    {
        title: "추천 영상",
        icon: <CiMoneyBill />,
        src: "/today"
    },
    {
        title: "추천 개발자",
        icon: <CiCoins1 />,
        src: "/developer"
    },
    {
        title: "크리스마스 캐롤",
        icon: <TbChristmasTree />,
        src: "/carol"
    },
    {
        title: "드림코딩 사이트",
        icon: <GiDreamCatcher />,
        src: "/dreamCoding"
    },
    {
        title: "코딩할때 듣는 노래",
        icon: <GiLoveSong />,
        src: "/lofi"
    },
    {
        title: "인프런 사이트",
        icon: <TiLeaf />,
        src: "/inflearn"
    },
    {
        title: "코딩애플 사이트",
        icon: <FaAppleAlt />,
        src: "/codingapple"
    },
];

export const searchKeyword = [
    {
        title: "BTS",
        src: "/search/bts"
    },
    {
        title: "HTML",
        src: "/search/html"
    },
    {
        title: "CSS",
        src: "/search/css"
    },
    {
        title: "JavaScript",
        src: "/search/javascript"
    },
    {
        title: "React.js",
        src: "/search/react.js"
    },
    {
        title: "Vue.js",
        src: "/search/vue.js"
    },
    {
        title: "Next.js",
        src: "/search/next.js"
    },
    {
        title: "Node.js",
        src: "/search/node.js"
    },
    {
        title: "SQL",
        src: "/search/sql"
    },
    {
        title: "portfolio",
        src: "/search/React Portfolio"
    },
    {
        title: "music",
        src: "/search/NewJeans"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/jjongwann/wan-youtube",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/",
        icon: <AiFillYoutube />
    },
    {
        title: "netlify",
        url: "https://app.netlify.com/teams/jjongwann/overview",
        icon: <AiOutlineCodepen />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/jw_jongwan/",
        icon: <AiOutlineInstagram />
    },
]