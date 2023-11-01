import React from 'react';
import each from 'lodash/each'
import Select from 'react-select';

import './styles/cards-container.css';
import './styles/search.css';

import Card from './MainCards';
import orgList from './ListOrgs';

export default class OrgsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: [],
      filterList: this.sortArrayRandom(orgList)
    }

    this.setTags = new Set();
    this.filterOptions = [];
    this.valueList = [];

    for (let i = 0; i < orgList.length; i++) {

      if (orgList[i].tags) {

        orgList[i].tags.forEach(tag => {

          orgList[i].tags.sort()
          this.setTags.add(tag.toLowerCase())
        })
      }
    }

    this.setTags.forEach(v => this.filterOptions.push({ value: v, label: v }));
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSelectChange(value) {

    this.value = value;
    this.setState({ value });
    this.handleFilterListUpdate(value);
  }

  handleFilterListUpdate(value) {

    let updatedList = [];

    // If no filters
    if ((!value || value.length === 0) && (!this.inputValue || this.inputValue.length === 0)) {
      return this.setState({ filterList: this.sortArrayRandom(orgList) });
    }

    // If tags filter applied
    if (value && value.length > 0) {
      const valueList = [];

      value.map(v => {
        return valueList.push(v.value)
      });

      each(orgList, (project) => {

        if (!project.tags) return;

        let lowerCaseTags = project.tags.map(v => v.toLowerCase())
        if (valueList.every(v => lowerCaseTags.includes(v))) {

          updatedList.push(project);
        }
      })
    }

    // If search input value is not empty
    if (this.inputValue && this.inputValue.length > 0) {

      const searchedList = []
      each(((updatedList.length > 0) ? updatedList : orgList), (project) => {

        if (project.name.toLowerCase().includes(this.inputValue)
          || project.description.toLowerCase().includes(this.inputValue)
          || project.tags.toString().toLowerCase().includes(this.inputValue)) {

          searchedList.push(project)
        }
      });

      updatedList = searchedList;
    }

    this.setState({ filterList: updatedList });
  }

  // Search input handler
  handleChange(event) {

    this.inputValue = event.currentTarget.value;

    this.inputValue = this.inputValue.trim();
    this.inputValue = this.inputValue.toLowerCase();

    this.handleFilterListUpdate(this.value)
  }

  sortArrayRandom(array){
    if(Array.isArray(array)){
      return array.sort(()=>0.5-Math.random())
    }
    return array
  }

  render() {

    return (
      <div>
        <div id='container'>
          <div className='firstcontainer'>
            <input id='search' type='text' name='search' placeholder='Search ...' onChange={this.handleChange} aria-label='Search'/>
          </div>
          <div id="tag-selector-container" className='firstcontainer'>
            <Select
              name='tag-selector'
              value={this.state.value}
              onChange={this.handleSelectChange}
              options={this.filterOptions}
              multi={true}
              placeholder={<div className='filter-placeholder-text'>Select</div>}
              aria-labelledby='tag-selector-container'
            />
          </div>
        </div>
        <section id='project-list' className='containerLayout'>
          {this.state.filterList.map((item, key) => {
            return (
              <Card
                key={key}
                name={item.name}
                logoLink={item.imageSrc}
                mainLink={item.mainLink}
                website={item.website}
                description={item.description}
                tags={item.tags}
                className='testing-testing'
              />
            );
          })}
        </section>
      </div>
    );
  }
}
