import Link from "next/link";
import style from "./navigation.module.scss";

const NavBar = () => {
  return (
    <nav>
      <ul className={style.navBar}>
        <li>
          <Link className={style.navTitle} href="/home">
            <i className="bi bi-whatsapp"></i>
          </Link>
          <Link className={style.navTitle} href="/home">
            <i className="bi bi-facebook"></i>
          </Link>
          <Link className={style.navTitle} href="/home">
            <i className="bi bi-github"></i>
          </Link>
        </li>
        <li>
          <Link className={style.nav} href="/contact">
            <p>CONTACT</p>
          </Link>
        </li>
        <li>
          <Link className={style.nav} href="/myblogs">
            <p>MY BLOGS</p>
          </Link>
        </li>
        <li>
          <Link className={style.loguot} href="/">
            <p>LOG OUT</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
