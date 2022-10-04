import { Grid, Stack } from '@mui/material';
import { Button, Input } from 'antd';
import DataTable from 'Component/TableData';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const BasicForm = () => {
	const [formDetail, setFormDetail] = useState();

	const { control, handleSubmit, reset, register } = useForm();

	const resetForm = () => {
		reset({
			firstname: 'Johnny',
			lastname: 'dep trai',
		});
	};

	const onSubmit = (values) => {
		setFormDetail(values);
	};

	return (
		<Grid container>
			<h1>Basic Form</h1>
			<Stack mt={2} p={2} direction='row' width={1} spacing={1}>
				<Grid
					container
					width={0.5}
					sx={{
						'& > span': {
							mt: 1,
						},
					}}
				>
					<span>First name</span>
					<Controller
						name='firstname'
						control={control}
						render={({ field }) => <Input {...field} title='Firstname' />}
					/>

					<span>Last name</span>
					<Input title='Lastname' {...register('lastname')} />

					<Grid container justifyContent='space-between' mt={2}>
						<Button children='Reset' onClick={resetForm} />
						<Button children='Save' onClick={handleSubmit(onSubmit)} />
					</Grid>
				</Grid>
				<Grid sx={{ width: '1px', background: '#ccc' }}></Grid>
				<DataTable data={formDetail} />
			</Stack>
		</Grid>
	);
};

export default BasicForm;
