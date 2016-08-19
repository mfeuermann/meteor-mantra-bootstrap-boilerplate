import React from 'react';
import Formsy from 'formsy-react';

const RadioGroup = React.createClass({

  mixins: [ Formsy.Mixin ],

  componentDidMount() {
    const value = this.props.value;
    this.setValue(value);
    this.setState({ value });
  },

  changeValue(value) {
    this.setValue(value);
    this.setState({ value });
  },

  render() {
    const className = 'form-group' + (this.props.className || ' ') +
      (this.showRequired() ? 'required' : this.showError() ? 'error' : '');
    const errorMessage = this.getErrorMessage();

    const { name, title, items } = this.props;
    return (
      <div className={className}>
        <label htmlFor={name}>&nbsp;{title}&nbsp;</label>
        <div>
        {items.map((item, i) => (
          <span key={i} style={{marginRight: '10px'}}>
            <input
              type="radio"
              name={name}
              onChange={this.changeValue.bind(this, item.value)}
              checked={this.state.value === item.value}
            />
          <span style={{marginLeft: '4px'}}>{item.title}</span>
          </span>
        ))
        }
        </div>
        <span className='validation-error'>{errorMessage}</span>
      </div>
    );
  }

});

export default RadioGroup;
