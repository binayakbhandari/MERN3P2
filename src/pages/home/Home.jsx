
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Floating404 from "../../components/Floating404";

const Home = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "https://nodejs-crud-practice.onrender.com/book"
      );
      if (response.status === 200) {
        setBooks(response.data.data || []);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-8">
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
      </div>
    </>
  );
};

export default Home;
