import React, { useState } from "react";
import "../styles/AddPartners.css";

const AddPartner = ({ onAddPartner }) => {
  const [step, setStep] = useState(1);
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

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
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
    setStep(1); // Reset to the first step
  };

  return (
    <div>
      <h2>Affiliate Partner Information</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        {step === 1 && (
          <div>
            <h3>Step 1: Personal Information</h3>
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
                onChange={(e) =>
                  setPartner({ ...partner, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label>Phone:</label>
              <input
                type="text"
                value={partner.phone}
                onChange={(e) =>
                  setPartner({ ...partner, phone: e.target.value })
                }
                required
              />
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <h3>Step 2: Company Information</h3>
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
          </div>
        )}
        {step === 3 && (
          <div>
            <h3>Step 3: Bank Details</h3>
            {bankAccounts.map((account, index) => (
              <div key={index} className="bank-account-container">
                <div>
                  <label>Bank Name:</label>
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
                </div>
                <div>
                  <label>IFSC Code:</label>
                  <input
                    type="text"
                    placeholder="IFSC Code"
                    value={account.ifsc}
                    onChange={(e) => {
                      const updated = [...bankAccounts];
                      updated[index].ifsc = e.target.value;
                      setBankAccounts(updated);
                    }}
                  />
                </div>
                <div>
                  <label>Account Holder Name:</label>
                  <input
                    type="text"
                    placeholder="Account Holder Name"
                    value={account.accountHolder}
                    onChange={(e) => {
                      const updated = [...bankAccounts];
                      updated[index].accountHolder = e.target.value;
                      setBankAccounts(updated);
                    }}
                  />
                </div>
                <div>
                  <label>Account Number:</label>
                  <input
                    type="text"
                    placeholder="Account Number"
                    value={account.accountNumber}
                    onChange={(e) => {
                      const updated = [...bankAccounts];
                      updated[index].accountNumber = e.target.value;
                      setBankAccounts(updated);
                    }}
                  />
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={account.isPrimary}
                    onChange={() => handleSetPrimary(index)}
                  />
                  <label>Set as Primary</label>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveBankAccount(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={handleAddBankAccount}>
              Add Bank Account
            </button>
          </div>
        )}

        {step === 4 && (
          <div>
            <h3>Step 4: Final Details</h3>
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
          </div>
        )}
        <div>
          {step > 1 && <button type="button" onClick={handleBack}>Back</button>}
          {step < 4 && <button type="button" onClick={handleNext}>Next</button>}
          {step === 4 && (
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddPartner;
