
const Card = ({book}) => {
    return (
        <>
            <div className="flex mb-10">
                <div className="max-w-sm rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer hover:scale-101">
                    <img className="w-full" src={book.bookImage} alt="Best Book" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{book.bookName}</div>
                        <p className="text-gray-700 text-base">
                            <i>{book.bookMoto}</i> <br /><br/>
                            - By {book.bookAuthor}
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#ReactJS</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Vite</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#MERN</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
