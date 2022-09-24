import Image from "next/image";
import styles from '../styles/Home.module.css'

function Pros() {
        return (
            <div className={styles.container}>
                <div className="p-10 text-center bg-gradient-to-b from-pink-100 to-red-300">
                    <h1 className="p-5 text-4xl">Τρόπος Προσέγγισης</h1>
                    <Image src="/line.png" width={70} height={10} />
                    <p className="sm:p-5 text-justify border-double border-2 border-rose-500 rounded">
                        <h2 className="text-2xl">Γνωσιακή Συμπεριφορική Ψυχοθεραπεία (CBT)</h2>
                        <br />
                        Η Γνωσιακή Συμπεριφορική Ψυχοθεραπεία αναπτύχθηκε το 1960 από τον Aaron T.
                        Beck. Είναι αποδεδειγμένα αποτελεσματική σε ένα ευρύ φάσμα ψυχιατρικών
                        διαταραχών, ψυχολογικών προβλημάτων και ιατρικών προβλημάτων με
                        ψυχολογικούς παράγοντες, όπως αγχώδεις διαταραχές, διαταραχές διάθεσης,
                        διατροφικές διαταραχές, αυτοάνοσα κ.ά.
                        <br />
                        <br />Η Γνωσιακή Συμπεριφορική Ψυχοθεραπεία ασχολείται με τη σκέψη που θα
                        επιφέρει το συγκεκριμένο συναίσθημα και παρατηρεί τη συμπεριφορά που θα
                        ακολουθήσει. Σκοπός είναι να αλλάξει η αρνητική σκέψη, η δυσλειτουργική
                        συμπεριφορά και να αμβλυνθεί το συναίσθημα.
                        <br />
                        <br />
                        Πρόκειται για μια βραχεία θεραπεία. Είναι δομημένη, συγκεκριμένη και
                        εστιασμένη στην παρούσα δυσκολία με προκαθορισμένο τέλος. Η επιτυχία της
                        στηρίζεται στη συνεργατική σχέση θεραπευτή και θεραπευόμενου, διότι
                        ενθαρρύνεται η ενεργός συμμετοχή στη θεραπεία του και ενισχύεται με την
                        ανάθεση εργασιών που θα πραγματοποιήσει στο σπίτι.
                        <br />
                        <br />Η Γνωσιακή Συμπεριφορική Θεραπεία εστιάζει σε δύο επίπεδα: στις
                        γνωσίες, δηλαδή στις σκέψεις που παράγει ένα άτομο και ακολούθως στη
                        συμπεριφορά, την αντίδραση, δηλαδή, σε κάποιο ερέθισμα. Η αντίληψη των
                        ερεθισμάτων βασίζεται στα σχήματα, τα οποία αποτελούν νοητικές κατασκευές
                        που προέρχονται από τις πρώιμες παιδικές εμπειρίες του ατόμου. Σύμφωνα με
                        το μοντέλο αυτό, η σκέψη, το συναίσθημα και η συμπεριφορά αλληλεπιδρούν
                        συνεχώς σε ένα φαύλο κύκλο.
                        <br />
                        <br />
                        <div className="grid place-items-center">
                            <Image src={"/schema.png"} width={500} height={300} />
                        </div>
                        <h2 className="text-2xl">Συνθετική Ψυχοθεραπεία</h2>
                        <br />
                        Η Συνθετική Θεραπεία προάγει την ευελιξία στον τρόπο που προσεγγίζονται οι
                        δυσκολίες των θεραπευόμενων. Φέρνει στο επίκεντρο της διεργασίας τη
                        θεραπευτική σχέση και δίνει ιδιαίτερη βαρύτητα και προσοχή στη δημιουργία
                        και διατήρηση μιας στάσης αποδοχής, σεβασμού, εντιμότητας και εμπιστοσύνης
                        προς τους θεραπευόμενους. Έχει ολιστικό χαρακτήρα με αποτέλεσμα να αγγίζει
                        τους θεραπευόμενους σε φυσικό, νοητικό, συναισθηματικό και πνευματικό
                        επίπεδο.
                        <br />
                        <br />Δημιουργεί τις προϋποθέσεις, ώστε η κάθε συνεδρία να είναι μοναδική
                        με οδηγό την ενσυναισθητική σύνδεση στο εδώ και τώρα μεταξύ θεραπευτή και
                        θεραπευόμενου. Είναι η εμπειρία της συνθετικής ψυχοθεραπείας που έχει ως
                        αποτέλεσμα την εσωτερική ανάπτυξη και θεραπεία σε όλα τα επίπεδα.
                        Ταυτόχρονα, δημιουργεί θεραπευτικό χώρο τόσο για το θεραπευτή όσο και για
                        το θεραπευόμενο.
                        <br />
                        <br />Η Συνθετική Προσέγγιση επιλεγεί από διαφορετικές προσεγγίσεις,
                        τεχνικές και στρατηγικές ανάλογα τι είναι κατάλληλο για τον καθένα. Έτσι
                        το άτομο αρχίζει να καταλαβαίνει πώς έχει ερμηνεύσει κάποια γεγονότα βάση
                        του γνωσιακού του χάρτη, έρχεται σε επαφή με τα συναισθήματα του
                        αναγνωρίζοντας τα και βιώνοντας τα στο εύρος και στο βάθος που χρειάζεται
                        και τελικά προσπαθεί να εφαρμόσει στην συμπεριφορά του αυτά που έχει
                        κατανοήσει σε επίπεδο σκέψης και συναισθήματος δοκιμάζοντας πιο βοηθητικές
                        προσεγγίσεις στο εκάστοτε ζήτημα που το απασχολεί.
                    </p>
                </div>
            </div>
        );
    }

export default Pros;