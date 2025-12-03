// App.jsx
import React, { useState, useEffect } from 'react';
import Rainbow from './Rainbow.svg'; // Le chemin vers le fichier SVG

function App() {
  // 1. État pour stocker le code source du SVG (initialisé à une chaîne vide)
  const [svgCode, setSvgCode] = useState('');

  // 2. useEffect pour charger le fichier SVG une fois le composant monté
  useEffect(() => {
    // Le 'fetch' est utilisé pour lire le *contenu* textuel du fichier
    fetch(Rainbow)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        return response.text(); // Lire la réponse comme du texte
      })
      .then(text => {
        setSvgCode(text); // Mettre à jour l'état avec le code source
      })
      .catch(error => {
        console.error("Erreur de chargement du SVG:", error);
        setSvgCode('Erreur: Impossible de charger le code source du SVG.');
      });
  }, []); // Le tableau vide [] assure que cela ne s'exécute qu'une seule fois au montage

  return (
    <table border="1" style={{ margin: '100px' }}>
      <thead>
        <tr>
          <th>Source Code</th>
          <th></th>
          <th>SVG Image</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {/* Afficher le code source. On utilise 'value' et 'readOnly' */}
            <textarea
              rows="30"
              cols="100"
              >{svgCode}
            </textarea>
          </td>
          <td id="ColorCode" style={{ width: "3px", background: "yellow" }}></td>
          <td style={{verticalAlign: "top" }}>
            {/* Afficher l'image. L'importation standard fournit l'URL pour la balise <img> */}
            <img src={Rainbow} alt="Rainbow SVG" />
          </td>
        </tr>
        <tr>
          <td colSpan="3">Elsa</td>
        </tr>
      </tbody>
    </table>
  );
}

export default App;