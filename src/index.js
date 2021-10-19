import React from 'react';
import ReactDOM from 'react-dom';
import './resources/index.css';
import App from './components/App';
import { CookiesProvider } from 'react-cookie';


ReactDOM.render(
	<React.StrictMode>
		<CookiesProvider>
			<App />
		</CookiesProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

