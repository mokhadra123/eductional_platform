import Teacher from "../../../assets/chrome_OANJhpujsJ.png";
import Live from "../../../assets/live.png";
import Audio from "../../../assets/audio.png";
import Video from "../../../assets/vedio.png";
import "./PlatformFeatures.style.scss";
const PlatformFeatures = () => {
  return (
    <div className="platform-features-container">
      <div className="platform-features-title">
        <h2>جوده عاليه للفيديوهات والصوتيات المسجله،ومحاضرات مباشره</h2>
        <p>
          يمكنك مشاهدة الفيديوهات والصوتيات المسجله ومحاضرات مباشره بجوده عليه
          جدا ومع الكفء المدرسين ،لديهم خبرات كبيره يمكنك مشاهدة الفيديوهات
          والصوتيات المسجله ومحاضرات مباشره بجوده عليه جدا ومع الكفء المدرسين
          ،لديهم خبرات كبير لفيديوهات والصوتيات المسجله ومحاضرات مباشره بجوده
          عليه جدا ومع الكفء المدرسين ،لديهم خبرات كبير
        </p>
        <button>شاهد الكورسات المتاحه</button>
      </div>
      <div className="img">
        <img src={Teacher} alt="teacher" />
      </div>
      <div className="footer-features">
        <div className="feature-1 one-feature">
          <span>دروس صوتيه</span>
          <img src={Audio} alt="audio" />
        </div>
        <div className="feature-1 one-feature">
          <span>دروس مباشره</span>
          <img src={Video} alt="video" />
        </div>
        <div className="feature-1 one-feature">
          <span>دروس مسجله</span>
          <img src={Live} alt="live" />
        </div>
      </div>
    </div>
  );
};

export default PlatformFeatures;
