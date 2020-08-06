import React from 'react';
import Data from './Employees.json';
import Filter from './Filter';
import Table from './Table/Table';
import './style.css'

export default class AppContainer extends React.Component {
  state = {
    rolefilter: '',
    results: Data,
    noResults: false,
    madeSearch: false,
  };

//   set the filter in the state to what is entered in the input
  handleInputChange = (event) => {
    const search = event.target.name;
    const value = event.target.value;
    this.setState({ [search]: value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const filteredResults = Data.filter(employee => employee.role === this.state.filter);
    // if there are results that match the filter, set the state.results to the new results
    // if no results, noResults is set to true, which is used for conditional rendering
    if (filteredResults.length !== 0) {
        this.setState({results: filteredResults, noResults: false, madeSearch: true});
    } else {
        this.setState({noResults: true});
    }
    // clear the input
    this.setState({filter: ''});
  }

//   this resets the table by setting the state.results back to the original data from the Employee.json.  It also resets the order of the data, if the data has been sorted
  handleTableReset = async (event) => {
      event.preventDefault();
      await this.setState({results: Data, noResults: false, madeSearch: false});
      this.handleIdSort();
  }

  handleNameSort = (event) => {
    event.preventDefault();
    // credit for sorting goes to: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
    let sortedResults = this.state.results.sort((a, b) => a.lastName.localeCompare(b.lastName));
    this.setState({results: sortedResults, noResults: false });
  }

  handleIdSort = () => {
    const sortedResults = this.state.results.sort((a, b) => {return a.id - b.id});
    this.setState({results: sortedResults, noResults: false});
  }

//   Conditional rendering if there are no results that match the filtered search
  renderTable = () => {
      if (this.state.noResults === false) {
          return <Table handleNameSort={this.handleNameSort} handleIdSort={this.handleIdSort} data={this.state.results} />;
      } else if (this.state.noResults === true) {
          return <p>Oops, looks like there were no results...Try a different search.</p>;
      }
  }

  renderTableContentsMessage = () => {
      if (this.state.madeSearch === true) {
          return <h3 className="table-content-message" >All {this.state.results[0].role}s</h3>;
      } else {
          return <h3 className="table-content-message" >All Employees</h3>;
      }
  }

  render() {
    return (
      <div className='container' >
        <Filter 
        handleFormSubmit={this.handleFormSubmit} 
        handleInputChange={this.handleInputChange} 
        filter={this.state.filter} 
        data={this.state.results} 
        handleTableReset={this.handleTableReset} />
        {this.renderTableContentsMessage()}
        {this.renderTable()}
      </div>
    );
  }
}
