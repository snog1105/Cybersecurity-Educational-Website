import React, { useState } from "react";

export default function ScamChecker() {
  const [contentType, setContentType] = useState("");
  const [content, setContent] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function analyzeContent() {
    if (!contentType || !content) return;
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://localhost:5000/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentType, content })
      });

      const data = await response.json();

      let message = "";
      let status = "unknown";

      if (contentType === "email") {
        if (!data.success) {
          message = "Could not validate the email. Please try again.";
        } else if (!data.valid) {
          message = "This email address is not valid.";
          status = "risky";
        } else if (data.disposable) {
          message = "This email address is disposable and not recommended for use.";
          status = "risky";
        } else if (data.fraud_score >= 90) {
          message = "This email address is considered risky or fraudulent.";
          status = "risky";
        } else {
          message = "This email address is valid and safe to use.";
          status = "safe";
        }
      } else if (contentType === "phone") {
        if (!data.success) {
          message = "Could not validate the phone number. Please try again.";
        } else if (!data.valid) {
          message = "This phone number is not valid.";
          status = "risky";
        } else if (data.active === false) {
          message = "This phone number is not active.";
          status = "risky";
        } else if (data.fraud_score >= 85 || data.recent_abuse || data.risky) {
          message = "This phone number is considered risky or has recent abuse.";
          status = "risky";
        } else {
          message = "This phone number is valid and safe to use.";
          status = "safe";
        }
      } else if (contentType === "website") {
        if (!data.success) {
          message = "Could not validate the URL. Please try again.";
        } else if (data.risk_score >= 85 || data.unsafe || data.phishing || data.malware || data.suspicious) {
          message = "This URL is considered risky, malicious, or associated with phishing/malware.";
          status = "risky";
        } else {
          message = "This URL appears safe and is not associated with malicious activity.";
          status = "safe";
        }
      } else {
        message = "Unknown content type. Please select a valid type.";
      }

      setResult({ message, details: data, status });
    } catch (error) {
      console.error("Error analyzing content:", error);
      setResult({ error: "An error occurred while analyzing content.", status: "error" });
    }

    setLoading(false);
  }

  function statusLabel(s) {
    if (!s) return { text: "Unknown", cls: "unknown" };
    if (s === "safe") return { text: "Safe", cls: "safe" };
    if (s === "risky") return { text: "Risky", cls: "risky" };
    if (s === "error") return { text: "Error", cls: "risky" };
    return { text: "Unknown", cls: "unknown" };
  }

  const label = statusLabel(result?.status);

  return (
    <div className="card">
      <div className="grid cols-2">
        <div className="form-col">
          <label className="label">
            Content type
            <select value={contentType} onChange={e => setContentType(e.target.value)}>
              <option value="">-- Choose --</option>
              <option value="email">Email</option>
              <option value="phone">Phone number</option>
              <option value="website">Website</option>
            </select>
          </label>
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'flex-end'}}>
          <button className="btn" onClick={analyzeContent} disabled={loading || !contentType || !content}>
            {loading ? <span className="spinner" /> : 'Analyze'}
          </button>
        </div>
      </div>

      <div style={{marginTop:12}}>
        <label>
          <div style={{marginBottom:8,fontWeight:600}}>Enter content</div>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            rows={4}
            placeholder={
              contentType === "email"
                ? "e.g. user@example.com"
                : contentType === "phone"
                ? "+1 555 555 5555"
                : contentType === "website"
                ? "https://example.com"
                : "Enter content to analyze"
            }
          />
        </label>
      </div>

      {result && (
        <div className="result-card">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}>
            <h3>Analysis Result</h3>
            <div className={`badge ${label.cls}`}>{label.text}</div>
          </div>

          <p style={{marginTop:8}}>{result.error ? result.error : result.message}</p>

          {result.details && (
            <div style={{marginTop:12}}>
              <details>
                <summary style={{cursor:'pointer'}}>Show technical details</summary>
                <pre className="result-details">{JSON.stringify(result.details, null, 2)}</pre>
              </details>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
