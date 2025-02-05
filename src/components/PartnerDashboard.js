// import React, { useState } from 'react';
// import styled from 'styled-components';
// import {
//   CCard,
//   CCardBody,
//   CCardHeader,
//   CCol,
//   CRow,
//   CButton,
//   CModal,
//   CModalHeader,
//   CModalTitle,
//   CModalBody,
//   CTable,
//   CTableHead,
//   CTableRow,
//   CTableHeaderCell,
//   CTableBody,
//   CTableDataCell,
// } from '@coreui/react';
// import '@coreui/coreui/dist/css/coreui.min.css';

// // Styled Components
// const DashboardContainer = styled.div`
//   padding: 20px;
// `;

// const SectionTitle = styled.h4`
//   font-size: 1.5rem;
//   font-weight: bold;
//   margin-bottom: 20px;
//   text-align: center;
//   color: #343a40;
// `;

// const CardTitle = styled(CCardHeader)`
//   background-color: #f8f9fa;
//   font-weight: bold;
//   font-size: 1rem;
//   text-align: center;
// `;

// const StatNumber = styled.h4`
//   font-size: 2rem;
//   color: #007bff;
//   text-align: center;
// `;

// const PartnerCard = styled(CCard)`
//   border: 1px solid #dee2e6;
//   transition: transform 0.2s;
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   }
// `;

// const ViewDetailsButton = styled(CButton)`
//   background-color: #007bff;
//   border: none;
//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const ModalContent = styled(CModalBody)`
//   padding: 20px;
// `;

// function PartnerDashboard() {
//   const [visible, setVisible] = useState(false);
//   const [selectedPartner, setSelectedPartner] = useState(null);

//   const mockData = {
//     totalSales: 5000,
//     totalPartners: 20,
//     pendingPayments: 1200,
//     partners: [
//       {
//         id: 1,
//         name: 'Partner A',
//         totalRewardedBalance: 1000,
//         totalPayout: 800,
//         payoutHistory: [
//           { id: 1, date: '2025-01-10', amount: 500 },
//           { id: 2, date: '2025-01-15', amount: 300 },
//         ],
//         totalReferrals: 15,
//         leads: [
//           { customerName: 'Customer X', couponUsed: 'COUPON123' },
//           { customerName: 'Customer Y', couponUsed: 'COUPON456' },
//         ],
//         pendingBalance: 200,
//       },
//       {
//         id: 2,
//         name: 'Partner B',
//         totalRewardedBalance: 1500,
//         totalPayout: 1200,
//         payoutHistory: [
//           { id: 1, date: '2025-01-12', amount: 600 },
//           { id: 2, date: '2025-01-18', amount: 600 },
//         ],
//         totalReferrals: 10,
//         leads: [
//           { customerName: 'Customer Z', couponUsed: 'COUPON789' },
//         ],
//         pendingBalance: 300,
//       },
//     ],
//   };

//   const handleViewDetails = (partner) => {
//     setSelectedPartner(partner);
//     setVisible(true);
//   };

//   const handleClose = () => {
//     setVisible(false);
//     setSelectedPartner(null);
//   };

//   return (
//     <DashboardContainer>
//       <SectionTitle>Partner Dashboard</SectionTitle>
//       <CRow>
//         <CCol xs={12} md={4}>
//           <CCard className="mb-4">
//             <CardTitle>Total Sales</CardTitle>
//             <CCardBody>
//               <StatNumber>${mockData.totalSales}</StatNumber>
//             </CCardBody>
//           </CCard>
//         </CCol>
//         <CCol xs={12} md={4}>
//           <CCard className="mb-4">
//             <CardTitle>Total Partners</CardTitle>
//             <CCardBody>
//               <StatNumber>{mockData.totalPartners}</StatNumber>
//             </CCardBody>
//           </CCard>
//         </CCol>
//         <CCol xs={12} md={4}>
//           <CCard className="mb-4">
//             <CardTitle>Pending Payments</CardTitle>
//             <CCardBody>
//               <StatNumber>${mockData.pendingPayments}</StatNumber>
//             </CCardBody>
//           </CCard>
//         </CCol>
//       </CRow>

//       <SectionTitle>Business Partners Details</SectionTitle>
//       <CRow>
//         {mockData.partners.map((partner) => (
//           <CCol xs={12} md={6} key={partner.id}>
//             <PartnerCard className="mb-4">
//               <CardTitle>{partner.name}</CardTitle>
//               <CCardBody>
//                 <p>Total Rewarded Balance: ${partner.totalRewardedBalance}</p>
//                 <p>Total Payout: ${partner.totalPayout}</p>
//                 <p>Pending Balance: ${partner.pendingBalance}</p>
//                 <ViewDetailsButton onClick={() => handleViewDetails(partner)}>
//                   View Details
//                 </ViewDetailsButton>
//               </CCardBody>
//             </PartnerCard>
//           </CCol>
//         ))}
//       </CRow>

//       {selectedPartner && (
//         <CModal visible={visible} onClose={handleClose} size="lg">
//           <CModalHeader onClose={handleClose}>
//             <CModalTitle>{selectedPartner.name} - Details</CModalTitle>
//           </CModalHeader>
//           <ModalContent>
//             <h6>Payout History</h6>
//             <CTable hover>
//               <CTableHead>
//                 <CTableRow>
//                   <CTableHeaderCell>Date</CTableHeaderCell>
//                   <CTableHeaderCell>Amount</CTableHeaderCell>
//                 </CTableRow>
//               </CTableHead>
//               <CTableBody>
//                 {selectedPartner.payoutHistory.map((payout) => (
//                   <CTableRow key={payout.id}>
//                     <CTableDataCell>{payout.date}</CTableDataCell>
//                     <CTableDataCell>${payout.amount}</CTableDataCell>
//                   </CTableRow>
//                 ))}
//               </CTableBody>
//             </CTable>

