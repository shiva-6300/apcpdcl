import React from "react";
import "./App.css";

export default function APCPDCLHome() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <div className="logo">AP</div>
          <div>
            <h1>Andhra Pradesh Central Power Distribution Corporation Limited</h1>
            <p className="telugu">ఆంధ్రప్రదేశ్ మధ్య ప్రాంత విద్యుత్ పంపిణీ సంస్థ</p>
          </div>
        </div>
        <div className="header-right">
          <p>CIN : U40108AP2019SGC113717</p>
          <p>PAN : AATCA0874A</p>
          <p>GSTIN : 37AATCA0874A1ZO</p>
          <button>Consumer Login</button>
        </div>
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>Company</li>
          <li>Customer</li>
          <li>RTI</li>
          <li>Department</li>
          <li>Regulatory Compliance</li>
          <li>Regulatory</li>
          <li>ARR Filings FY 2026-2027</li>
          <li>EODB</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Services */}
      <section className="services">
        {[
          "Group Services Payment",
          "Know & Pay Your Bill",
          "New Connection Registration",
          "Service Request Registration",
          "Complaint Registration",
        ].map((s) => (
          <div key={s} className="service-card">
            <div className="icon">⚡</div>
            <p>{s}</p>
          </div>
        ))}
      </section>

      {/* Quick Stats */}
      <section className="stats">
        <h2>QUICK STATS</h2>
        <div className="underline"></div>

        <div className="stats-grid">
          <div className="box yellow">
            <p className="bold">Voluntary additional load Scheme for Domestic Consumers</p>
            <p className="red">50% concession in Development Charges</p>
            <p>(Extended up to 31-12-2025)</p>
            <h3>253</h3>
            <p>No. of Sections</p>
          </div>

          <div className="box">
            <h3>6345</h3>
            <p>No. of Distributions</p>
          </div>

          <div className="box yellow">
            <p>Send Hi message to this number to use</p>
            <p className="red">AP Government whatsapp services</p>
            <h3>9552300009</h3>
          </div>

          <div className="box">
            <h3>514</h3>
            <p>LT Consumers</p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* App.css
.app { font-family: Arial, sans-serif; background:#f2f2f2; }
.header { display:flex; justify-content:space-between; padding:15px; background:#fff; }
.header-left { display:flex; gap:15px; }
.logo { width:45px; height:45px; border-radius:50%; background:#0b3c8c; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:bold; }
.telugu { color:#c00; }
.header-right button { margin-top:5px; background:#c7e6c7; border:none; padding:6px 12px; cursor:pointer; }
.navbar { background:#cdeccd; }
.navbar ul { list-style:none; display:flex; gap:20px; padding:10px; margin:0; }
.services { display:flex; justify-content:space-around; padding:30px; background:#e9eef1; }
.service-card { background:#fff; padding:20px; border-radius:15px; width:180px; text-align:center; }
.icon { width:60px; height:60px; border-radius:50%; background:#ddd; margin:0 auto 10px; display:flex; align-items:center; justify-content:center; }
.stats { background:#fff; padding:30px; }
.stats h2 { text-align:center; }
.underline { width:50px; height:3px; background:green; margin:10px auto 30px; }
.stats-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
.box { background:#fff; padding:20px; box-shadow:0 0 5px #ccc; text-align:center; }
.yellow { background:#fff7a8; }
.red { color:red; font-weight:bold; }
.bold { font-weight:bold; }
*/
