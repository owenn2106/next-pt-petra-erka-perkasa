import React, { useState } from "react";
import Burger from "./burger";
import Menu from "./menu";
import style from "./index.module.scss";
import Link from "next/link";
import { useWindowSize } from "../hooks";

const Navbar = () => {
  const size = useWindowSize();
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={style.nav__background}>
        {size.width > 600 ? (
          <ul className={`${style.nav__links} container`}>
            <li>
              <Link href="/" legacyBehavior>
                <a
                  onClick={(e) =>
                    setTimeout(() => {
                      document.getElementById("home") &&
                        document.getElementById("home").scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }, 500)
                  }
                >
                  HOME
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a
                  onClick={(e) =>
                    setTimeout(() => {
                      document.getElementById("about") &&
                        document.getElementById("about").scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }, 500)
                  }
                >
                  ABOUT
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a
                  onClick={(e) =>
                    setTimeout(() => {
                      document.getElementById("products") &&
                        document.getElementById("products").scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }, 500)
                  }
                >
                  PRODUCTS
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a
                  onClick={(e) =>
                    setTimeout(() => {
                      document.getElementById("faq") &&
                        document.getElementById("faq").scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }, 500)
                  }
                >
                  FAQ
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a
                  onClick={(e) =>
                    setTimeout(() => {
                      document.getElementById("contact") &&
                        document.getElementById("contact").scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }, 500)
                  }
                >
                  CONTACT
                </a>
              </Link>
            </li>
          </ul>
        ) : (
          <>
            <Menu open={open} toggle={toggle} />
            <Burger open={open} toggle={toggle} />
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
