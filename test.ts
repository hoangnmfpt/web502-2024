type user = {
  name: string;
  age: number;
  address: string;
  job: string;
  zalo: string;
  gender: string;
  major: string;
};

{
  //! block dành cho myInfor
  const myInfor: user = {
    name: "Nguyễn Minh Hoàng",
    age: 32,
    address: "Bắc Giang",
    job: "Teacher",
    gender: "lgbt",
    zalo: "https://zalo.me/g/lthxnv127",
    major: "Javascript, Python, Ruby",
  };
  console.log(myInfor);
}
//! block này dành riêng cho myTeachers
{
  const myTeachers: string[] = [
    "Hoà",
    "Huy",
    "Tú",
    "Hoàng",
    "Thắng",
    "Đạt",
    "Ngọc",
  ];
  myTeachers.forEach((teacher, index) => {
    console.log(`[${index + 1}] ${teacher}`);
  });
}

// myTeachers.toUpperCase();

// const myTeachers =0
{
  const myString: string = "Hom nay troi dep qua!";
}

// myString.map((item) => {});
