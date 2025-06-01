"use client";

import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

import axios from "axios";
import { useRouter } from "next/navigation";

const AuthForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/profile");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    const url = isLogin ? "/api/auth?login=true" : "/api/auth?signup=true";

    try {
      const { data } = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert(data.message);
      setMessage(data.message);

      if (isLogin && data?.user) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        router.push("/profile");
      }
    } catch (error) {
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}>
      <div
        style={{
          backgroundColor: "#1E1E1E",
          borderRadius: "12px",
          padding: "32px 36px",
          width: "360px",
          boxShadow:
            "0 4px 12px rgba(0, 0, 0, 0.7), 0 0 8px rgba(0, 123, 255, 0.3)",
          color: "#E0E0E0",
          textAlign: "center",
          userSelect: "none",
        }}>
        <div style={{ marginBottom: "24px" }}>
          {isLogin ? (
            <FaSignInAlt
              size={48}
              style={{ color: "#0d6efd", marginBottom: "12px" }}
            />
          ) : (
            <FaUserPlus
              size={48}
              style={{ color: "#198754", marginBottom: "12px" }}
            />
          )}
          <h2
            style={{
              fontWeight: "700",
              fontSize: "28px",
              marginBottom: "0",
              color: "#FFFFFF",
            }}>
            {isLogin ? "Login" : "Sign Up"}
          </h2>
        </div>

        <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
          {!isLogin && (
            <div style={{ marginBottom: "16px", position: "relative" }}>
              <FaUser
                style={{
                  position: "absolute",
                  top: "14px",
                  left: "12px",
                  color: "#0d6efd",
                }}
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px 12px 12px 36px",
                  borderRadius: "6px",
                  border: "1.5px solid #333",
                  backgroundColor: "#2c2c2c",
                  color: "#e0e0e0",
                  fontSize: "16px",
                  outlineColor: "#0d6efd",
                  transition: "border-color 0.3s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#0d6efd")}
                onBlur={(e) => (e.target.style.borderColor = "#333")}
              />
            </div>
          )}

          <div style={{ marginBottom: "16px", position: "relative" }}>
            <FaEnvelope
              style={{
                position: "absolute",
                top: "14px",
                left: "12px",
                color: "#0d6efd",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 12px 12px 36px",
                borderRadius: "6px",
                border: "1.5px solid #333",
                backgroundColor: "#2c2c2c",
                color: "#e0e0e0",
                fontSize: "16px",
                outlineColor: "#0d6efd",
                transition: "border-color 0.3s ease",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#0d6efd")}
              onBlur={(e) => (e.target.style.borderColor = "#333")}
            />
          </div>

          <div style={{ marginBottom: "24px", position: "relative" }}>
            <FaLock
              style={{
                position: "absolute",
                top: "14px",
                left: "12px",
                color: "#0d6efd",
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 12px 12px 36px",
                borderRadius: "6px",
                border: "1.5px solid #333",
                backgroundColor: "#2c2c2c",
                color: "#e0e0e0",
                fontSize: "16px",
                outlineColor: "#0d6efd",
                transition: "border-color 0.3s ease",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#0d6efd")}
              onBlur={(e) => (e.target.style.borderColor = "#333")}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "8px",
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              fontWeight: "700",
              fontSize: "18px",
              color: "#fff",
              backgroundColor: isLogin ? "#0d6efd" : "#198754",
              boxShadow: isLogin
                ? "0 4px 15px rgba(13, 110, 253, 0.5)"
                : "0 4px 15px rgba(25, 135, 84, 0.5)",
              transition: "background-color 0.3s ease",
            }}>
            {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p
          onClick={() => setIsLogin(!isLogin)}
          style={{
            marginTop: "20px",
            color: "#ffffff",
            textAlign: "center",
            cursor: "pointer",
            userSelect: "none",
            fontSize: "14px",
            fontWeight: "700", // Bold
          }}>
          {isLogin ? "Create an account" : "Already have an account? Login"}
        </p>

        {message && (
          <p
            style={{
              marginTop: "12px",
              color: "#dc3545",
              textAlign: "center",
              fontWeight: "600",
              fontSize: "14px",
            }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
