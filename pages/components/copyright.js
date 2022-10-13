import styles from '../../styles/Home.module.css'

function Copyright() {
        return (
            <div className={styles.container}>
                <div className="py-4 sm:grid grid-cols-2 text-center text-sm bg-gradient-to-b from-pink-100 to-yellow-50">
                <p className="py-3 sm:p-0">Copyright © 2022 Έφη Αμπατζόγλου</p>
                <p className="p-1 sm:p-0">Powered by Jojimanos</p>
                </div>
            </div>
        );
    }
 
export default Copyright;