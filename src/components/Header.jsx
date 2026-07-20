import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <div className="logo">🏦</div>

        <div>
          <h2>Loan AI Assistant</h2>
          <p>AI Underwriting Assistant</p>
        </div>
      </div>

      <div className="status">
        <span className="dot"></span>
        Online
      </div>
    </div>
  );
}

export default Header;