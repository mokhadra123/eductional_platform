import Student from "../../../assets/chrome_m0hlOlm54u.png";
import "./ShareKnowledge.style.scss";
const ShareKnowledge = () => {
  return (
    <div className="share-knowledge-container">
      <div className="right-share">
        <h2>لو عندك المعلومات وحبيت انك تشارك انضم الينا لتعم الفائدة</h2>
        <p>
          أفضل طريقه لتثبيت المعلومه عن طريق شرحها للغير ،لذلك في منصة تفوق
          وفرنا هذه الميزه لكي نساعد الطلاب وتعم الفائده علي الكل قه لتثبيت
          المعلومه عن طريق شرحها للغير ،لذلك في منصة تفوق وفرنا هذه الميزه لكي
          نساعد الطلاب وتعم الفائده علي الكل
        </p>
        <button> انضم الينا</button>
      </div>
      <div className="left-share">
        <img src={Student} alt="Student" />
      </div>
    </div>
  );
};

export default ShareKnowledge;
