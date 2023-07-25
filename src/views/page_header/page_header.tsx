import './page_header.scss';
import magic from '../../assets/magic.svg';

export const Header = () => {
  return (
    <header>
      <img src={magic} alt="Magic-ipsum" />
      {/* <p>Add a sprinkle of magic to your next project!</p> */}
    </header>
  );
};
