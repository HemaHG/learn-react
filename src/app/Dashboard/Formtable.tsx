import { PageSection, Title, ToggleGroup } from '@patternfly/react-core';
import { TableIcon } from '@patternfly/react-icons';
import React, {useState} from 'react';
import { Table, TableHeader, TableBody, IRow } from '@patternfly/react-table';
import { Pagination, PaginationVariant, SearchInput } from '@patternfly/react-core';

interface IUserformprops {
    rows: (string[] | IRow)[];
}

const Formtable: React.FunctionComponent<IUserformprops> = ({rows}) => {
    const [searchInputState, setSearchInputState] = useState<string>("");

    const onChangeSearchInput = (value, event) => {
        setSearchInputState(value);
        console.log(searchInputState);
    }

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
            <SearchInput placeholder='Find by name' value={searchInputState} onChange={onChangeSearchInput} ></SearchInput>
            <Pagination itemCount={rows.length} perPage={perPage} page={page} onSetPage={onChangePage} onPerPageSelect={onChangePerPage}>
            <Table cells={columns} rows={UsersPerPage} aria-label="some-table">
                <TableHeader />
                <TableBody />
            </Table>
            </Pagination>
        </PageSection>
    )
}


export { Formtable };