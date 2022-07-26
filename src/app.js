import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <h1>Hello!</h1>
          <Routes></Routes>
        </main>
      </Router>
    </div>
  );
}
