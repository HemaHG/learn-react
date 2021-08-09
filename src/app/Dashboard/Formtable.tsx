import { PageSection, Title, ToggleGroup } from '@patternfly/react-core';
import { TableIcon } from '@patternfly/react-icons';
import * as React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';
import { ProgressPlugin } from 'webpack';


const Formtable: React.FunctionComponent<UseFormprops> = () => {
    const columns = ['Name', 'Age', 'Gender', 'Favourite Month'];

    const rows = [['hema', '23', 'female', 'November'],
    ['Bharathi', '26', 'female', 'july']];

    return (
        <PageSection>
            <Title headingLevel="h1" size="4xl"> times</Title>
            <Table cells={columns} rows={rows} aria-label="some-table">
                <TableHeader />
                <TableBody />
            </Table>
        </PageSection>
    )
}


export { Formtable };