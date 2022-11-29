import { Grid } from '@mui/material';
import { Input } from 'antd';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const Tab1 = () => {
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
			<span className='title'>First Name </span>
			<Controller name='firstname' control={control} render={({ field }) => <Input {...field} title='Content' />} />

			<span className='title'>Last Name </span>
			<Controller name='lastname' control={control} render={({ field }) => <Input {...field} title='Content' />} />
		</Grid>
	);
};

export default Tab1;
