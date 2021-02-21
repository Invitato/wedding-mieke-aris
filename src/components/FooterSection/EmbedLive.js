import React from 'react';
import WithAnimation from '../WithAnimation';

import Countdown from '../Countdown';
import { THE_BRIDE, YOUTUBE_EMBED, WEDDING_AKAD_TIME, WEDDING_AKAD } from '@/constants';
import { styWrapper } from './styles';

function EmbedLive() {
  const title = `Live Wedding ${THE_BRIDE}`;
  return (
    <div id="live-wedding-section" css={styWrapper(false)} style={{ background: '#e8d2ce' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <WithAnimation>
              <h3 className="pr-co main-font" style={{ marginTop: '2em', fontSize: '3rem', fontWeight: 'bold' }}>
                {title}
              </h3>
              <Countdown />
              <p>{`Live: ${WEDDING_AKAD_TIME} | ${WEDDING_AKAD}`}</p>
            </WithAnimation>
          </div>
        </div>
        <div className="row" style={{ paddingTop: '1rem' }}>
          <iframe
            title={title}
            width="100%"
            height="315"
            src={YOUTUBE_EMBED}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default EmbedLive;
