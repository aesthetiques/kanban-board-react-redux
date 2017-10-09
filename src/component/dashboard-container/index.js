import React from 'react'
import {connect} from 'react-redux'
import {
  categoryCreate,
  categoryUpdate,
  categoryDelete
} from '../../action/category-actions'
import CategoryForm from '../category-form'

class DashboardContainer extends React.Component{
  componentDidMount(){
    console.log('__DASHBOARD__', this)

    this.props.categoryCreate({title: 'Star Wars'})
    this.props.categoryCreate({title: 'Dune'})
    this.props.categoryCreate({title: 'Star Trek'})
  }

  render(){
    return (
      <main className="main-conent">
        <h2>Dashboard</h2>

        <CategoryForm
          buttonText="create"
          onComplete={this.props.categoryCreate}/>

          {this.props.categories.length ?
            <div>
            {this.props.categories.map(category => {
              return <div key={category.id}>
                <h2>{category.title}</h2>
                <h3>{category.id}</h3>
                </div>
            })}
            </div>
          :
          <h2>add some categories, you lazy bum</h2>
          }
          {/* rende list of category items HERE */}
      </main>
    )
  }
}

//we get the state from redux, and it becomes the categories that live on props of the dashboard container
const mapStateToProps = state => {
  return { categories: state }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)