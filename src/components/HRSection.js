import React from "react";
import "../styles/HRSection.css"; // Custom styles for the HR section

const HRSection = () => {
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

  const links = [
    { id: 1, title: "HR Policies", url: "/hr-policies" },
    { id: 2, title: "Apply for Leave", url: "/apply-leave" },
    { id: 3, title: "Employee Benefits", url: "/employee-benefits" },
  ];

  return (
    <div className="hr-section">
      <h2>HR Section</h2>

      {/* Announcements */}
      <div className="hr-announcements">
        <h3>Latest Announcements</h3>
        <ul>
          {announcements.map((item) => (
            <li key={item.id}>
              <h4>{item.title}</h4>
              <p>
                <strong>Date:</strong> {item.date}
              </p>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Leave Status */}
      <div className="hr-leave-status">
        <h3>Leave Status</h3>
        <table>
          <thead>
            <tr>
              <th>Employee</th>
              <th>Status</th>
              <th>Dates</th>
            </tr>
          </thead>
          <tbody>
            {leaveStatus.map((leave) => (
              <tr key={leave.id}>
                <td>{leave.name}</td>
                <td>{leave.status}</td>
                <td>{leave.dates}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Useful Links */}
      <div className="hr-links">
        <h3>Useful Links</h3>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HRSection;
