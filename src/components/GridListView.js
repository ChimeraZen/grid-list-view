import React, { Component } from 'react'

import './css/GridListView.css'

import GridListViewProvider from './GridListViewProvider'
import GridListHeader from './GridListHeader'
import GridListItems from './GridListItems'

export default class GridListView extends Component {
	constructor() {
  	super()
    this.state = {
    	listOptions: {
        isListView: true,
        handleViewChange: (e) => {
          const view = e.target.getAttribute('data-type')
          const isListView = view === 'grid' ? false : true
          
          this.setState((prevState) => {
            return {
              listOptions: {
                ...prevState.listOptions, 
                isListView: isListView
              }
            }
          })
        }
      },
      content: {
        header: 'Categories',
        items: [
          {
            title: 'Archery',
            parent: false						// parent is false if list item is top-level
          },
          {
            title: 'Blacksmithing',
            parent: false
          },
          {
            title: 'Arrowheads',
            parent: 'Archery'
          },
          {
            title: 'Shafts',
            parent: 'Archery'
          },
          {
            title: 'Carbon Fiber',
            parent: 'Shafts'
          },
          {
            title: 'Plastic',
            parent: 'Shafts'
          },
          {
            title: 'Tongs',
            parent: 'Blacksmithing'
          },
          {
            title: 'Hammers',
            parent: 'Blacksmithing'
          },
          {
            title: 'Broadhead',
            parent: 'Arrowheads'
          },
          {
            title: 'Baseball',
            parent: false
          }
        ]
      }
    }
  }
  
	render() {
  	return (
      <GridListViewProvider state={this.state}>
        <div className="grid-list-view">
          <GridListHeader title={this.state.content.header}/>
          <GridListItems />
        </div>
      </GridListViewProvider>
    )
  }
}
