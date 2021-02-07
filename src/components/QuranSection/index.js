import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WithAnimation from '../WithAnimation/UseIntersect';
import { styWrapper, styTransition } from './styles';

function HelloSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="id-hello-section" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <WithAnimation>
                {/* <hr style={{ border: '1px solid var(--font-primary)', maxWidth: '100%' }} /> */}
                <p className="text__latin" style={{ marginTop: '4em' }}>
                  "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu
                  sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih
                  dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang
                  berfikir." <br /> <br />
                  <b>(Qs. Ar-Ruum: 21)</b>
                </p>
                {/* <hr style={{ border: '1px solid var(--font-primary)', maxWidth: '100%' }} /> */}
              </WithAnimation>
            </div>
          </div>
        </div>
      </div>
      <div css={styTransition} />
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
