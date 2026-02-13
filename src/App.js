import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>📚 University Library</h2>
      <div>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/books">Books</Link>
        <Link style={styles.link} to="/students">Students</Link>
        <Link style={styles.link} to="/issue">Issue Book</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div style={styles.page}>
      <h1>Welcome to University Library System</h1>
      <p>Manage books and student records easily.</p>
    </div>
  );
}

function Books() {
  const bookList = [
    "Data Structures",
    "Operating Systems",
    "Database Management",
    "Computer Networks",
  ];

  return (
    <div style={styles.page}>
      <h1>Available Books</h1>
      <ul>
        {bookList.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
}

function Students() {
  const students = ["John Doe", "Alice Smith", "Robert Brown"];

  return (
    <div style={styles.page}>
      <h1>Registered Students</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

function IssueBook() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Book Issued Successfully!");
    navigate("/");
  };

  return (
    <div style={styles.page}>
      <h1>Issue Book</h1>
      <form onSubmit={handleSubmit}>
        <input style={styles.input} type="text" placeholder="Student Name" required />
        <br /><br />
        <input style={styles.input} type="text" placeholder="Book Name" required />
        <br /><br />
        <button style={styles.button} type="submit">Issue</button>
      </form>
    </div>
  );
}

function NotFound() {
  return (
    <div style={styles.page}>
      <h1>404 - Page Not Found</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/students" element={<Students />} />
        <Route path="/issue" element={<IssueBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    backgroundColor: "#2c3e50",
    color: "white",
  },
  link: {
    color: "white",
    marginLeft: "15px",
    textDecoration: "none",
  },
  page: {
    padding: "20px",
  },
  input: {
    padding: "8px",
    width: "250px",
  },
  button: {
    padding: "8px 15px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default App;
