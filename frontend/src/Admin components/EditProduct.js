
const EditProduct = (props) => {

    // {Image_URL,
    //   Product_Name,  
    //   Product_Brand,
    //   Product_Price,
    //   Product_Regular_Price, 
    //   Product_ROM,
    //   Product_RAM}

    
    const data1=  props.Product_Name
     



  return (
    <div className="AddProductForm">
      <h2>hello: {data1}</h2>
      <div className="Upload_img_main_div">
        <h1>Edit Product</h1>

        <div className="img_div">

          <div>
            <input
              className="file_upload"
              type="file"
              // onChange={handleFileChange}
              multiple
            />
            <h3>Click to upload up to images</h3>
          </div>
        </div>
        <center><button >Upload Images</button></center>

        <div className="sec_box_img">
{/* 
          {
            cloudinaryPaths.map((item) =>
              <div>
                <img src={item} alt="" />
              </div>
            )
          } */}
        </div>

        <div className="Input_div_start">
          <h2>Edit Product</h2>
          <div className="Input_div_start_box">
            <div className="input-container">
              <label className="form-label">Enter Product Name :</label>
              <input
                className="form-input"
                type="text"
                name="Product_Name"
                // value={input.Product_Name || ""}
                // onChange={inputHandle}
              />
            </div>

            <div className="input-container">
              <label className="form-label">Enter Product Price :</label>
              <input
                className="form-input"
                type="text"
                name="Product_Price"
                // value={input.Product_Price || ""}
                // onChange={inputHandle}
              />
            </div>

            <div className="input-container">
              <label className="form-label">Enter Regular price :</label>
              <input
                className="form-input"
                type="text"
                name="Product_Regular_Price"
                // value={input.Product_Regular_Price || ""}
                // onChange={inputHandle}
              />
            </div>

            <div>

              <label className="form-label">Choose RAM:</label>
              <select
                className="form-input"
                name="Product_RAM"
                // value={input.Product_RAM || ""}
                // onChange={inputHandle}
              >
                <option value="">Select RAM</option>
                <option value="4GB">4GB</option>
                <option value="8GB">8GB</option>
                <option value="16GB">16GB</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="input-container">
              <label className="form-label">Choose ROM:</label>
              <select
                className="form-input"
                name="Product_ROM"
                // value={input.Product_ROM || ""}
                // onChange={inputHandle}
              >
                <option value="">Select ROM</option>
                <option value="32GB">32GB</option>
                <option value="64GB">64GB</option>
                <option value="128GB">128GB</option>
                <option value="256GB">256GB</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="input-container">
              <label className="form-label">Choose Brand:</label>
              <select
                className="form-input"
                name="Product_Brand"
                // value={input.Product_Brand || ""}
                // onChange={inputHandle}
              >
                <option value="">Select Brand</option>
                <option value="Samsung">Samsung</option>
                <option value="Apple">Apple</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="Redmi">Redmi</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <button className="registration-btn" >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct