import { Box, Grid, Stack } from '@mui/material';
import { useState } from 'react';

const Exercise = () => {
	const [tabs, setTabs] = useState<any[]>([
		{
			id: 0,
			name: 'New Tab',
		},
		{
			id: 1,
			name: 'New Tab',
		},
	]);
	const [selected, setSelected] = useState<number>(0);

	const handleAdd = () => {
		const tab = [...tabs];
		tab.push({
			id: new Date().getTime(),
			name: 'New Tab',
		});
		if (tab.length === 1) {
			setSelected(tab[0].id);
		}
		setTabs(tab);
	};

	const handleDelete = (id: number) => (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		event.stopPropagation();
		const tab = tabs.filter((item) => item.id !== id);
		if (id === selected) {
			setSelected(tab[0]?.id || 0);
		}
		setTabs(tab);
	};

	const handleSelect = (id: number) => () => {
		setSelected(id);
	};

	return (
		<Grid container>
			<h1>Exercise</h1>
			<Stack
				mt={2}
				p={2}
				direction='row'
				width={1}
				sx={{
					'& > div': {
						border: '1px solid #ccc',
						fontSize: 20,
						alignItems: 'center',
						'&:not(:last-child)': {
							justifyContent: 'space-between',
							borderRight: 'unset',
						},
						cursor: 'pointer',
						'&:hover': {
							background: '#ccc',
						},
						transitionDuration: '300ms',
						'& *': {
							transitionDuration: '300ms',
						},
					},
				}}
			>
				{tabs.map((item) => (
					<Grid
						container
						sx={{
							width: '200px',
							height: '50px',
							padding: '8px 8px 8px 16px',
							...(selected === item.id && { background: '#ddd' }),
						}}
						onClick={handleSelect(item.id)}
					>
						<Grid item>{item.name}</Grid>

						<Box
							component='span'
							className='material-icons'
							sx={{
								borderRadius: '2px',
								'&:hover': {
									background: 'whitesmoke',
								},
							}}
							onClick={handleDelete(item.id)}
						>
							close
						</Box>
					</Grid>
				))}
				<Grid container justifyContent='center' sx={{ width: '50px', height: '50px' }} onClick={handleAdd}>
					<span className='material-icons'>add</span>
				</Grid>
			</Stack>
		</Grid>
	);
};

export default Exercise;
