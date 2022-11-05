import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/main">Main</Link>
        </li>
        <li>
          <Link to="/sub">sub</Link>
        </li>
        <li>
          <a href="https://naver.com">네이버</a>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
