import { HomeSlider } from 'components/HomeSlider/HomeSlider';
import {
  HomeBox,
  HomeText,
  HomeTitle,
  HomeWrapper,
  StartNowBtn,
} from './Home.styled';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.body.classList.add('home-bg');

    return () => {
      document.body.classList.remove('home-bg');
    };
  }, []);

  return (
    <HomeWrapper>
      <HomeBox>
        <HomeTitle>Welcome to Phonebook!</HomeTitle>
        <HomeText>
          This is a convenient and user-friendly platform for you to store and
          access your contacts securely.
        </HomeText>
        <HomeText>Discover our main advantages:</HomeText>
        <div>
          <HomeSlider />
        </div>
        <StartNowBtn type="button">
          <NavLink to="/contacts">Start now</NavLink>
        </StartNowBtn>
      </HomeBox>
    </HomeWrapper>
  );
};

export default Home;
