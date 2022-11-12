import styles from '../styles/Home.module.css'

function Bio() {
    return (
        <div className={styles.container}>
            <div className="text-center sm:p-10 bg-gradient-to-b from-pink-100 to-red-300"><h1 className="text-3xl">Βιογραφικό</h1>
                <div className="grid sm:grid-cols-2 gap-2 p-10">
                    <img src="/photo.jpg" className="rounded-md" />
                    <div>
                        <p className='p-3 rounded-md text-justify border-double border-2 border-rose-500'>
                            Είμαι απόφοιτη του Τμήματος Ψυχολογίας του Παντείου Πανε&shy;πι&shy;στημίου Κοινωνικών και
                            Πο&shy;λιτικών Επιστημών. Διαθέτω ά&shy;δεια ασκή&shy;σεως ε&shy;παγ&shy;γέλ&shy;ματος (Αρ. 9886/ 08-07-2020).
                            <br />
                            <br />
                            Πραγματοποίησα την πρακτική μου άσκηση στο 1ο ΚΕΣΥ Γ΄ Αθήνας, όπου ως βοηθός ψυ&shy;χολόγου
                            συμ&shy;μετείχα στη δια&shy;γνωστική δια&shy;δικασία παιδιών προ&shy;σχολικής ηλικίας με ευρύ φάσμα
                            δυσκολιών, όπως αυ&shy;τισμός, νοητική υστέρηση κλπ. Η πτυχιακή μου εργασία αφορούσε τη
                            «σχέση της συν&shy;αισθηματικής νοημοσύνης της μη&shy;τέρας με το άγχος του έφηβου παιδιού της».
                            Καθ’ όλη τη διάρκεια των σπουδών μου έχω πα&shy;ρα&shy;κο&shy;λουθήσει πλήθος σεμιναρίων και ημερίδων
                            με ποικίλες θε&shy;ματικές. Μετά το πέρας των σπουδών μου συνεχίζω την ε&shy;πιμόρφωσή μου με
                            σεμινάρια και εκπαιδεύσεις στη Σχολική και Κλινική Ψυ&shy;χο&shy;λογία, καθώς και στη Γνωσιακή
                            Συμ&shy;πε&shy;ριφορική Ψυχο&shy;θε&shy;ραπεία (CBT) και τη Συνθετική Ψυ&shy;χο&shy;θεραπεία.
                            <br />
                            <br />
                            Παράλληλα, υπήρξα Εθελόντρια Ψυχολόγος στο Σύλλογο ΓΟΝ.ΙΣ. για τη γονεϊκή ισότητα
                            και τα δικαιώματα του παιδιού στην Α&shy;θήνα, όπου παρείχα υπηρεσίες Ψυ&shy;χοθεραπείας και
                            Συμβουλευ&shy;τικής Γονέων. Ταυτόχρονα, αρ&shy;θρο&shy;γρα&shy;φού&shy;σα ως ψυχολόγος στο <a href='https://psychoedu.gr/psytalk-niotho-ipervoliko-agxos-xoris-kapoion-ousiastiko-logo/' className='text-blue-600' target="_blank">psychoedu.gr</a>, στο
                            οποίο παρείχα διαδικτυακή ψυχοεκπαίδευση και συμβουλευτική.
                            <br />
                            <br />
                            Στο παρόν ζω και εργάζομαι στο Άργος, Αργολίδας, όπου παρέχω ψυχολογική υποστήριξη
                            σε παι&shy;διά προσχολικής, σχολικής και ε&shy;φη&shy;βικής ηλικίας, καθώς και συμ&shy;βου&shy;λευτική και
                            ψυχο&shy;εκ&shy;παί&shy;δευση σε γο&shy;νείς στο Κέντρο Ει&shy;δικών θε&shy;ρα&shy;πειών "Το Μονοπάτι".
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bio;