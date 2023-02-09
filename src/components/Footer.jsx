function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer
      className="footer p-10 text-primary-content footer-center"
      style={{ backgroundColor: "#e8f2f5" }}
    >
      <div className="text-black">Github Finder || Copyright {footerYear}</div>
    </footer>
  );
}

export default Footer;
