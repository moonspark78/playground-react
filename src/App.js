import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="formulaire-container">
    {/* Première ligne */}
    <div className="formulaire-row">
      <p className="formulaire-label">Email:</p>
      <input type="text" placeholder="Saisir votre email" />
    </div>

    {/* Deuxième ligne */}
    <div className="formulaire-row">
      <p className="formulaire-label">Mot de passe:</p>
      <input type="password" placeholder="Saisir votre mot de passe" />
    </div>
  </div>
  );
}

export default App;
