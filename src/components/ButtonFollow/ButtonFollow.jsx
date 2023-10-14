
import clsx from 'clsx';
import { getIsLoading } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { ButtonBurger } from './ButtonFollow.styled';

export const FollowButton = ({ isActive, onClick }) => {
  const isLoading = useSelector(getIsLoading);
  return (
    <>
      <ButtonBurger
        type="button"
        onClick={onClick}
        disabled={isLoading}
      >
        Follow
      </ButtonBurger>
    </>
  );
};

