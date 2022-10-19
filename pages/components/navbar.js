import Link from "next/link";
import styles from '../../styles/Home.module.css'
import MediaQuery from 'react-responsive'
import { useState, useRef } from "react"
import Image from "next/image";

function Navbar() {

  const dropdownref = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  return (
    <div className={styles.container}>
      <div className="grid grid-cols-2 gap-2 bg-gradient-to-b from-blue-800 to-pink-100 text-white py-3 px-4 sm:px-8 text-center">
        <div className="sm:grid grid-cols-7">
          <p className="col-span-2"></p>
          <a href="/" className="col-span-3">
            <p className="text-3xl sm:text-5xl hover:text-red-400">Έφη Αμπατζόγλου</p>
            <p className="text-2xl sm:text-2xl">Ψυχολόγος</p>
          </a>
          <p className="col-span-2"></p>
        </div>
        <MediaQuery maxWidth={428}>
          <div className="grid items-baseline justify-center place-items-center">
            <button onClick={onClick}><Image src="/index.png" height={30} width={30} /></button>
            <nav ref={dropdownref}>
              {isActive && (
                <div className="grid gap-y-2">
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
              )}
            </nav>
          </div>
        </MediaQuery>
        <MediaQuery minWidth={1024}>
          <div className="grid sm:grid-cols-3 grid-rows-2 gap-x-2 gap-y-2 sm:px-10">
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
        </MediaQuery>
      </div>
    </div>
  );
}

export default Navbar;