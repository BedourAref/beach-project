import { Link } from "react-router-dom";
import Button from "../components/Button";

function NotFound() {
  return (
    <section className="text-center py-5">
      <h1 className="display-4 fw-bold text-primary">404</h1>
      <p className="lead text-secondary">
        The page you requested does not exist.
      </p>
      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </section>
  );
}

export default NotFound;
