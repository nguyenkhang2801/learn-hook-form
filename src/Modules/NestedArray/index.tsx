import { Grid, Stack } from '@mui/material';
import { Button } from 'antd';
import DataTable from 'Component/TableData';
import React, { useState } from 'react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import AnswerArray from './AnswerArray';

const NestedArray = () => {
	const [formDetail, setFormDetail] = useState();

	const questionForm = useForm();
	const { control, handleSubmit, reset } = questionForm;

	const questionArray = useFieldArray({
		control,
		name: 'questions',
	});

	const handleAddField = () => {
		// append là thêm vào cuối, prepend là thêm vào đầu
		questionArray.append({
			content: '',
			correct: '',
			answers: [],
		});
	};

	const handleRemoveField = (index) => {
		questionArray.remove(index);
	};

	const resetForm = () => {
		reset({
			questions: [
				{
					content: 'Câu hỏi?',
					correct: '2',
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
				},
			],
		});
	};

	const onSubmit = (values) => {
		setFormDetail(values);
	};

	return (
		<Grid container>
			<h1>Nested Array Form</h1>
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
					<FormProvider {...questionForm}>
						{questionArray.fields.map((item, index) => (
							<AnswerArray key={item.id} index={index} handleRemoveField={() => handleRemoveField(index)} />
						))}
					</FormProvider>
					<Grid container mt={2}>
						<Button children={<span className='material-icons'>add</span>} onClick={handleAddField} />
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

export default NestedArray;
