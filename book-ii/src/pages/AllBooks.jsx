import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBooks() {
const [books, setBooks] = useState([]);

useEffect(() => {
    axios.get("http://localhost:8000/api/books")
    .then(res => setBooks(res.data))
    .catch(err => console.log(err));
}, []);

return (
    <div>
    <h2>Book Catalog</h2>
    <table>
        <thead>
        <tr>
            <th>Title</th><th>Author</th><th>Pages</th><th>Available</th><th>Book Page</th>
        </tr>
        </thead>
        <tbody>
        {books.map(book => (
            <tr key={book._id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.pages}</td>
            <td>{book.isAvailable ? "Yes" : "No"}</td>
            <td><Link to={`/books/${book._id}/details`}>Book Details</Link></td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
);
}

export default AllBooks;
