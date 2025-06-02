import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <section>
        <div class="container">
          <div class="card">
            <h1>About Cards</h1>
            <p>This is a simple card component.</p>
            <button>Click</button>
          </div>
          </div>
      <div class="card">
        <h2>Debit Card</h2>
        <p>This card has some different content.</p>
      </div>
        <div class="card">
          <h2>Business Cards</h2>
          <p>Cards can be used to display various type of content.</p>
        </div>
        <div class="card">
          <h2>Fourth Card</h2>
          <p>This is another example of a card.</p>
          <button>Click</button>
        </div>
      </section>
    </div>
  )
};

export default App;
