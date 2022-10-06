import { Grid } from '@mui/material';
import { Button, Input, Switch } from 'antd';
import React from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';

const ChildArray = ({ momName = 'children', index, handleRemoveField }) => {
	const { control, watch } = useFormContext();
	const childArray = useFieldArray({
		control,
		name: `${momName}.${index}.children`,
	});

	const handleAddAns = () => {
		// append là thêm vào cuối, prepend là thêm vào đầu
		childArray.append({
			content: '',
			isChild: false,
			children: [],
		});
	};

	const handleRemoveChildField = (index) => {
		childArray.remove(index);
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
				Thế hệ {momName.split('children').length - 1}
			</span>
			<Controller
				name={`${momName}.${index}.content`}
				control={control}
				render={({ field }) => <Input {...field} title='Content' />}
			/>

			<Grid container alignItems='center' mt={1}>
				<span>Đẻ nữa khum</span>

				<Controller
					name={`${momName}.${index}.isChild`}
					control={control}
					render={({ field }) => <Switch {...field} checked={field.value} />}
				/>
			</Grid>
			<Grid container sx={{ ml: 2 }}>
				{childArray.fields.map((item, indexChild) => (
					<ChildArray
						momName={`${momName}.${index}.children`}
						key={item.id}
						index={indexChild}
						handleRemoveField={() => handleRemoveChildField(indexChild)}
					/>
				))}
			</Grid>
			{!!watch(`${momName}.${index}.isChild`) && (
				<Grid container mt={1}>
					<Button children={<span className='material-icons'>add</span>} onClick={handleAddAns} />
				</Grid>
			)}
		</Grid>
	);
};

export default ChildArray;
