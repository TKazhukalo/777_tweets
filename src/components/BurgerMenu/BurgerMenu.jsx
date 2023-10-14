import PropTypes from 'prop-types';

const ButtonBurger = ({ isMenuOpen, onClick }) => {

    return (
    <ButtonBurger type="button" onClick={onClick}>
      <LineTop isMenuOpen={isMenuOpen} />
      <LineCenter isMenuOpen={isMenuOpen} />
      <LineBottom isMenuOpen={isMenuOpen} />
    </ButtonBurger>
  );
};

ButtonBurger.propTypes = {
  isMenuOpen: PropTypes.bool,
  onClick: PropTypes.func,
};
