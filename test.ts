console.log("Xin chao ca lop!");
{
  const myName: string = "Hoang";
  const gender: boolean = true;
  const age: number = 20 + 12;
  type myInforType = {
    name: string;
    age: number;
    address: string;
    isMarried: boolean;
    gender: string;
  };
  const myInfor: myInforType = {
    name: "Nguyễn Minh Hoàng",
    age: 32,
    address: "Bắc Giang",
    isMarried: true,
    gender: "male",
    // myStudents: ["Huy", "Hoa", "Hieu"],
  };
  console.log(`Xin chao ca lop, thay ten la ${myInfor.name}`);
}
