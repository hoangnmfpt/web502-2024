{
    //! block dành cho myInfor
    var myInfor = {
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
    var myTeachers = ["Hoà", "Huy", "Tú", "Hoàng", "Thắng", "Đạt", "Ngọc"];
    myTeachers.forEach(function (teacher, index) {
        console.log("[".concat(index + 1, "] ").concat(teacher));
    });
}
// myTeachers.toUpperCase();
// const myTeachers =0
function a() {
    var myString = "Hom nay troi dep qua!";
}
// myString.map((item) => {});
