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
