import { Component } from 'react';

const name = 'Child1';

class Child1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
    };
  }

  componentWillUpdate() {
    console.log(`${name} - componentWillUpdate`);
  }

  componentDidUpdate() {
    console.log(`${name} - componentDidUpdate`);
  }

  componentDidMount() {
    // console.log('Child1调用setState');
    // this.setState({
    //   index: this.state.index + 1,
    // });
    // console.log('state', this.state.index);

    // console.log('Child1调用setState');
    // this.setState({
    //   index: this.state.index + 1,
    // });
    // console.log('state', this.state.index);

    // setTimeout(() => {
    //   console.log('Child1调用setState');
    //   this.setState({
    //     index: this.state.index + 1,
    //   });
    //   console.log('state', this.state.index);

    //   console.log('Child1调用setState');
    //   this.setState({
    //     index: this.state.index + 1,
    //   });
    //   console.log('state', this.state.index);
    // }, 0);

    this.setState({ index: this.state.index + 1 }, () => {
      console.log(this.state.index);
    });
    this.setState({ index: this.state.index + 1 }, () => {
      console.log(this.state.index);
    });
    // this.setState({ index: '你好啊' }, () => {
    //   console.log(this.state.index);
    // });
  }

  render() {
    console.log(`${name} - render`);
    return <div>Child1</div>;
  }
}

class Child2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
    };
  }

  componentWillUpdate() {
    console.log('Child2 - componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('Child2 - componentDidUpdate');
  }

  componentDidMount() {
    // console.log('Child2调用setState');
    // this.setState({
    //   index: this.state.index + 1,
    // });
    // console.log('state', this.state.index);

    // console.log('Child2调用setState');
    // this.setState({
    //   index: this.state.index + 1,
    // });
    // console.log('state', this.state.index);

    // setTimeout(() => {
    //   console.log('Child2调用setState');
    //   this.setState({
    //     index: this.state.index + 1,
    //   });
    //   console.log('state', this.state.index);

    //   console.log('Child2调用setState');
    //   this.setState({
    //     index: this.state.index + 1,
    //   });
    //   console.log('state', this.state.index);
    // }, 0);

    this.setState(
      (preState) => ({ index: preState.index + 1 }),
      () => {
        console.log(this.state.index);
      },
    );
    this.setState(
      (preState) => ({ index: preState.index + 1 }),
      () => {
        console.log(this.state.index);
      },
    );
  }

  render() {
    console.log('Child2 - render');
    return <div>Child2</div>;
  }
}

class SetState extends Component {
  componentDidMount() {
    console.log('parent componentDidMount');
  }

  render() {
    return (
      <div>
        <Child1 />
        <Child2 />
      </div>
    );
  }
}

export default SetState;
