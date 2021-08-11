import { PageSection, Title, ToggleGroup } from '@patternfly/react-core';
import { TableIcon } from '@patternfly/react-icons';
import * as React from 'react';
import { Table, TableHeader, TableBody, IRow } from '@patternfly/react-table';

interface IUserformprops {
    rows: (string[] | IRow)[];
}

const Formtable: React.FunctionComponent<IUserformprops> = ({rows}) => {
    const columns = ['Name', 'Age', 'Gender', 'Favourite Month'];


    return (
        <PageSection>
            <Table cells={columns} rows={rows} aria-label="some-table">
                <TableHeader />
                <TableBody />
            </Table>
        </PageSection>
    )
}


export { Formtable };