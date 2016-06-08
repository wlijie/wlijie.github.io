import React from 'react'
import { Link } from 'react-router';



var Buttons=React.createClass({
  back:function(){
    this.props.back();
  },
  render (){
    return (
      <div className="check-div form-inline">
        <div className="btn-toolbar" role="toolbar">
            <div className="btn-group">
              <button type="button" className="btn btn-default" onClick={this.back}><span className="glyphicon glyphicon-chevron-left"></span>返 回</button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-success">发 送</button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-default">预 览</button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-default">存草稿</button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-default">取 消</button>
            </div>
        </div>
      </div>
    );
  }
});
var Addressee=React.createClass({
  getInitialState:function(){
    return {
      data:[],
      totalChecked:false,
      placeholder:'WW',
      contactsList:this.props.contactsList,
      hideSwitch:false
    };
  },
  getsFocus: function(){
    this.refs.filterTextInput.focus();
  },
  iptEnter: function(event){
    var top=parseInt(this.refs.positionBox.offsetTop)+25;
    var left=parseInt(this.refs.positionBox.offsetLeft)+60;
    this.setState({
      placeholder:event.target.filterTextInput+"WW",
      top:top,
      left:left,
      hideSwitch:true,
      matchList:event.target.value
    })
  },
  focusEvents: function(event){
    //获取焦点
    this.setState({
      totalChecked:true
    })
    console.log(this.state.contactsList)
  },
  losesFocus: function(){
    //失去焦点
    this.setState({
      totalChecked:false,
    })
  },
  clickEvent: function(event){
    var data=this.state.data;
    var timeb=new Date().getTime();
    var value=event.currentTarget.innerHTML;
    var newSend={
        id:timeb,
        send:value,
    }
    data.push(newSend);
    this.setState({
      data:data,
      hideSwitch:false,
    })
    this.refs.filterTextInput.value=''
  },
  keyCodea: function(event){
    var data=this.state.data;
    var timeb=new Date().getTime();
    var value=event.target.value;
    if (event.keyCode==13){
      var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      if(!reg.test(value)){
        console.log("收件人地址错误")
        return ;
      }
      var newSend={
          id:timeb,
          send:value,
      }
      data.push(newSend);
      event.target.value='';
      this.setState({
        data:data,
        placeholder:'WW',
        hideSwitch:false,
      })
    };
    if(event.keyCode==8 && !value.length){
      data.pop();
      this.setState({
        data:data
      })
    }
  },
  render (){
    var hideSwitch=this.state.hideSwitch ? "block" : "none"
    var stylePos={
      left:this.state.left,
      top:this.state.top,
      display:hideSwitch,
    }
    var rows = [];
    var lastCategory = null;
    this.state.contactsList.forEach(function(product,i) {
      if(product.email.indexOf(this.state.matchList)===-1){
        return;
      }
      rows.push(<tr key={i}><td onClick={this.clickEvent}>{product.email}</td></tr>)

    }.bind(this));
    return (
      <div className={this.state.totalChecked ? "kZ0 fu0 iu2" :"kZ0 fu0"}>
        <label className="fn0">
          <a href="javascript:void(0)" className="nui-txt-link">收件人</a>
          ：
        </label>
        <div className="table-responsive pull-abs" style={stylePos}>
            <table className="table table-bordered table-hover">
               <tbody>
                  {rows}
               </tbody>
            </table>
        </div>
        <div className="dG0">
          <div className="bz0" onClick={this.getsFocus}>
            <div className=" C-multiLineIpt nui-ipt">
              <div className=" nui-editableAddr nui-editableAddr-edit">
                <div className="ipt-box pull-left">
                  {
                    (function(){
                      var rows=[]
                      for (var i = 0;i < this.state.data.length;  i++ ) {
                        rows.push(
                              <span className="bg-success" key={this.state.data[i].id}>{this.state.data[i].send}</span>
                        )
                      }
                      return rows;
                    }.bind(this))()
                  }
                </div>
                <div className="ipt-s pull-left" ref="positionBox">
                  <input 
                    className="nui-editableAddr-ipt nui-ipt-input" 
                    type="text" 
                    onInput={this.iptEnter} 
                    onKeyDown={this.keyCodea}
                    onFocus={this.focusEvents}
                    onBlur={this.losesFocus}
                    ref="filterTextInput"/>
                  <span className="nui-editableAddr-txt">{this.state.placeholder}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
var Theme=React.createClass({
  getInitialState:function(){
    return {
      data:[],
      totalChecked:false,
    };
  },
  focusEvents: function(event){
    //获取焦点 
    this.setState({
      totalChecked:true
    })
  },
  losesFocus: function(){
    //失去焦点
    this.setState({
      totalChecked:false,
    })
  },
  render (){
    return (
      <div className={this.state.totalChecked ? "kZ0 fu0 iu2" :"kZ0 fu0"}>
        <label className="fn0">
          <span className="cr1">主　题</span>
          <span>：</span>
        </label>
        <div className="dG0">
          <div className="bz0">
            <div className="js-component-input nui-ipt">
              <input className="nui-ipt-input" type="text" 
                onFocus={this.focusEvents}
                onBlur={this.losesFocus}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var EditingArea=React.createClass({
  render (){
    return (
      <div className="data-div">
        <div className="tablebodyH">
          <div className="row">
             <div className="qa0">
              <Addressee 
                contactsList={this.props.contactsList}
              />
              <Theme />
             </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = React.createClass({

  back:function(){
    window.history.back(-1);
  },
  render() {
    return (
        <div>
          <a className="toggle-btn" id="nimei">
            <i className="glyphicon glyphicon-align-justify"></i>
          </a>
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="sour">
              <Buttons back={this.back}/>
              <EditingArea contactsList={ContactsList}/>
            </div>
          </div>
        </div>
    );
  }
})
var ContactsList=[
  {
    name:'wangxuan',
    email:'asdfasd@qq.com',
  },
  {
    name:'zhangsan',
    email:'zhangsan@qq.com',
  },
  {
    name:'lisi',
    email:'lisi@qq.com',
  },
  {
    name:'xiaoming',
    email:'xiaoming@qq.com',
  }
]