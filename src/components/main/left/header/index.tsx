// App imports
import './styles.scss';

export const Header = () => {
	return (
		<img 
			className="left-header"
			src={process.env.PUBLIC_URL + "/static/logos/logo.svg"} 
			alt="logo" 
			height="100px"
		/>
	)
}

Header.displayName="Header";