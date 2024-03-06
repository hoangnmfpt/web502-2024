// Khai bao type trong TypeScript: string, number, boolean, array, object

const message: string = "Hom nay troi dep qua!";
const myAge: number = 32;
const myStudens: string[] = ["Dung", "Chinh", "Manh", "Nam"]; //cach 1
const myStudens2: Array<string> = ["Dung", "Chinh", "Manh", "Nam"]; // cach 2
type educationType = {
  university: string;
  major: string;
  year: number;
  GPA: number;
};
type project = {
  id: number;
  name: string;
  description: string;
};
type socialLink = {
  id: number;
  name: string;
  link: string;
};
type typeCV = {
  fullName: string;
  birthDay: string;
  address: string;
  email: string;
  bio: string;
  skills: string[];
  isMarried: boolean;
  education: educationType;
  projects: project[];
  socialLinks: socialLink[];
};

const myCV = {
  fullName: "Nguyễn Minh Hoàng",
  birthDay: "1999-12-20",
  address: "Bắc Giang",
  email: "hoangnm62@fpt.edu.vn",
  bio: "Còn thở còn gỡ!",
  skills: ["HTML", "CSS", "JS", "ReactJS", "NodeJS", "MongoDB"],
  isMarried: true,
  education: {
    university: "FPT University",
    major: "Software Engineering",
    year: 2020,
    GPA: 3.2,
  },
  projects: [
    {
      id: 1,
      name: "E-commerce website",
      description: "Build a website for selling clothes",
    },

    {
      id: 1,
      name: "E-commerce website",
      description: "Build a website for selling clothes",
      //  Mô tả: "Xây dựng một trang web để bán quần áo",
    },
  ],
  socialLinks: [
    {
      id: 1,
      name: "facebook",
      link: "https://facebook.com/hoangnm62",
    },
    { id: 2, name: "github", link: "https://github.com/hoangnm-ndm" },
  ],
};
console.log(message);
