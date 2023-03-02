import axios from "axios";
import { useState } from "react";

export default function Login({ setLoggedIn, loggedIn, setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("lpcalhost:5000/auth/login", {
        email,
        password,
      });
      localStorage.setItem("authtoken", res.data);
      setToken(res.data);
      setLoggedIn(true);
    } catch (err) {
      console.log(err);
      setMessage(err.response.data);
    }
  };

  return loggedIn ? (
    <div className="container">you are now logged in</div>
  ) : (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>log in</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
