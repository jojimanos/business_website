import React, { Component } from "react";
import styles from '../../styles/Home.module.css'

function Short_intro() {
        return (
            <div className="grid grid-cols-1 gap-2 p-0 sm:grid-cols-8 sm:p-10">
                <div></div>
                <img src="/photo.jpg" className="rounded-md sm:col-span-3" />
                <div className="sm:col-span-3">
                    <div className={styles.hyphenText}>
                    <p className='text-justify p-3 rounded-md border-double border-2 border-rose-500'>
                        Βασικός άξονας του τρόπου θεραπείας μου είναι το "τρίγωνο" 
                        σκέψη - συμ&shy;περιφορά - συναίσθημα. Τα στοιχεία αυτά αλληλεπιδρούν 
                        μεταξύ τους ε&shy;πηρεάζοντας το ένα το άλλο. Έτσι, η αλλαγή μπορεί 
                        να επέλθει μέσω της τροποποίησης είτε των πεποιθήσεων είτε της 
                        συμπεριφοράς. Κι όλα αυτά μέσα σε ένα πλαίσιο συνερ&shy;γα&shy;τικότητας, 
                        αμοι&shy;βαίας εμπιστο&shy;σύνης και αλληλο&shy;σεβασμού μεταξύ θερα&shy;πευτή και 
                        θε&shy;ραπευ&shy;όμενου.
                    </p>
                    </div>
                </div>
            </div>

        );
    }

export default Short_intro;