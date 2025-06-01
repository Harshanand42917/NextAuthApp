"use client";

import React, { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

const Page = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/");
  };

  if (!user) return null;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000000" }}>
      <Navbar />
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}>
        <div
          style={{
            width: "100%",
            maxWidth: "360px",
            background: "linear-gradient(135deg, #121212, #1e1e1e)",
            borderRadius: "20px",
            padding: "2rem",
            boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)",
            color: "#ffffff",
            textAlign: "center",
          }}>
          <div
            style={{
              width: "100px",
              height: "100px",
              margin: "0 auto 1rem",
              backgroundColor: "#3b82f6",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 4px 10px rgba(59, 130, 246, 0.7)",
            }}>
            <FaUser size={50} color="white" />
          </div>
          <h2 style={{ fontWeight: "700", color: "#60a5fa" }}>User Profile</h2>
          <hr style={{ borderColor: "#334155", margin: "1rem 0" }} />

          <div
            style={{ textAlign: "left", fontSize: "1rem", padding: "0 1rem" }}>
            <p style={{ marginBottom: "1rem", color: "#93c5fd" }}>
              <FaUser style={{ marginRight: "0.5rem" }} />
              <strong>Name:</strong> <span>{user.name}</span>
            </p>
            <p style={{ color: "#86efac" }}>
              <FaEnvelope style={{ marginRight: "0.5rem" }} />
              <strong>Email:</strong> <span>{user.email}</span>
            </p>
          </div>

          <button
            onClick={handleLogout}
            style={{
              marginTop: "1.5rem",
              backgroundColor: "#ef4444",
              color: "white",
              fontWeight: "600",
              padding: "10px",
              borderRadius: "12px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              boxShadow: "0 4px 12px rgba(239, 68, 68, 0.8)",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#dc2626")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#ef4444")
            }>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
