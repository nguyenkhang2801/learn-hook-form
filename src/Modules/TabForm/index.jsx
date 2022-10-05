import { Grid, Stack } from '@mui/material';
import { Button, Tabs } from 'antd';
import DataTable from 'Component/TableData';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const TabForm = () => {
	const [formDetail, setFormDetail] = useState();

	const tabForm = useForm();
	const { handleSubmit, reset } = tabForm;

	const resetForm = () => {
		reset({
			firstname: 'Johnny',
			lastname: 'Dep trai',
			// khác setup nhưng vẫn chung form

			gender: 'men lỳ',
			hobby: 'ngủ',
		});
	};

	const onSubmit = (values) => {
		setFormDetail(values);
	};

	return (
		<Grid container>
			<h1>Tab Form</h1>
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
					<FormProvider {...tabForm}>
						<Tabs>
							<Tabs.TabPane tab='Tab 1' key='1'>
								<Tab1 />
							</Tabs.TabPane>
							<Tabs.TabPane tab='Tab 2' key='2'>
								<Tab2 />
							</Tabs.TabPane>
						</Tabs>
					</FormProvider>

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

export default TabForm;
