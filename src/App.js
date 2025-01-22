import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddPartner from "./components/AddPartner";
import PartnerDashboard from "./components/PartnerDashboard";
import HRSection from "./components/HRSection";
import Login from "./components/Login";
import styled from "styled-components";

// Styled Components
const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const HomeContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const PartnerList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const PartnerCard = styled.div`
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.2rem;
    color: #343a40;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
    color: #6c757d;
  }
`;

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

const SectionCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #dee2e6;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  h2 {
    font-size: 1.5rem;
    color: #007bff;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #6c757d;
  }
`;

function App() {
  const [partners, setPartners] = useState([]); // State for managing partners

  return (
    <Router>
      <Navbar />
      <AppContainer>
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
      </AppContainer>
    </Router>
  );
}

const Home = ({ partners }) => (
  <HomeContainer>
    <h1>Welcome to the Sales Portal</h1>
    <PartnerList>
      {partners.length > 0 ? (
        partners.map((partner) => (
          <PartnerCard key={partner.id}>
            <h3>{partner.name}</h3>
            <p>{partner.email}</p>
          </PartnerCard>
        ))
      ) : (
        <p>No partners added yet.</p>
      )}
    </PartnerList>

    <SectionContainer>
      <PartnerSummary />
      <PendingPartners />
      <ReviewSales />
      <AddTransaction />
    </SectionContainer>
  </HomeContainer>
);

const PartnerSummary = () => (
  <SectionCard>
    <h2>Partner Summary</h2>
    <p>Insights about all partners.</p>
  </SectionCard>
);

const PendingPartners = () => (
  <SectionCard>
    <h2>Pending Partners</h2>
    <p>Manage requests from pending partners.</p>
  </SectionCard>
);

const ReviewSales = () => (
  <SectionCard>
    <h2>Review Sales</h2>
    <p>Track and review sales data.</p>
  </SectionCard>
);

const AddTransaction = () => (
  <SectionCard>
    <h2>Add Transaction</h2>
    <p>Log new transactions for partners.</p>
  </SectionCard>
);

export default App;
