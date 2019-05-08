class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <CheckoutButton></CheckoutButton>
      </div>
    )
  }
}

var CheckoutButton = (props) => (
  <button>Checkout</button>
)

ReactDOM.render(<App />, document.getElementById("app"));