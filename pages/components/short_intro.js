import React, { Component } from "react";

function Short_intro() {
        return (
            <div className="grid grid-cols-1 gap-2 p-0 sm:grid-cols-8 sm:p-10">
                <div></div>
                <img src="/photo.jpg" className="rounded-md sm:col-span-3" />
                <div className="sm:col-span-3">
                    <p className='text-justify p-3 rounded-md border-double border-2 border-rose-500'>
                        Βασικός άξονας του τρόπου θεραπείας μου είναι το "τρίγωνο" 
                        σκέψη - συμπεριφορά - συναίσθημα. Τα στοιχεία αυτά αλληλεπιδρούν 
                        μεταξύ τους επηρεάζοντας το ένα το άλλο. Έτσι, η αλλαγή μπορεί 
                        να επέλθει μέσω της τροποποίησης είτε των πεποιθήσεων είτε της 
                        συμπεριφοράς. Κι όλα αυτά μέσα σε ένα πλαίσιο συνεργατικότητας, 
                        αμοιβαίας εμπιστοσύνης και αλληλοσεβασμού μεταξύ θεραπευτή και 
                        θεραπευόμενου.
                    </p>
                </div>
            </div>

        );
    }

export default Short_intro;