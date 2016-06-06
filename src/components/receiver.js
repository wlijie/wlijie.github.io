import React from 'react'
import { Link } from 'react-router';



module.exports = React.createClass({
  getInitialState:function(){
    return {
      data:[],
      totalChecked:false,
      placeholder:'WW',
    };
  },
  getsFocus: function(){
    this.refs.filterTextInput.focus();
    console.log(this.refs.filterTextInput.value)
  },
  iptEnter: function(event){
    this.setState({
      placeholder:event.target.value+"WWW"
    })
    
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
      })
    };
    if(event.keyCode==8 && !value.length){
      data.pop();
      this.setState({
        data:data
      })
    }
  },
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
              <div className="data-div">
                <div className="tablebodyH">
                  <div className="row">
                     <div id="1464493369741_header" className="qa0">
                        <div id="1464493369741_to" className="kZ0 eB0">
                          <label className="fn0">
                            <a id="_mail_link_109_2437" href="javascript:void(0)" className=" js-component-link nui-txt-link">收件人</a>
                            ：
                          </label>
                          <div className="dG0">
                            <div className="bz0">
                              <div id="_mail_emailcontainer_1_2438" className="js-component-emailcontainer nui-multiLineIpt C-multiLineIpt nui-ipt" unselectable="on">
                                <div id="_mail_emailinput_1_2439" className="js-component-emailinput nui-addr nui-editableAddr nui-editableAddr-edit" onClick={this.getsFocus}>
                                  <div id="ipt-box" className="ipt-box pull-left">
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
                                   <div id="ipt-s" className="ipt-s pull-left">
                                    <input 
                                      className="nui-editableAddr-ipt nui-ipt-input" 
                                      type="text" tabIndex="1" 
                                      onInput={this.iptEnter} 
                                      onKeyDown={this.keyCodea} 
                                      ref="filterTextInput"/>
                                    <span className="nui-editableAddr-txt">{this.state.placeholder}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="gH1"></div>
                        </div>
                      <div id="1464493369741_subject" className="kZ0 fu0">
                        <label className="fn0">
                          <span className="cr1">主　题</span>
                          ：
                        </label>
                        <div className="dG0">
                          <div className="bz0">
                            <div id="_mail_input_13_2440" className="js-component-input nui-ipt">
                              <input className="nui-ipt-input" type="text" x-webkit-speech="" tabIndex="1" maxLength="256" />
                            </div>
                          </div>
                        </div>
                        <div className="gH1"></div>
                      </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
})