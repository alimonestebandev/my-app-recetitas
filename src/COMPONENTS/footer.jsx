import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import "../CSS/footer.css";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
function Footer() {
  return (
    <footer className="footer">
      RecetitasApp
      <div className="socials">
        ¡Seguinos en redes!
        <InstagramIcon title="Instagram" className="icon"></InstagramIcon>
        <FacebookIcon title="Facebook" className="icon"></FacebookIcon>
        <XIcon title="X" className="icon"></XIcon>
      </div>
    </footer>
  );
}

export default Footer;
