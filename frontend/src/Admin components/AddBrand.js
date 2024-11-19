import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const AddBrand = () => {
    const [input, setInput] = useState({});
    const [AllBrands, setAllBrands] = useState([])
    const inputHandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput((values) => ({ ...values, [name]: value }));
    };

    const createBrand = async () => {
        // console.log(input)
        try {

            axios.post("http://localhost:5000/api/user/AddBrand", input).then(() => {

                toast.success('Brand Successfully Added!', { position: "top-right" });
                setInput({
                    Brand_Name: "",
                    Parent_Category: ""
                })
                myBrands();
            });

        } catch (err) {
            console.log(err);
        }
    };
    // Our All Brands

    const myBrands = async () => {

        await axios.post("http://localhost:5000/api/user/DisplayBrands").then((res) => {

            setAllBrands(res.data)
        })
    }
    useEffect(() => {
        myBrands()
    }, [])


    // delete brand
    const handleDelete = async (brandId) => {
        try {
            // Make an API call to delete the product


            axios.delete(`http://localhost:5000/api/user/DeleteBrand/${brandId}`);
            toast.success("brand deleted successfully")

            myBrands();
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };
    let sno = 0;
    const ourAllBrands = AllBrands.map((item) => {
        sno++;
        return (
            <>
                <div className="sub_tital_1" key={item._id}>
                    <p>{sno}</p>
                    <p>{item.Brand_Name}</p>
                    <p>{item.Parent_Category}</p>
                    <div className="brand_action_buttons">
                        <button className="brand_edit_button">Edit</button>
                        <button className="brand_delete_button" onClick={() => handleDelete(item._id)}>Delete</button>
                    </div>
                </div>
            </>
        )
    })
    return (
        <>
            <div className="boxmain">
                <h1 className="Had1">Create Brands</h1>
                <div className="box">
                    <div className="input_container">
                        <p>
                            Use the tarm to <b>Create Brands</b>
                        </p>
                    </div>
                    <div className="inside_container">
                        <p>Brand name</p>
                        <input
                            type="text"
                            placeholder=" Enter Brand name"
                            name="Brand_Name"
                            value={input.Brand_Name}
                            onChange={inputHandle}
                        />
                        <p>Parent category</p>
                        <input
                            type="text"
                            placeholder=" Select Parent category"
                            name="Parent_Category"
                            value={input.Parent_Category}
                            onChange={inputHandle}
                        />

                        <div className="btn_1">
                            <button onClick={createBrand}> Save Brand </button>
                        </div>
                    </div>
                    <h2 className="had"> All Brands </h2>
                    <div className="tital_1">
                        <h3>s/n</h3>
                        <h3>Name</h3>
                        <h3>Category</h3>
                        <h3>Action</h3>
                    </div>
                    <hr />
                    {
                        ourAllBrands
                    }
                </div>
            </div>
        </>
    );
};

export default AddBrand;
