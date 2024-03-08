{
  type productType = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating?: number;
    stock: number;
    brand: string;
    category?: string;
    thumbnail: string;
    images?: string[];
  };
  const product: productType = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  };
  console.log(product);
}

{
  type userType = {
    id: number;
    name: string;
    email: string;
    password: string;
    gender?: "male" | "female" | "other";
    relationshipStatus?: "single" | "married" | "divorced" | "complicated";
    reaction?: "like" | "love" | "haha" | "wow" | "sad" | "angry";
    status?: "active" | "inactive";
  };
  const user: userType = {
    id: 1,
    name: "Nguyễn Minh Hoàng",
    email: "hoangnm62@fpt.edu.vn",
    password: "123456",
    gender: "male",
    relationshipStatus: "single",
    reaction: "like",
  };
  console.log(user);
  console.log();
}
