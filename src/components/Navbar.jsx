import { FaHome, FaBook} from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { Link } from "react-router-dom"
import { MdPermContactCalendar } from "react-icons/md";

const Navbar = () => {
    return (
        <>
            <nav className="relative bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <button type="button" command="--toggle" commandfor="mobile-menu" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 in-aria-expanded:hidden">
                                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 not-in-aria-expanded:hidden">
                                    <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" className="h-8 w-auto" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex justify-center items-center space-x-8">
                                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" */}
                                    <Link to="https://book-management-brown.vercel.app/" aria-current="page" className="flex gap-2 items-center rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-950">Home <FaHome /></Link>
                                    <Link to="https://book-management-brown.vercel.app/create" className="flex gap-2 items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Add Book <FaBook /></Link>
                                    <Link to="https://book-management-brown.vercel.app/buy" className="flex gap-2 items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Buy Books <ImBooks /></Link>
                                    <Link to="https://book-management-brown.vercel.app/contact" className="flex gap-2 items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Contact <MdPermContactCalendar /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            {/* Profile dropdown */}
                            <el-dropdown className="relative ml-3">
                                <button className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <img src="https://avatars.githubusercontent.com/u/173297872?s=400&v=4" alt="" className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10" />
                                </button>
                            </el-dropdown>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar