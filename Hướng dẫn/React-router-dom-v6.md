## 1. Cài đặt:

```
npm install react-router-dom@6
```

## 2. Configuring Routes

- Đầu tiên nếu muốn ứng dụng của bạn được định tuyến bởi react-router-dom, bạn phải bọc toàn bộ ứng dụng (tức component App) vào trong Browser Router của react-router-dom:

Vào main.tsx để sửa như sau:

```tsx
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
```

## 3. Xây dựng component Header:

```tsx
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/shop" className="nav-link">
          Shop
        </Link>
      </li>
      <li>
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
      <li>
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
    </ul>
  );
};
```

## 4. Như vậy đã có bộ điều hướng với sidebar, chúng ta giờ hãy sửa lại App component để tuỳ chỉnh hiển thị nội dung phù hợp với từng tuyến đường:

```tsx
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/shop/:id" element={<ProductDetail />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={<Notfound />} />
  </Routes>
  <Footer />

```

## 5. Xây dựng các page tương ứng với các router phía trên

## 6. Chuyển trang với useNavigate.

- Nếu như sau một sự kiện là bấm nút hoặc đăng nhập thành công thì trang được điều hướng sang một trang khác, lúc này bạn hãy sử dụng useNavigate:

```tsx
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return <button onClick={() => navigate("orders")}>Go to Orders</button>;
};
```

## 7. useNavigate với nhiều tuỳ chọn

### 7.1. history

- Nếu bạn muốn dùng back, foward thì hãy thêm tham số cho useNavigate là các số nguyên.

```tsx
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-2)}>Go 2 pages back</button>
      <button onClick={() => navigate(-1)}>Go back</button>
      <button onClick={() => navigate(1)}>Go forward</button>
      <button onClick={() => navigate(2)}>Go 2 pages forward</button>
    </>
  );
}
```

### 7.2. useNavigate với replace true:

- Sử dụng tham số thứ hai của navigate để chỉ thay đổi URL chứ không muốn URL đó lưu lại trong lịch sử trình duyệt. Kiểu như tại trang A đi tới trang B, tại trang B chúng ta click back trên trình duyệt thì sẽ không quay trở lại trang A nữa.

```tsx
<button onClick={() => navigate("orders", { replace: true })}>
  Go to Orders
</button>
```

### 7.3. useNavigate với passing data

- Tình huống đặt ra là tại componentA khi navigate chuyển trang sang componentB sẽ kèm thêm một id là 6996
- Tại componentB sẽ nhận được data thông qua useLocation

```tsx
import { useNavigate } from "react-router-dom";

const componentA = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("orders", { state: { id: "6996" } })}>
      Send ID to componentB
    </button>
  );
};
```

```tsx
import { useLocation } from "react-router-dom";

const ComponentB = () => {
  const location = useLocation();
  return <h1>ID nhận từ componentA: {location.state?.id}</h1>;
};
```

### 7.4. Component Navigate

- Sử dụng component Navigate để chuyển trang trong phần return ở function

```tsx
import { Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const PrivateRoutes = () => {
  const isAuth = true;

  return isAuth ? <Dashboard /> : <Navigate to="/login" />;
};
```

## 8. Active link với tên class là "active"

- Nếu như bạn muốn link đang active có style khác với class là "active". Bạn chỉ việc đổi toàn bộ thẻ Link thành NavLink và styling cho class có tên là active

## 9. Nested Routes (Router lồng nhau)

- Sử dụng Outlet để hiển thị component con tại đúng vị trí trong 1 component cha (nếu có 2 component route lồng nhau)

```tsx
<Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/products" element={<Products />}>
    <Route path="laptop" element={<Laptop />} />
    <Route path="pc" element={<PC />} />
  </Route>
</Routes>
```

```tsx
import { Outlet } from "react-router-dom";

const Products = () => (
  <>
    <h1>Products</h1>
    <Outlet />
  </>
);
```

## 10. Sử dụng useParams để lấy tham số từ URL

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/shop/:productId" element={<ProductDetail />} />
</Routes>
```

```tsx
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  return <h2>Chi tiết sản phẩm: {params.productId}</h2>;
};
```
