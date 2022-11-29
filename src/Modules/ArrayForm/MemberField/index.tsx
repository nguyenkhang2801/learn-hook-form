import { Grid } from '@mui/material';
import { Button, Input, Radio, Select, Space, Switch } from 'antd';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const MemberField = ({ index, hardMode, handleRemoveField }) => {
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
			{/* Button xóa field ra khỏi array */}
			<Button
				style={{ position: 'absolute', top: '50%', left: '-40px', padding: '2px 3px' }}
				children={<span className='material-icons'>delete</span>}
				onClick={handleRemoveField}
			/>

			<span className='title'>First name</span>
			<Controller
				name={`member.${index}.firstname`}
				control={control}
				render={({ field }) => <Input {...field} title='Firstname' />}
			/>
			{hardMode && (
				<>
					<span className='title'>More info</span>
					<Grid container pl={2}>
						<span className='title'>Description</span>
						<Controller
							name={`member.${index}.info.description`}
							control={control}
							render={({ field }) => <Input {...field} title='Description' />}
						/>

						<span className='title'>Handsome</span>
						<br />
						<Controller
							name={`member.${index}.info.handsome`}
							control={control}
							render={({ field }) => (
								<Grid container>
									<Switch {...field} checked={field.value} />
								</Grid>
							)}
						/>

						<span className='title'>Gender</span>
						<Controller
							name={`member.${index}.info.gender`}
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
							name={`member.${index}.info.age`}
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
				</>
			)}
		</Grid>
	);
};

export default MemberField;
