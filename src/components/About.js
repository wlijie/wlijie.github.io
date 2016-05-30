import "babel-polyfill";
import React from 'react'
import { Router, Route, Link } from 'react-router';

module.exports= React.createClass({
	getInitialState:function(){
		return {
			list:[
				{
					id:1,
					isChecked:false,
					send:'lijiew88@gmail.com',
					title:'2013，让我们一起坚持一个梦想！',
					date:'5月22日',
				},
				{
					id:2,
					isChecked:false,
					send:'lijiew88@gmail.com',
					title:'2013，让我们一起坚持一个梦想！',
					date:'5月22日',
				},
				{
					id:3,
					isChecked:false,
					send:'lijiew88@gmail.com',
					title:'2013，让我们一起坚持一个梦想！',
					date:'5月22日',
				},
			],
			totalChecked:false,
		};
	},
	toggleChecked: function(index) {
		let list = this.state.list;
		if(list[index].isChecked){
			list[index].isChecked = false;
			this.setState({
				list:list,
				totalChecked:false,
			});
		}else{
			list[index].isChecked = true;
			this.setState({
				list:list,
			});
			for (var i = list.length - 1; i >= 0; i--) {
				if(!list[i].isChecked){
					return;
				}
			}
			this.setState({
				totalChecked:true,
			});
		}
	},
	checkAll:function(){
		let list = this.state.list;
		if(this.state.totalChecked){
			for(let i = 0; i < list.length; i++){
				list[i].isChecked = false;
			}
			this.setState({
				list:list,
				totalChecked:false,
			})
		}else{
			for(let i = 0; i < list.length; i++){
				list[i].isChecked = true;
			}
			this.setState({
				list:list,
				totalChecked:true,
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
                          <button type="button" className="btn btn-default">回复</button>
                          <button type="button" className="btn btn-default">回复全部</button>
                          <button type="button" className="btn btn-default">转发</button>
                          </div>
                          <div className="btn-group">
                          <button type="button" className="btn btn-default">删除</button>
                          <button type="button" className="btn btn-default">举报</button>
                          <button type="button" className="btn btn-default">标记为</button>
                          </div>
                        </div>
    				</div>
    				<div className="data-div" id="detailPage">
    					<div className="row tableHeader">
    						<div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 ">
    							<label aria-checked="false" className="nui-chk cS0" title="选中此邮件" onClick={this.checkAll}>
                                    <span className="nui-chk-symbol">
                                    {(function(){
                                    	if(this.state.totalChecked){
                                    		return <b className="nui-ico nui-ico-checkbox nui-ico-checkbox-checked"  title="选中此邮件"></b>;
                                    	}else{
                                    		return <b className="nui-ico nui-ico-checkbox"  title="选中此邮件"></b>;
                                    	}
                                    }.bind(this))()}
                                    </span>
                                </label>
    						</div>
    						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
    							发件人
    						</div>
    						<div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
    							邮件标题
    						</div>
    						<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
    							日期
    						</div>
    					</div>
    					<div className="tablebody">
    					{(function(){
    						let result = [];
    						for(let i = 0; i < this.state.list.length; i++){
    							result.push(
    								<div className="row" key={i}>
		    							<div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 label-check">
		                                    <label aria-checked="false" className="nui-chk cS0" title="选中此邮件" onClick={this.toggleChecked.bind(null, i)}>
		                                        <span className="nui-chk-symbol">
		                                        {(function(){
		                                        	if(this.state.list[i].isChecked){
		                                        		return <b className="nui-ico nui-ico-checkbox nui-ico-checkbox-checked"  title="选中此邮件"></b>;
		                                        	}else{
		                                        		return <b className="nui-ico nui-ico-checkbox"  title="选中此邮件"></b>;
		                                        	}
		                                        }.bind(this))()}
		                                        </span>
		                                    </label>
		    							</div>
		    							<Link to={"/messages/:"+this.state.list[i].id} className="link-mes">
			    							<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
			    								<span>{this.state.list[i].send}</span>
			    							</div>
			    							<div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
			    								{this.state.list[i].title}
			    							</div>
			    							<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
			    								{this.state.list[i].date}
			    							</div>
		    							</Link>
		    						</div>
    							);
    						}
    						return result;
    					}.bind(this))()}
    					</div>
    				</div>
    			</div>
    		</div>
            <footer className="footer">
                <ul className="pagination">
                    <li>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                        <span className="page">页</span>
                        
                    </li>
                    <li className="gray">
                        共20页
                    </li>
                    <li>
                        <i className="glyphicon glyphicon-menu-left">
                            </i>
                    </li>
                    <li>
                        <i className="glyphicon glyphicon-menu-right">
                            </i>
                    </li>
                </ul>
            </footer>
    	</div>
    	
    );
  }
})