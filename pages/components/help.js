import React, {Component} from "react";
import Image from "next/image";
import styles from '../../styles/Home.module.css'
import Link from "next/link";
import Services from "../services";

class Help extends Component {
    state = {  } 
    render() { 
        return (
          <div className='text-center bg-gradient-to-b from-white to-red-300 py-3 px-3'>
          <h1 className="text-3xl pt-2 pb-6 font-bold">Χρειάζεσαι βοήθεια;</h1>
          <div className='sm:grid grid-cols-2 grid-rows-3 gap-4 text-2xl font-bold'>
          <Link href='./services'>
          <div className="grid grid-rows-2 py-2">
          <button className='hover:bg-rose-400 rounded-full pt-1'><Image src="/worried.png" height={30} width={30}/></button>
          <button className='bg-blue-200/50 rounded-full'>Κατάθλιψη</button>
          </div>
          </Link>
          <Link href='./services'>
          <div className="grid grid-rows-2 py-2">
          <button className='hover:bg-rose-400 rounded-full pt-1'><Image src="/panic-button.png" height={30} width={30}/></button>
          <button className='bg-blue-200/50 rounded-full'>Άγχος/Κρίσεις Πανικού</button>
          </div>
          </Link>
          <Link href='./services'>
          <div className="grid grid-rows-2 py-2">
          <button className='hover:bg-rose-400 rounded-full pt-1'><Image src="/spiderweb.png" height={30} width={30}/></button>
          <button className='bg-blue-200/50 rounded-full'>Φοβίες</button>
          </div>
          </Link>
          <Link href='./services'>
          <div className="grid grid-rows-2 py-2">
          <button className='hover:bg-rose-400 rounded-full pt-1'><Image src="/diet.png" height={30} width={30}/></button>
          <button className='bg-blue-200/50 rounded-full'>Διαταραχές Πρόσληψης Τροφής</button>
          </div>
          </Link>
          <Link href='./services'>
          <div className="grid grid-rows-2 py-2">
          <button className='hover:bg-rose-400 rounded-full pt-1'><Image src="/team.png" height={30} width={30}/></button>
          <button className='bg-blue-200/50 rounded-full'>Διαπροσωπικές Δυσκολίες</button>
          </div>
          </Link>
          <Link href='./services'>
          <div className="grid grid-rows-2 py-2">
          <button className='hover:bg-rose-400 rounded-full pt-1'><Image src="/sad.png" height={30} width={30}/></button>
          <button className='bg-blue-200/50 rounded-full'>Επαγγελματικά/Σχολικά Ζητήματα</button>
          </div>
          </Link>
          </div>
          </div>
        );
    }
}
 
export default Help;