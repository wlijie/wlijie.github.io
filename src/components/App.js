
import React from 'react'
import { Link } from 'react-router';
import { IndexLink } from 'react-router'

module.exports  = React.createClass({
  render() {
    return (
        <div id="wrap">
	      	<div className="leftMeun" id="leftMeun">
		      	<div id="logoDiv">
		      		<p id="logoP"><img id="logo" alt="左右结构项目" src="./src/images/logo.png" /><span>企业版1.0</span></p>
		      	</div>
		      	<div id="personInfor">
		      		<p id="userName">金瑞帆</p>
		      		<p><span>jinrf@jin.com</span></p>
		      		<p>
		      			<a>退出登录</a>
		      		</p>
		      	</div>
	            <div><IndexLink  activeClassName={"meun-item-active"} className="meun-item" to="/" ><img src="./src/images/icon_source.png" />首页</IndexLink></div>
	            <div><Link activeClassName={"meun-item-active"} className="meun-item" to="/letter"><img src="./src/images/icon_chara_grey.png" />收信</Link></div>
	            <div><Link activeClassName={"meun-item-active"} className="meun-item" to="/receiver"><img src="./src/images/icon_user_grey.png" />写信</Link></div>
	            <div><Link activeClassName={"meun-item-active"} className="meun-item" to="/contacts"><img src="./src/images/icon_house_grey.png" />通讯录</Link></div>
	            <div><Link activeClassName={"meun-item-active"} className="meun-item" to="/internal_announcement"><img src="./src/images/icon_change_grey.png" />内部公告</Link></div>
	            <div><Link activeClassName={"meun-item-active"} className="meun-item" to="/enterprise_networkdisk"><img src="./src/images/icon_rule_grey.png" />企业网盘</Link></div>
	        </div>
	        <div id="rightContent">
	       		{this.props.children}
	        </div>
        </div>
    )
  }
})
