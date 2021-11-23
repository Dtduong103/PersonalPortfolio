import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! I'm Dustin
        </SectionTitle>
        <SectionText>
        I'm currently a junior at UC Berkeley studying Data Science while emphasizing on the coding and software engineering aspects of it. <br/>
        <br />
        I transferred from Orange Coast College with a GPA of 4.0 after taking classes there and Golden West College with an IGETC for transfers.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;