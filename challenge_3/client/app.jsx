class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentStep: 0};

    this.onCheckoutButtonClick = this.onCheckoutButtonClick.bind(this);
  }

  onCheckoutButtonClick (event) {
    event.preventDefault();
    this.setState({currentStep: 1});
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
          <FormOne />
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
  }

  render() {
    return (
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
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));