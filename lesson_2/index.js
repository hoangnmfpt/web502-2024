// ! "Type" là 1 cách khai báo kiểu dữ liệu trong typescript
// ? Các kiểu dữ liệu cores của typescript: number, string, boolean, object, array
// ? Các kiểu dữ liệu mixins, refers
{
    var myString = "Hom nay troi dep the!";
    var myAge = 17;
    var isTeacher = true;
    var mySkills = ["HTML", "CSS", "Javascript", "ReactJS", "NodeJS"]; // array type
    var mySkills2 = [
        "HTML",
        "CSS",
        "Javascript",
        "ReactJS",
        "NodeJS",
    ]; //  generic type
}
{
    var myCV = {
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
