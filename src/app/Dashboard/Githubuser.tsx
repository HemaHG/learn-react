import { Title } from '@patternfly/react-core';
import { PageSection, SearchInput, Pagination, PaginationProps, PaginationTitles  } from '@patternfly/react-core';
import React, {useState} from 'react';
import axios from 'axios';
import { Table, TableHeader, TableBody, IRow } from '@patternfly/react-table';



const Githubuser: React.FunctionComponent = () => {
    const [githubUsers, setGithubUsers] = useState([]);
    
    React.useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get('https://api.github.com/users');
            setGithubUsers(response.data);
        };
        getUsers();
      }, []);

      const columns = ['Login', 'ID' ];

      const rows = () => {
        const tabledata: (string[] | IRow)[] = [];
        UsersPerPage.map((user) => {
            tabledata.push({
                cells: [user.login, user.id]
            })
        });    
        return tabledata;
    }

    const [perPage, setPerPage] = useState<number>(10);

    const onChangePerPage = (_event, perPage) => {
        setPerPage(perPage);
    }

    const [searchInputState, setSearchInputState] = useState<string>("");

    const onChangeSearchInput = (value) => {
        setSearchInputState(value);
    }

    const [page, setPage] = useState<number>(1);

    const onChangePage = (_event, pagenumber) => {
        setPage(pagenumber);
    }

    const startIndex = (page -1 ) * perPage;

    const UsersPerPage = githubUsers.slice(startIndex, startIndex+perPage);

    return (
        <PageSection>
            <SearchInput placeholder='Find by name' value={searchInputState} onChange={onChangeSearchInput}></SearchInput>
            <Pagination itemCount={githubUsers.length} perPage={perPage} page={page} onSetPage={onChangePage} onPerPageSelect={onChangePerPage}>
            <Table cells={columns} rows={rows()} aria-label="Github user table">
                <TableHeader />
                <TableBody />
            </Table>
            </Pagination>
            </PageSection>
    )
}


export { Githubuser };