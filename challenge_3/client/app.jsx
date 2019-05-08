class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>TEST REACT</div>
        <div>TEST MORE REACT</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));