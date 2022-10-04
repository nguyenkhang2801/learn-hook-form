import { Grid } from '@mui/material';
import React from 'react';

const DataTable = ({ data }) => {
	return (
		<Grid container width={0.5} direction='column'>
			<p>Data</p>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</Grid>
	);
};

export default DataTable;
