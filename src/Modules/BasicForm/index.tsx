import { Grid, Stack } from '@mui/material';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Button, Input, Switch } from 'antd';
import axios from 'axios';
import DataTable from 'Component/TableData';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { getUser } from 'Service';

const formField = {
	name: 'firstName',
	last: 'lastName',
	check: 'check',
};

const BasicForm = () => {
	const [formDetail, setFormDetail] = useState();
	const [params, setParams] = useState({ pageIndex: 2, pageSize: 10 })
	const { data, error } = useQuery({
		queryKey: [params],
		queryFn: () => getUser(params),
	})

	const { data: dataAdd, error: errorAdd, mutate } = useMutation({
		mutationFn: (newTodo: { name: string }) => { return axios.post('/todos', newTodo) }
	})
	console.log(data, error);
	console.log(dataAdd?.data, errorAdd);


	const { control, handleSubmit } = useForm({
		defaultValues: {
			[formField.name]: '',
			[formField.last]: '',
			[formField.check]: false,
		},
	});

	const resetForm = () => {
		const page = Math.floor(Math.random() * 1000)
		setParams({ pageIndex: page, pageSize: 5 })
	};

	const onSubmit = (values) => {
		setFormDetail(values);
		mutate({ name: 'ddd' })
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
						name={formField.name}
						control={control}
						render={({ field }) => <Input {...field as any} title='Firstname' />}
					/>

					<span>Last name</span>
					<Controller
						name={formField.last}
						control={control}
						render={({ field }) => <Input {...field as any} title='Lastname' />}
					/>

					<Controller
						name={formField.check}
						control={control}
						render={({ field }) => <Switch checked={!!field.value} onChange={field.onChange} />}
					/>

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
