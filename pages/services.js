import React, {Component} from "react";
import styles from '../styles/Home.module.css'
import Image from "next/image";

class Services extends Component {
    state = {  } 
    render() { 
        return (
            <div className={styles.container}>
            <div className="p-10 text-center bg-gradient-to-b from-pink-100 to-red-400">
                <h1 className="p-5 text-3xl font-bold">Υπηρεσίες</h1>
                <Image src="/line.png" width={70} height={10}/>
                <div className={styles.fadein}><p className="text-xl font-bold text-red-900">Η κάθε συνεδρία διαρκεί 50′ λεπτά.<br/>
Ειδικές τιμές για φοιτητές και ανέργους</p></div>
                <div className="p-8">
                    <ul className='text-xl font-bold grid sm:grid-cols-2 sm:grid-rows-4 gap-4'>
                        <li>Διαταραχές πρόσληψης τροφής</li>
                        <li>Άγχος/ Κρίσεις πανικού</li>
                        <li>Φοβίες</li>
                        <li>Διαπροσωπικές δυσκολίες</li>
                        <li>Συμβουλευτική</li>
                        <li>Επαγγελματικός προσανατολισμός</li>
                    </ul>
                    </div>
            </div>
            </div>
        );
    }
}
 
export default Services;