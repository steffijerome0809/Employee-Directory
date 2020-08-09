import React from 'react';
import Data from './Employees.json';
import SearchForm from './SearchForm';
import Table from './Table/Table';
import './style.css';

export default class AppContainer extends React.Component {
  state = {
    namefilter: '',
    users: Data,
    noUsers: false,
    searched: false,
  };

  //   set the filter in the state to what is entered in the input
  handleInputChange = (event) => {
    const search = event.target.name;
    const value = event.target.value;
    this.setState({ [search]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const filteredusers = Data.filter(
      (employee) => employee.firstName === this.state.namefilter
    );

    if (filteredusers.length !== 0) {
      this.setState({
        users: filteredusers,
        noUsers: false,
        searched: true,
      });
    } else {
      this.setState({ noUsers: true });
    }
    // clear the input
    this.setState({ namefilter: '' });
  };

  //   this resets the table by setting the state.users back to the original data from the Employee.json.  It also resets the order of the data, if the data has been sorted
  tabledatadisplay = async (event) => {
    event.preventDefault();
    await this.setState({ users: Data, noUsers: false, searched: false });
    this.handleIdSort();
  };

  handleRoleSort = (event) => {
    event.preventDefault();

    let sortedusers = this.state.users.sort((a, b) =>
      a.role.localeCompare(b.role)
    );
    this.setState({ users: sortedusers, noUsers: false });
  };

  handleLastNameSort = (event) => {
    event.preventDefault();

    let sortedusers = this.state.users.sort((a, b) =>
      a.lastName.localeCompare(b.lastName)
    );
    this.setState({ users: sortedusers, noUsers: false });
  };

  handleSortState = (event) => {
    event.preventDefault();

    let sortedusers = this.state.users.sort((a, b) =>
      a.state.localeCompare(b.state)
    );
    this.setState({ users: sortedusers, noUsers: false });
  };

  handleIdSort = () => {
    const sortedusers = this.state.users.sort((a, b) => {
      return a.id - b.id;
    });
    this.setState({ users: sortedusers, noUsers: false });
  };

  renderTable = () => {
    if (this.state.noUsers === false) {
      return (
        <Table
          handleIdSort={this.handleIdSort}
          handleRoleSort={this.handleRoleSort}
          handleLastNameSort={this.handleLastNameSort}
          handleSortState={this.handleSortState}
          data={this.state.users}
        />
      );
    } else if (this.state.noUsers === true) {
      return <p>There were no results,Search Again..</p>;
    }
  };

  render() {
    return (
      <div className='container'>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          filter={this.state.namefilter}
          data={this.state.users}
          tabledatadisplay={this.tabledatadisplay}
        />
        {this.renderTable()}
      </div>
    );
  }
}
