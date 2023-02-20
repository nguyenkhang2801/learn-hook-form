import { Grid, Stack } from '@mui/material';
import { menuList } from 'index';
import { NavLink, Outlet } from 'react-router-dom';

const Exercise = () => {
	return (
		<Grid container>
			<h1>Exercise</h1>
			<Stack
				direction='row'
				width={1}
				sx={{
					gap: 1,
					'& > .exe-link': {
						fontWeight: 600,
						border: '1px solid #ccc',
						width: '30px',
						height: '30px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						'&.active': {
							background: '#ccc',
							color: 'white',
						},
					},
				}}
			>
				{menuList
					.find((item) => item.link === '/exercise')
					?.children?.map((item, index) => (
						<NavLink className='exe-link' key={item.link} to={item.link} children={item.title} />
					))}
			</Stack>
			<Outlet />
		</Grid>
	);
};

export default Exercise;
