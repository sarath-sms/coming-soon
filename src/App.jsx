import React from 'react'
import { motion } from "framer-motion";
import './App.css'

function App() {

  return (
    <div className="coming-soon-container">
      {/* Header */}
      <motion.h1
        className="main-title"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span className="highlight">iraitchi.com</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="tagline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        “Easy Booking and Fast Cooking!”
      </motion.p>

      {/* Highlight Box */}
      <motion.div
        className="highlight-box"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        🍤 <span className="secondary">Direct from Market</span> — bringing the freshest seafood, meat,
        and poultry right to your doorstep.
      </motion.div>

      {/* Pincode Info */}
      <motion.div
        className="pincode-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <p className="pincode-title">📍 Initially Serving:</p>
        <p className="pincode-list">600125 | 600122 | 600116</p>
      </motion.div>

      {/* Launch Info */}
      <motion.div
        className="launch-info"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <p className="launch-date">
          🎉 Happily Opening from: <span>1st Jan 2026</span>
        </p>
        <p className="testing-text">
          Before that, for testing purposes, our shop will open & close on random days.
          Stay tuned — we’ll advertise locally during that time!
        </p>
      </motion.div>

      {/* Footer Animation */}
      <motion.div
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        >
          🚴‍♂️ Bringing freshness, one delivery at a time!
        </motion.div>
      </motion.div>
    </div>
  )
}

export default App
