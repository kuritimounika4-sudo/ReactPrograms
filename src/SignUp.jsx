import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button, InputGroup, Alert, Row, Col } from "react-bootstrap";
import { FiUser, FiMail, FiPhone, FiLock } from "react-icons/fi";
import "./signup.css";

export default function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
    address: "",
    accept: false,
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
    setErrors((e) => ({ ...e, [name]: "" }));
  };

  const emailValid = (e) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const phoneValid = (p) =>
    /^\d{7,15}$/.test(p.replace(/\s+/g, ""));

  const passwordStrength = useMemo(() => {
    const p = form.password || "";
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    return score; // 0..4
  }, [form.password]);

  const strengthLabel = ["Too weak", "Weak", "Okay", "Good", "Strong"][passwordStrength];

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Full name is required";
    if (!form.email.trim()) err.email = "Email is required";
    else if (!emailValid(form.email)) err.email = "Enter a valid email";
    if (!form.phone.trim()) err.phone = "Phone is required";
    else if (!phoneValid(form.phone)) err.phone = "Enter digits only (7-15 chars)";
    if (!form.password) err.password = "Password is required";
    else if (form.password.length < 6) err.password = "Password must be at least 6 characters";
    if (form.password !== form.confirm) err.confirm = "Passwords do not match";
    if (!form.accept) err.accept = "You must accept terms & conditions";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length) return;

    // simulate submit
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccessMsg("Account created successfully! Redirecting to login...");
      // You'd normally dispatch an action or call an API here
      setTimeout(() => {
        navigate("/login");
      }, 1200);
    }, 1000);
  };

  return (
    <div className="signup-page">
      <div className="signup-decor-left" />
      <div className="signup-decor-right" />

      <div className="signup-container">
        <Card className="signup-card shadow-sm">
          <Card.Body>
            <h2 className="mb-3 text-center">Create your account</h2>

            {successMsg && <Alert variant="success">{successMsg}</Alert>}

            <Form onSubmit={handleSubmit} noValidate>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label className="small text-muted">Full name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text><FiUser /></InputGroup.Text>
                      <Form.Control
                        placeholder="Enter your name"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        isInvalid={!!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label className="small text-muted">Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text><FiMail /></InputGroup.Text>
                      <Form.Control
                        placeholder="you@example.com"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        isInvalid={!!errors.email}
                        type="email"
                      />
                      <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Label className="small text-muted">Phone</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>+91</InputGroup.Text>
                      <Form.Control
                        placeholder="Enter your number"
                        name="phone"
                        value={form.phone}
                        onChange={onChange}
                        isInvalid={!!errors.phone}
                        type="tel"
                      />
                      <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3" controlId="address">
                    <Form.Label className="small text-muted">Address (optional)</Form.Label>
                    <Form.Control
                      placeholder="Street, City"
                      name="address"
                      value={form.address}
                      onChange={onChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label className="small text-muted">Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text><FiLock /></InputGroup.Text>
                      <Form.Control
                        placeholder="Create password"
                        name="password"
                        value={form.password}
                        onChange={onChange}
                        type="password"
                        isInvalid={!!errors.password}
                      />
                      <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                    </InputGroup>
                    <div className="password-meter mt-2">
                      <div className={`meter meter-${passwordStrength}`} />
                      <div className="meter-label small text-muted">{strengthLabel}</div>
                    </div>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3" controlId="confirm">
                    <Form.Label className="small text-muted">Confirm password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text><FiLock /></InputGroup.Text>
                      <Form.Control
                        placeholder="Repeat password"
                        name="confirm"
                        value={form.confirm}
                        onChange={onChange}   type="password"    isInvalid={!!errors.confirm}  />
                      <Form.Control.Feedback type="invalid">{errors.confirm}</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3 d-flex align-items-center" controlId="accept">
                <Form.Check  type="checkbox"  label={<small>I agree to the <u>Terms & Conditions</u></small>}  name="accept"  checked={form.accept}  onChange={onChange}  isInvalid={!!errors.accept}  />
                <div className="text-danger small ms-2">{errors.accept}</div>
              </Form.Group>

              <div className="d-grid mb-2">
                <Button variant="primary" size="lg" type="submit" disabled={submitting}> {submitting ? "Creating account..." : "Create account"} </Button>
              </div>
              <div className="text-center small text-muted"> Already have an account? <a href="/login"> Sign in </a>  </div>

            </Form>
          </Card.Body>
        </Card>

        <div className="signup-footer text-center mt-3 text-muted"> By creating an account you agree to our <u>Privacy Policy</u>. </div>
      </div>
    </div>
  );
}
