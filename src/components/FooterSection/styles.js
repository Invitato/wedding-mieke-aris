import { css } from '@emotion/core';
import Background from './assets/flower-footer.png';

export const styWrapper = (withBackground = true) => css`
  background-color: var(--secondary-bg);
  ${withBackground &&
  `background-size: initial;
  background-image: url(${Background});
  background-position: center;
  background-repeat: no-repeat;`}

  width: 100%;
  padding-bottom: 1px;

  .img__arrow {
    display: block;
    margin: 0 auto;
    width: 100%;
    filter: brightness(0.5);
  }

  .border {
    margin-top: -16px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid var(--font-primary);
    width: 50%;
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
  }

  .copy-right {
    margin-bottom: 6em;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
    color: var(--font-primary);
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
