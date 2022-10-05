import { Grid, Stack } from '@mui/material';
import 'antd/dist/antd.min.css';
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<Grid container height='100vh'>
			<Stack
				width='360px'
				pb={4}
				pt={4}
				sx={{
					background: '#eee',
					'& > a': {
						height: '48px',
						padding: '0px 48px',
						display: 'flex',
						alignItems: 'center',
						width: 1,
						'&:hover': {
							background: '#ddd',
						},
						'&:not(:first-child)': {
							paddingLeft: 9,
						},
						'&.active:not(:first-child)': {
							borderRight: '4px solid #0d0d99',
						},
					},
				}}
			>
				<NavLink to='/'>
					<span className='material-icons'>arrow_back_ios</span> Back
				</NavLink>
				<NavLink to='/basic' end>
					Basic
				</NavLink>
				<NavLink to='/nested' end>
					Nested
				</NavLink>
				<NavLink to='/tab' end>
					Tab
				</NavLink>
				<NavLink to='/basic-array' end>
					Basic Array
				</NavLink>
				<NavLink to='/array' end>
					Array
				</NavLink>
				<NavLink to='/nested-array' end>
					Nested Array
				</NavLink>
			</Stack>
			<Grid width='calc(100% - 360px)' p={4}>
				<Outlet />
			</Grid>
		</Grid>
	);
}

export default App;
