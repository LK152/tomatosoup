import { useState } from 'react';
import { StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { TextField } from '@mui/material';

const Calender = () => {
	const [date, setDate] = useState<Dayjs | null>(dayjs('2022-12-17'));

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<StaticDatePicker
				displayStaticWrapperAs='desktop' 
				value={date}
				onChange={(newDate) => setDate(newDate)}
				renderInput={(params) => <TextField {...params} />}
			/>
		</LocalizationProvider>
	);
};

export default Calender;
