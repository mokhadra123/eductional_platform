import "./Categories.style.scss";

const Categories = () => {
  return (
    <div className="categories-container">
      <div className="category">
        <h2 className="class-1">1</h2>
        <h5>الصف الاول الثانوي</h5>

        <h6>معا نحو التفوق</h6>
        <button>شاهد الكورسات المتاحه</button>
      </div>
      <div className="category">
        <h2 className="class-2">2</h2>
        <h5>الصف الثاني الثانوي</h5>

        <h6>معا نحو التفوق</h6>
        <button>شاهد الكورسات المتاحه</button>
      </div>
      <div className="category">
        <h2 className="class-3">3</h2>
        <h5>الصف الثالث الثانوي</h5>
        <h6>معا نحو التفوق</h6>
        <button>شاهد الكورسات المتاحه</button>
      </div>
    </div>
  );
};

export default Categories;
