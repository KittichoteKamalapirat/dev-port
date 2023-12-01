interface CommonItem {
  projectName: string;
  projectDes: string;
  body: string;
  imgUrl: string;
  bgColor: string;
  technologies: string[];
  externalLink: string;
  imgWidth?: string;
}

export interface PersonalProjectType extends CommonItem {
  status: string;
}

export interface ProExpType extends CommonItem {
  employmentType: string;
}

export const personalProjects: PersonalProjectType[] = [
  {
    projectName: "Cookknow",
    projectDes: "Multiple Seller E-Commerce",
    body: "A social-media based e-commerce marketplace for meal kits. ",
    externalLink: "https://cookknow.com",
    imgUrl:
      "https://cookknow.s3.ap-southeast-1.amazonaws.com/dev-port/cookknow.png",
    bgColor: "#74E4BC",
    status: "Active",
    technologies: [
      "PERN Stack",
      "GraphQL",
      "TypeScript",
      "Apollo",
      "TypeORM",
      "NextJS",
      // "TypeGraphQL",
      "Chakra UI",
      "Redis",
    ],
  },

  {
    projectName: "Shareculator",
    projectDes: "Expense Calculator for Multiple Members Party",
    body: "An expenditure calculator that helps users calculate how much each person should return to other members. The algorithm is designed to minimize the number of transactions.",
    externalLink: "https://www.shareculator.com//",
    imgUrl:
      "https://cookknow.s3.ap-southeast-1.amazonaws.com/dev-port/shareculator-01.png",
    bgColor: "#3b82f6",
    status: "Active",
    technologies: ["React", "Tailwind", "TypeScript", "Netlify"],
    // imgWidth: "30%",
  },

  {
    projectName: "Orenoo",
    projectDes: "Multiple Dictionary Scraper ",
    body: "An social-media based e-commerce marketplace for mealkit. People can buy and sell meal kits to each other.",
    externalLink: "https://orenoo.herokuapp.com/",
    imgUrl:
      "https://cookknow.s3.ap-southeast-1.amazonaws.com/dev-port/orenoo.png",
    bgColor: "#00C58E",
    status: "non-active",
    technologies: ["MERN Stack", "JavaScript", "Redux"],
    // imgWidth: "30%",
  },
  {
    projectName: "IdeaX",
    projectDes: "Discussion Platform",
    body: "An social-media based e-commerce marketplace for mealkit. People can buy and sell meal kits to each other.",
    externalLink: "https://ideax.herokuapp.com/",
    imgUrl:
      "https://cookknow.s3.ap-southeast-1.amazonaws.com/dev-port/ideax.png",
    // bgColor: "#3FA2DB",
    bgColor: "blue.400",
    status: "non-active",
    technologies: ["MERN Stack", "JavaScript", "Redux"],
  },
  {
    projectName: "Horm Chocolate",
    projectDes: "Chocolate E-Commerce",
    externalLink: "https://hormchocolate.com/",
    body: "A Wordpress based e-commerce website for chocolate business.",
    imgUrl:
      "https://cookknow.s3.ap-southeast-1.amazonaws.com/dev-port/horm.png",
    bgColor: "#FFB800",
    status: "Active",
    technologies: ["Wordpress", "HTML", "CSS", "JavaScript"],
  },
];

export const proExperience: ProExpType[] = [
  {
    projectName: "Spacee Japan",
    projectDes: "Meeting room rental marketplace",
    body: "An social-media based e-commerce marketplace for mealkit. People can buy and sell meal kits to each other.",
    externalLink: "https://spacee.jp/",
    imgUrl:
      "https://cookknow.s3.ap-southeast-1.amazonaws.com/dev-port/spacee.png",
    bgColor: "red.500",
    technologies: ["Ruby on Rails", "Git"],
    employmentType: "Internship",
  },
  {
    projectName: "F Style",
    projectDes: "Insole and Socks Business",
    body: "An social-media based e-commerce marketplace for mealkit. People can buy and sell meal kits to each other.",
    externalLink: "http://www.f-fit.info/",
    imgUrl:
      "https://cookknow.s3.ap-southeast-1.amazonaws.com/dev-port/ffit.png",
    bgColor: "#454545",
    technologies: ["HTML", "CSS"],
    employmentType: "Contract",
  },
];

interface NavItem {
  text: string;
  externalLink: string;
}

export const navItems: NavItem[] = [
  {
    text: "Resume",
    externalLink:
      "https://cookknow.s3.ap-southeast-1.amazonaws.com/dev-port/resume.pdf",
  },
  {
    text: "LinkedIn",
    externalLink:
      "https://www.linkedin.com/in/kittichote-kamalapirat-076aaa120/",
  },
  {
    text: "Github",
    externalLink: "https://github.com/KittichoteKamalapirat",
  },
];
