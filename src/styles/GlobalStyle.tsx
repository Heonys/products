import { Global, css } from '@emotion/react';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          background-color: #f3f4f6;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
            'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }

        body {
          overscroll-behavior-y: none;
        }

        html {
          @media (max-width: 450px) {
            font-size: 12px;
          }

          @media (max-width: 340px) {
            font-size: 10px;
          }
        }
      `}
    />
  );
};
export default GlobalStyle;
