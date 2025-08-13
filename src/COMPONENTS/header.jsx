import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import styles from "../CSS/header.module.css";

function Header() {
  return (
    <header>
      <div className={styles.header_logo}>
        <BreakfastDiningIcon> </BreakfastDiningIcon>
        <h4>Recetitas</h4>
        <h4 className={styles.slogan}>Encontrá lo que estas buscando</h4>
      </div>
    </header>
  );
}

export default Header;
