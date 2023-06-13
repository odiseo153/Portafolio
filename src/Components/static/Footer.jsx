import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer className="footer bg-light" style={{
        position: 'fixed',
        bottom: '0',
        width: '100%',
        height: '100px',
      }}>
        <div className="container text-center">
          <span className="text-muted">By Odiseo esmerlin rincon sanchez</span> <br/>
          <span className="text-muted">Gmail: odiseorincon@gmail.com</span> <br/>
          <a target='_blank' href='https://github.com/odiseo153' rel="noreferrer">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
