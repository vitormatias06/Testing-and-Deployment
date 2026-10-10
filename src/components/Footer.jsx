import './Footer.css';

function Footer({ storeName, email, phone }) {
  return (
    <footer className="footer">
      <h3>{storeName}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>© 2026 {storeName}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;