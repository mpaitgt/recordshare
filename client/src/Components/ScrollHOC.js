import React, {useState} from 'react';

// const ScrollHOC = (WrappedComponent) => (props) => {
//   // this.myRef = React.useRef();
//   const [position, setPosition] = useState(0);

//   const onScroll = () => {
//     const scrollY = window.scrollY;
//     // const scrollTop = this.myRef.current.scrollTop;
//     // console.log(`window.scrollY: ${scrollY}, myRef.scrollTop: ${scrollTop}`)
//     // setPosition(scrollTop);
//   }
  
//   return (
//     <WrappedComponent onScroll={onScroll} />
//   );
// } 

// export default ScrollHOC;

function Scroll(WrappedComponent, selectData) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef();
      this.state = { position: 0 };
      this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
      console.log('this works');
      // console.log(this.myRef);
      this.handleRef();
    }

    handleRef = r => {
      this.myRef = r;
      console.log(r);
    }
    
    onScroll = () => {
      // const scrollY = window.scrollY;
      // const scrollTop = this.myRef.current.scrollTop;
      console.log('scrolling');
      // console.log(`window.scrollY: ${scrollY}, myRef.scrollTop: ${scrollTop}`);
      // this.setState({ position: scrollTop });
    }
    
    render() {
      return (
        <WrappedComponent ref={this.myRef} {...this.props} onScroll={this.onScroll} />
      )
    }
  }
}

export default Scroll;