import React, { Component } from 'react';
import queryString from 'query-string';

import Controls from '../Controls';
import Counter from '../Counter';
import Publication from '../Publication';

import css from './style.module.css';

export default class Reader extends Component {
  
  componentDidMount() {
    this.changeHistory();
  }

  handleClick = ({ target: { name } }) => {
    this.changeHistory(name);
  }

  changeHistory = (name) => { 
    const { location, history } = this.props;
    const parsedSearch = queryString.parse(location.search);
    if (!parsedSearch.item) parsedSearch.item = 1;
    if (name === "next") parsedSearch.item = +parsedSearch.item + 1;
    if (name === "previous") parsedSearch.item = +parsedSearch.item - 1;

    history.push({
      ...location,
      search: queryString.stringify(parsedSearch),
    });

  }

  render() {
    const { items, location } = this.props;
    let { item } = queryString.parse(location.search);
    if (!item || +item > items.length || +item <= 0) item = 1;

    return (
      <div className={css.Reader}>
        <Controls
          handleClick={this.handleClick}
          currentPage={+item}
          lastPage={items.length}
        />
        <Counter
          currentPage={+item}
          lastPage={items.length}
        />
        <Publication
          item={items[item - 1]}
        />
      </div>
    );
  }
}