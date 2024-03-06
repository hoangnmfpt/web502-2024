// ! Tạo 1 object chứa thông tin bản thân với typescript.
// ! Dịch nó ra js với tsc
// ! Thực hiện file với node
console.log("hello cac ban!");
{
  const myCV = {
    fullName: "Nguyễn Minh Hoàng",
    birthDay: "1999-12-20",
    address: "Bắc Giang",
    email: "hoangnm62@fpt.edu.vn",
    bio: "Còn thở còn gỡ!",
    skills: ["HTML", "CSS", "JS", "ReactJS", "NodeJS", "MongoDB"],
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
  console.log(myCV.fullName);
}
