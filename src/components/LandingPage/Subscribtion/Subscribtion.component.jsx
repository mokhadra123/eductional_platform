import "./Subscribtion.style.scss";

const Subscribtion = () => {
  return (
    <div className="subscribtion-container">
      <div className="subscribtion-content">
        <h2>اشترك للحصول علي اخر الكورسات والمراجعات </h2>
        <p>أكثر من الف طالب مشتركين في المنصه</p>
        <input type="text" placeholder="البريد الالكتروني" />
        <button>اشترك الان</button>
      </div>
    </div>
  );
};
export default Subscribtion;
