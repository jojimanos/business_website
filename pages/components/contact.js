import React, {Component} from "react";
import Image from "next/image";
import styles from '../../styles/Home.module.css'

function openLinkedIn() {return window.open('https://www.linkedin.com/in/effrosyni-ampatzoglou-a09367200')}

class Contact_footer extends Component {
    state = {  } 
    render() { 
        return (
            <div className={styles.container}>
            <div className="h-40 grid sm:grid-cols-2 bg-gradient-to-b from-red-300 to-pink-100">
                <div className="p-0 text-center">
                <div className="w-full relative">
                <h1 className="pt-10 text-2xl">Στοιχεία Επικοινωνίας</h1>
                <p className="pt-2 text-xs">τηλέφωνο: 6981688713</p>
                <p className="p-1 text-xs">E-mail: efiampatz97@gmail.com</p>
                <div className="py-2">
                    <button className="px-2">
                    <Image src="/facebook-circular-logo.png" width={20} height={20}/>
                    </button>
                    <a>
                    <button onClick={openLinkedIn} className="px-2">
                    <Image src="/linkedin.png" width={20} height={20}/>
                    </button>
                    </a>
                </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}
 
export default Contact_footer;