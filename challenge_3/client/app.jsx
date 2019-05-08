class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      accountInfo: {},
      addressInfo: {},
      billingInfo: {}
    };

    this.onCheckoutButtonClick = this.onCheckoutButtonClick.bind(this);
    this.onFormOneSubmit = this.onFormOneSubmit.bind(this);
  }

  onCheckoutButtonClick (event) {
    event.preventDefault();
    this.setState({
      currentStep: 1,
      accountInfo: {},
      addressInfo: {},
      billingInfo: {}
    });
  }

  onFormOneSubmit (formContents) {
    this.setState({
      currentStep: 2,
      accountInfo: formContents,
      addressInfo: {},
      billingInfo: {}
    })
  }

  render() {
    if (this.state.currentStep === 0) {
      return (
        <div>
          <CheckoutButton onCheckoutButtonClick={this.onCheckoutButtonClick} />
        </div>
      )
    }

    if (this.state.currentStep === 1) {
      return (
        <div>
          <FormOne onFormOneSubmit={this.onFormOneSubmit}/>
        </div>
      )
    }

    if (this.state.currentStep === 2) {
      return (
        <div>
          Test Form 1 Button Click
        </div>
      )
    }
  }
}

var CheckoutButton = (props) => (
  <button onClick={props.onCheckoutButtonClick}>Checkout</button>
)

class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    })

    this.onNextButtonClick = this.onNextButtonClick.bind(this);
  }

  onNextButtonClick (event) {
    event.preventDefault();
    this.props.onFormOneSubmit(this.state);
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">Name: </label>
            <input 
              type="text" 
              name="name" 
              onChange={this.handleChange} />
              <br></br>
          <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email" 
              onChange={this.handleChange} />
              <br></br>
          <label htmlFor="password">Password: </label>
            <input
              type="text"
              name="password"
              onChange={this.handleChange} />
        </form>
        <button onClick={this.onNextButtonClick}>Next</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));