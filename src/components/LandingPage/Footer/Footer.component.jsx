import "./Footer.style.scss";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-media-container">
        <div className="logo">
          <h1>
            التفوق
            <GiOpenBook className="logo-icon" />
          </h1>
        </div>

        <div className="social-media">
          <BsInstagram className="social-icon" />
          <FaFacebookF className="social-icon facebook" />
          <BsTwitter className="social-icon" />
          <FaLinkedin className="social-icon" />
        </div>

        <div className="contact">
          <p>
            للتواصل :<span> 01223434324 +20</span>
          </p>
        </div>
      </div>

      <div className="courses footer-item">
        <h3>المواد الدراسية</h3>
        <ul>
          <li>الكمياء</li>
          <li>الرياضيات</li>
          <li>الأحياء</li>
          <li>الفيزياء</li>
          <li>اللغة الفرنسيه</li>
          <li>اللغة الانجيزية</li>
        </ul>
      </div>

      <div className="categories footer-item">
        <h3>السنين الدراسية</h3>
        <ul>
          <li>الصف الأول الثانوي</li>
          <li>الصف الثاني الثانوي</li>
          <li>الصف الثالث الثانوي</li>
        </ul>
      </div>

      <div className="teachers footer-item">
        <h3> المعلمين</h3>
        <ul>
          <li>محمد أحمد</li>
          <li>أبوالسيدز ابراهيم</li>
          <li>محمد خضرة</li>
          <li>أبوالسعود بيه</li>
          <li>مدين احمد</li>
          <li>خالد يوسف</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
