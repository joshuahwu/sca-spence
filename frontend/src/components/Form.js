import React from 'react'

const fields = ['Sample','Gene'];

class FieldForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    //this.state = {temperature: ''};
  }

  handleChange(e) {
    this.props.onIdChange(e.target.value);
  }

  render() {
    const field = this.props.field
    const ids = this.props.ids
    return(
      <fieldset>
        <legend>Enter {field} IDs:</legend>
        <input 
          value = {ids}
          onChange = {this.handleChange} />
      </fieldset>
    )
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleIdChange = this.handleIdChange.bind(this);
    this.state = {ids: '', field: 'Sample'};
  }

  handleIdChange(ids) {
    this.setState({ids});
  }

  render() {
    const ids = this.state.ids;
    return(
        fields.map((field) => 
          <FieldForm
            field = {field}
            ids = {ids}
            onIdChange = {this.handleIdChange}/>
        )
      
    );
  }
}

export default Form