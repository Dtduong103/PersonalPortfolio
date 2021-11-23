import React from 'react';
import { DiFirebase, DiHtml5, DiJava, DiJavascript1, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Coding Languages</SectionTitle>
    <SectionText>
      Languages that I know, which are to apply for Front-End and Back-End development!
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiJavascript1 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Intermediate with <br />
            React.js, Node.js and basic JavaScript.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiHtml5 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Intermediate with <br />
            Basic HTML5 and CSS. Certified by FreeCodeCamp.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Database Manipulation</ListTitle>
          <ListParagraph>
            Experienced with <br />
            SQL, SQLlite, Numpy, Pandas, <br />
            and mathplotlib.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experienced with <br />
            Python in both Data Science and <br /> 
            in a software context.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJava size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Intermediate with <br />
            Java in a software context.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
