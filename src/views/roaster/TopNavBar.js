import React from 'react'
import { Button,Nav,NavDropdown,Navbar,Form,FormControl } from 'react-bootstrap';

const TopNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">ROASTER</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link> */}
      <NavDropdown title="Staff" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Display Staff</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Display Staff by Role</NavDropdown.Item>
        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
      <NavDropdown title="Day Groups" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Display Day Groups</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Create New Day Group</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Set Number Of Days</NavDropdown.Item>
        {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
      <NavDropdown title="Shifts" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Display Shifts</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Create New SHift</NavDropdown.Item>
        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
      <NavDropdown title="Skill Mix" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Display Skill Mix Rules</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Create Skill Mix Rules</NavDropdown.Item>
        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
      <NavDropdown title="Shift Sequence" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Display Shift Sequence</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"> Create New Shift Sequence</NavDropdown.Item>
        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
      <NavDropdown title="Leave" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Display Leave</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Create New Lave</NavDropdown.Item>
        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
      <NavDropdown title="Staff Requests" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Display Staff Requests</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">create Staff Request</NavDropdown.Item>
        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
        <NavDropdown title="Roaster" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Display Roaster By Day</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Display Roaster By Staff</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Select Roaster Period</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Generate New Roaster</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Download Roaster As CSV File</NavDropdown.Item>
        {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>

</Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  )
}

export default TopNavBar;






