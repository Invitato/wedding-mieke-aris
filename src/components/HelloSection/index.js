import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import { GIRL_NAME, GIRL_PARENT_NAME, BOY_NAME, BOY_PARENT_NAME } from '@/constants';

import WithAnimation from '../WithAnimation';
import Image from './assets/1.jpg';
import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  return (
    <Fragment>
      <div css={styWrapper}>
        <div className="container" style={{ paddingTop: '0', paddingBottom: '8em' }}>
          <WithAnimation>
            <div className="text__salam">
              <h4>Bismillahirrahmanirrahim</h4>
              <p className="center" style={{ marginBottom: '28px' }}>
                <b>Assalamu'alaikum Wr. Wb.</b> <br />
                Menautkan dua hati dalam ikatan suci pernikahan, semoga menjadi langkah awal menuju surga. Dengan
                memohon rahmat & ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami:
              </p>
            </div>
          </WithAnimation>
          <div>
            <img
              src={Image}
              style={{ display: 'block', margin: '0 auto 24px auto', maxWidth: '200px', borderRadius: '32px' }}
              alt=""
            />
          </div>
          <div className="row">
            <WithAnimation delay={300}>
              <div className="col-md-8 col-md-offset-2 text-center">
                <h3 className="main-font text__bride">{GIRL_NAME}</h3>
                <p className="parent" dangerouslySetInnerHTML={{ __html: GIRL_PARENT_NAME }} />
              </div>
            </WithAnimation>
          </div>
          <div>
            <WithAnimation delay={400}>
              <h3 className="title color__primary main-font text__title text-center">{`&`}</h3>
            </WithAnimation>
          </div>
          <div className="row">
            <WithAnimation delay={500}>
              <div className="col-md-8 col-md-offset-2 text-center">
                <h3 className="main-font text__groom">{BOY_NAME}</h3>
                <p className="parent" dangerouslySetInnerHTML={{ __html: BOY_PARENT_NAME }} />
              </div>
            </WithAnimation>
          </div>
        </div>
      </div>
      <div style={{ height: '2em' }} />
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
