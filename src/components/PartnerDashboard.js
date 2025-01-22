// import React, { useState } from 'react';
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
//     <CRow>
//       <CCol xs={12}>
//         <h4 className="mb-4">Partner Dashboard</h4>
//         <CRow>
//           <CCol xs={12} md={4}>
//             <CCard className="mb-4">
//               <CCardHeader>Total Sales</CCardHeader>
//               <CCardBody>
//                 <h4>${mockData.totalSales}</h4>
//               </CCardBody>
//             </CCard>
//           </CCol>
//           <CCol xs={12} md={4}>
//             <CCard className="mb-4">
//               <CCardHeader>Total Partners</CCardHeader>
//               <CCardBody>
//                 <h4>{mockData.totalPartners}</h4>
//               </CCardBody>
//             </CCard>
//           </CCol>
//           <CCol xs={12} md={4}>
//             <CCard className="mb-4">
//               <CCardHeader>Pending Payments</CCardHeader>
//               <CCardBody>
//                 <h4>${mockData.pendingPayments}</h4>
//               </CCardBody>
//             </CCard>
//           </CCol>
//         </CRow>

//         <h5 className="mb-4">Business Partners Details</h5>
//         <CRow>
//           {mockData.partners.map((partner) => (
//             <CCol xs={12} md={6} key={partner.id}>
//               <CCard className="mb-4">
//                 <CCardHeader>{partner.name}</CCardHeader>
//                 <CCardBody>
//                   <p>Total Rewarded Balance: ${partner.totalRewardedBalance}</p>
//                   <p>Total Payout: ${partner.totalPayout}</p>
//                   <p>Pending Balance: ${partner.pendingBalance}</p>
//                   <CButton
//                     color="primary"
//                     onClick={() => handleViewDetails(partner)}
//                   >
//                     View Details
//                   </CButton>
//                 </CCardBody>
//               </CCard>
//             </CCol>
//           ))}
//         </CRow>

//         {selectedPartner && (
//           <CModal visible={visible} onClose={handleClose} size="lg">
//             <CModalHeader onClose={handleClose}>
//               <CModalTitle>{selectedPartner.name} - Details</CModalTitle>
//             </CModalHeader>
//             <CModalBody>
//               <h6>Payout History</h6>
//               <CTable hover>
//                 <CTableHead>
//                   <CTableRow>
//                     <CTableHeaderCell>Date</CTableHeaderCell>
//                     <CTableHeaderCell>Amount</CTableHeaderCell>
//                   </CTableRow>
//                 </CTableHead>
//                 <CTableBody>
//                   {selectedPartner.payoutHistory.map((payout) => (
//                     <CTableRow key={payout.id}>
//                       <CTableDataCell>{payout.date}</CTableDataCell>
//                       <CTableDataCell>${payout.amount}</CTableDataCell>
//                     </CTableRow>
//                   ))}
//                 </CTableBody>
//               </CTable>

//               <h6 className="mt-4">Leads</h6>
//               <CTable hover>
//                 <CTableHead>
//                   <CTableRow>
//                     <CTableHeaderCell>Customer Name</CTableHeaderCell>
//                     <CTableHeaderCell>Coupon Used</CTableHeaderCell>
//                   </CTableRow>
//                 </CTableHead>
//                 <CTableBody>
//                   {selectedPartner.leads.map((lead, index) => (
//                     <CTableRow key={index}>
//                       <CTableDataCell>{lead.customerName}</CTableDataCell>
//                       <CTableDataCell>{lead.couponUsed}</CTableDataCell>
//                     </CTableRow>
//                   ))}
//                 </CTableBody>
//               </CTable>

//               <h6 className="mt-4">Pending Balance</h6>
//               <p>${selectedPartner.pendingBalance}</p>
//             </CModalBody>
//           </CModal>
//         )}
//       </CCol>
//     </CRow>
//   );
// }

// export default PartnerDashboard;

import React, { useState } from 'react';
import styled from 'styled-components';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

// Styled Components
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

const CardTitle = styled(CCardHeader)`
  background-color: #f8f9fa;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
`;

