import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <h1>Hi!</h1>
      <h1>
        <Link to='/transactions'>Current Transaction Records</Link>
      </h1>
      <button>
        <Link to='/transactions/new'>New Transaction</Link>
      </button>
    </nav>
  );
}
