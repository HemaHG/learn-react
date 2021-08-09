import React, { useState } from 'react';
import { PageSection, Tab, TabContent, Tabs, TabTitleText, Title } from '@patternfly/react-core';
import { Userform } from './Userform';
import { Formtable } from './Formtable';

const Dashboard: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = useState(0);

  const handleTabClick = (event, tabIndex) => {
    setActiveTabKey(tabIndex);
  }

  const contentRef1 = React.createRef<HTMLElement>();
  const contentRef2 = React.createRef<HTMLElement>();

  return (
    <PageSection>
      <Tabs onSelect={handleTabClick} activeKey={activeTabKey} isBox={false}>
        <Tab eventKey={0} title={<TabTitleText>UserForm</TabTitleText>} tabContentId="refTab1Section" tabContentRef={contentRef1}>UserForm</Tab>
        <Tab eventKey={1} title={<TabTitleText>FormData</TabTitleText>} tabContentId="refTab2Section" tabContentRef={contentRef2}>FormTable</Tab>


      </Tabs>
      <TabContent eventKey={0} id="refTab1Section" ref={contentRef1}><Userform /></TabContent>
      <TabContent eventKey={1} id="refTab2Section" ref={contentRef2}> <Formtable /></TabContent>
    </PageSection>
  )
}

export { Dashboard };
