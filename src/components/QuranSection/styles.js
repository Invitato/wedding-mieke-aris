import { css } from '@emotion/core';
import Background from './assets/wave.svg';

export const styWrapper = css`
  background: #f4e7e4;

  @media screen and (min-width: 700px) {
    padding-top: 16px;
  }

  .hr__border {
    display: block;
    border: 1px solid black;
    width: 70%;
    margin-bottom: 24px;
  }

  .title {
    font-size: 4em;
  }

  .text__title {
    font-size: 2rem;
    font-weight: bold;
  }

  .sub-title {
    color: var(--font-black-ui);
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
    font-family: var(--font-family-content);
  }

  .quran {
    margin: 32px 0;
    font-size: 1.3em;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
  }

  .text__arabic {
    margin-top: 2em;
    font-size: 20px;
    line-height: 2;
    color: var(--font-primary);
  }

  .text__latin {
    color: var(--font-primary);
    font-size: 14px;
  }

  @media screen and (max-width: 500px) {
    .sub-title {
      font-size: 18px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 14px;
    }
  }
`;

export const styDivider = css`
  margin-top: 0;

  img {
    display: block;
    max-width: 200px;
    height: auto;
    margin: 0 auto;
  }
`;

export const styTransition = css`
  background-color: #fefdfd;
  background-size: cover;
  background-image: url(${Background});
  background-position: bottom;
  min-height: 20vh;

  @media screen and (min-width: 700px) {
    min-height: 38vh;
  }
`;
