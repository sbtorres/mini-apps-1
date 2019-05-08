class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentStep: 0};

    this.onCheckoutButtonClick = this.onCheckoutButtonClick.bind(this);
  }

  onCheckoutButtonClick () {
    console.log('clicked');
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
        <div>Test button functionality</div>
      )
    }
  }
}

var CheckoutButton = (props) => (
  <button onClick={props.onCheckoutButtonClick}>Checkout</button>
)

ReactDOM.render(<App />, document.getElementById("app"));