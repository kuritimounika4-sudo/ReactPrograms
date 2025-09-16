// src/Signup.jsx
import React, { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const { firstName, lastName, email, password, confirm } = form;
    if (!firstName || !lastName || !email || !password || !confirm) {
      return "Please fill all required fields.";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) return "Please enter a valid email.";
    if (password.length < 8) return "Password must be at least 8 characters.";
    if (password !== confirm) return "Passwords do not match.";
    return "";
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const v = validate();
    if (v) { setError(v); return; }

    try {
      setLoading(true);
      // Example: replace with your API call
      // await fetch('/api/signup', { method:'POST', body: JSON.stringify({ ...form }) })
      await new Promise(res => setTimeout(res, 800)); // simulate network
      alert("Signup successful (demo)");
      setForm({ firstName:"", lastName:"", email:"", password:"", confirm:"" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth:420, margin:"32px auto", padding:20, borderRadius:12, boxShadow:"0 8px 26px rgba(18,38,63,0.08)" }}>
      <h2>Create an account</h2>
      <p style={{ color:"#546e7a" }}>Sign up to access features.</p>

      <form onSubmit={onSubmit} noValidate>
        <div style={{ display:"flex", gap:10 }}>
          <div style={{ flex:1 }}>
            <label>First name</label>
            <input name="firstName" value={form.firstName} onChange={onChange} required />
          </div>
          <div style={{ flex:1 }}>
            <label>Last name</label>
            <input name="lastName" value={form.lastName} onChange={onChange} required />
          </div>
        </div>

        <div style={{ marginTop:12 }}>
          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={onChange} required />
        </div>

        <div style={{ display:"flex", gap:10, marginTop:12 }}>
          <div style={{ flex:1 }}>
            <label>Password</label>
            <input name="password" type="password" value={form.password} onChange={onChange} required minLength={8} />
          </div>
          <div style={{ flex:1 }}>
            <label>Confirm</label>
            <input name="confirm" type="password" value={form.confirm} onChange={onChange} required />
          </div>
        </div>

        {error && <div style={{ color:"#b22727", marginTop:10 }}>{error}</div>}

        <button style={{ marginTop:14, width:"100%", padding:10 }} disabled={loading}>
          {loading ? "Creating..." : "Sign up"}
        </button>
      </form>
    </div>
  );
}
