import { Grid } from '@mui/material';
import { Button, Input, Radio, Space } from 'antd';
import React from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';

const AnswerArray = ({ index, handleRemoveField }) => {
	const { control } = useFormContext();
	const answerArray = useFieldArray({
		control,
		name: `questions.${index}.answers`,
	});

	const handleAddAns = () => {
		// append là thêm vào cuối, prepend là thêm vào đầu
		answerArray.append({
			content: '',
		});
	};

	const handleRemoveAns = (index) => () => {
		answerArray.remove(index);
	};

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
			{/* Button xóa field ra khỏi array */}
			<Button
				style={{ position: 'absolute', top: '30px', left: '-40px', padding: '2px 3px' }}
				children={<span className='material-icons'>delete</span>}
				onClick={handleRemoveField}
			/>

			<span className='title' style={{ fontWeight: 700 }}>
				Question {index + 1}
			</span>
			<Controller
				name={`questions.${index}.content`}
				control={control}
				render={({ field }) => <Input {...field} title='Content' />}
			/>

			<span className='title'>Answer</span>

			<Controller
				name={`questions.${index}.correct`}
				control={control}
				render={({ field }) => (
					<Radio.Group {...field} style={{ width: '100%' }}>
						<Space direction='vertical'>
							{answerArray.fields.map((item, indexAns) => (
								<Radio
									value={`${indexAns + 1}`}
									children={
										<Grid
											key={item.id}
											container
											pl={2}
											sx={{
												position: 'relative',
												pb: '3px',
											}}
										>
											<Button
												style={{ position: 'absolute', left: '-64px', padding: '2px 3px' }}
												children={<span className='material-icons'>delete</span>}
												onClick={handleRemoveAns(indexAns)}
											/>

											<Controller
												name={`questions.${index}.answers.${indexAns}.content`}
												control={control}
												render={({ field }) => <Input {...field} title='Description' />}
											/>
										</Grid>
									}
								/>
							))}
						</Space>
					</Radio.Group>
				)}
			/>

			<Grid container mt={1}>
				<Button children={<span className='material-icons'>add</span>} onClick={handleAddAns} />
			</Grid>
		</Grid>
	);
};

export default AnswerArray;
