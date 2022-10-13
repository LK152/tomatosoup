import type { NextPage } from 'next';
import { Container } from '@mui/material';
import Calendar from '@components/Calendar';

const Home: NextPage = () => {
	return (
		<Container sx={{ mt: 4 }}>
			<Calendar />
		</Container>
	);
};

export default Home;
