import React from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

class ContactContainer extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        contacts: []
      }
  }

  componentDidMount() {
    fetch('http://localhost:3000/contact').then((response) => {
        return response.json()
    }).then((contacts) => {
        console.log(contacts);
      this.setState({ contacts: contacts })
    })
  }

  render() {
		var contactRows = (this.state.contacts.map((e) => (
			<TableRow key={e.id} id={e.id}>
					<TableRowColumn>{e.id}</TableRowColumn>
					<TableRowColumn>{e.name}</TableRowColumn>
					<TableRowColumn>{e.email}</TableRowColumn>
					<TableRowColumn>{e.phone}</TableRowColumn>
					<TableRowColumn>{e.position}</TableRowColumn>
				</TableRow>
		)))

    return (
			<Table selectable={false}>
				<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
				<TableRow>
					<TableHeaderColumn>ID</TableHeaderColumn>
					<TableHeaderColumn>Name</TableHeaderColumn>
					<TableHeaderColumn>E-mail</TableHeaderColumn>
					<TableHeaderColumn>Phone</TableHeaderColumn>
					<TableHeaderColumn>Position</TableHeaderColumn>
				</TableRow>
				</TableHeader>
				<TableBody displayRowCheckbox={false} stripedRows={true}>
					{contactRows}
				</TableBody>
			</Table>)
  }
}

export default ContactContainer;