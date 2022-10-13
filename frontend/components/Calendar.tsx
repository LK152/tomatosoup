import { useState } from 'react';
import {
	Box,
	Grid,
	Typography,
	Stack,
	IconButton,
	Button,
} from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import moment from 'moment';

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
	const date = moment().format('YYYY MM MMMM DD').split(' ');

	return {
		year: parseInt(date[0]),
		month: parseInt(date[1]),
		day: parseInt(date[3]),
	};
};

const getDaysInMonth = (year: number, month: number): dayFormat => {
	const firstDay = parseInt(
		moment(
			`${year}-${month < 10 ? '0' + month.toString() : month}`,
			'YYYY-MM'
		)
			.startOf('month')
			.format('d')
	);
	const daysInMonth = moment(
		`${year}-${month < 10 ? '0' + month.toString() : month}`
	).daysInMonth();

	return {
		firstDay,
		daysInMonth,
	};
};

const Calendar = () => {
	const [date, setDate] = useState<dateFormat>(formatDate());
	const {
		year: currentYear,
		month: currentMonth,
		day: currentDay,
	} = formatDate();
	const { year, month, day } = date;
	const { firstDay, daysInMonth } = getDaysInMonth(year, month);

	const handlePrevMonth = () => {
		if (month - 1 < 1) {
			setDate({ ...date, year: year - 1, month: 12 });
		} else {
			setDate({ ...date, month: month - 1 });
		}
	};

	const handleNextMonth = () => {
		if (month + 1 > 12) {
			setDate({ ...date, year: year + 1, month: 1 });
		} else {
			setDate({ ...date, month: month + 1 });
		}
	};

	const handlePrevYear = () => {
		setDate({ ...date, year: year - 1 });
	};

	const handleNextYear = () => {
		setDate({ ...date, year: year + 1 });
	};

	return (
		<Box
			sx={{
				width: '100%',
				border: '10px outset rgb(96, 96, 96)',
				backgroundColor: 'rgb(236, 168, 152)',
			}}
		>
			<Stack direction='column' alignItems='center' spacing={2} my={2}>
				<Grid
					container
					flexDirection='row'
					alignItems='center'
					justifyContent='center'
				>
					<Grid item>
						<IconButton color='primary' onClick={handlePrevMonth}>
							<NavigateBefore />
						</IconButton>
					</Grid>
					<Grid item xs={6}>
						<Typography
							color='primary'
							variant='h3'
							fontWeight={500}
							textAlign='center'
						>
							{monthNames[month - 1]}
						</Typography>
					</Grid>
					<Grid item>
						<IconButton color='primary' onClick={handleNextMonth}>
							<NavigateNext />
						</IconButton>
					</Grid>
				</Grid>
				<Grid
					container
					flexDirection='row'
					alignItems='center'
					justifyContent='center'
				>
					<Grid item>
						<IconButton color='primary' onClick={handlePrevYear}>
							<NavigateBefore />
						</IconButton>
					</Grid>
					<Grid item xs={2}>
						<Typography
							color='primary'
							variant='h5'
							fontWeight={500}
							textAlign='center'
						>
							{year}
						</Typography>
					</Grid>
					<Grid item>
						<IconButton color='primary' onClick={handleNextYear}>
							<NavigateNext />
						</IconButton>
					</Grid>
				</Grid>
				<Grid container flexDirection='column'>
					<Grid item container>
						{dayNames.map((name, i) => {
							return (
								<Grid item xs key={i}>
									<Typography
										color='secondary'
										variant='h5'
										fontWeight={500}
										textAlign='center'
									>
										{name}
									</Typography>
								</Grid>
							);
						})}
					</Grid>
					<Grid item container mt={6}>
						{Array.from(
							Array(firstDay - 1 >= 0 ? firstDay - 1 : 0).keys()
						).map((key) => {
							return <Grid item xs={12 / 7} key={key} />;
						})}
						{Array.from(
							{ length: daysInMonth },
							(_, i) => i + 1
						).map((num, i) => {
							return (
								<Grid
									item
									xs={12 / 7}
									key={i}
									textAlign='center'
									sx={{
										...(num == currentDay &&
											month == currentMonth &&
											year == currentYear && {
												border: '1px solid rgb(200, 95, 95)',
												background:
													'rgb(225, 125, 125)',
												borderRadius: '10px',
											}),
										'&:hover': {
											border: '1px solid rgb(200, 95, 95)',
											borderRadius: '10px',
										},
									}}
								>
									<Button sx={{ width: '100%' }}>
										<Typography
											sx={{
												fontSize: 20,
												...(moment(
													`${year}-${
														month < 10
															? '0' +
															  month.toString()
															: month
													}-${
														num < 10
															? '0' +
															  num.toString()
															: num
													}`
												).isSameOrBefore(
													`${currentYear}-${currentMonth}-${currentDay}`
												)
													? { color: 'gray' }
													: { color: 'white' }),
											}}
										>
											{num}
										</Typography>
									</Button>
								</Grid>
							);
						})}
					</Grid>
				</Grid>
			</Stack>
		</Box>
	);
};

export default Calendar;
