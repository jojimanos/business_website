import { Link } from 'next/link'

function Links() {

    return (
    
    <div className="grid grid-cols-1 gap-y-2">
        <Link href="/" >
            <button className="bg-blue-300/80 rounded-full w-22 h-7 sm:transition sm:ease-in-out delay-150 sm-hover:-translate-y-1 sm:hover:scale-110 hover:bg-indigo-500 duration-300  hover:text-orange-400">
                Αρχική
            </button>
        </Link>
        <Link href="./bio">
            <button className="bg-blue-300/80 rounded-full w-22 h-7 sm:transition sm:ease-in-out delay-150 sm-hover:-translate-y-1 sm:hover:scale-110 hover:bg-indigo-500 duration-300  hover:text-orange-400">
                Βιογραφικό
            </button>
        </Link>
        <Link href="./pros">
            <button className="bg-blue-300/80 rounded-full w-22 h-7 sm:transition sm:ease-in-out delay-150 sm-hover:-translate-y-1 sm:hover:scale-110 hover:bg-indigo-500 duration-300  hover:text-orange-400">
                Προσέγγιση
            </button>
        </Link>
        <Link href="./services">
            <button className="bg-blue-300/80 rounded-full w-22 h-7 sm:transition sm:ease-in-out delay-150 sm-hover:-translate-y-1 sm:hover:scale-110 hover:bg-indigo-500 duration-300  hover:text-orange-400">
                Υπηρεσίες
            </button>
        </Link>
        <Link href="./contact">
            <button className="bg-blue-300/80 rounded-full w-22 h-7 sm:transition sm:ease-in-out delay-150 sm-hover:-translate-y-1 sm:hover:scale-110 hover:bg-indigo-500 duration-300  hover:text-orange-400">
                Επικοινωνία
            </button>
        </Link>
        <Link href="./rendezvous">
            <button className="bg-red-300/80 rounded-full w-22 h-7 sm:transition sm:ease-in-out delay-150 sm-hover:-translate-y-1 sm:hover:scale-110 hover:bg-red-500 duration-300  hover:text-white">
                Κλείσε Ραντεβού
            </button>
        </Link>
    </div>
    )
}

export default Links