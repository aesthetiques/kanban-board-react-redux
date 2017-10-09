import React from 'react'

class CategoryForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      title: props.category ? props.category.title : '', 
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({ title: e.target.value })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onComplete(Object.assign({}, this.state))
  }


  render(){
    return(
      <form className="category-form">
        <input
          type="text"
          name="title"
          placeholder="enter a title"
          value={this.state.title}
          onChange={this.handleChange}/>

          <button type="submit" onClick={this.handleSubmit}>{this.props.buttonText}</button>
      </form>
    )
  }

}

//this is just a normal component, like we've seen in the past,
//we don't need to map out anything to this commponent
export default CategoryForm