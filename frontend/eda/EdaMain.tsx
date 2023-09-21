import '@patternfly/patternfly/patternfly-base.css';
import '@patternfly/patternfly/patternfly-charts.css';

import '@patternfly/patternfly/patternfly-charts-theme-dark.css';

import { Outlet } from 'react-router-dom';
import { PageApp } from '../../framework/PageNavigation/PageApp';
import { Login } from '../common/Login';
import '../common/i18n';
import { ActiveEdaUserProvider } from '../common/useActiveUser';
import { EdaMasthead } from './EdaMasthead';
import { useEdaNavigation } from './useEdaNavigation';

export default function EdaMain() {
  const navigation = useEdaNavigation();
  return (
    <PageApp
      login={<Login />}
      root={
        <ActiveEdaUserProvider>
          <Outlet />
        </ActiveEdaUserProvider>
      }
      masthead={<EdaMasthead />}
      navigation={navigation}
    />
  );
}