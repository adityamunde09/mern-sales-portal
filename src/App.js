// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import AddPartner from "./components/AddPartner";
// import PartnerDashboard from "./components/PartnerDashboard";
// import HRSection from "./components/HRSection";

// function App() {
//   const [partners, setPartners] = useState([]); // Example state for managing partners

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home partners={partners} />} />
//         <Route
//           path="/add-partner"
//           element={
//             <AddPartner
//               onAddPartner={(newPartner) => {
//                 setPartners([...partners, newPartner]);
//               }}
//             />
//           }
//         />
//         <Route path="/partner-dashboard/:id" element={<PartnerDashboard />} />
//         <Route path="/hr-section" element={<HRSection />} />{" "}
//         {/* HR Section Route */}
//       </Routes>
//     </Router>
//   );
// }

// const Home = ({ partners }) => (
//   <div style={{ textAlign: "center", padding: "50px" }}>
//     <h1>Welcome to the Sales Portal</h1>
//     {/* Displaying partners (example) */}
//     <ul>
//       {partners.map((partner) => (
//         <li key={partner.id}>{partner.name}</li>
//       ))}
//     </ul>
//     {/* Other sections from the flowchart (to be implemented) */}
//     <PartnerSummary />
//     <PendingPartners />
//     <ReviewSales />
//     <AddTransaction />
//     {/* ... more sections */}
//   </div>
// );

// // Example components (to be implemented)
// const PartnerSummary = () => {
//   return <div>Partner Summary Component (to be implemented)</div>;
// };

// const PendingPartners = () => {
//   return <div>Pending Partners Component (to be implemented)</div>;
// };

// const ReviewSales = () => {
//   return <div>Review Sales Component (to be implemented)</div>;
// };

// const AddTransaction = () => {
//   return <div>Add Transaction Component (to be implemented)</div>;
// };

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddPartner from "./components/AddPartner";
import PartnerDashboard from "./components/PartnerDashboard";
import HRSection from "./components/HRSection";
import "./styles/App.css"; // Importing modern CSS styling

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
