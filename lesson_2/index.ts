// ! "Type" là 1 cách khai báo kiểu dữ liệu trong typescript
// ? Các kiểu dữ liệu cores của typescript: number, string, boolean, object, array
// ? Các kiểu dữ liệu mixins, refers

{
  const myString: string = "Hom nay troi dep the!";
  const myAge: number = 17;
  const isTeacher: boolean = true;
  const mySkills: string[] = ["HTML", "CSS", "Javascript", "ReactJS", "NodeJS"]; // array type
  const mySkills2: Array<string> = [
    "HTML",
    "CSS",
    "Javascript",
    "ReactJS",
    "NodeJS",
  ]; //  generic type
}

{
  type educationType = {
    university: string;
    major: string;
    graduatedYear: number;
    GPA: number;
  };
  type projectType = {
    id: number;
    name: string;
    duration: string;
    description: string;
  };
  type cvType = {
    fullName: string;
    address: string;
    age: number;
    isMarried: boolean;
    email: string;
    education: educationType; // refer type
    skills: string[];
    projects: projectType[];
  };
  const myCV = {
    fullName: "Nguyen Minh Hoang",
    address: "Bắc Giang city",
    age: 32,
    isMarried: true,
    email: "hoangnm62@fpt.edu.vn",
    education: {
      university: "FPT University",
      major: "Software Engineering",
      graduatedYear: 2013,
      GPA: 3.2,
    },
    skills: ["HTML-CSS", "Javascript", "ReactJS", "NodeJS", "MongoDB"],
    projects: [
      {
        id: 1,
        name: "E-commerce website",
        duration: "6 months",
        description: "Build a website for selling clothes",
      },
      {
        id: 1,
        name: "Music player",
        duration: "2 months",
        description: "Website for listening music",
      },
    ],
  };
}
