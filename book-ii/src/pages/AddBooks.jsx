import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBook() {
const [form, setForm] = useState({ title: "", author: "", pages: 0, isAvailable: false });
const navigate = useNavigate();

const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
};

const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/books", form)
    .then(() => navigate("/"))
    .catch(err => console.log(err));
};

return (
    <div>
    <h2>Add a Book</h2>
    <form onSubmit={handleSubmit}>
        <label>Title<input type="text" name="title" onChange={handleChange} /></label>
        <label>Author<input type="text" name="author" onChange={handleChange} /></label>
        <label>Pages<input type="number" name="pages" onChange={handleChange} /></label>
        <label>Available?<input type="checkbox" name="isAvailable" onChange={handleChange} /></label>
        <button>Add Book</button>
    </form>
    </div>
);
}

export default AddBook;
