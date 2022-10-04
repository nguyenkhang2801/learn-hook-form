import { Grid, Stack } from '@mui/material';
import { Button, Switch } from 'antd';
import DataTable from 'Component/TableData';
import React, { useState } from 'react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import MemberField from './MemberField';

const ArrayForm = () => {
	const [hardMode, setHardMode] = useState(false);

	const [formDetail, setFormDetail] = useState();
	// khởi tạo form name
	const formMember = useForm();
	const { control, handleSubmit, reset } = formMember;

	// khởi tạo field có kiểu dữ liệu là array
	const memberArray = useFieldArray({
		control,
		name: 'member',
	});

	// thêm 1 phần tử vào array, lưu ý phải thêm đúng kiểu dữ liệu mặc định
	const handleAddField = () => {
		// append là thêm vào cuối, prepend là thêm vào đầu
		if (hardMode)
			memberArray.append({
				firstname: '',
				info: {
					description: '',
					handsome: false,
					gender: '',
					age: undefined,
				},
			});
		else
			memberArray.append({
				firstname: '',
			});
	};

	// xóa 1 phần có index đó ra khỏi array
	const handleRemoveField = (index) => {
		memberArray.remove(index);
	};

	// ngoài ra còn nhiều api của field array có thể tự tìm hiểu thêm

	const resetForm = () => {
		if (hardMode)
			reset({
				member: [
					{
						firstname: 'Johnny',
						info: {
							description: 'giàu vãi đ*i',
							handsome: true,
							gender: 'men',
							age: 18,
						},
					},
					{
						firstname: 'Ace',
						info: {
							description: 'xấu vãi đạn',
							handsome: false,
							gender: 'other',
							age: 30,
						},
					},
				],
			});
		else
			reset({
				member: [{ firstname: 'Johnny' }, { firstname: 'Ace' }],
			});
	};

	const onSubmit = (values) => {
		setFormDetail(values);
	};

	return (
		<Grid container>
			<h1>Array (Nested) Form</h1>
			<Grid container>
				Hard Mode <Switch checked={hardMode} onChange={setHardMode} />
			</Grid>
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
					{/* Khởi tạo Provider bọc form */}
					<FormProvider {...formMember}>
						{memberArray.fields.map((item, index) => (
							// `key` là thuộc tính buộc phải có cho element gần vòng for nhất
							// `key` bắt buộc bằng `item.id`

							<MemberField
								key={item.id}
								index={index}
								handleRemoveField={() => handleRemoveField(index)}
								hardMode={hardMode}
							/>
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

export default ArrayForm;
