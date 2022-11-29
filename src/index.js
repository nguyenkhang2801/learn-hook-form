import { Grid } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import catgif from 'asset/image/catflappy.gif';
import ArrayForm from 'Modules/ArrayForm';
import ArrayLogic from 'Modules/ArrayLogic';
import BasicArray from 'Modules/BasicArray';
import BasicForm from 'Modules/BasicForm';
import InfinityArray from 'Modules/InfinityArray';
import NestedArray from 'Modules/NestedArray';
import NestedForm from 'Modules/NestedForm';
import TabForm from 'Modules/TabForm';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
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
						<Route path='tab' element={<TabForm />} />
						<Route path='basic-array' element={<BasicArray />} />
						<Route path='logic' element={<ArrayLogic />} />
						<Route path='array' element={<ArrayForm />} />
						<Route path='nested-array' element={<NestedArray />} />
						<Route path='infinity-array' element={<InfinityArray />} />
					</Route>
				</Routes>
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
