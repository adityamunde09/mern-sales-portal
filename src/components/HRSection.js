import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
  CListGroup,
  CListGroupItem,
  CForm,
  CFormInput,
  CFormSelect,
  CFormLabel,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css"; // CoreUI styles

const HRFinanceSection = () => {
  const [transaction, setTransaction] = useState({
    partnerName: "",
    amount: "",
    commissionDate: "",
  });

  const announcements = [
    {
      id: 1,
      title: "Year-End Appraisals",
      date: "2025-01-10",
      description: "Submit self-appraisals by January 20.",
    },
    {
      id: 2,
      title: "Holiday Announcement",
      date: "2025-01-15",
      description: "Office will be closed on January 26 for Republic Day.",
    },
  ];

  const leaveStatus = [
    { id: 1, name: "John Doe", status: "Approved", dates: "Jan 18 - Jan 20" },
    { id: 2, name: "Jane Smith", status: "Pending", dates: "Jan 22 - Jan 24" },
  ];

  const businessPartners = [
    { id: 1, name: "Partner A", commissionDate: "2025-02-01", status: "Pending Approval" },
    { id: 2, name: "Partner B", commissionDate: "2025-02-15", status: "Approved" },
  ];

  const transactionDetails = [
    { id: 1, partnerName: "Partner A", amount: "$5000", commissionDate: "2025-02-01" },
    { id: 2, partnerName: "Partner B", amount: "$7500", commissionDate: "2025-02-15" },
  ];

  const handleTransactionChange = (e) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">HR & Finance Dashboard</h2>

      {/* Announcements */}
      <CCard className="mb-4">
        <CCardHeader>
          <h3>Latest Announcements</h3>
        </CCardHeader>
        <CCardBody>
          <CListGroup>
            {announcements.map((item) => (
              <CListGroupItem key={item.id}>
                <h5>{item.title}</h5>
                <p>
                  <strong>Date:</strong> {item.date}
                </p>
                <p>{item.description}</p>
              </CListGroupItem>
            ))}
          </CListGroup>
        </CCardBody>
      </CCard>

      {/* Leave Status */}
      <CCard className="mb-4">
        <CCardHeader>
          <h3>Leave Status</h3>
        </CCardHeader>
        <CCardBody>
          <CTable hover responsive>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Employee</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell>
                <CTableHeaderCell>Dates</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {leaveStatus.map((leave) => (
                <CTableRow key={leave.id}>
                  <CTableDataCell>{leave.name}</CTableDataCell>
                  <CTableDataCell>{leave.status}</CTableDataCell>
                  <CTableDataCell>{leave.dates}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      {/* Business Partner Details */}
      <CCard className="mb-4">
        <CCardHeader>
          <h3>Business Partner Details</h3>
        </CCardHeader>
        <CCardBody>
          <CTable hover responsive>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Partner Name</CTableHeaderCell>
                <CTableHeaderCell>Commission Date</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {businessPartners.map((partner) => (
                <CTableRow key={partner.id}>
                  <CTableDataCell>{partner.name}</CTableDataCell>
                  <CTableDataCell>{partner.commissionDate}</CTableDataCell>
                  <CTableDataCell>{partner.status}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      {/* Add Transaction Details */}
      <CCard className="mb-4">
        <CCardHeader>
          <h3>Add Transaction Details</h3>
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CFormLabel htmlFor="partnerName">Partner Name</CFormLabel>
            <CFormSelect
              id="partnerName"
              name="partnerName"
              value={transaction.partnerName}
              onChange={handleTransactionChange}
            >
              <option value="">Select Partner</option>
              {businessPartners.map((partner) => (
                <option key={partner.id} value={partner.name}>
                  {partner.name}
                </option>
              ))}
            </CFormSelect>

            <CFormLabel htmlFor="amount" className="mt-3">
              Amount
            </CFormLabel>
            <CFormInput
              type="text"
              id="amount"
              name="amount"
              value={transaction.amount}
              onChange={handleTransactionChange}
            />

            <CFormLabel htmlFor="commissionDate" className="mt-3">
              Commission Date
            </CFormLabel>
            <CFormInput
              type="date"
              id="commissionDate"
              name="commissionDate"
              value={transaction.commissionDate}
              onChange={handleTransactionChange}
            />

            <CButton color="primary" className="mt-3">
              Add Transaction
            </CButton>
          </CForm>
        </CCardBody>
      </CCard>

      {/* Transaction Details Table */}
      <CCard className="mb-4">
        <CCardHeader>
          <h3>Transaction Details</h3>
        </CCardHeader>
        <CCardBody>
          <CTable hover responsive>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Partner Name</CTableHeaderCell>
                <CTableHeaderCell>Amount</CTableHeaderCell>
                <CTableHeaderCell>Commission Date</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {transactionDetails.map((transaction) => (
                <CTableRow key={transaction.id}>
                  <CTableDataCell>{transaction.partnerName}</CTableDataCell>
                  <CTableDataCell>{transaction.amount}</CTableDataCell>
                  <CTableDataCell>{transaction.commissionDate}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      {/* Useful Links */}
      <CCard>
        <CCardHeader>
          <h3>Useful Links</h3>
        </CCardHeader>
        <CCardBody>
          <CListGroup>
            <CListGroupItem>
              <CButton color="link" href="/hr-policies">
                HR Policies
              </CButton>
            </CListGroupItem>
            <CListGroupItem>
              <CButton color="link" href="/apply-leave">
                Apply for Leave
              </CButton>
            </CListGroupItem>
            <CListGroupItem>
              <CButton color="link" href="/employee-benefits">
                Employee Benefits
              </CButton>
            </CListGroupItem>
          </CListGroup>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default HRFinanceSection;
