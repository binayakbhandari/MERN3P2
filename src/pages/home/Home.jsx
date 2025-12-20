import { Link } from "react-router-dom"
import Card from "../../components/Card"
import Navbar from "../../components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"
import Floating404 from "../../components/Floating404"

const Home = () => {
    const [books, setBooks] = useState([])
    const fetchBooks = async () => {
        // Fetch book logic here
        const response = await axios.get('https://nodejs-crud-practice.onrender.com/book')
        if (response.status === 200) {
            // setBooks(response.data)
            setBooks(response.data.data || [])
        }
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    return (
        <>
            <Navbar />
            <div className="flex flex-wrap justify-center gap-10 mt-10 mb-10">
                {books.length === 0 ? (
                    <Floating404 />
                ) : (
                    books.map((book) => (
                        <Link to={`/book/${book._id}`} key={book._id}>
                            <Card book={book} />
                        </Link>
                    ))
                )}
            </div>

        </>
    )
}

export default Home