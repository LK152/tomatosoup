import { useState } from 'react';
import { Box, Grid, Typography, Stack } from '@mui/material';

const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const formatDate = (): dateFormat => {
	const date = new Date().toISOString().split('T')[0].split('-');

	return {
		year: date[0],
		month: date[1],
		day: date[2],
	};
};

const getDaysOfMonth = (year: number, month: number): dayFormat => {
	const fd = new Date(year, month - 1, 1).toDateString().split(' ');
	const ld = new Date(year, month, 0).toDateString().split(' ');

	return {
		firstDay: fd[0],
		lastDay: ld[0],
		startDay: parseInt(fd[2]),
		endDay: parseInt(ld[2]),
	};
};

const Calender = () => {
	const [date, setDate] = useState<dateFormat>(formatDate());
	const { year, month, day } = date;
	const { firstDay, lastDay, startDay, endDay } = getDaysOfMonth(
		parseInt(year),
		parseInt(month)
	);

	return (
		<Box width='100%'>
			<Grid
				container
				display='flex'
				alignItems='center'
				flexDirection='column'
			>
				<Grid item>
					<Typography color='secondary' variant='h3' fontWeight={500}>
						{monthNames[parseInt(month) - 1]}
					</Typography>
				</Grid>
				<Grid item>
					<Typography color='secondary' variant='h5' fontWeight={500}>
						{year}
					</Typography>
				</Grid>
				<Grid item>
					<Stack direction='row' spacing={5}>
						{dayNames.map((name, i) => {
							return <Typography key={i} color='white' variant='h5' fontWeight={500}>{name}</Typography>;
						})}
					</Stack>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Calender;

/*{Array.from({ length: endDay }, (_, i) => i + 1).map(
    (num, i) => {
        return <Typography key={i}>{num}</Typography>;
    }
)}*/
