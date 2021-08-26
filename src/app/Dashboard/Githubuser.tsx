import { Title } from '@patternfly/react-core';
import { PageSection, SearchInput, Pagination, PaginationProps, PaginationTitles  } from '@patternfly/react-core';
import React, {useState} from 'react';
import axios from 'axios';
import { Toolbar, ToolbarItem,ToolbarItemProps, ToolbarContent, InputGroup, TextInput, Button, ButtonVariant} from '@patternfly/react-core';
import { Table, TableHeader, TableBody, IRow } from '@patternfly/react-table';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';
import {Link} from 'react-router-dom'


const Githubuser: React.FunctionComponent = () => {
    const [githubUsers, setGithubUsers] = useState([]);
    
    React.useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get(`https://api.github.com/users`);
            setGithubUsers(response.data);
        };
        getUsers();
      }, []);

      const columns = ['Login', 'ID' ];

      const rows = () => {
        const tabledata: (string[] | IRow)[] = [];
        UsersPerPage.filter((user) => user.login.toLowerCase().includes(searchInputState.toLowerCase())).map((user) => {
            tabledata.push({
                cells: [{title: (<Link to={{pathname: `/name/${user.login}`, state: {name: user.login}}} >{user.login}</Link>)}, user.id ]
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
              <Toolbar>
                <ToolbarContent>
                    <ToolbarItem ><InputGroup><TextInput name="textInput1" id="textInput1" type="search" aria-label="search input example"
                     value={searchInputState} onChange={onChangeSearchInput}/>
                        <Button variant={ButtonVariant.control} aria-label="search button for search input">
                        <SearchIcon />
                    </Button>
                </InputGroup> 
                </ToolbarItem >
                <ToolbarItem alignment={{default: 'alignRight'}}>
                <Pagination itemCount={githubUsers.length} perPage={perPage} page={page} onSetPage={onChangePage} onPerPageSelect={onChangePerPage}>
                </Pagination>
                </ToolbarItem>
                </ToolbarContent>
            </Toolbar>                        
            <Table cells={columns} rows={rows()} aria-label="Github user table">
                <TableHeader />
                <TableBody />
            </Table>            
            </PageSection>
    )
}


export { Githubuser };