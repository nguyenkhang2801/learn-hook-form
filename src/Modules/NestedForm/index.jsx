import { Grid, Stack } from '@mui/material';
import { Button, Switch, Input, Radio, Space, Select } from 'antd';
import DataTable from 'Component/TableData';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const NestedForm = () => {
	const [formDetail, setFormDetail] = useState();

	const { control, handleSubmit, reset } = useForm();

	const resetForm = () => {
		reset({
			firstname: 'Johnny',
			info: {
				description: 'giàu vãi đ*i',
				handsome: true,
				gender: 'men',
				age: 18,
			},
		});
	};

	const onSubmit = (values) => {
		setFormDetail(values);
	};

	return (
		<Grid container>
			<h1>Nested Form</h1>
			<Stack mt={2} p={2} direction='row' width={1} spacing={1}>
				<Grid
					container
					width={0.5}
					sx={{
						'& .title': {
							mt: 1,
						},
					}}
				>
					<span className='title'>First name</span>
					<Controller
						name='firstname'
						control={control}
						render={({ field }) => <Input {...field} title='Firstname' />}
					/>

					<span className='title'>More info</span>
					<Grid container pl={2}>
						<span className='title'>Description</span>
						<Controller
							name='info.description'
							control={control}
							render={({ field }) => <Input {...field} title='Description' />}
						/>

						<span className='title'>Handsome</span>
						<br />
						<Controller
							name='info.handsome'
							control={control}
							render={({ field }) => (
								<Grid container>
									<Switch {...field} checked={field.value} />
								</Grid>
							)}
						/>

						<span className='title'>Gender</span>
						<Controller
							name='info.gender'
							control={control}
							render={({ field }) => (
								<Grid container>
									<Radio.Group {...field}>
										<Space direction='vertical'>
											<Radio value='men' children='Men' />
											<Radio value='boy' children='Boy' />
											<Radio value='other' children='Other' />
										</Space>
									</Radio.Group>
								</Grid>
							)}
						/>

						<span className='title'>Age</span>
						<Controller
							name='info.age'
							control={control}
							render={({ field }) => (
								<Select showSearch {...field} style={{ width: '100%' }}>
									{[...Array(30)].map((item, index) => (
										<Select.Option key={index} value={index}>
											{index}
										</Select.Option>
									))}
								</Select>
							)}
						/>
					</Grid>

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

export default NestedForm;
