import { css } from '@emotion/core';
import Background from './assets/flower.png';

export const styWrapper = css`
  width: 100%;
  padding: var(--size-content-padding);
  background-color: #fefdfd;
  background-size: cover;
  background-image: url(${Background});
  background-position: center;

  @media screen and (min-width: 500px) {
    background-size: contain;
    background-repeat: no-repeat;
  }

  .text__salam {
    text-align: center;
    color: var(--font-primary);

    h4 {
      color: var(--font-primary);
    }
  }

  .sub-title {
    color: #828282;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
    color: var(--font-black-ui);
  }

  .parent {
    margin: -16px 16px 16px 16px;
    color: var(--font-primary);
  }

  p {
    font-size: 16px;
    margin-top: 16px;
  }

  .text__bride,
  .text__groom {
    font-size: 3rem;
    font-weight: bold;
  }

  .img__symbol {
    display: block;
    margin: 0 auto;
    margin-bottom: 16px;
  }

  .img__bride,
  .img__grom {
    border-radius: 50%;
    max-width: 160px;
    margin-bottom: 16px;
  }

  @media screen and (max-width: 500px) {
    .sub-title {
      font-size: 18px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 14px;
    }
  }
`;
