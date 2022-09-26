import React from 'react';
import { Center, Heading } from '@chakra-ui/react';
import Footer from '../common/Footer';

function Home() {
  // const navigate = useNavigate();
  return (
    <>
      <Heading>
        <Center>
          <h1>Home</h1>
        </Center>
      </Heading>
      {/* <Heading>{process.env.REACT_APP_VARIABLE}</Heading> */}
      <Footer />
    </>
  );
}

export default Home;
