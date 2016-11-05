import React from 'react';
import $ from 'jquery';

export default class ScrollSnapTop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fixed: false,
      snappingOffset: 0
    };

    if(this.props.snappingOffset) {
      this.state.snappingOffset = this.props.snappingOffset;
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  fixed() {
    let fixed = (this.state.fixed) ? 'fixed' : '';
    return fixed;
  }

  handleScroll() {
    let offsetTop = this.refs.container.offsetTop;
    let scrollTop = $(window).scrollTop();

    let below = offsetTop - scrollTop < this.state.snappingOffset;

    if(below != this.state.fixed) {
      this.setState({
        fixed: below
      });
    }
  }

  render() {
    function setPXValue(n) {
        return n+'px';
    }

    function containerStyle () {
      this.props.style.position = this.fixed();
      this.props.style.top = setPXValue(this.state.snappingOffset);
      return this.props;
    }

    // the container div is used as a reference
    // to get this elements position relative to the scroll-position
    return (
      <div ref='container'>
        <div id={this.props.id} className={this.props.className} style={containerStyle.call(this)}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

ScrollSnapTop.propTypes = {
  snappingOffset: React.PropTypes.number.isRequired
};
