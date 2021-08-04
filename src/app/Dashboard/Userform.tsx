import React, { useState } from 'react';
import { PageSection, Form, FormGroup, TextInput, NumberInput, Radio, Dropdown, DropdownToggle, DropdownPosition, DropdownItem, ActionGroup, Button, InputGroup, FormSelect, FormSelectOption } from '@patternfly/react-core';
import { any } from 'prop-types';

interface UserformData {
    name: string;
    age: number;
    gender: string;
    month: string;

}

const Userform: React.FunctionComponent = () => {
    const [name, setName] = useState("");
    const [ageValue, setageValue] = useState<number>(0);
    const agePlusClick = () => {
        setageValue(ageValue + 1);
    }

    const ageMinusClick = () => {
        setageValue(ageValue - 1);
    }

    const [gender, setGender] = useState<string>(" ");

    const onChangeGender = (gender, event) => {
        setGender(event.target.value);
    }
    
    const [monthValue, setMonthValue] = useState("Please Choose")
    const options = [
        { value: 'please choose', label: 'Please Choose', disabled: false },
        { value: 'january', label: 'January', disabled: false },
        { value: 'february', label: 'February', disabled: false },
        { value: 'march', label: 'March', disabled: false },
        { value: 'april', label: 'April', disabled: false },
        { value: 'may', label: 'May', disabled: false },
        { value: 'june', label: 'June', disabled: false },
        { value: 'july', label: 'July', disabled: false },
        { value: 'august', label: 'August', disabled: false },
        { value: 'september', label: 'September', disabled: false },
        { value: 'october', label: 'October', disabled: false },
        { value: 'november', label: 'november', disabled: false },
        { value: 'december', label: 'December', disabled: false }
    ];

    const onChangeMonth = (monthValue) => {
        setMonthValue(monthValue);
    }

    const [userData, setUserData] = useState<UserformData[]>([]);

    const onSubmit = (e) => {
        e.preventDefault();
        const newrecord: UserformData = { name: name, age: ageValue, gender: gender, month: monthValue };
        setUserData([...userData, newrecord]);
        console.log(userData)
    }

    const onClickClearData = () => {
        if (confirm("Are you sure you want to clear the data?")) {
            setName("");
            setageValue(0);
            setGender("");
            setMonthValue("");

        }
    }

    return (
        <PageSection>
            <Form>
                <FormGroup label="Name" fieldId="name-field" isRequired helperText="Please provide your full name" >
                    <TextInput isRequired type="text" id="name-field" value={name} onChange={(value: any): void => setName(value)} /></FormGroup>
                <FormGroup label="Age" fieldId="age-field" isRequired helperText="Please provide your age">
                    <NumberInput onPlus={agePlusClick} onMinus={ageMinusClick} value={ageValue} min={0}></NumberInput>
                </FormGroup>
                <FormGroup label="Gender" fieldId="GenderField" isRequired helperText="Please provide your gender"> <Radio label="Female" id="radio-button" name="gender-radio-button" value="female" onChange={onChangeGender}></Radio>
                    <Radio label="Male" id="radio-button" name="gender-radio-button" value="male" onChange={onChangeGender}></Radio>
                </FormGroup>
                <FormGroup label="Favourite month" fieldId="favourite-month" helperText="Tell us your favourite month">
                    <FormSelect value={monthValue} onChange={onChangeMonth} >
                        {options.map((option, index) => (
                            <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
                        ))}
                    </FormSelect>
                </FormGroup>
                <ActionGroup>
                    <Button variant="primary" onClick={onSubmit}>Submit form</Button>
                    <Button variant="primary" onClick={onClickClearData}>Clear</Button>
                </ActionGroup>
            </Form >
        </PageSection>

    )
}

export { Userform };





