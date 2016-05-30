import React from 'react'
import { Link } from 'react-router';
module.exports = React.createClass({
  render() {
    return(
    	<div role="tabpanel" className="tab-pane" id="stud">
    		<div className="check-div form-inline">
    			<div className="col-xs-5">
    				<input type="text" className=" form-control input-sm" placeholder="输入文字搜索" />
    				<button className="btn btn-white btn-xs ">查 询 </button>
    			</div>
    			<div className="col-xs-4 col-lg-4  col-md-5" style={{paddingRight: '40px',textAlign: 'right',float: 'right'}}>
    				<label htmlFor="daoru">导入人员信息表:&nbsp;</label>
    				<button className="btn btn-white btn-xs " id="daoru">选取文件 </button>
    				<button className="btn btn-white btn-xs ">导入 </button>
    			</div>

    		</div>
    		<div className="data-div">
    			<div className="row tableHeader">
    				<div className="col-xs-2 ">
	    				<label aria-checked="false" className="nui-chk cS0" title="选中此邮件" onClick={this.toggleChecked}>
	    				    <span className="nui-chk-symbol">
	    				    <b className="nui-ico nui-ico-checkbox"  title="选中此邮件"></b>
	    				    </span>
	    				</label>
    				</div>
    				<div className="col-xs-2 ">
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
    				<div className="row">
    					<div className="col-xs-2 ">
		    				<label aria-checked="false" className="nui-chk cS0" title="选中此邮件" onClick={this.toggleChecked}>
		    				    <span className="nui-chk-symbol">
		    				    <b className="nui-ico nui-ico-checkbox"  title="选中此邮件"></b>
		    				    </span>
		    				</label>
    					</div>
    					<div className="col-xs-2">
    						邓超
    					</div>
    					<div className="col-xs-3">
    						lijiew88@gmail.com
    					</div>
    					<div className="col-xs-3">
    						18665422595
    					</div>
    					<div className="col-xs-2">
    						A
    					</div>
    				</div>
    				<div className="row">
    					<div className="col-xs-2 ">
		    				<label aria-checked="false" className="nui-chk cS0" title="选中此邮件" onClick={this.toggleChecked}>
		    				    <span className="nui-chk-symbol">
		    				    <b className="nui-ico nui-ico-checkbox"  title="选中此邮件"></b>
		    				    </span>
		    				</label>
    					</div>
    					<div className="col-xs-2">
    						邓超
    					</div>
    					<div className="col-xs-3">
    						lijiew88@gmail.com
    					</div>
    					<div className="col-xs-3">
    						18665422595
    					</div>
    					<div className="col-xs-2">
    						A
    					</div>
    				</div>
    				<div className="row">
    					<div className="col-xs-2 ">
		    				<label aria-checked="false" className="nui-chk cS0" title="选中此邮件" onClick={this.toggleChecked}>
		    				    <span className="nui-chk-symbol">
		    				    <b className="nui-ico nui-ico-checkbox"  title="选中此邮件"></b>
		    				    </span>
		    				</label>
    					</div>
    					<div className="col-xs-2">
    						邓超
    					</div>
    					<div className="col-xs-3">
    						lijiew88@gmail.com
    					</div>
    					<div className="col-xs-3">
    						18665422595
    					</div>
    					<div className="col-xs-2">
    						A
    					</div>
    				</div>
    				<div className="row">
    					<div className="col-xs-2 ">
		    				<label aria-checked="false" className="nui-chk cS0" title="选中此邮件" onClick={this.toggleChecked}>
		    				    <span className="nui-chk-symbol">
		    				    <b className="nui-ico nui-ico-checkbox"  title="选中此邮件"></b>
		    				    </span>
		    				</label>
    					</div>
    					<div className="col-xs-2">
    						邓超
    					</div>
    					<div className="col-xs-3">
    						lijiew88@gmail.com
    					</div>
    					<div className="col-xs-3">
    						18665422595
    					</div>
    					<div className="col-xs-2">
    						A
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