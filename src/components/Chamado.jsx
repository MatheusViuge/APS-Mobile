import { Link } from 'react-router-dom'
import styles from './Chamado.module.css'

export function Chamado(props){
  return(
		<div className={styles.Chamado}>
			<ul>
				<li><strong>ID:</strong>{props.chamado.id}</li>
				<li><strong>Nome:</strong>{props.chamado.name}</li>
				<li><strong>Email:</strong>{props.chamado.email}</li>
				<li><strong>Tipo do Serviço:</strong>{props.chamado.type}</li>
				<li><Link to={`/chamados/${props.chamado.id}`}>Detalhes</Link></li>
			</ul>
			<button onClick={props.removerChamado}></button>
		</div>
	)
}