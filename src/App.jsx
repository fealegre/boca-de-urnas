import "./App.css";
import CuentaCandidato from "./components/CuentaCandidato";

const candidatos = ["Candidato 1", "Candidato 2"];
function App() {
	return (
		<>
			<p className="titulo">Boca de Urnas</p>
			<ul>
				{candidatos.map((candidato) => {
					return (
						<CuentaCandidato key={candidato.indexOf} candidato={candidato} />
					);
				})}
			</ul>
		</>
	);
}

export default App;
