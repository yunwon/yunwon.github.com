import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import styles from "./Day001.module.scss";
import logo from "../../../../../assets/portfolio/daily-ui/001/logo.png";
import close from "../../../../../assets/portfolio/daily-ui/001/close.png";
import { Layout } from "src/components/Layout/Layout";
import { Link } from "react-router-dom";

export default class Day001 extends Component {
  render() {
    return (
      <div className={styles.background}>
        <div className={styles.container}>
          <Fade top cascade distance="3rem">
            {/* background */}
            <div className={styles.leftDiv}>
              <img className={styles.logo} src={logo} alt="logo" />
            </div>
            {/* form */}
            <div className={styles.rightDiv}>
              <Link to="/portfolio/dailyui" className={styles.closeBtn}>
                <img src={close} alt="close" />
              </Link>
              <div style={{ clear: "both" }} />
              <div className={styles.formContainer}>
                <h1>Sign up for the full experience.</h1>
                <form className={styles.form}>
                  <div className={styles.textInputs}>
                    <input type="text" id="username" placeholder="username" />
                    <input
                      type="email"
                      id="email"
                      placeholder="email address"
                    />
                    <input
                      type="password"
                      id="password"
                      placeholder="password"
                    />
                    <input
                      type="password"
                      name="passwordConfirm"
                      placeholder="confirm password"
                    />
                  </div>
                  <div className={styles.tnc}>
                    <input type="checkbox" name="termsAndConditions" id="tnc" />
                    <label htmlFor="tnc">
                      I accept the <a href="#">Terms & Conditions</a> and{" "}
                      <a href="#">Privacy Policy</a>
                    </label>
                  </div>
                  <button type="submit" className={styles.signup}>
                    Sign up
                  </button>
                  <p className={styles.signIn}>
                    <a href="#">Sign In</a> instead?
                  </p>
                </form>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}
