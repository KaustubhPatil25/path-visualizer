import React, { useState } from "react";
import "./AppNavbar.scss";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import ProgressBar from "../ProgressBar/ProgressBar";

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAlgo, setActiveAlgo] = useState(null);
  const [algoOpen, setAlgoOpen] = useState(false);
  const [mazeOpen, setMazeOpen] = useState(false);

  const algorithms = [
    { id: "dijkstra", label: "Dijkstra", desc: "Weighted · Optimal", handler: props.handleDijkstra },
    { id: "astar",    label: "A*",        desc: "Heuristic · Optimal", handler: props.handleAstar },
    { id: "bfs",      label: "BFS",       desc: "Unweighted · Optimal", handler: props.handleBFS },
    { id: "dfs",      label: "DFS",       desc: "Unweighted · Non-optimal", handler: props.handleDFS },
  ];

  const runAlgo = (algo) => {
    setActiveAlgo(algo.id);
    algo.handler();
    props.handleVisualization();
    setAlgoOpen(false);
  };

  return (
    <nav className="app-navbar">
      {/* Top bar */}
      <div className="navbar-top">
        <div className="navbar-brand">
          <div className="brand-icon">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 2L2 7v8l9 5 9-5V7L11 2z" stroke="var(--accent-cyan)" strokeWidth="1.5" fill="none"/>
              <circle cx="11" cy="11" r="3" fill="var(--accent-cyan)" opacity="0.8"/>
              <line x1="11" y1="4" x2="11" y2="8" stroke="var(--accent-cyan)" strokeWidth="1.5"/>
              <line x1="11" y1="14" x2="11" y2="18" stroke="var(--accent-cyan)" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-title">PATH<span className="brand-accent">VIZ</span></span>
            <span className="brand-sub">ALGORITHM VISUALIZER</span>
          </div>
        </div>

        <div className="navbar-controls">
          {/* Algorithm selector */}
          <div className="dropdown-wrapper" onMouseLeave={() => setAlgoOpen(false)}>
            <button
              className={`nav-btn primary ${algoOpen ? 'active' : ''}`}
              onMouseEnter={() => setAlgoOpen(true)}
              onClick={() => setAlgoOpen(!algoOpen)}
            >
              <span className="btn-icon">⬡</span>
              {activeAlgo ? algorithms.find(a => a.id === activeAlgo)?.label : 'Algorithm'}
              <span className="btn-caret">▾</span>
            </button>
            {algoOpen && (
              <div className="dropdown-panel">
                {algorithms.map(algo => (
                  <button
                    key={algo.id}
                    className={`dropdown-item-btn ${activeAlgo === algo.id ? 'selected' : ''}`}
                    onClick={() => runAlgo(algo)}
                  >
                    <span className="item-label">{algo.label}</span>
                    <span className="item-desc">{algo.desc}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Maze selector */}
          <div className="dropdown-wrapper" onMouseLeave={() => setMazeOpen(false)}>
            <button
              className={`nav-btn secondary ${mazeOpen ? 'active' : ''}`}
              onMouseEnter={() => setMazeOpen(true)}
              onClick={() => setMazeOpen(!mazeOpen)}
            >
              <span className="btn-icon">⬢</span>
              Generate Maze
              <span className="btn-caret">▾</span>
            </button>
            {mazeOpen && (
              <div className="dropdown-panel">
                <button className="dropdown-item-btn" onClick={() => { props.handleMaze(); props.handleVisualization(); setMazeOpen(false); }}>
                  <span className="item-label">Recursive Division</span>
                  <span className="item-desc">Structured · Dense</span>
                </button>
                <button className="dropdown-item-btn" onClick={() => { props.handleRandomMaze(); setMazeOpen(false); }}>
                  <span className="item-label">Random Scatter</span>
                  <span className="item-desc">Chaotic · Sparse</span>
                </button>
              </div>
            )}
          </div>

          <div className="nav-divider" />

          <button className="nav-btn ghost" onClick={props.handleClearPath}>
            Clear Path
          </button>
          <button className="nav-btn ghost" onClick={props.handleClearGrid}>
            Clear Grid
          </button>

          <div className="nav-divider" />

          <DarkModeToggle />
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* Stats bar */}
      <div className="navbar-stats">
        <ProgressBar visitedNodes={props.visitedNodes} shortestNodes={props.shortestNodes} />
        <a href="https://github.com/saikiran6694/path_visualiser" className="github-link" target="_blank" rel="noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>
    </nav>
  );
};

export default AppNavbar;
