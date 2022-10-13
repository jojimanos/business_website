import React, { Component } from "react";

function Short_intro() {
        return (
            <div className="grid grid-cols-1 gap-2 p-0 sm:grid-cols-8 sm:p-10">
                <div></div>
                <img src="/photo.jpg" className="rounded-md sm:col-span-3" />
                <div className="sm:col-span-3">
                    <p className='text-justify p-3 rounded-md border-double border-2 border-rose-500'>Ο τρόπος εργασίας
                        μου βασίζεται στην αλληλεπίδραση σκέψης-συναισθήματος-συμπεριφοράς.
                        Σύμφωνα με αυτό το μοντέλο, ο τρόπος που επεξεργαζόμαστε ένα γεγονός
                        ή μια κατάσταση καθοδηγεί το συναίσθημα μας και κατ’επέκταση την
                        συμπεριφορά μας. Η αλλαγή μπορεί να έρθει είτε τροποποιώντας τις
                        πεποιθήσεις είτε αλλάζοντας την συμπεριφορά. Θεραπευτής και θεραπευόμενος
                        δρούμε συνεργατικά και συμπληρωματικά προς την επίτευξη των στόχων που
                        έχουμε θέσει.
                    </p>
                </div>
            </div>

        );
    }

export default Short_intro;