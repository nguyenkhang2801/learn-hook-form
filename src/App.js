import { Grid, Stack } from '@mui/material';
import 'antd/dist/antd.min.css';
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';
import { menuList } from 'index';

function App() {
	return (
		<Grid container height='100vh'>
			<Stack
				width='200px'
				pb={4}
				pt={4}
				sx={{
					background: '#eee',
					'& > a': {
						height: '48px',
						padding: '0px 24px',
						display: 'flex',
						alignItems: 'center',
						width: 1,
						'&:hover': {
							background: '#ddd',
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
				{menuList.map((item) => (
					<NavLink key={item.link} to={item.link} end>
						{item.title}
					</NavLink>
				))}
			</Stack>
			<Grid width='calc(100% - 200px)' p={4}>
				<Outlet />
			</Grid>
		</Grid>
	);
}

export default App;
