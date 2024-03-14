export default function Footer() {
  return (
    <footer>
      <div>
        <span className="copyright">
          ©{new Date().getFullYear()} DashDiary.
        </span>{" "}
        Built by
      </div>
      <a
        href="https://www.linkedin.com/in/barbara-freitas-dev/"
        className="footer-link"
      >
        Barbara Freitas
      </a>
    </footer>
  );
}
