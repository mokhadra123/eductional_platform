import HeroSctionImage from "../../../assets/WhatsApp Image 2023-08-12 at 9.35.20 PM.jpeg";
import "./HeroSection.style.scss";
const HeroSection = () => {
  return (
    <div className="hero-section-container">
      <div className="left-hero-section">
        <span>never stop learning</span>
        <h1>منصة التفوق للثانويه</h1>
        <p>
          لوريم إيبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل لوريم
          إيبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
        </p>
        <div className="search">
          <input
            className="search-input"
            type="search"
            placeholder="ابحث عن سنتك الدراسيه"
          />
          <input className="search-btn" type="submit" value="ابحث" />

          <select>
            <option value="">اختر سنتك الدراسيه</option>
            <option value="1">الصف الاول الثانوي</option>
            <option value="2">الصف الثاني الثانوي</option>
            <option value="3">الصف الثالث الثانوي</option>
          </select>
        </div>
      </div>
      <div className="right-hero-section">
        <img src={HeroSctionImage} alt="hero-section" />
      </div>
    </div>
  );
};

export default HeroSection;