const StatNumber = styled.h4`
  font-size: 2rem;
  color: #007bff;
  text-align: center;
`;

const PartnerCard = styled(CCard)`
  border: 1px solid #dee2e6;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ViewDetailsButton = styled(CButton)`
  background-color: #007bff;
  border: none;
  &:hover {
    background-color: #0056b3;
  }
`;

const ModalContent = styled(CModalBody)`
  padding: 20px;
`;

function PartnerDashboard() {
  const [visible, setVisible] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);

  const mockData = {
    totalSales: 5000,
    totalPartners: 20,
    pendingPayments: 1200,
    partners: [
      {
        id: 1,
        name: 'Partner A',
        totalRewardedBalance: 1000,
        totalPayout: 800,
        payoutHistory: [
          { id: 1, date: '2025-01-10', amount: 500 },
          { id: 2, date: '2025-01-15', amount: 300 },
        ],
        totalReferrals: 15,
        leads: [
          { customerName: 'Customer X', couponUsed: 'COUPON123' },
          { customerName: 'Customer Y', couponUsed: 'COUPON456' },
        ],
        pendingBalance: 200,
      },
      {
        id: 2,
        name: 'Partner B',
        totalRewardedBalance: 1500,
        totalPayout: 1200,
        payoutHistory: [
          { id: 1, date: '2025-01-12', amount: 600 },
          { id: 2, date: '2025-01-18', amount: 600 },
        ],
        totalReferrals: 10,
        leads: [
          { customerName: 'Customer Z', couponUsed: 'COUPON789' },
        ],
        pendingBalance: 300,
      },
    ],
  };

  const handleViewDetails = (partner) => {
    setSelectedPartner(partner);
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
    setSelectedPartner(null);
  };

  return (
    <DashboardContainer>
      <SectionTitle>Partner Dashboard</SectionTitle>
      <CRow>
        <CCol xs={12} md={4}>
          <CCard className="mb-4">
            <CardTitle>Total Sales</CardTitle>
            <CCardBody>
              <StatNumber>${mockData.totalSales}</StatNumber>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} md={4}>
          <CCard className="mb-4">
            <CardTitle>Total Partners</CardTitle>
            <CCardBody>
              <StatNumber>{mockData.totalPartners}</StatNumber>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} md={4}>
          <CCard className="mb-4">
            <CardTitle>Pending Payments</CardTitle>
            <CCardBody>
              <StatNumber>${mockData.pendingPayments}</StatNumber>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <SectionTitle>Business Partners Details</SectionTitle>
      <CRow>
        {mockData.partners.map((partner) => (
          <CCol xs={12} md={6} key={partner.id}>
            <PartnerCard className="mb-4">
              <CardTitle>{partner.name}</CardTitle>
              <CCardBody>
                <p>Total Rewarded Balance: ${partner.totalRewardedBalance}</p>
                <p>Total Payout: ${partner.totalPayout}</p>
                <p>Pending Balance: ${partner.pendingBalance}</p>
                <ViewDetailsButton onClick={() => handleViewDetails(partner)}>
                  View Details
                </ViewDetailsButton>
              </CCardBody>
            </PartnerCard>
          </CCol>
        ))}
      </CRow>

      {selectedPartner && (
        <CModal visible={visible} onClose={handleClose} size="lg">
          <CModalHeader onClose={handleClose}>
            <CModalTitle>{selectedPartner.name} - Details</CModalTitle>
          </CModalHeader>
          <ModalContent>
            <h6>Payout History</h6>
            <CTable hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Date</CTableHeaderCell>
                  <CTableHeaderCell>Amount</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {selectedPartner.payoutHistory.map((payout) => (
                  <CTableRow key={payout.id}>
                    <CTableDataCell>{payout.date}</CTableDataCell>
                    <CTableDataCell>${payout.amount}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>

            <h6 className="mt-4">Leads</h6>
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

            <h6 className="mt-4">Pending Balance</h6>
            <p>${selectedPartner.pendingBalance}</p>
          </ModalContent>
        </CModal>
      )}
    </DashboardContainer>
  );
}

export default PartnerDashboard;
