import React from 'react';

import WishesSection from '@components/WishesSection';
import WithAnimation from '../WithAnimation';
import OVO from './assets/ovo.jpeg';
import LinkAja from './assets/link-aja.jpeg';

import { styWrapper } from './styles';

function GiftCard() {
  return (
    <>
      <div css={styWrapper}>
        <div className="row">
          <WithAnimation>
            <div className="text-wish text-center">
              <h2 className="main-font pr-co text__title" style={{ fontSize: '4rem', paddingTop: '1em' }}>
                Amplop Digital
              </h2>
              <p style={{ padding: '0 16px' }}>
                Bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih kepada mempelai dan keluarga dapat melakukan
                melalui rekening:
                <br />
                <strong>Bank BNI : 0815872998 </strong> <br />
                a.n. Mieke Asmara
              </p>
            </div>
          </WithAnimation>
        </div>
      </div>
      <WishesSection />
    </>
  );
}

export default GiftCard;
