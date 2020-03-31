import React from "react";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div>
      <Contact
        name="Leana Peers"
        avatar="https://randomuser.me/api/portraits/women/39.jpg"
        status="online"
      />
      <Contact
        name="Leorio Schiffer"
        avatar="https://www.profil.fr/wp-content/uploads/2019/05/Laurent-LOUVION.jpg"
        status="offline"
      />
      <Contact
        name="Romain Guillemot"
        avatar="https://malikh88.github.io/wilder_book/image/mutlay.png"
        status="online"
      />
    </div>
  );
}

export default App;
