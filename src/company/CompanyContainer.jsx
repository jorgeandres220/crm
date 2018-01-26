import React from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

class CompanyContainer extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        companies: []
      }
  }

  componentDidMount() {
    fetch('http://localhost:3000/company').then((response) => {
        return response.json()
    }).then((companies) => {
        console.log(companies);
      this.setState({ companies: companies })
    })
  }

  render() {
		var contactRows = (this.state.companies.map((e) => (
			<TableRow key={e.id} id={e.id}>
					<TableRowColumn>{e.id}</TableRowColumn>
					<TableRowColumn>{e.name}</TableRowColumn>
					<TableRowColumn>{e.address}</TableRowColumn>
					<TableRowColumn>{e.phone}</TableRowColumn>
				</TableRow>
		)))

    return (
			<Table selectable={false}>
				<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
				<TableRow>
					<TableHeaderColumn>ID</TableHeaderColumn>
					<TableHeaderColumn>Name</TableHeaderColumn>
					<TableHeaderColumn>Address</TableHeaderColumn>
					<TableHeaderColumn>Phone</TableHeaderColumn>
				</TableRow>
				</TableHeader>
				<TableBody displayRowCheckbox={false} stripedRows={true}>
					{contactRows}
				</TableBody>
			</Table>)
  }
}

export default CompanyContainer;