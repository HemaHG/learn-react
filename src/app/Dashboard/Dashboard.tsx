import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { Userform } from './Userform';

const Dashboard: React.FunctionComponent = () => (
  <PageSection>
    <Userform />
  </PageSection>
)

export { Dashboard };
