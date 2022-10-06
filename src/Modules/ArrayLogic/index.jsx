import { Grid, Stack } from '@mui/material';
import { Button, Input } from 'antd';
import DataTable from 'Component/TableData';
import React, { useEffect, useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { data } from './model';

const ArrayLogic = () => {
	const [formDetail, setFormDetail] = useState();

	const { control, handleSubmit, reset } = useForm();
	const [payment, setPayment] = useState(0);
	const arrayAlloc = useWatch({
		control,
		name: 'alloc',
	});
	const valuePayment = useWatch({
		control,
		name: 'payment_amount',
	});

	const resetForm = () => {
		reset({
			payment_amount: 5000,
			alloc: data,
		});
	};

	const onSubmit = (values) => {
		setFormDetail(values);
	};

	useEffect(() => {
		if (valuePayment && arrayAlloc) {
			const value =
				Number(valuePayment) - arrayAlloc.reduce((prev, curr) => Number(prev) + Number(curr.alloc_amount), 0);
			setPayment(value);
		}
	}, [valuePayment, arrayAlloc]);

	useEffect(() => {
		resetForm();
		// eslint-disable-next-line
	}, []);

	return (
		<Grid container>
			<h1>Form này hỗ trợ thằng cha Andrew</h1>
			<Stack mt={2} p={2} direction='row' width={1} spacing={1}>
				<Grid
					container
					width={0.5}
					sx={{
						'& .title': {
							mt: 1,
						},
					}}
					direction='column'
				>
					<span className='title'>Payment</span>
					<Controller
						name='payment_amount'
						control={control}
						render={({ field }) => <Input type='number' {...field} title='Content' />}
					/>
					<span className='title'>Amount</span>
					<Grid container>{payment}</Grid>

					<span className='title'>Payment list</span>
					<Grid container pl={2}>
						<span className='title'>Content</span>
						{data.map((item, index) => (
							<Controller
								name={`alloc.${index}.alloc_amount`}
								control={control}
								render={({ field }) => (
									<>
										<Grid container alignItems='center' justifyContent='space-between' mb={1} mt={1}>
											{item.outstanding}
											<Button
												onClick={() =>
													field.onChange(
														payment + Number(field.value) > item.outstanding
															? item.outstanding
															: payment + Number(field.value),
													)
												}
												children={<span className='material-icons'>add</span>}
											/>
											<Button
												onClick={() => field.onChange(0)}
												children={<span className='material-icons'>remove</span>}
											/>
										</Grid>
										<Input
											type='number'
											min={0}
											max={item.outstanding}
											{...field}
											value={field.value || 0}
											title='Description'
										/>
									</>
								)}
							/>
						))}
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

export default ArrayLogic;
