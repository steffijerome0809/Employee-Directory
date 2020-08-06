import React from 'react';
import Data from './Employees.json';
import SearchForm from './SearchForm';
import Table from './Table/Table';
import './style.css';

export default class AppContainer extends React.Component {
  state = {
    rolefilter: '',
    users: Data,
    hasnousers: false,
    madeSearch: false,
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
      (employee) => employee.role === this.state.filter
    );
    // if there are users that match the filter, set the state.users to the new users
    // if no users, hasnousers is set to true, which is used for conditional rendering
    if (filteredusers.length !== 0) {
      this.setState({
        users: filteredusers,
        hasnousers: false,
        madeSearch: true,
      });
    } else {
      this.setState({ hasnousers: true });
    }
    // clear the input
    this.setState({ filter: '' });
  };

  //   this resets the table by setting the state.users back to the original data from the Employee.json.  It also resets the order of the data, if the data has been sorted
  tabledatadisplay = async (event) => {
    event.preventDefault();
    await this.setState({ users: Data, hasnousers: false, madeSearch: false });
    this.handleIdSort();
  };

  handleNameSort = (event) => {
    event.preventDefault();

    let sortedusers = this.state.users.sort((a, b) =>
      a.lastName.localeCompare(b.lastName)
    );
    this.setState({ users: sortedusers, hasnousers: false });
  };

  handleIdSort = () => {
    const sortedusers = this.state.users.sort((a, b) => {
      return a.id - b.id;
    });
    this.setState({ users: sortedusers, hasnousers: false });
  };

  //   Conditional rendering if there are no users that match the filtered search
  renderTable = () => {
    if (this.state.hasnousers === false) {
      return (
        <Table
          handleNameSort={this.handleNameSort}
          handleIdSort={this.handleIdSort}
          data={this.state.users}
        />
      );
    } else if (this.state.hasnousers === true) {
      return (
        <p>Oops, looks like there were no users...Try a different search.</p>
      );
    }
  };

  renderTableContentsMessage = () => {
    if (this.state.madeSearch === true) {
      return (
        <h3 className='table-content-message'>
          All {this.state.users[0].role}s
        </h3>
      );
    } else {
      return <h3 className='table-content-message'>All Employees</h3>;
    }
  };

  render() {
    return (
      <div className='container'>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          filter={this.state.filter}
          data={this.state.users}
          tabledatadisplay={this.tabledatadisplay}
        />
        {this.renderTableContentsMessage()}
        {this.renderTable()}
      </div>
    );
  }
}
