import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddPartner from "./components/AddPartner";
import PartnerDashboard from "./components/PartnerDashboard";
import HRSection from "./components/HRSection";
import "./styles/App.css"; // Importing modern CSS styling
import Login from "./components/Login";

function App() {
  const [partners, setPartners] = useState([]); // Example state for managing partners

  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home partners={partners} />} />
          <Route
            path="/add-partner"
            element={
              <AddPartner
                onAddPartner={(newPartner) => {
                  setPartners([...partners, newPartner]);
                }}
              />
            }
          />
          <Route path="/partner-dashboard/:id" element={<PartnerDashboard />} />
          <Route path="/hr-section" element={<HRSection />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = ({ partners }) => (
  <div className="home-container">
    <h1>Welcome to the Sales Portal</h1>
    {/* Displaying partners in a card layout */}
    <div className="partner-list">
      {partners.length > 0 ? (
        partners.map((partner) => (
          <div className="partner-card" key={partner.id}>
            <h3>{partner.name}</h3>
            <p>{partner.email}</p>
          </div>
        ))
      ) : (
        <p>No partners added yet.</p>
      )}
    </div>
    {/* Modern placeholders for other sections */}
    <div className="sections-container">
      <PartnerSummary />
      <PendingPartners />
      <ReviewSales />
      <AddTransaction />
    </div>
  </div>
);

// Example components with modern placeholders
const PartnerSummary = () => (
  <div className="section-card">
    <h2>Partner Summary</h2>
    <p>Insights about all partners.</p>
  </div>
);

const PendingPartners = () => (
  <div className="section-card">
    <h2>Pending Partners</h2>
    <p>Manage requests from pending partners.</p>
  </div>
);

const ReviewSales = () => (
  <div className="section-card">
    <h2>Review Sales</h2>
    <p>Track and review sales data.</p>
  </div>
);

const AddTransaction = () => (
  <div className="section-card">
    <h2>Add Transaction</h2>
    <p>Log new transactions for partners.</p>
  </div>
);

export default App;
