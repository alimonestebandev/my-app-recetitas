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
        <a href="https://www.instagram.com" target="_BLANK">
          <InstagramIcon title="Instagram" className="icon"></InstagramIcon>
        </a>
        <a href="https://www.facebook.com" target="_BLANK">
          <FacebookIcon title="Facebook" className="icon"></FacebookIcon>
        </a>
        <a href="https://www.x.com" target="_BLANK">
          <XIcon title="X" className="icon"></XIcon>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
