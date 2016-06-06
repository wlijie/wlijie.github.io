import React from 'react'
import { Link } from 'react-router';
module.exports = React.createClass({
    getInitialState:function(){
        return {
            list:[
                {
                    id:1,
                    isChecked:false,
                    fullName:'邓超',
                    send:'lijiew88@gmail.com',
                    cellphone:'18946578965',
                    packet:'A组',
                },
                {
                    id:2,
                    isChecked:false,
                    fullName:'邓超',
                    send:'lijiew88@gmail.com',
                    cellphone:'18946578965',
                    packet:'A组',
                },
                {
                    id:3,
                    isChecked:false,
                    fullName:'邓超',
                    send:'lijiew88@gmail.com',
                    cellphone:'18946578965',
                    packet:'A组',
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
    return(
    	<div role="tabpanel" className="tab-pane" id="stud">
    		<div className="check-div form-inline">
    			<div className="btn-toolbar" role="toolbar">
                    <div className="btn-group">
                      <button type="button" className="btn btn-default" onClick={this.back}><span className="glyphicon glyphicon-chevron-left"></span>返 回</button>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary">
                            <span className="glyphicon glyphicon-user"> </span> 新建联系人</button>
                        <button type="button" className="btn btn-default">删 除</button>
                        <button type="button" className="btn btn-default">更 多</button>
                        <button type="button" className="btn btn-default">写 信</button>
                        <button type="button" className="btn btn-default">移动到组</button>
                    </div>
                  </div>
    		</div>
    		<div className="data-div">
    			<div className="row tableHeader">
    				<div className="col-xs-1 ">
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
    				<div className="col-xs-3 ">
    					姓名
    				</div>
    				<div className="col-xs-3">
    					邮件地址
    				</div>
    				<div className="col-xs-3">
    					手机号码
    				</div>
    				<div className="col-xs-2 ">
    					所在分组
    				</div>
    			</div>
    			<div className="tablebody">
                    {(function(){
                            let result = [];
                            for(let i = 0; i < this.state.list.length; i++){
                                result.push(
                                    <div className="row" key={i}>
                                        <div className="col-xs-1 ">
                                            <label aria-checked="false" className="nui-chk cS0" title="选中此邮件" onClick={this.toggleChecked.bind(null, i)}>
                                                <span className="nui-chk-symbol">
                                                {(function(){
                                                    if(this.state.list[i].isChecked){
                                                        return <b className="nui-ico nui-ico-checkbox nui-ico-checkbox-checked"  title="选中此邮件"></b>

                                                    }else{
                                                        return <b className="nui-ico nui-ico-checkbox"  title="选中此邮件"></b>
                                                    }
                                            }.bind(this))()}
                                                </span>
                                            </label>
                                        </div>
                                        <div className="col-xs-3">
                                            {this.state.list[i].fullName}
                                        </div>
                                        <div className="col-xs-3">
                                            {this.state.list[i].send}
                                        </div>
                                        <div className="col-xs-3">
                                            {this.state.list[i].cellphone}
                                        </div>
                                        <div className="col-xs-2">
                                            {this.state.list[i].packet}
                                        </div>
                                    </div>
                                );
                            }
                            return result;
                        }.bind(this))()}
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


    		<div className="modal fade" id="deleteObey" role="dialog" aria-labelledby="gridSystemModalLabel">
    			<div className="modal-dialog" role="document">
    				<div className="modal-content">
    					<div className="modal-header">
    						<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    						<h4 className="modal-title" id="gridSystemModalLabel">提示</h4>
    					</div>
    					<div className="modal-body">
    						<div className="container-fluid">
    							确定要删除该违约记录？删除后不可恢复！
    						</div>
    					</div>
    					<div className="modal-footer">
    						<button type="button" className="btn btn-xs btn-white" data-dismiss="modal">取 消</button>
    						<button type="button" className="btn btn-xs btn-danger">保 存</button>
    					</div>
    				</div>
    			</div>
    		</div>

    	</div>
    );
  }
})