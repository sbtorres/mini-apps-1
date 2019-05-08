class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentStep: 0};

    this.onCheckoutButtonClick = this.onCheckoutButtonClick.bind(this);
  }

  onCheckoutButtonClick () {
    this.setState({currentStep: 1});
  }

  render() {
    if (this.state.currentStep === 0) {
      return (
        <div>
          <CheckoutButton onCheckoutButtonClick={this.onCheckoutButtonClick}></CheckoutButton>
        </div>
      )
    }

    if (this.state.currentStep === 1) {
      return (
        <form>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name"></input><br></br>
          <label htmlFor="email">Email: </label>
          <input type="text" name="email"></input><br></br>
          <label htmlFor="password">Password: </label>
          <input type="text" name="password"></input>
        </form>
      )
    }
  }
}

var CheckoutButton = (props) => (
  <button onClick={props.onCheckoutButtonClick}>Checkout</button>
)

ReactDOM.render(<App />, document.getElementById("app"));