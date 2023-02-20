import { Box, Grid, Stack } from '@mui/material';
import images from 'asset/image';
import { ReactNode, useState } from 'react';
import { Rnd } from 'react-rnd';

interface ITab {
	id: number;
	name: string;
	icon: string;
	isOpen: boolean;
	onScreen: boolean;
	screen: ReactNode;
	size: { height: string; width: string; x: number; y: number };
}

const BoxScreen = (props: {
	index?: number;
	children?: ReactNode;
	title?: string;
	handleDelete?: React.MouseEventHandler<HTMLSpanElement>;
	handleSelect?: React.MouseEventHandler<HTMLSpanElement>;
	size?: { height: string; width: string; x: number; y: number };
}) => {
	const { children, title, handleDelete, handleSelect, index = 1, size } = props;
	return (
		<Rnd
			bounds='#container-screen'
			style={{ zIndex: index * 100 }}
			default={size}
			dragHandleClassName='dragdrop'
			minHeight='100px'
			minWidth='200px'
		>
			<Box
				//onClick={handleSelect}
				onMouseDown={handleSelect}
				component='div'
				sx={{
					width: 1,
					height: 1,
					background: 'white',
					border: '1px solid #ccc',
					position: 'relative',
				}}
			>
				<Grid
					className='dragdrop'
					container
					justifyContent='space-between'
					p='2px 8px'
					sx={{
						background: '#ddd',
						cursor: 'move',
					}}
				>
					{title}{' '}
					<Box
						component='span'
						className='material-icons'
						sx={{
							cursor: 'pointer',
							borderRadius: '2px',
							'&:hover': {
								background: 'whitesmoke',
							},
						}}
						onClick={handleDelete}
					>
						close
					</Box>
				</Grid>
				{children}
			</Box>
		</Rnd>
	);
};

const Exe2 = () => {
	const [tabs, setTabs] = useState<ITab[]>([
		{
			id: 0,
			name: 'Chrome',
			icon: images.chrome,
			isOpen: true,
			onScreen: true,
			screen: <div style={{ padding: 8 }}>Crhomee</div>,
			size: { height: '200px', width: '400px', x: 0, y: 0 },
		},
		{
			id: 1,
			name: 'Egde',
			icon: images.drive,
			isOpen: false,
			onScreen: false,
			screen: <div style={{ padding: 8 }}>Hheeheheh</div>,
			size: { height: '200px', width: '400px', x: 50, y: 50 },
		},
	]);

	const handleDelete = (item: ITab) => (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const tab = [...tabs];
		const index = tab.findIndex((tab) => tab.id === item.id);
		if (index < 0) return;
		const select = { ...tab[index] };

		select.isOpen = false;
		select.onScreen = false;

		tab.splice(index, 1);
		tab.unshift(select);

		setTabs(tab);
	};

	const handleSelect =
		(item: ITab, isSideBar: boolean = false) =>
		() => {
			let tab = [...tabs];
			const index = tab.findIndex((tab) => tab.id === item.id);
			if (index < 0) return;

			const select = { ...tab[index] };
			if (!select.isOpen) {
				select.isOpen = true;
				select.onScreen = true;
				tab[index] = select;
			} else {
				if (index === tab.length - 1 && isSideBar) {
					select.onScreen = false;
					tab.splice(index, 1);
					tab.unshift(select);
				} else {
					select.onScreen = true;
					tab.splice(index, 1);
					tab.push(select);
				}
			}

			setTabs(tab);
		};

	return (
		<Stack
			direction='row'
			mt={2}
			width={1}
			sx={{
				border: '1px solid #ccc',
				height: '500px',
				gap: 1,
			}}
		>
			<Stack
				p={2}
				height={1}
				sx={{
					borderRight: '1px solid #ccc',
					gap: 1,
				}}
			>
				{[...tabs]
					.sort((a, b) => a.id - b.id)
					.map((item) => (
						<Grid
							key={item.id}
							container
							justifyContent='center'
							alignItems='center'
							sx={{
								cursor: 'pointer',
								width: '50px',
								height: '50px',
								...(item.isOpen && { border: '1px solid #ddd' }),
								...(item.onScreen && { background: '#eee' }),
								'& > img': {
									witdh: '40px',
									height: '40px',
								},
							}}
							onClick={handleSelect(item, true)}
						>
							<img src={item.icon} alt='img' />
						</Grid>
					))}
			</Stack>
			<Stack id='container-screen' width={1}>
				{tabs
					.filter((item) => item.onScreen)
					.map((item, index) => (
						<BoxScreen
							index={index + 1}
							key={item.id}
							title={item.name}
							handleSelect={handleSelect(item)}
							handleDelete={handleDelete(item)}
							size={item.size}
						>
							{item.screen}
						</BoxScreen>
					))}
			</Stack>
		</Stack>
	);
};

export default Exe2;
