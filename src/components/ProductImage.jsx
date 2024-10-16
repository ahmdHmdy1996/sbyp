import React from "react";
import uplaod from "/Icons/uplaod.png"
const ProductImage = () => {
  const [fileName, setFileName] = React.useState(null);

  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  return (
    <div className="bg-white p-6 rounded-3xl  w-full mt-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-900 text-lg">صورة المنتج</span>
        <a href="#" className="text-menu text-sm">
          إضافة الوسائط من خلال رابط
        </a>
      </div>
      <div
        className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="mb-4 mt-6 w-full" >
          <img src={uplaod} alt=""  className="m-auto"/>
        </div>
        <p className="text-gray-900 mb-2 text-xl">اسحب وأفلت الصورة هنا</p>
        <p className="text-gray-300 mb-4">أو</p>
        <button
          className="bg-purple-400 text-menu px-4 py-2 rounded"
          onClick={handleButtonClick}
        >
          تصفح الصور
        </button>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileChange}
        />
        {fileName && (
          <p className="text-gray-700 mt-4">تم اختيار الملف: {fileName}</p>
        )}
      </div>
    </div>
  );
};

export default ProductImage;
