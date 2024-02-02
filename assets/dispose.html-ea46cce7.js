import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c as h,a as t,d as o,b as i,e as n}from"./app-1b6211c1.js";const c={},s={class:"hint-container warning"},p=t("p",{class:"hint-container-title"},"注意",-1),l=n('<h2 id="处理加好友请求" tabindex="-1"><a class="header-anchor" href="#处理加好友请求" aria-hidden="true">#</a> 处理加好友请求</h2><p>该接口用于处理加好友请求。</p><h3 id="api-端点" tabindex="-1"><a class="header-anchor" href="#api-端点" aria-hidden="true">#</a> API 端点</h3><p><code>/set_friend_add_request</code></p><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>flag</td><td>string</td><td>-</td><td>加好友请求的 flag（需从上报的数据中获得）</td></tr><tr><td>approve</td><td>boolean</td><td><code>true</code></td><td>是否同意请求</td></tr><tr><td>remark</td><td>string</td><td>空</td><td>添加后的好友备注（仅在同意时有效）</td></tr></tbody></table><h3 id="响应" tabindex="-1"><a class="header-anchor" href="#响应" aria-hidden="true">#</a> 响应</h3><p>该接口将返回处理结果，其中 <code>data</code> 字段无数据。</p><h2 id="处理加群请求-邀请" tabindex="-1"><a class="header-anchor" href="#处理加群请求-邀请" aria-hidden="true">#</a> 处理加群请求／邀请</h2><p>该接口用于处理加群请求／邀请。</p><h3 id="api-端点-1" tabindex="-1"><a class="header-anchor" href="#api-端点-1" aria-hidden="true">#</a> API 端点</h3><p><code>/set_group_add_request</code></p><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>flag</td><td>string</td><td>-</td><td>加群请求的 flag（需从上报的数据中获得）</td></tr><tr><td>sub_type 或 type</td><td>string</td><td>-</td><td><code>add</code> 或 <code>invite</code>, 请求类型（需要和上报消息中的 <code>sub_type</code> 字段相符）</td></tr><tr><td>approve</td><td>boolean</td><td><code>true</code></td><td>是否同意请求／邀请</td></tr><tr><td>reason</td><td>string</td><td>空</td><td>拒绝理由（仅在拒绝时有效）</td></tr></tbody></table><h3 id="响应-1" tabindex="-1"><a class="header-anchor" href="#响应-1" aria-hidden="true">#</a> 响应</h3><p>该接口将返回处理结果，其中 <code>data</code> 字段无数据。</p>',16);function _(b,f){const d=a("Badge");return r(),h("div",null,[t("div",s,[p,t("p",null,[o("对于 Shamrock 尚未实现的 API，会在标题添加标记 "),i(d,{text:"未实现",type:"danger",vertical:"baseline"})])]),l])}const x=e(c,[["render",_],["__file","dispose.html.vue"]]);export{x as default};