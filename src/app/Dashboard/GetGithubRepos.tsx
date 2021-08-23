import React, { useState } from 'react';
import { PageSection, TextInput, Form, Button } from '@patternfly/react-core';
import axios from 'axios';
import { Table, TableHeader, TableBody, IRow } from '@patternfly/react-table';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const GetGithubRepos: React.FunctionComponent = () => {
    const [username, setUsername] = useState<string>("");
    
    const [githubRepos, setGithubRepos] = useState([]);;

    const onChange = (value) => {
        setUsername(value);
    }

    const handleSubmit = () => {
        axios.get(`https://api.github.com/users/${username}/repos`).then(resp => {setGithubRepos(resp.data)})
    }

    const columns = ['User ID','Reponame', "Fullname"];

    const rows = () => {
        const tabledata: (string[] | IRow)[] = [];
        githubRepos.map((userrepo) => {
            tabledata.push({
                cells: [userrepo.id,userrepo.name, userrepo.full_name]
            })
        });    
        return tabledata;
    }

    console.log(githubRepos)
    
    return(
        <PageSection>
            <Form>
                <TextInput value={username} type="text" onChange={onChange} aria-label="entername"></TextInput>
                <Button variant="primary" onClick={handleSubmit}>Submit form</Button>
            </Form>
            <Table cells={columns} rows={rows()} aria-label="Github user table">
                <TableHeader />
                <TableBody />
            </Table> 
        </PageSection>
    );

}

export {GetGithubRepos};