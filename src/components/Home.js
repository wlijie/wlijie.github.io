import React from 'react'
import { Link } from 'react-router';
import { IndexLink } from 'react-router'

module.exports= React.createClass({
  render() {
    return(
    	<div role="tabpanel" className="tab-pane" id="char">
            <a className="toggle-btn" id="nimei">
              <i className="glyphicon glyphicon-align-justify"></i>
            </a>
    		<div className="check-div">
                登录信息
    		</div>
    		<div className="data-div">
    			<div className="tablebodyH">
    				<div className="row">
    					<div className="col-xs-8">
                            <div className="row">
                                <div className="col-xs-2">
            						<img src="./src/images/touxiang.jpg" className="img-circle" style={{width:'100%'}} />
                                    <div className="caption">
                                        <h3 className="text-center">金瑞帆</h3>
                                     </div>
                                </div>
                                <div className="col-xs-9">
                                    <h3>名字名字</h3>
                                    <p>北京金瑞帆科技公司</p>
                                    <div className="btn-group ">
                                      <button type="button" className="btn btn-info">未读邮件99+封</button>
                                      <button type="button" className="btn btn-info">待办邮件1封</button>
                                      <button type="button" className="btn btn-info">联系人邮件0封</button>
                                    </div>
                                </div>   
                            </div>
    					</div>
    					<div className="col-xs-4">

    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    );
  }
})

