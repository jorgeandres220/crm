import React from 'react';
import ReactDOM from 'react-dom';
import CompanyContainer from './company/CompanyContainer.jsx';
import ContactContainer from './contact/ContactContainer.jsx';

import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue700, yellowA700} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: blue700,
        accent1Color: yellowA700
    }
  });

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar
        title="CRM"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
    <Tabs>
    <Tab label="Companies" >
    <CompanyContainer />
    </Tab>
    <Tab label="Contact" >
    <ContactContainer />
    </Tab>
    </Tabs>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);