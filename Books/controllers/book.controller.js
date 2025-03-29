import { Book } from "../models/book.model.js";

export const createBook = async (req, res) => {
try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
} catch (err) {
    res.status(400).json(err);
}
};

export const getAllBooks = async (req, res) => {
const books = await Book.find();
res.json(books);
};

export const getBookById = async (req, res) => {
try {
    const book = await Book.findById(req.params.id);
    res.json(book);
} catch {
    res.status(404).json({ error: "Book not found" });
}
};

export const updateBook = async (req, res) => {
try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
    });
    res.json(book);
} catch (err) {
    res.status(400).json(err);
}
};

export const deleteBook = async (req, res) => {
try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted" });
} catch {
    res.status(400).json({ error: "Deletion failed" });
}
};
