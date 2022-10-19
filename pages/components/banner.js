import React, { Component } from "react";
import styles from '../../styles/Home.module.css'

function Banner() {
  return (
    <div className="bg-pink-100">
      <div className="h-64 w-full relative">
        <img src='/hands.jpg'
          className="w-full h-full object-cover absolute mix-blend-overlay" />
        <div className={styles.fadein}>
          <h1 className="text-2xl text-center">
            "Δεν είναι τα γεγονότα που μας αναστατώνουν, αλλά ο τρόπος που τα αντιμετωπίζουμε."
          </h1>
          <p className="text-center">Στωικός Φιλόσοφος Επίκτητος</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;