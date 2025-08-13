import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import styles from "../CSS/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h5>Developed by Esteban Alimon</h5>
      <div className={styles.socials}>
        <a href="https://www.instagram.com" target="_BLANK">
          <InstagramIcon
            title="Instagram"
            className={styles.icon}
          ></InstagramIcon>
        </a>
        <a href="https://www.facebook.com" target="_BLANK">
          <FacebookIcon title="Facebook" className={styles.icon}></FacebookIcon>
        </a>
        <a href="https://www.x.com" target="_BLANK">
          <XIcon title="X" className={styles.icon}></XIcon>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
