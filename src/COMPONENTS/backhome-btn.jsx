import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BackHomeBtn() {
  return (
    <Link title="Volver" to="/" className="btn-back">
      <ArrowBackIcon></ArrowBackIcon> Volver
    </Link>
  );
}

export default BackHomeBtn;
