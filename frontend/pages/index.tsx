import type { NextPage } from 'next';
import { Container } from '@mui/material';
import Calender from '@components/Calender';

const Home: NextPage = () => {
	return (
        <Container>
            <Calender />
        </Container>
	);
};

export default Home;
