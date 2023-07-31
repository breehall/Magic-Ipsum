import './page_header.scss';

export const Header = () => {
  return (
    <header className="header__card">
      <h1>
        {' '}
        🪄 <span className="header__title">Magic</span> Ipsum
      </h1>
      <p>
        The most{' '}
        <span className="header__tagline">magical lorem ipsum generator</span>{' '}
        on the Earth!
      </p>
    </header>
  );
};
