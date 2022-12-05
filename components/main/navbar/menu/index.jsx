import styled from "styled-components";
import style from "./index.module.scss";
import Link from "next/link";

const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: all 300ms ease;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-200%)")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: 9;
`;

const Menu = ({ open, toggle }) => {
  return (
    <StyledMenu className={style.menuBg} open={open}>
      <div className={style.menuWrapper}>
        <div className={style.navItem}>
          <Link href="/" legacyBehavior>
            <a className={style.navLinks} onClick={toggle}>
              HOME
            </a>
          </Link>
        </div>
        <div className={style.navItem} onClick={toggle}>
          <Link href="/" legacyBehavior>
            <a
              className={style.navLinks}
              onClick={(e) =>
                setTimeout(() => {
                  document.getElementById("about") &&
                    document
                      .getElementById("about")
                      .scrollIntoView({ behavior: "smooth", block: "start" });
                }, 500)
              }
            >
              ABOUT
            </a>
          </Link>
        </div>
        <div className={style.navItem} onClick={toggle}>
          <Link href="/" legacyBehavior>
            <a
              className={style.navLinks}
              onClick={(e) =>
                setTimeout(() => {
                  document.getElementById("products") &&
                    document
                      .getElementById("products")
                      .scrollIntoView({ behavior: "smooth", block: "start" });
                }, 500)
              }
            >
              PRODUCTS
            </a>
          </Link>
        </div>
        <div className={style.navItem} onClick={toggle}>
          <Link href="/" legacyBehavior>
            <a
              className={style.navLinks}
              onClick={(e) =>
                setTimeout(() => {
                  document.getElementById("faq") &&
                    document
                      .getElementById("faq")
                      .scrollIntoView({ behavior: "smooth", block: "start" });
                }, 500)
              }
            >
              FAQ
            </a>
          </Link>
        </div>
        <div className={style.navItem} onClick={toggle}>
          <Link href="/" legacyBehavior>
            <a
              className={style.navLinks}
              onClick={(e) =>
                setTimeout(() => {
                  document.getElementById("contact") &&
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth", block: "start" });
                }, 500)
              }
            >
              CONTACT
            </a>
          </Link>
        </div>
      </div>
    </StyledMenu>
  );
};

export default Menu;
