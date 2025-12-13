import { Link, useNavigate, useParams } from "react-router-dom"
import Navbar from "../../components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"

const SingleProduct = () => {
    const { id } = useParams()
    const [book, setBook] = useState({})
    const navigate =  useNavigate()
    const fetchBook = async () => {
        const response = await axios.get(`http://localhost:3000/book/${id}`)
        if(response.status === 200){
            setBook(response.data.data)
        }
    }
    const deleteBook = async () => {
        const response = await axios.delete(`http://localhost:3000/book/${id}`)
        if(response.status === 200){
            // Book deleted successfully
            navigate("/")
        } else {
            alert("Error deleting the book" )
        }
    }
    useEffect(()=>{
        fetchBook()
    }, [])

    return (
        <>
            <Navbar />
            <div className="flex justify-center mt-10 mb-10">
                <div className="bg-gray-100 dark:bg-gray-800 py-8 rounded-md">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row -mx-4">
                            <div className="md:flex-1 px-4">
                                <div className="h-115 rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                    <img className="rounded-md w-full h-full object-cover" src={book.bookImage} alt="Product Image" />
                                </div>
                                <div className="flex overflow-hidden -mx-2 mb-4">
                                    <div className="w-1/2 px-2">
                                    <Link to="/" >
                                        <button className="w-full bg-green-600 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-green-700 dark:hover:bg-gray-700 cursor-pointer transition duration-200">Back</button>
                                        </Link>
                                    </div>

                                    <div className="w-1/2 px-2">
                                    <Link to='' >
                                        <button onClick={deleteBook} className="w-full bg-red-600 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-red-700 dark:hover:bg-gray-700 cursor-pointer transition duration-200">Delete</button>
                                        </Link>
                                    </div>
                                    
                                    <div className="w-1/2 px-2">
                                    <Link to={`/edit/${id}`} >
                                        <button className="w-full bg-indigo-600 dark:bg-gray-700 text-white dark:text-white py-2 px-4 rounded-full font-bold hover:bg-indigo-700 dark:hover:bg-gray-600 cursor-pointer transition duration-200">Edit Book</button>
                                    </Link>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="md:flex-1 px-4">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{book.bookName}</h2>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                    <i>{book.bookSubtitle}</i> <br />
                                    - by {book.bookAuthor} 
                                </p>
                                <div className="flex mb-4">
                                    <div className="mr-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Price: </span>
                                        <span className="text-gray-600 dark:text-gray-300">${book.bookPrice}</span>
                                    </div>
                                    <div>
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Availability: </span>
                                        <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Book Description:</span>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                        sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                                        lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                                        ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                                        sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct