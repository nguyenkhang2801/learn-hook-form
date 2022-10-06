import { Grid, Stack } from '@mui/material';
import { Button, Input, Switch } from 'antd';
import DataTable from 'Component/TableData';
import React, { useState } from 'react';
import { Controller, FormProvider, useFieldArray, useForm } from 'react-hook-form';
import ChildArray from './ChildArray';

const InfinityArray = () => {
	const [formDetail, setFormDetail] = useState();

	const infinityForm = useForm();
	const { control, handleSubmit, reset, watch } = infinityForm;

	const infinityArray = useFieldArray({
		control,
		name: 'children',
	});

	const handleAddField = () => {
		// append là thêm vào cuối, prepend là thêm vào đầu
		infinityArray.append({
			content: '',
			isChild: false,
			children: [],
		});
	};

	const handleRemoveField = (index) => {
		infinityArray.remove(index);
	};

	const resetForm = () => {
		reset({
			content: 'Đây là bà ngoại',
			isChild: true,
			children: [
				{
					content: 'Đây là mẹ',
					isChild: true,
					children: [
						{
							content: 'Đây là con',
							isChild: false,
							children: [],
						},
					],
				},
			],
		});
	};

	const onSubmit = (values) => {
		setFormDetail(values);
	};

	return (
		<Grid container>
			<h1>Form Quần Què nào đó sẽ bao giờ được áp dụng thực tế</h1>
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
					<span className='title' style={{ fontWeight: 700 }}>
						Thế hệ Bà ngoại
					</span>
					<Controller name='content' control={control} render={({ field }) => <Input {...field} title='Content' />} />

					<Grid container alignItems='center' mt={1}>
						<span>Đẻ nữa khum</span>

						<Controller
							name='isChild'
							control={control}
							render={({ field }) => <Switch {...field} checked={field.value} />}
						/>
					</Grid>

					<FormProvider {...infinityForm}>
						{infinityArray.fields.map((item, index) => (
							<ChildArray
								momName={'children'}
								key={item.id}
								index={index}
								handleRemoveField={() => handleRemoveField(index)}
							/>
						))}
					</FormProvider>
					{!!watch('isChild') && (
						<Grid container mt={2}>
							<Button children={<span className='material-icons'>add</span>} onClick={handleAddField} />
						</Grid>
					)}
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

export default InfinityArray;
