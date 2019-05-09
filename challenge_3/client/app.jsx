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
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onPurchaseClick = this.onPurchaseClick.bind(this);
    this.onSummaryConfirmation = this.onSummaryConfirmation.bind(this);
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

  onFormSubmit (formContents, name) {
    for(let key in formContents) {
      if(formContents[key] === '') {
        if (key === 'addLine2') {
          continue;
        }
        alert('Please fill out all of the inputs');
        return;
      }
    }

    let currentForm = this.state.currentStep;
    currentForm++;
    this.setState({
      currentStep: currentForm,
      [name]: formContents
    })
  }

  onSummaryConfirmation (currentState) {
    let currentForm = this.state.currentStep;
    currentForm++;
    this.setState({
      currentStep: currentForm,
    })
  }

  onPurchaseClick(event) {
    axios.post('http://localhost:2500/makePurchase', this.state)
      .then(this.setState({
        currentStep: 0,
        accountInfo: {},
        addressInfo: {},
        billingInfo: {}
      })) 
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
          <FormOne onFormSubmit={this.onFormSubmit}/>
        </div>
      )
    }

    if (this.state.currentStep === 2) {
      return (
        <div>
          <FormTwo onFormSubmit={this.onFormSubmit}/>
        </div>
      )
    }

    if (this.state.currentStep === 3) {
      return (
        <div>
          <FormThree onFormSubmit={this.onFormSubmit}/>
        </div>
      )
    }

    if (this.state.currentStep === 4) {
      return (
        <div>
          <SummaryPage onSummaryConfirmation={this.onSummaryConfirmation} summary={this.state}/>
        </div>
      )
    }

    if (this.state.currentStep === 5) {
      return (
        <div>
          <button onClick={this.onPurchaseClick}>Purchase!</button>
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
    this.props.onFormSubmit(this.state, event.target.name);
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
              type="password"
              name="password"
              onChange={this.handleChange} />
        </form>
        <button name="accountInfo" onClick={this.onNextButtonClick}>Next</button>
      </div>
    )
  }
}

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addLine1: '',
      addLine2: '',
      city: '',
      state: '',
      shipZip: '',
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
    this.props.onFormSubmit(this.state, event.target.name);
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="addLine1">Address Line 1: </label>
            <input 
              type="text" 
              name="addLine1" 
              onChange={this.handleChange} />
              <br></br>
          <label htmlFor="addLine2">Address Line 2: </label>
            <input
              type="text"
              name="addLine2" 
              onChange={this.handleChange} />
              <br></br>
          <label htmlFor="city">City: </label>
            <input
              type="text"
              name="city"
              onChange={this.handleChange} />
              <br></br>
          <label htmlFor="state">State: </label>
            <input
              type="text"
              name="state" 
              onChange={this.handleChange} />
              <br></br>
          <label htmlFor="shipZip">Zip Code: </label>
            <input
              type="text"
              name="shipZip" 
              onChange={this.handleChange} />
        </form>
        <button name="addressInfo" onClick={this.onNextButtonClick}>Next</button>
      </div>
    )
  }
}

class FormThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCardNum: '',
      expDate: '',
      billingZip: '',
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
    this.props.onFormSubmit(this.state, event.target.name);
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="creditCardNum">Credit Card Number: </label>
            <input 
              type="text" 
              name="creditCardNum" 
              onChange={this.handleChange} />
              <br></br>
          <label htmlFor="expDate">Expiration Date: </label>
            <input
              type="text"
              name="expDate" 
              onChange={this.handleChange} />
              <br></br>
          <label htmlFor="billingZip">Billing Zip Code: </label>
            <input
              type="text"
              name="billingZip"
              onChange={this.handleChange} />
        </form>
        <button name="billingInfo" onClick={this.onNextButtonClick}>Next</button>
      </div>
    )
  }
}

class SummaryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.summary;

    this.onNextButtonClick = this.onNextButtonClick.bind(this);
  }

  onNextButtonClick (event) {
    event.preventDefault();
    this.props.onSummaryConfirmation(this.state);
  }

  render() {
    return(
      <div>
        <div>Name: {this.props.summary.accountInfo.name}</div>
        <div>Email: {this.props.summary.accountInfo.email}</div>
        <div>Address Line 1: {this.props.summary.addressInfo.addLine1}</div>
        <div>Address Line 2: {this.props.summary.addressInfo.addLine2}</div>
        <div>City: {this.props.summary.addressInfo.city}</div>
        <div>State: {this.props.summary.addressInfo.state}</div>
        <div>Shipping Zip Code: {this.props.summary.addressInfo.shipZip}</div>
        <div>Credit Card Number: {this.props.summary.billingInfo.creditCardNum}</div>
        <div>Expiration Date: {this.props.summary.billingInfo.expDate}</div>
        <div>Billing Zip Code: {this.props.summary.billingInfo.billingZip}</div>
        <button name="summaryPage" onClick={this.onNextButtonClick}>Next</button>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("app"));