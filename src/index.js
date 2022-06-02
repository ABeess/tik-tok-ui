import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import 'tippy.js/dist/tippy.css'; // optional

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<GlobalStyles>
			<App />
		</GlobalStyles>
	</React.StrictMode>
);
