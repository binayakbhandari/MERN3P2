import { Link, useNavigate } from "react-router-dom"
import { GiBookmarklet, GiNotebook } from "react-icons/gi"
import { useEffect, useState } from "react"
import axios from "axios"

const Form = ({type,id}) => {  
    const navigate = useNavigate()
    const [book, setBook] = useState({})

    const fetchBookData = async () => {
        const response = await axios.get(`https://nodejs-crud-practice.onrender.com/book/${id}`)
        if(response.status === 200){
            setBook(response.data.data)
        }   
    }

    useEffect(() => {
        if(type === "Edit"){
            fetchBookData()
        }
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setBook({
            ...book,
            [name] : name === "bookImage" ? e.target.files[0] : value
        })
    }
    console.log(book)
    const createBook = async (e) => {
        e.preventDefault()
        if (type === "Create") {
            const response = await axios.post("https://nodejs-crud-practice.onrender.com/book", book, 
                {
                    headers : {
                        "Content-Type" : "multipart/form-data"
                    }
                }
            )
            if (response.status === 200) {
                navigate("/")
            } else {
                alert("Error creating book")
            }
        } 
        else {
            const response = await axios.patch(`https://nodejs-crud-practice.onrender.com/book/${id}`, book,
                {
                    headers : {
                        "Content-Type" : "multipart/form-data"
                    }
                }
            )
            if (response.status === 200) {
                navigate(`/book/${id}`)
            } else {
                alert("Error updating book")
            }
        }
    }

    return (
        <>
            <form onSubmit={createBook} className="flex justify-center m-10">
                <div className="shadow-lg space-y-12 p-10 rounded-lg w-full max-w-3xl">
                    <div className="border-b border-gray-900/10 pb-10">
                        <div className="flex items-center gap-3 mb-5">
                            <p className="text-base/7 font-semibold text-gray-900">{type === "Create" ? "Add" : type} Book Information </p>
                            {type === "Create" ? (
                                <GiBookmarklet className="text-2xl" />
                            ) : (
                                <GiNotebook className="text-2xl" />
                            )}
                        </div>

                        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label htmlFor="bookName" className="block text-sm/6 font-medium text-gray-900">Book Name </label>
                                <div className="mt-2">
                                    <input onChange={handleChange} value={book.bookName} id="bookName" type="text" name="bookName" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" required={type === "Create"} />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="bookAuthor" className="block text-sm/6 font-medium text-gray-900">Book Author</label>
                                <div className="mt-2">
                                    <input onChange={handleChange} value={book.bookAuthor} id="bookAuthor" type="text" name="bookAuthor" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" required={type === "Create"} />
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="bookPrice" className="block text-sm/6 font-medium text-gray-900">Book Price</label>
                                <div className="mt-2">
                                    <input onChange={handleChange} value={book.bookPrice} id="bookPrice" type="number" name="bookPrice" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" required={type === "Create"} />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="bookMoto" className="block text-sm/6 font-medium text-gray-900">Book Moto</label>
                                <div className="mt-2">
                                    <textarea onChange={handleChange} value={book.bookMoto} id="bookMoto" name="bookMoto" rows="3" placeholder="Write a few sentences about the book..." className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" required={type === "Create"}></textarea>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">Cover photo</label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <svg viewBox="0 0 24 24" fill="currentColor" data-slot="icon" aria-hidden="true" className="mx-auto size-12 text-gray-300">
                                            <path d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" fillRule="evenodd" />
                                        </svg>
                                        <div className="mt-4 flex text-sm/6 text-gray-600">
                                            <label htmlFor="bookImage" className="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-600 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 hover:text-indigo-500">
                                                <span>Upload a file</span>
                                                <input onChange={handleChange} id="bookImage" type="file" name="bookImage" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 flex justify-end gap-x-6 pt-5">
                            <Link to={`/${type === "Create" ? "" : `book/${id}`}`} >
                                <button type="button" className="text-sm/6 font-semibold rounded-md px-5 py-2 bg-red-500 text-white cursor-pointer hover:bg-red-600 transition duration-200">Cancel</button>
                            </Link>
                            <button type="submit" className="rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer transition duration-200">{type === "Create" ? "Create Book" : "Save Changes"}</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form