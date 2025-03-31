import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import AllBooks from './pages/AllBooks'
import AddBook from './pages/AddBook'
import BookDetails from './pages/BookDetails'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AllBooks />} />
        <Route path="/create" element={<AddBook />} />
        <Route path="/books/:id/details" element={<BookDetails />} />
      </Routes>
    </>
  )
}

export default App
