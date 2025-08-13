import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "../CSS/complete-recipe.module.css";

function BackHomeBtn() {
  return (
    <Link title="Volver" to="/" className={styles.btn_back}>
      <ArrowBackIcon></ArrowBackIcon> Volver
    </Link>
  );
}

export default BackHomeBtn;
