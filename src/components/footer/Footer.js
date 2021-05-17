import React from "react";

import clsx from "clsx";
import styles from "./Footer.module.scss";

import {
  user,
  carrer,
  contact,
  facebook,
  googlePay,
  information,
  instagram,
  chat,
  mastercard,
  paypal,
  pinterest,
  visa,
  youtube,
  send,
} from "assets/Exports";

const Footer = () => {
  return (
    <footer className="w-100">
      <div className="d-block d-lg-flex">
        <div className={clsx("w-lg-50 w-100", styles.leftFooter)}>
          <div className="d-lg-flex flex-column d-block">
            <h5 className={styles.title}>Info</h5>
            <div className={styles.infoSection}>
              <div className="d-flex align-items-center">
                <p>Sign In</p>
                <img src={user} alt="account" />
              </div>
              <div className="d-flex  align-items-center">
                <p>Help Centre</p>
                <img src={information} alt="carrer" />
              </div>
              <div className="d-flex  align-items-center">
                <p>Live Chat</p>
                <img src={chat} alt="contact" />
              </div>
              <div className="d-flex  align-items-center">
                <p>Carrers</p>
                <img src={carrer} alt="carrer" />
              </div>
              <div className="d-flex  align-items-center">
                <p>Contact</p>
                <img src={contact} alt="contact" />
              </div>
            </div>
            <div className={clsx(styles.socialMedia)}>
              <img src={instagram} alt="instagram" />
              <img src={youtube} alt="youtube" />
              <img src={facebook} alt="facebook" />
              <img src={pinterest} alt="pinterest" />
            </div>
            <button>Contact Us</button>
            <div className={clsx(styles.payments)}>
              <img src={paypal} alt="paypal" />
              <img src={googlePay} alt="googlePay" />
              <img src={visa} alt="visa" />
              <img src={mastercard} alt="mastercard" />
            </div>
            <p className={styles.rights}>
              Excepteur nostrud irure id et est cupidatat cupidatat ut proident.
              Cupidatat dolor ad voluptate sunt anim minim reprehenderit veniam
              fugiat magna. Exercitation pariatur pariatur velit do. Dolore non
              duis aute magna irure excepteur magna magna.
            </p>
          </div>
        </div>
        <div className={clsx("w-lg-50 w-100", styles.rightFooter)}>
          <div>
            <h5>Keep in touch</h5>
            <form>
              <p className={styles.formTitle}>Im interested in:</p>
              <label className={styles.containerCheckbox}>
                <span className={styles.checkboxOption}>Women</span>
                <input type="checkbox" />
                <div className={styles.input}></div>
              </label>
              <label className={styles.containerCheckbox}>
                <span className={styles.checkboxOption}>Men</span>
                <input type="checkbox" />
                <div className={styles.input}></div>
              </label>
              <div className={styles.sendBar}>
                <button type="submit">
                  <img src={send} alt="send" />
                </button>
                <input placeholder="Your e-mail" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
