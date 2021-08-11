import React, { useState } from 'react';
import { PageSection, Tab, TabContent, Tabs, TabTitleText, Title } from '@patternfly/react-core';
import { IRow } from '@patternfly/react-table';
import { Userform } from './Userform';
import { Formtable } from './Formtable';

export interface UserformData {
  name: string;
  age: number;
  gender: string;
  month: string;

}

const Dashboard: React.FunctionComponent = () => {
  const [name, setName] = useState("");
  const [ageValue, setageValue] = useState<number>(0);
  const agePlusClick = () => {
      setageValue(ageValue + 1);
  }

  const ageMinusClick = () => {
      setageValue(ageValue - 1);
  }

  const [monthValue, setMonthValue] = useState("Please Choose")


  const onChangeMonth = (value) => {
    setMonthValue(value);
  }

  const [gender, SetGender] = useState<string>(" ");

  const onChangeGender = (gender, event) => {
      console.log(event.target.value);
      SetGender(event.target.value);
      //console.log(gender);
  }

  const [arrayUserData, setArrayUserData] = useState<UserformData[]>([]);

  const onSubmit = () => {
      const newrecord: UserformData = { name: name, age: ageValue, gender: gender, month: monthValue, };
      console.log(newrecord);
      setArrayUserData([...arrayUserData, newrecord]);
      console.log(arrayUserData);

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

  return (
    <PageSection>
      <Tabs onSelect={handleTabClick} activeKey={activeTabKey} isBox={false}>
        <Tab eventKey={0} title={<TabTitleText>UserForm</TabTitleText>} tabContentId="refTab1Section" tabContentRef={contentRef1}>UserForm</Tab>
        <Tab eventKey={1} title={<TabTitleText>FormData</TabTitleText>} tabContentId="refTab2Section" tabContentRef={contentRef2}>FormTable</Tab>
      </Tabs>
      <TabContent eventKey={0} id="refTab1Section" ref={contentRef1}>
        <Userform name={name} setName={setName} ageMinusClick={ageMinusClick} agePlusClick={agePlusClick} ageValue={ageValue} 
        onChangeGender={onChangeGender} monthvalue={monthValue} onChangeMonth={onChangeMonth} onSubmit={onSubmit} onClickClearData={onClickClearData}/>
        </TabContent>
      <TabContent eventKey={1} id="refTab2Section" ref={contentRef2}><Formtable rows={rows()}/></TabContent>
    </PageSection>
  )
}

export { Dashboard };
