import React from 'react';
import { marked } from 'marked';
import parse from 'html-react-parser';

marked.use({
  breaks: true,
});

class MarkDown extends React.Component {
    constructor(props) {
      super(props);
      let outputText = marked.parse(props.test);
      // console.log(outputText)
      this.state = {
        input: props.test,
        markInput: outputText
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
    }
    handleChange(event) { 
      let outputText = marked.parse(event.target.value);  
      this.setState({
        input: event.target.value,
        markInput: outputText
      });
    }
    handleDelete(event) {
      this.setState({
        input: '',
        markInput: '' });
      event.preventDefault()
    }
    render() {
      return (
        <div className='container-fluid bg-secondary-subtle'>
            <button className='btn btn-success my-1 ms-5' onClick={this.handleDelete}>Delete text</button>
            <div className='row m-1'>
              <div className='col-sm-6'>
                <div className='row vh-100'>
                  <textarea id='editor' className='text-body-emphasis py-3 font-monospace' value={this.state.input} onChange={this.handleChange} />
                </div> 
              </div>
              <div className='col-sm-6 bg-secondary-subtle mt-2 mt-sm-0' id='preview'>{parse(this.state.markInput)}</div>
            </div>
        </div>
      );
    }
  }

export default MarkDown;