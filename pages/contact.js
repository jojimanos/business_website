import React, {Component} from "react";
import Image from "next/image";
import styles from '../styles/Home.module.css'

class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <div className={styles.container}>
                <div className="p-10 text-center bg-gradient-to-b from-pink-100 to-red-400">
                <div className="w-full relative">
                    <img src="birds.jpg" className="w-full h-full object-cover absolute mix-blend-overlay"/>
                <h1 className="p-5 text-4xl">Επικοινωνία</h1>
                <img/>
                <p className="pt-5">τηλέφωνο: 6981688713</p>
                <p className="p-2">E-mail: efiampatz97@gmail.com</p>
                <div>
                    <button>
                    <Image src="/facebook-circular-logo.png" width={30} height={30}/>
                    </button>
                </div>
                </div>
            </div>
            </div>
            
        );
    }
}
 
export default Contact;