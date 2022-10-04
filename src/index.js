import BasicForm from 'Modules/BasicForm';
import NestedForm from 'Modules/NestedForm';
import ArrayForm from 'Modules/ArrayForm';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Grid } from '@mui/material';
import catgif from 'asset/image/catflappy.gif';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					<Route
						index
						element={
							<Grid
								container
								justifyContent='center'
								alignItems='center'
								height={1}
								sx={{ '& > img': { width: '300px' } }}
							>
								<img src={catgif} alt='cat' />
							</Grid>
						}
					/>
					<Route path='basic' element={<BasicForm />} />
					<Route path='nested' element={<NestedForm />} />
					<Route path='array' element={<ArrayForm />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
