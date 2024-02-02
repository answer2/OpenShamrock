import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as h,c as i,a as t,d,b as r,w as s,e as c}from"./app-1b6211c1.js";const l={},_={class:"hint-container warning"},p=t("p",{class:"hint-container-title"},"注意",-1),b={class:"hint-container tip"},u=t("p",{class:"hint-container-title"},"提示",-1),m=t("br",null,null,-1),f=c('<h2 id="加好友请求" tabindex="-1"><a class="header-anchor" href="#加好友请求" aria-hidden="true">#</a> 加好友请求</h2><p>当 <code>request_type</code> 为 <code>friend</code> 时，表示收到了加好友请求。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>user_id</td><td>int64</td><td>请求者 QQ 号</td></tr><tr><td>comment</td><td>string</td><td>验证信息</td></tr><tr><td>flag</td><td>string</td><td>请求 flag</td></tr></tbody></table><h3 id="快速处理" tabindex="-1"><a class="header-anchor" href="#快速处理" aria-hidden="true">#</a> 快速处理</h3><p>Shamrock 提供了快速处理的功能，可以在收到请求时快速处理请求。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>approve</td><td>bool</td><td>是否同意</td></tr><tr><td>remark</td><td>string</td><td>备注</td></tr></tbody></table><h2 id="加群请求-邀请" tabindex="-1"><a class="header-anchor" href="#加群请求-邀请" aria-hidden="true">#</a> 加群请求／邀请</h2><p>当 <code>request_type</code> 为 <code>group</code> 时，表示收到了加群请求／邀请。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>user_id</td><td>int64</td><td>请求者 QQ 号</td></tr><tr><td>comment</td><td>string</td><td>验证信息</td></tr><tr><td>flag</td><td>string</td><td>请求 flag</td></tr><tr><td>sub_type</td><td>string</td><td>子类型(add/invite)</td></tr></tbody></table><h3 id="快速处理-1" tabindex="-1"><a class="header-anchor" href="#快速处理-1" aria-hidden="true">#</a> 快速处理</h3><p>Shamrock 提供了快速处理的功能，可以在收到请求时快速处理请求。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>approve</td><td>bool</td><td>是否同意</td></tr><tr><td>reason</td><td>string</td><td>拒绝理由</td></tr></tbody></table>',12);function g(y,v){const a=e("Badge"),o=e("RouterLink");return h(),i("div",null,[t("div",_,[p,t("p",null,[d("对于 Shamrock 未实现的事件，会在标题添加标记 "),r(a,{text:"未实现",type:"danger",vertical:"baseline"})])]),t("div",b,[u,t("p",null,[d("所有上报事件都包含通用数据，详见 "),r(o,{to:"/event/general-data.html"},{default:s(()=>[d("通用数据")]),_:1}),d("。"),m,d(" 包含在通用数据中的字段不会在下面的表格中重复出现。")])]),f])}const B=n(l,[["render",g],["__file","request.html.vue"]]);export{B as default};