import { Grid, Stack } from '@mui/material';
import { Button, Input } from 'antd';
import DataTable from 'Component/TableData';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const BasicArray = () => {
	const [formDetail, setFormDetail] = useState();

	const { control, handleSubmit, reset } = useForm();

	const resetForm = () => {
		reset({
			question: 'Câu hỏi?',
			answers: [
				{
					content: 'đáp án A',
				},
				{
					content: 'đáp án B',
				},
				{
					content: 'đáp án C',
				},
				{
					content: 'đáp án D',
				},
			],
		});
	};

	const onSubmit = (values) => {
		setFormDetail(values);
	};

	return (
		<Grid container>
			<h1>Basic Array Form</h1>
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
					<span className='title'>Question</span>
					<Controller name='question' control={control} render={({ field }) => <Input {...field} title='Content' />} />

					<span className='title'>Answer</span>
					<Grid container pl={2}>
						<span className='title'>Content</span>
						{[...Array(4)].map((item, index) => (
							<Controller
								name={`answers.${index}.content`}
								control={control}
								render={({ field }) => <Input {...field} title='Description' />}
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

export default BasicArray;
