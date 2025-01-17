import React, { useState } from "react";
import "../styles/AddPartners.css";

const AddPartner = ({ onAddPartner }) => {
  const [partner, setPartner] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    companyName: "",
    photoID: null,
    consentGiven: false,
    bankAccounts: [],
    affiliateCode: "",
    discount: 0,
  });

  const [bankAccounts, setBankAccounts] = useState([]);

  // Function to handle bank account updates
  const handleAddBankAccount = () => {
    setBankAccounts([
      ...bankAccounts,
      {
        bankName: "",
        ifsc: "",
        accountHolder: "",
        accountNumber: "",
        accountType: "",
        upiID: "",
        isPrimary: false,
      },
    ]);
  };

  const handleRemoveBankAccount = (index) => {
    setBankAccounts(bankAccounts.filter((_, i) => i !== index));
  };

  const handleSetPrimary = (index) => {
    setBankAccounts(
      bankAccounts.map((account, i) => ({ ...account, isPrimary: i === index }))
    );
  };

  const handleSubmit = () => {
    // Validation and consent check
    if (!partner.consentGiven) {
      alert("Please agree to the consent form.");
      return;
    }

    const newPartner = { ...partner, bankAccounts };
    onAddPartner(newPartner);
    setPartner({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      jobTitle: "",
      companyName: "",
      photoID: null,
      consentGiven: false,
      bankAccounts: [],
      affiliateCode: "",
      discount: 0,
    });
    setBankAccounts([]);
  };

  return (
    <div>
      <h2>Add Business Partner</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={partner.firstName}
            onChange={(e) =>
              setPartner({ ...partner, firstName: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={partner.lastName}
            onChange={(e) =>
              setPartner({ ...partner, lastName: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Email ID:</label>
          <input
            type="email"
            value={partner.email}
            onChange={(e) => setPartner({ ...partner, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={partner.phone}
            onChange={(e) => setPartner({ ...partner, phone: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Job Title:</label>
          <input
            type="text"
            value={partner.jobTitle}
            onChange={(e) =>
              setPartner({ ...partner, jobTitle: e.target.value })
            }
          />
        </div>
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            value={partner.companyName}
            onChange={(e) =>
              setPartner({ ...partner, companyName: e.target.value })
            }
          />
        </div>
        <div>
          <label>Photo ID:</label>
          <input
            type="file"
            onChange={(e) =>
              setPartner({ ...partner, photoID: e.target.files[0] })
            }
            required
          />
        </div>
        <div>
          <input
            type="checkbox"
            checked={partner.consentGiven}
            onChange={(e) =>
              setPartner({ ...partner, consentGiven: e.target.checked })
            }
          />
          <label>I agree to the consent form</label>
        </div>
        <div>
          <h3>Bank Details</h3>
          {bankAccounts.map((account, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Bank Name"
                value={account.bankName}
                onChange={(e) => {
                  const updated = [...bankAccounts];
                  updated[index].bankName = e.target.value;
                  setBankAccounts(updated);
                }}
              />
              {/* Repeat similar inputs for IFSC, Account Holder Name, etc. */}
              <button
                type="button"
                onClick={() => handleRemoveBankAccount(index)}
              >
                Remove
              </button>
              <button type="button" onClick={() => handleSetPrimary(index)}>
                Set as Primary
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddBankAccount}>
            Add Bank Account
          </button>
        </div>
        <div>
          <label>Affiliate Code:</label>
          <input type="text" value={partner.affiliateCode} readOnly />
        </div>
        <div>
          <label>Discount %:</label>
          <input
            type="number"
            value={partner.discount}
            onChange={(e) =>
              setPartner({ ...partner, discount: e.target.value })
            }
            required
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPartner;
