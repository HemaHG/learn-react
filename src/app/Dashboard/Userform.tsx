import React, { useState } from 'react';
import { PageSection, Form, FormGroup, TextInput, NumberInput, Radio, Dropdown, DropdownToggle, DropdownPosition, DropdownItem, ActionGroup, Button, InputGroup, FormSelect, FormSelectOption, ValidatedOptions, FormHelperText } from '@patternfly/react-core';
import { any } from 'prop-types';
import { validate } from 'webpack';
import { Table, TableHeader, TableBody, IRow } from '@patternfly/react-table';


interface IUserformprops {
    name: string;
    setName: (value) => void;
    ageValue: number;
    agePlusClick: () => void;
    ageMinusClick: () => void;
    onChangeGender: (gender, event) => void;
    monthvalue: string;
    onChangeMonth: (monthvalue) => void;
    onSubmit: (e) => void;
    onClickClearData: () => void;
}
const Userform: React.FunctionComponent<IUserformprops> = ({name, setName, ageValue, agePlusClick ,ageMinusClick, onChangeGender, monthvalue, onChangeMonth, onSubmit,onClickClearData }) => {
    const options = [
        { value: 'please choose', label: 'Please Choose', disabled: false },
        { value: 'January', label: 'January', disabled: false },
        { value: 'February', label: 'February', disabled: false },
        { value: 'March', label: 'March', disabled: false },
        { value: 'April', label: 'April', disabled: false },
        { value: 'May', label: 'May', disabled: false },
        { value: 'June', label: 'June', disabled: false },
        { value: 'July', label: 'July', disabled: false },
        { value: 'August', label: 'August', disabled: false },
        { value: 'September', label: 'September', disabled: false },
        { value: 'October', label: 'October', disabled: false },
        { value: 'November', label: 'november', disabled: false },
        { value: 'December', label: 'December', disabled: false }
    ];

    const isFormSubmitDisable = () => {
        return name.length < 1 || ageValue <= 0 || monthvalue == "Please Choose" ? true : false
    }
    return (
        <PageSection>
            <Form>
                <FormGroup label="Name" fieldId="name-field" isRequired helperText="Please provide your full name" validated={'default'}>
                    <TextInput isRequired type="text" id="name-field" value={name} onChange={(value: any): void => setName(value)} /></FormGroup>
                <FormGroup label="Age" fieldId="age-field" isRequired helperText="Please provide your age">
                    <NumberInput onPlus={agePlusClick} onMinus={ageMinusClick} value={ageValue} min={0}></NumberInput>
                </FormGroup>
                <FormGroup label="Gender" fieldId="GenderField" isRequired helperText="Please provide your gender">
                    <Radio label="Female" id="radio-button" name="gender-radio-button" value="Female" onChange={onChangeGender}></Radio>
                    <Radio label="Male" id="radio-button" name="gender-radio-button" value="Male" onChange={onChangeGender}></Radio>
                </FormGroup>
                <FormGroup label="Favourite month" fieldId="favourite-month" helperText="Tell us your favourite month">
                    <FormSelect value={monthvalue} onChange={onChangeMonth} id="favourite-month">
                        {options.map((option, index) => (
                            <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
                        ))}
                    </FormSelect>
                </FormGroup>
                <ActionGroup>
                    <Button variant="primary" onClick={onSubmit} isDisabled={isFormSubmitDisable()}>Submit form</Button>
                    <Button variant="primary" onClick={onClickClearData}>Clear</Button>
                </ActionGroup>
            </Form >
        </PageSection>

    )
}

export { Userform };





