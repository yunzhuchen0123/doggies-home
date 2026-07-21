import '../styles/not-found.css';

function NotFound() {
  return (
    <div className="not-found">
      <h2 className="not-found__title">This Page Went Walkies</h2>
      <p className="not-found__text">
        We could not find the page you were looking for. It may have been moved, or the link may be misspelled.
      </p>
      <a href="#/" className="not-found__link">Back to Home</a>
    </div>
  );
}

export default NotFound;
