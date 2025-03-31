import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function BookDetails() {
const { id } = useParams();
const navigate = useNavigate();
const [book, setBook] = useState(null);

useEffect(() => {
    axios.get(`http://localhost:8000/api/books/${id}`)
    .then(res => setBook(res.data))
    .catch(err => console.log(err));
}, [id]);

const handleBorrow = () => {
    axios.delete(`http://localhost:8000/api/books/${id}`)
    .then(() => navigate("/"))
    .catch(err => console.log(err));
};

if (!book) return <p>Loading...</p>;

return (
    <div>
    <h2>{book.title}</h2>
    <p>By {book.author}</p>
    <p>Page count: {book.pages}</p>
    <p style={{ color: book.isAvailable ? "green" : "red" }}>
        {book.isAvailable ? "Available" : "Not available"}
    </p>
    <button onClick={handleBorrow}>Borrow</button>
    </div>
);
}

export default BookDetails;
