import Image from "next/image";
import styles from '../styles/Home.module.css'

function Contact() {

    return (
        <div className={styles.container}>
            <div className="p-10 text-center bg-gradient-to-b from-pink-100 to-red-300">
                <div className="w-full relative">
                    <h1 className="p-5 text-4xl">Επικοινωνία</h1>
                    <p className="pt-5 font-bold">Τηλέφωνο: 6981688713</p>
                    <p className="p-2 font-bold">E-mail: efiampatz97@gmail.com</p>
                    <div className="flex-box items-center py-2">
                        <button className="px-2">
                            <Image src="/linkedin.png" width={30} height={30} />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contact;