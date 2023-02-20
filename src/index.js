import { Grid } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import catgif from 'asset/image/catflappy.gif';
import ArrayForm from 'Modules/ArrayForm';
import ArrayLogic from 'Modules/ArrayLogic';
import BasicArray from 'Modules/BasicArray';
import BasicForm from 'Modules/BasicForm';
import Exercise from 'Modules/Exercise';
import Exe1 from 'Modules/Exercise/Exe1';
import Exe2 from 'Modules/Exercise/Exe2';
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

export const menuList = [
	{ title: 'Basic', link: '/basic', element: <BasicForm /> },
	{ title: 'Nested', link: '/nested', element: <NestedForm /> },
	{ title: 'Tab', link: '/tab', element: <TabForm /> },
	{ title: 'Basic Array', link: '/basic-array', element: <BasicArray /> },
	{ title: 'Logic', link: '/logic', element: <ArrayLogic /> },
	{ title: 'Array', link: '/array', element: <ArrayForm /> },
	{ title: 'Nested Array', link: '/nested-array', element: <NestedArray /> },
	{ title: 'Infinity Array', link: '/infinity-array', element: <InfinityArray /> },
	{
		title: 'Exercise',
		link: '/exercise',
		element: <Exercise />,
		children: [
			{
				title: '1',
				link: '/exercise/exe-1',
				element: <Exe1 />,
			},
			{
				title: '2',
				link: '/exercise/exe-2',
				element: <Exe2 />,
			},
		],
	},
];

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
						{menuList.map((item) => (
							<Route key={item.link} path={item.link} element={item.element}>
								<Route index />
								{item.children?.map((child) => (
									<Route key={child.link} path={child.link} element={child.element} />
								))}
							</Route>
						))}
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