//             <h6 className="mt-4">Leads</h6>
//             <CTable hover>
//               <CTableHead>
//                 <CTableRow>
//                   <CTableHeaderCell>Customer Name</CTableHeaderCell>
//                   <CTableHeaderCell>Coupon Used</CTableHeaderCell>
//                 </CTableRow>
//               </CTableHead>
//               <CTableBody>
//                 {selectedPartner.leads.map((lead, index) => (
//                   <CTableRow key={index}>
//                     <CTableDataCell>{lead.customerName}</CTableDataCell>
//                     <CTableDataCell>{lead.couponUsed}</CTableDataCell>
//                   </CTableRow>
//                 ))}
//               </CTableBody>
//             </CTable>

//             <h6 className="mt-4">Pending Balance</h6>
//             <p>${selectedPartner.pendingBalance}</p>
//           </ModalContent>
//         </CModal>
//       )}
//     </DashboardContainer>
//   );
// }

// export default PartnerDashboard;

import React, { useState } from 'react';
import styled from 'styled-components';
import {
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

const DashboardContainer = styled.div`
  padding: 20px;
`;

const SectionTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #343a40;
`;

const ExpandButton = styled(CButton)`
  background-color: #007bff;
  border: none;
  &:hover {
    background-color: #0056b3;
  }
`;

function PartnerDashboard() {
  const [expandedRows, setExpandedRows] = useState({});
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [partners, setPartners] = useState(
    Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      name: `Partner ${String.fromCharCode(65 + (i % 26))}`,
      totalRewardedBalance: Math.floor(Math.random() * 5000) + 500,
      payoutHistory: Array.from({ length: 3 }, (_, j) => ({
        id: j + 1,
        date: `2025-01-${10 + j}`,
        amount: Math.floor(Math.random() * 500) + 100,
      })),
      totalReferrals: Math.floor(Math.random() * 50) + 5,
      pendingBalance: Math.floor(Math.random() * 1000) + 100,
      leads: Array.from({ length: 3 }, (_, j) => ({
        customerName: `Customer ${j + 1}`,
        couponUsed: `COUPON${j + 1}XYZ`
      }))
    }))
  );

  const toggleRow = (id) => {
    setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const deletePartner = (id) => {
    setPartners(partners.filter((partner) => partner.id !== id));
  };

  const viewLeads = (partner) => {
    setSelectedPartner(partner);
    setModalVisible(true);
  };

  return (
    <DashboardContainer>
      <SectionTitle>Business Partners Details</SectionTitle>
      <CTable hover bordered responsive>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>Partner Name</CTableHeaderCell>
            <CTableHeaderCell>Total Rewarded Balance</CTableHeaderCell>
            <CTableHeaderCell>Payout History</CTableHeaderCell>
            <CTableHeaderCell>Total Referrals</CTableHeaderCell>
            <CTableHeaderCell>View Leads</CTableHeaderCell>
            <CTableHeaderCell>Pending Balance</CTableHeaderCell>
            <CTableHeaderCell>Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {partners.map((partner) => (
            <React.Fragment key={partner.id}>
              <CTableRow>
                <CTableDataCell>{partner.name}</CTableDataCell>
                <CTableDataCell>${partner.totalRewardedBalance}</CTableDataCell>
                <CTableDataCell>
                  <ExpandButton size="sm" onClick={() => toggleRow(partner.id)}>
                    {expandedRows[partner.id] ? '-' : '+'}
                  </ExpandButton>
                </CTableDataCell>
                <CTableDataCell>{partner.totalReferrals}</CTableDataCell>
                <CTableDataCell>
                  <CButton size="sm" color="info" onClick={() => viewLeads(partner)}>View</CButton>
                </CTableDataCell>
                <CTableDataCell>${partner.pendingBalance}</CTableDataCell>
                <CTableDataCell>
                  <CButton color="danger" size="sm" onClick={() => deletePartner(partner.id)}>
                    Delete
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              {expandedRows[partner.id] && (
                <CTableRow>
                  <CTableDataCell colSpan={7}>
                    <strong>Payout History</strong>
                    <CTable hover>
                      <CTableHead>
                        <CTableRow>
                          <CTableHeaderCell>Date</CTableHeaderCell>
                          <CTableHeaderCell>Amount</CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                      <CTableBody>
                        {partner.payoutHistory.map((payout) => (
                          <CTableRow key={payout.id}>
                            <CTableDataCell>{payout.date}</CTableDataCell>
                            <CTableDataCell>${payout.amount}</CTableDataCell>
                          </CTableRow>
                        ))}
                      </CTableBody>
                    </CTable>
                  </CTableDataCell>
                </CTableRow>
              )}
            </React.Fragment>
          ))}
        </CTableBody>
      </CTable>

      {selectedPartner && (
        <CModal visible={modalVisible} onClose={() => setModalVisible(false)}>
          <CModalHeader>
            <CModalTitle>{selectedPartner.name} - Leads</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CTable hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Customer Name</CTableHeaderCell>
                  <CTableHeaderCell>Coupon Used</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {selectedPartner.leads.map((lead, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{lead.customerName}</CTableDataCell>
                    <CTableDataCell>{lead.couponUsed}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CModalBody>
        </CModal>
      )}
    </DashboardContainer>
  );
}

export default PartnerDashboard;
