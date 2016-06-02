'use strict';

var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.map(clearInterval);
  }
};
var ExampleApplication = React.createClass({
    mixins: [SetIntervalMixin], // 引用 mixin

	getInitialState: function() {
		return {
			timea:this.props.data
		};
	},
	componentDidMount: function() {
	  this.setInterval(this.handleAuthorChange, 100); // 调用 mixin 的方法
	},
	handleAuthorChange: function(e) {
	  var timeb=new Date().getTime()-this.props.data;
	      timeb = Math.round(timeb / 100);
	      timeb = timeb / 10 +(timeb % 10 ? '' : '.0' );
	  	  this.setState({timea:timeb});
	},

	render() {
		var message =
		  '反应过来已经成功运行了' + this.state.timea + ' 秒。'
		return (
			<p>{message}</p>
		);
	}
})
ReactDOM.render( 
	<ExampleApplication data = {new Date().getTime()} val={500}/>, 
	document.getElementById('container')
);




var ClickNum=React.createClass({
	getInitialState: function(){
		return {
			clickNum:0
		}
	},
	clickevent: function(){
		var clickNum=this.state.clickNum+1
		this.setState(function(){
			return {
				clickNum:clickNum
			}
		});
	},
	render(){
		return(
			<div onClick={this.clickevent}>点击数量：{this.state.clickNum}</div>
		);
	}
})
ReactDOM.render( 
	<ClickNum clickNum={1} />, 
	document.getElementById('clickNum')
);

// Simple pure-React component so we don't have to remember
// Bootstrap's classes
var BootstrapButton = React.createClass({
  render: function() {
    return (
      <a {...this.props}
        href="javascript:;"
        role="button"
        className={(this.props.className || '') + ' btn'} />
    );
  }
});

var BootstrapModal = React.createClass({
	//以下两种方法都是我们需要的唯一的地方
	//整合引导或用jQuery的组件生命周期方法。
  componentDidMount: function() {
	//当添加组件，把它变成一个模式
    $(this.refs.root).modal({backdrop: 'static', keyboard: false, show: false});
  },
  componentWillUnmount: function() {
    $(this.refs.root).off('hidden', this.handleHidden);
  },
  close: function() {
    $(this.refs.root).modal('hide');
  },
  open: function() {
    $(this.refs.root).modal('show');
  },
  render: function() {
    var confirmButton = null;
    var cancelButton = null;

    if (this.props.confirm) {
      confirmButton = (
        <BootstrapButton
          onClick={this.handleConfirm}
          className="btn-primary">
          {this.props.confirm}
        </BootstrapButton>
      );
    }
    if (this.props.cancel) {
      cancelButton = (
        <BootstrapButton onClick={this.handleCancel} className="btn-default">
          {this.props.cancel}
        </BootstrapButton>
      );
    }

    return (
      <div className="modal fade" ref="root">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                onClick={this.handleCancel}>
                &times;
              </button>
              <h3>{this.props.title}</h3>
            </div>
            <div className="modal-body">
              {this.props.children}
            </div>
            <div className="modal-footer">
              {cancelButton}
              {confirmButton}
            </div>
          </div>
        </div>
      </div>
    );
  },
  handleCancel: function() {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  },
  handleConfirm: function() {
    if (this.props.onConfirm) {
      this.props.onConfirm();
    }
  }
});

var Example = React.createClass({
  handleCancel: function() {
    if (confirm('Are you sure you want to cancel?')) {
      this.refs.modal.close();
    }
  },
  render: function() {
    var modal = null;
    modal = (
      <BootstrapModal
        ref="modal"
        confirm="OK"
        cancel="Cancel"
        onCancel={this.handleCancel}
        onConfirm={this.closeModal}
        title="Hello, Bootstrap!">
          This is a React component powered by jQuery and Bootstrap!
      </BootstrapModal>
    );
    return (
      <div className="example">
        {modal}
        <BootstrapButton onClick={this.openModal} className="btn-default">
          Open modal
        </BootstrapButton>
      </div>
    );
  },
  openModal: function() {
    this.refs.modal.open();
  },
  closeModal: function() {
    this.refs.modal.close();
  }
});

ReactDOM.render(<Example />, document.getElementById('jqueryexample'));
