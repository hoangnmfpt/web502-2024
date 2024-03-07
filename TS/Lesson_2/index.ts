/**
 * Khai báo kiểu dữ liệu với ":" cho string, number, blooean, object, array
 */

const myMessage: string =
  "Hom nay troi dep qua, rat vui duoc noi chuyen voi ban!";
const myAge: number = 30;
const isMarried: boolean = false;
const product: {
  name: string;
  price: number;
  isAvailable: boolean;
  thumbnail: string;
} = {
  name: "Iphone 12",
  price: 1000,
  isAvailable: true,
  thumbnail: "https://example.com/iphone12.jpg",
};

const myStudents: string[] = ["Dang", "Nam", "Bach", "Hoa", "Xanh"]; // Khai báo kiểu array type

const myStudents2: Array<string> = ["Dang", "Nam", "Bach", "Hoa", "Xanh"]; // Khai báo kiểu generic type
