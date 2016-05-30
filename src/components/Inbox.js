import React from 'react'
import { Link } from 'react-router';

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
                            <div id="_mail_emailhide_1_2451" className="js-component-emailhide nui-fGetout">
                              <input tabIndex="-1" role="presentation" type="text" /></div>
                            <div id="_mail_emailcontainer_1_2438" className="js-component-emailcontainer nui-multiLineIpt C-multiLineIpt nui-ipt" unselectable="on">
                              <div id="_mail_emailinput_1_2439" className="js-component-emailinput nui-addr nui-editableAddr nui-editableAddr-edit">
                                <input className="nui-editableAddr-ipt" type="text" tabIndex="1" />
                                <span className="nui-editableAddr-txt">W</span>
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