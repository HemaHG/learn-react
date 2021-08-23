import { PageSection, Title, ToggleGroup } from '@patternfly/react-core';
import { TableIcon } from '@patternfly/react-icons';
import React, {useState} from 'react';
import { Table, TableHeader, TableBody, IRow } from '@patternfly/react-table';
import { Pagination, PaginationVariant, SearchInput } from '@patternfly/react-core';
import { Toolbar, ToolbarItem,ToolbarItemProps, ToolbarContent, InputGroup, TextInput, Button, ButtonVariant} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';

interface IUserformprops {
    rows: (string[] | IRow)[];
    searchInputState: string;
    onChangeSearchInput: (value) => void;
}

const Formtable: React.FunctionComponent<IUserformprops> = ({rows,searchInputState, onChangeSearchInput}) => {
    const [perPage, setPerPage] = useState<number>(10);

    const onChangePerPage = (_event, perPage) => {
        setPerPage(perPage);
    }

    const [page, setPage] = useState<number>(1);

    const onChangePage = (_event, pagenumber) => {
        setPage(pagenumber);
    }

    const columns = ['Name', 'Age', 'Gender', 'Favourite Month'];

    const startIndex = (page -1 ) * perPage;

    const UsersPerPage = rows.slice(startIndex, startIndex+perPage);
    
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
                <Pagination itemCount={rows.length} perPage={perPage} page={page} onSetPage={onChangePage} onPerPageSelect={onChangePerPage} >
                </Pagination>
                </ToolbarItem>
                </ToolbarContent>
            </Toolbar>        
            <Table cells={columns} rows={UsersPerPage} aria-label="some-table">
                <TableHeader />
                <TableBody />
            </Table>
            
        </PageSection>
    )
}


export { Formtable };