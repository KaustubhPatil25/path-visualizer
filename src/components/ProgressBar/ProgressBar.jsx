import React from "react";
import "./ProgressBar.scss";

const ProgressBar = ({ visitedNodes, shortestNodes }) => {
  const visitedPct = Math.min((visitedNodes / 800) * 100, 100);
  const shortestPct = Math.min((shortestNodes / 800) * 100, 100);

  return (
    <div className="stats-bar">
      <div className="stat-item">
        <span className="stat-label">VISITED</span>
        <div className="stat-track">
          <div className="stat-fill visited" style={{ width: `${visitedPct}%` }} />
        </div>
        <span className="stat-value">{visitedNodes}</span>
      </div>
      <div className="stat-sep" />
      <div className="stat-item">
        <span className="stat-label">PATH</span>
        <div className="stat-track">
          <div className="stat-fill path" style={{ width: `${shortestPct}%` }} />
        </div>
        <span className="stat-value">{shortestNodes}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
