
import "babel-polyfill";
import React from 'react'
import { Router, Route, Link } from 'react-router';

module.exports= React.createClass({
    back: function() { 
    	console.log("aa")
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
    				<div className="data-div">
    					<div className="tablebodyH">
    						<div className="row">
    							<h3>2013，让我们一起坚持一个梦想！</h3>
    							<p>发件人：智联招聘service@steelport.zhaopin.com +</p>
    							<p>收件人：我  m493258141@163.com  +</p>
    							<p>时   间：2016年05月27日 08:36 (星期五)</p>
    							<h3>Message {this.props.params.id}</h3>
    							<p>
    								美国一项动物研究27日公布初步结论说，动物实验显示，长期高强度使用手机可能导致至少两种癌症的发病风险轻微上升。与此同时，多名专家在论文附录的同行评审意见中认为，实验设计存在漏洞，并对结论提出质疑。

    								　　这项由美国国家卫生研究院“国家毒物项目”开展的研究以实验鼠为对象，让实验鼠从胎儿时期起就接受每天9个小时的手机电磁辐射，共持续两年时间。结果发现，2%至3%的雄性实验鼠出现了大脑神经胶质瘤和心脏神经鞘瘤，但雌性实验鼠没有受到影响。

    								　　研究人员在发布的报告中写道：“鉴于手机通信在全球各年龄段用户中广泛使用，由手机射频辐射引发的发病率即便出现非常小幅度的上升，也会产生广泛的公共健康影响。”

    								　　负责研究的“国家毒物项目”副主任约翰·布赫27日在电话记者会上说，研究要到明年才能全部结束，但由于他们的初步发现意义重大，所以决定予以提前公布。但他也表示，这项发现能否适用于人类还有待继续评估，至少不会改变他本人使用手机的方式。

    								　　美国癌症学会发表声明说：“这项发现出人意料，我们没有想到，手机辐射这种非电离辐射会导致这些肿瘤。”研究人员只观察到手机辐射对雄鼠的影响，让一些人质疑数据是否可靠。美国癌症学会对此指出，这种性别差异也经常出现在其他致癌研究中。

    								　　论文附录了5名专家的同行评审意见，其中4人同样来自美国国家卫生研究院。评审专家对这一研究方法及结果提出了质疑。例如，在研究中，受辐射实验鼠居然比没有受手机辐射的对照组实验鼠存活时间还长；正常实验鼠本来就会有一定比例罹患脑癌，但这项研究的对照组实验鼠中居然没有观察到脑癌。

    								　　“我不能接受这些作者的结论，”美国国家卫生研究院外部研究办公室副主任迈克尔·劳尔在评审意见中直截了当地写道，“这项实验说服力不足，所发现的少数阳性结果反映出假阳性结果。受辐射实验鼠生存率更高，加上此前的流行病学文献数据，让我对这些作者的说法更持怀疑态度。”

    								　　多名国际专家也发表声明说，这项研究不足以对手机致癌问题一锤定音。

    								　　英国开放大学凯文·迈科康韦教授的看法很有代表性。他说：“这些发现没有引起我对使用手机可能带来健康风险的真正担忧。此前已有大量关于这个话题的研究，有的没有发现任何证据，有的则是有限证据显示会有轻微风险。我不认为‘国家毒物项目’的这些结果超出了那些研究。”

    								　　使用手机是否致癌是个老话题。2011年，世界卫生组织下属的国际癌症研究机构曾宣布手机为“可能的致癌物”，引起世人关注。但此前此后的多项研究都不支持这一看法。例如，对丹麦手机使用者的长期跟踪调查就认为手机不致癌；美国国家卫生研究院也声明指出，此前基于大量人口的观察研究数据显示，使用手机增加癌症风险的说法“证据有限”。
    							</p>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	
    );
  }
})