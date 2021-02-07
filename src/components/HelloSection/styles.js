import { css } from '@emotion/core';

export const styWrapper = (withBackground) => css`
  width: 100%;
  padding: var(--size-content-padding);
  background-color: #fefdfd;

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
    font-weight: bold;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
  }

  .text__bride,
  .text__groom {
    font-size: 3rem;
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
