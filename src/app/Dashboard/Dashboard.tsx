import React, { useState } from 'react';
import { PageSection, Tab, TabContent, Tabs, TabTitleText, Title } from '@patternfly/react-core';
import { IRow } from '@patternfly/react-table';
import { Userform } from './Userform';
import { Formtable } from './Formtable';
import { Githubuser } from './Githubuser';

export interface UserformData {
  name: string;
  age: number;
  gender: string;
  month: string;

}

const Dashboard: React.FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [ageValue, setageValue] = useState<number>(0);
  const agePlusClick = () => {
      setageValue(ageValue + 1);
  }

  const ageMinusClick = () => {
      setageValue(ageValue - 1);
  }

  const [monthValue, setMonthValue] = useState("Please Choose")


  const onChangeMonth = (value: string) => {
    setMonthValue(value);
  }

  const [gender, SetGender] = useState<string>("Female");

  const onChangeGender = (gender, event) => {
      console.log(event.target.value);
      SetGender(event.target.value);
  }

  const [arrayUserData, setArrayUserData] = useState<UserformData[]>([]);

  const onSubmit = (e) => {
      e.preventDefault();
      const newrecord: UserformData = { name, age: ageValue, gender, month: monthValue };
      console.log(newrecord);
      setArrayUserData([...arrayUserData, newrecord]);
      setName("");
      setageValue(0);
      SetGender("Female");
      setMonthValue("Please Choose");


  }

  const onClickClearData = () => {
      if (confirm("Are you sure you want to clear the data?")) {
          setName("");
          setageValue(0);
          SetGender("");
          setMonthValue("");

      }
  }

  const rows = () => {
    const tabledata: (string[] | IRow)[] = [];
    arrayUserData.map((user) => {
        tabledata.push({
            cells: [user.name, user.age, user.gender, user.month]
        })
    });
    return tabledata;

}
  
  const [activeTabKey, setActiveTabKey] = useState(0);

  const handleTabClick = (event, tabIndex) => {
    setActiveTabKey(tabIndex);
  }



  const contentRef1 = React.createRef<HTMLElement>();
  const contentRef2 = React.createRef<HTMLElement>();
  const contentRef3 =  React.createRef<HTMLElement>();

  return (
    <PageSection>
      <Tabs onSelect={handleTabClick} activeKey={activeTabKey} isBox={false}>
        <Tab eventKey={0} title={<TabTitleText>UserForm</TabTitleText>} tabContentId="refTab1Section" tabContentRef={contentRef1}>UserForm</Tab>
        <Tab eventKey={1} title={<TabTitleText>FormData</TabTitleText>} tabContentId="refTab2Section" tabContentRef={contentRef2}>FormTable</Tab>
        <Tab eventKey={2} title={<TabTitleText>GithubUser</TabTitleText>} tabContentId="refTab3Section" tabContentRef={contentRef3}>Github User</Tab>
      </Tabs>
      <TabContent eventKey={0} id="refTab1Section" ref={contentRef1}>
        <Userform name={name} setName={setName} ageMinusClick={ageMinusClick} agePlusClick={agePlusClick} ageValue={ageValue} 
        onChangeGender={onChangeGender} monthvalue={monthValue} onChangeMonth={onChangeMonth} onSubmit={onSubmit} onClickClearData={onClickClearData}/>
        </TabContent>
       <TabContent eventKey={1} id="refTab2Section" ref={contentRef2}><Formtable rows={rows()}/></TabContent> 
       <TabContent eventKey={2} id="refTab3Section" ref={contentRef3}><Githubuser/></TabContent>
    </PageSection>
  )
}

export { Dashboard };
