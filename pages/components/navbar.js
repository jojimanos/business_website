import { popper } from "@popperjs/core";
import React, {Component} from "react";
import {createPopper} from '@popperjs/core'
import Link from "next/link";
import styles from '../../styles/Home.module.css'

class Navbar extends React.Component {
    state = {};
        
    render() {
      return (
        <div className={styles.container}>
        <div className="grid grid-cols-2 bg-gradient-to-b from-blue-800 to-pink-100 text-white py-3 px-2 sm:px-4 sm:px-8 text-center">
          <div className="sm:grid grid-cols-7">
            <p className="col-span-2"></p>
          <a href="/" className="col-span-3">
          <p className="text:lg sm:text-3xl hover:text-red-400">Έφη Αμπατζόγλου</p>
          <p className="text:xs sm:text-xl">Ψυχολόγος</p>
          </a>
            <p className="col-span-2"></p>
          </div>    
          <div className="grid sm:grid-cols-3 grid-rows-2 gap-2 sm:px-10">
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
          </div>
          </div>
      );
    }
  }
 
export default Navbar;