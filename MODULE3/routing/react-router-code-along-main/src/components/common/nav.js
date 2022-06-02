import { Link } from "react-router-dom";

export default function Nav() {
  return (
      <nav> 
      <div>
      <Link to="/lamps">
        <h3>Lamps</h3>
      </Link>

      <Link to="/candles">
        <h3>Candles</h3>
      </Link>
 
      </div>
    </nav>
  );
};