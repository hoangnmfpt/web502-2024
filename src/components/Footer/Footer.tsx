import st from "./Footer.module.scss";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={st.footer + " " + "d-flex"}>
      <div>Copyright by hoangnm - 2024</div>
      <button>subribe Kenh hoangnm</button>
    </footer>
  );
};

export default Footer;
