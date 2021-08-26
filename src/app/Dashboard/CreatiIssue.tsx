import { PageSection, Form, TextInput, FormGroup, Button, ActionGroup } from '@patternfly/react-core';
import React, { useState } from 'react';
import axios from 'axios'; 

const CreateIssue: React.FunctionComponent = () => {
    const [username, setUsername] = useState<string>("");

    const [repositoryName, setRepositoryName] = useState<string>("");

    const [title, setTitle] = useState<string>("");

    const [body, setBody] = useState<string>("");

    const [token, setToken] = useState<string>("");
    
    const onChange = (value) => {
        setUsername(value);
    }

    const onChangeRepositoryname = (value) => {
        setRepositoryName(value);

    }

    const onChangeTitle = (value) => {
        setTitle(value)
    }

    const onChangeBody = (value) => {
        setBody(value);
    }

    const onChangeToken = (value) => {
        setToken(value);
    }

    const [createissue, setCreateIssue] = useState([]);

    const onClick = () => {
        axios.post(`https://api.github.com/repos/${username}/${repositoryName}/issues`, {title: `${title}`,body: `${body}`}, {headers: {'Authorization': `Bearer ${token}`}}).then(response => setCreateIssue(response.data)).catch(response => setCreateIssue(response));
              
    }

    console.log(createissue);
    return(
        <PageSection>
            <Form>
            <FormGroup label="Owern Name" fieldId="name-field" isRequired validated={'default'}>
            <TextInput value={username} type="text" onChange={onChange} aria-label="entername"/></FormGroup>
            <FormGroup label="Repository Name" fieldId="repository-field" isRequiredvalidated={'default'}>
            <TextInput value={repositoryName} type="text" onChange={onChangeRepositoryname} aria-label="enterRepositoryname"/></FormGroup>
            <FormGroup label="Issue Title" fieldId="title-field" validated={'default'}></FormGroup>
            <TextInput value={title} type="text" onChange={onChangeTitle} aria-label="enterRepositoryname"/>
            <FormGroup label="Discription" fieldId="body-field" validated={'default'}>
            <TextInput value={body} type="text" onChange={onChangeBody} aria-label="enterRepositoryname"/>
            </FormGroup>
            <FormGroup label="Token" fieldId="token-field" isRequired validated={'default'}>
            <TextInput value={token} type="text" onChange={onChangeToken} aria-label="enterRepositoryname"/>
            </FormGroup>
            <ActionGroup>
            <Button variant="primary" onClick={onClick} >Create Issue</Button>
            </ActionGroup>
            </Form>
        </PageSection>
    )

}


export {CreateIssue}