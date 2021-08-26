import { PageSection, Title } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { List, ListItem } from '@patternfly/react-core';

import {BrowserRouter as Router, Route} from 'react-router-dom';

const UserDetails: React.FunctionComponent = () => {
    const [userdataset, setUserDataSet] = useState({});

    const location = useLocation();

    console.log(location.state)
 

    const name = location.state.name
    
    React.useEffect(() => {
        const getUsers= async () => {
            const response = await axios.get(`https://api.github.com/users/${name}`);
            setUserDataSet(response.data)
        };
        getUsers();
      }, []);

    return (
        <PageSection>
          <p>Github Login : {userdataset.login}</p>
          <p>ID: {userdataset.id}</p>
          <p>Github UserName: {userdataset.name}</p>
          <p>followers : {userdataset.followers}</p>
        </PageSection>
    )

}

export {UserDetails}