{
  //! block dành cho myInfor
  const myInfor = {
    name: "Nguyễn Minh Hoàng",
    age: 32,
    address: "Bắc Giang",
    Job: "Teacher",
    gender: "male",
    zalo: "https://zalo.me/g/lthxnv127",
    major: "Javascript, Python, Ruby",
  };
  console.log(myInfor);
}
//! block này dành riêng cho myTeachers
{
  const myTeachers = ["Hoà", "Huy", "Tú", "Hoàng", "Thắng", "Đạt", "Ngọc"];
  myTeachers.forEach((teacher, index) => {
    console.log(`[${index + 1}] ${teacher}`);
  });
}

// myTeachers.toUpperCase();

// const myTeachers =0
function a() {
  const myString = "Hom nay troi dep qua!";
}
// myString.map((item) => {});
