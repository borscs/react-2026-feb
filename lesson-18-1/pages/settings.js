import { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div>
      <h1>⚙️ Beállítások</h1>
      <p>Üdv a Beállítások oldalon!</p>
      <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "16px", maxWidth: "400px" }}>
        <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <span>Sötét mód</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
            style={{ width: "20px", height: "20px", cursor: "pointer" }}
          />
        </label>
        <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <span>Értesítések</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
            style={{ width: "20px", height: "20px", cursor: "pointer" }}
          />
        </label>
      </div>
    </div>
  );
}

