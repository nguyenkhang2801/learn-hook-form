import { Grid } from '@mui/material';
import { Input } from 'antd';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const Tab2 = () => {
	const { control } = useFormContext();

	return (
		<Grid
			container
			width={1}
			sx={{
				position: 'relative',
				'& .title': {
					mt: 1,
				},
				pb: 1,
				borderBottom: '1px solid #000',
			}}
		>
			<span className='title'>Gender </span>
			<Controller name='gender' control={control} render={({ field }) => <Input {...field} title='Content' />} />

			<span className='title'>Hobby </span>
			<Controller name='hobby' control={control} render={({ field }) => <Input {...field} title='Content' />} />
		</Grid>
	);
};

export default Tab2;
