import "./Navbar.style.scss";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GoSignIn } from "react-icons/go";
import { GiOpenBook } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>التفوق</h1>
        <GiOpenBook className="logo-icon" />
      </div>
      <ul>
        <li>
          <a href="/">المعلمين</a>
        </li>
        <li>
          {" "}
          <a href="/">السنين الدراسيه </a>
        </li>
        <li>
          <a href="/"> الكورسات </a>
        </li>
        <li>
          <a href="/">من نحن</a>
        </li>
        <li className="signin">
          <a href="/" className="signin-link">
            تسجل الدخول
            <GoSignIn />
          </a>
        </li>{" "}
        <li className="signup">
          <a href="/" className="signup-link">
            {" "}
            أنشئ حساب
            <IoPersonCircleOutline className="signup-icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
