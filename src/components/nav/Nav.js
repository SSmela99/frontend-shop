import React, { useState } from "react";
import styles from "./Nav.module.scss";

import clsx from "clsx";
import { logo, search, account, heart, cart } from "assets/Exports";

import NavCategory from "./navCategory/NavCategory";
import NavMobileCategory from "./navMobileCategory/NavMobileCategory";

import { menCategories, womenCategories, goodsCategories } from "./arrays";

const Nav = () => {
  const [menuOn, setMenuOn] = useState(false);
  const [menOn, isMenOn] = useState(false);
  const [womenOn, isWomenOn] = useState(false);
  const [goodsOn, isGoodsOn] = useState(false);

  const [mobileMenOn, isMobileMenOn] = useState(false);
  const [mobileWomenOn, isMobileWomenOn] = useState(false);
  const [mobileGoodsOn, isMobileGoodsOn] = useState(false);

  const menMobile = () => {
    isMobileMenOn(!mobileMenOn);
    isMobileWomenOn(false);
    isMobileGoodsOn(false);
  };

  const womenMobile = () => {
    isMobileMenOn(false);
    isMobileWomenOn(!mobileWomenOn);
    isMobileGoodsOn(false);
  };

  const goodsMobile = () => {
    isMobileMenOn(false);
    isMobileWomenOn(false);
    isMobileGoodsOn(!mobileGoodsOn);
  };

  return (
    <>
      <header className="w-100">
        <nav className={clsx("w-100", "position-fixed", styles.nav)}>
          <div className="container-lg w-100 h-100">
            <div className="d-flex align-items-center justify-content-between h-100 w-100">
              <span
                className={clsx(
                  "d-block",
                  "d-lg-none",
                  styles.menuButton,
                  menuOn && `${styles.on}`
                )}
                onClick={() => setMenuOn(!menuOn)}
              >
                <span className={styles.menuBar}></span>
              </span>
              <img src={logo} alt="logo" className={styles.logo} />
              <div className="h-100 d-none d-lg-block">
                <ul className="d-flex align-items-center h-100">
                  <li
                    className={styles.menuItem}
                    onMouseEnter={() => isMenOn(!menOn)}
                    onMouseLeave={() => isMenOn(false)}
                  >
                    Men
                  </li>
                  <li
                    className={styles.menuItem}
                    onMouseEnter={() => isWomenOn(!womenOn)}
                    onMouseLeave={() => isWomenOn(false)}
                  >
                    Women
                  </li>
                  <li
                    className={styles.menuItem}
                    onMouseEnter={() => isGoodsOn(!goodsOn)}
                    onMouseLeave={() => isGoodsOn(false)}
                  >
                    Goods
                  </li>
                  <li className={styles.menuItem}>Journal</li>
                </ul>
              </div>
              <div className={clsx("d-none", "d-lg-block", styles.grow)} />
              <div className={clsx("d-flex align-items-center", styles.icons)}>
                <span className="d-none d-lg-block">
                  <img src={search} alt="search" />
                </span>
                <span className="d-none d-lg-block">
                  <img src={account} alt="account" />
                </span>
                <span className="d-none d-lg-block">
                  <img src={heart} alt="heart" />
                </span>
                <span>
                  <img src={cart} alt="cart" />
                  <span className="d-none d-lg-inline">Cart (0)</span>
                </span>
              </div>
            </div>
          </div>
          <NavCategory
            styles={styles}
            state={menOn}
            setState={isMenOn}
            array={menCategories}
          />
          <NavCategory
            styles={styles}
            state={womenOn}
            setState={isWomenOn}
            array={womenCategories}
          />
          <NavCategory
            styles={styles}
            state={goodsOn}
            setState={isGoodsOn}
            array={goodsCategories}
          />
          <div
            className={clsx(
              "d-block d-lg-none position-fixed",
              styles.mobileMenu,
              menuOn && `${styles.on}`
            )}
          >
            <form className="w-100">
              <div
                className={clsx(
                  "w-100 mobilePadding d-flex align-items-center",
                  styles.searchBar
                )}
              >
                <img src={search} alt="search" className={styles.searchIcon} />
                <input
                  className={clsx("w-100 h-100", styles.search)}
                  placeholder="search for items"
                />
              </div>
            </form>
            <div className="mobilePadding">
              <NavMobileCategory
                styles={styles}
                func={menMobile}
                state={mobileMenOn}
                array={menCategories}
                title="Men"
              />
              <NavMobileCategory
                styles={styles}
                func={womenMobile}
                state={mobileWomenOn}
                array={womenCategories}
                title="Women"
              />
              <NavMobileCategory
                styles={styles}
                func={goodsMobile}
                state={mobileGoodsOn}
                array={goodsCategories}
                title="Goods"
              />
              <div className={clsx("w-100", styles.mobileCategories)}>
                <div
                  className={clsx(styles.mobileCategory, styles.journalMobile)}
                >
                  <h5 className={styles.title}>Journal</h5>
                </div>
              </div>
            </div>
            <div className={clsx("mobilePadding w-100", styles.mobileIcons)}>
              <div className="d-flex align-items-center">
                <img
                  src={account}
                  alt="account"
                  className={clsx(styles.mobileIcon)}
                />
                <p>Sign in</p>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={heart}
                  alt="heart"
                  className={clsx(styles.mobileIcon)}
                />
                <p>Wishlist</p>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
