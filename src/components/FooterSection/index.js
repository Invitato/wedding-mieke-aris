import React from 'react';
import WithAnimation from '../WithAnimation';
import CopyRight from './CopyRight';
import EmbedLive from './EmbedLive';
import GiftCard from '../GiftCard';

import { styWrapper } from './styles';
import { THE_BRIDE } from '@/constants';

function FooterSection() {
  return (
    <>
      <EmbedLive />
      <GiftCard />
      <div css={styWrapper}>
        <div style={{ padding: '0 16px' }}>
          <div className="row" style={{ padding: '16px 8px' }}>
            <hr className="border" style={{ marginTop: '16px' }} />
            <div className="col-md-8 col-md-offset-2 text-center">
              <WithAnimation>
                <p>
                  Sehubungan dengan kondisi saat ini mengenai pembatasan jumlah tamu undangan. <br />
                  Tanpa mengurangi rasa hormat, kami mohon doa restu dari Bapak/ Ibu/ Saudara dan semoga dapat menjalin
                  tali silaturahmi melalui media online. <br />
                  Merupakan suatu kebahagiaan bagi kami apabila Bapak/ Ibu/ Saudara memberikan doa restu pada kedua
                  mempelai.
                  <br /> Atas doa & perhatian Bapak/ Ibu/ Saudara kami ucapkan terima kasih dan semoga Allah selalu
                  memberi perlindungan dan kesehatan bagi kita semua.
                </p>
              </WithAnimation>
              <WithAnimation delay={100}>
                <h2 className="main-font pr-co text__title" style={{ fontSize: '4rem' }}>
                  {THE_BRIDE}
                </h2>
              </WithAnimation>
            </div>
          </div>
        </div>
        <hr className="border" />
        <WithAnimation>
          <CopyRight />
        </WithAnimation>
      </div>
    </>
  );
}

export default React.memo(FooterSection);
