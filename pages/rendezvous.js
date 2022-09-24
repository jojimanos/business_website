import React, {Component} from "react";
import styles from '../styles/Home.module.css'
import { useState } from "react";
import ContactUs from "./components/contactus";

export default function Rendezvous() {

        return (
            <div className={styles.container}>
                <div className="bg-gradient-to-b from-pink-100 to-red-300 p-2">
                    <div className="grid sm:grid-cols-3">
                        <div></div>
                        <div><div className={styles.fadein}><p className="text-2xl text-center">Το πρώτο ραντεβού παρέχεται δωρεάν.</p></div>
                <p className="box-border py-4 px-7 text-justify">Η ψυχοθεραπεία και η συμβουλευτική που γίνεται 
                    διαδικτυακά προσφέρει μεγάλη ευελιξία χώρου και χρόνου. 
                    Δεν διαφέρει σε τίποτα από την δια ζώσης θεραπευτική 
                    διαδικασία. Τηρείται ο κώδικας δεοντολογίας και το 
                    επαγγελματικό απόρρητο του ψυχολόγου.</p></div>
                        <div></div>
                        </div>
                    <ContactUs/>
            </div>
            </div>
        );
    }