import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as p,c as h,a as t,d as n,b as d,w as a,e as l}from"./app-1b6211c1.js";const u={},b={class:"hint-container warning"},k=t("p",{class:"hint-container-title"},"注意",-1),m=l('<h2 id="获取登录号信息" tabindex="-1"><a class="header-anchor" href="#获取登录号信息" aria-hidden="true">#</a> 获取登录号信息</h2><p>该接口用于获取 QQ 用户的登录号信息。</p><h3 id="api-端点" tabindex="-1"><a class="header-anchor" href="#api-端点" aria-hidden="true">#</a> API 端点</h3><p><code>/get_login_info</code></p><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该接口无输入参数。</p></div><h3 id="响应" tabindex="-1"><a class="header-anchor" href="#响应" aria-hidden="true">#</a> 响应</h3>',7),v=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"字段"),t("th",null,"类型"),t("th",null,"说明")])]),t("tbody",null,[t("tr",null,[t("td",null,"user_id"),t("td",null,"int64"),t("td",null,"QQ 号")]),t("tr",null,[t("td",null,"nickname"),t("td",null,"string"),t("td",null,"昵称")])])],-1),_=t("div",{class:"language-json line-numbers-mode","data-ext":"json"},[t("pre",{class:"language-json"},[t("code",null,[t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},'"status"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"ok"'),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token property"},'"retcode"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token property"},'"data"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token property"},'"user_id"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2854200454"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token property"},'"nickname"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"Shamrock"'),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),y=l('<h2 id="设置-qq-个人资料" tabindex="-1"><a class="header-anchor" href="#设置-qq-个人资料" aria-hidden="true">#</a> 设置 QQ 个人资料</h2><p>该接口用于设置 QQ 用户的个人资料信息。</p><h3 id="api-端点-1" tabindex="-1"><a class="header-anchor" href="#api-端点-1" aria-hidden="true">#</a> API 端点</h3><p><code>/set_qq_profile</code></p><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>nickname</td><td>string</td><td>是</td><td>昵称</td></tr><tr><td>company</td><td>string</td><td>是</td><td>公司</td></tr><tr><td>email</td><td>string</td><td>是</td><td>邮箱</td></tr><tr><td>college</td><td>string</td><td>是</td><td>大学</td></tr><tr><td>personal_note</td><td>string</td><td>是</td><td>个人备注</td></tr><tr><td>age</td><td>int32</td><td>否</td><td>年龄</td></tr><tr><td>birthday</td><td>string</td><td>否</td><td>生日（格式：YYYY-MM-DD）</td></tr></tbody></table><h3 id="响应-1" tabindex="-1"><a class="header-anchor" href="#响应-1" aria-hidden="true">#</a> 响应</h3><p>该接口将返回基本的 json 。</p><h2 id="获取在线机型" tabindex="-1"><a class="header-anchor" href="#获取在线机型" aria-hidden="true">#</a> 获取在线机型</h2><p>该接口用于获取 QQ 在线机型。</p><h3 id="api-端点-2" tabindex="-1"><a class="header-anchor" href="#api-端点-2" aria-hidden="true">#</a> API 端点</h3><p><code>/_get_model_show</code></p><h3 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2" aria-hidden="true">#</a> 参数</h3>',13),g=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"字段"),t("th",null,"类型"),t("th",null,"必须"),t("th",null,"说明")])]),t("tbody",null,[t("tr",null,[t("td",null,"model"),t("td",null,"string"),t("td",null,"是"),t("td",null,"机型")])])],-1),f=t("div",{class:"language-json line-numbers-mode","data-ext":"json"},[t("pre",{class:"language-json"},[t("code",null,[t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},'"model"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"OPPO"'),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),x=t("h3",{id:"响应-2",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#响应-2","aria-hidden":"true"},"#"),n(" 响应")],-1),P=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"字段"),t("th",null,"类型"),t("th",null,"说明")])]),t("tbody",null,[t("tr",null,[t("td",null,"variants"),t("td",null,[n("List<"),t("a",{href:"#modeldetail"},"ModelDetail"),n(">")]),t("td",null,"机型列表")])])],-1),A=t("div",{class:"language-json line-numbers-mode","data-ext":"json"},[t("pre",{class:"language-json"},[t("code",null,[t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},'"status"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"ok"'),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token property"},'"retcode"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token property"},'"data"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token property"},'"variants"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"model_show"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"OPPO (黑色)"'),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token property"},'"need_pay"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"model_show"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"OPPO (白色)"'),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token property"},'"need_pay"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"model_show"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"OPPO (银色)"'),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token property"},'"need_pay"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"model_show"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"OPPO (灰色)"'),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token property"},'"need_pay"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"model_show"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"OPPO (金色)"'),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token property"},'"need_pay"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token property"},'"model_show"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"OPPO"'),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token property"},'"need_pay"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"false"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"]"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),O=l('<h4 id="modeldetail" tabindex="-1"><a class="header-anchor" href="#modeldetail" aria-hidden="true">#</a> ModelDetail</h4><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>model_show</td><td>string</td><td>机型名称</td></tr><tr><td>need_pay</td><td>bool</td><td>是否需要付费</td></tr></tbody></table><h2 id="设置在线机型" tabindex="-1"><a class="header-anchor" href="#设置在线机型" aria-hidden="true">#</a> 设置在线机型</h2><p>该接口用于设置 QQ 在线机型。</p><h3 id="api-端点-3" tabindex="-1"><a class="header-anchor" href="#api-端点-3" aria-hidden="true">#</a> API 端点</h3><p><code>/_set_model_show</code></p><h3 id="参数-3" tabindex="-1"><a class="header-anchor" href="#参数-3" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>model</td><td>string</td><td>是</td><td>机型</td></tr><tr><td>manu</td><td>string</td><td>是</td><td>厂商</td></tr></tbody></table><h3 id="响应-3" tabindex="-1"><a class="header-anchor" href="#响应-3" aria-hidden="true">#</a> 响应</h3><p>该接口将返回处理结果，其中 <code>data</code> 字段无数据。</p>',10),w={id:"获取当前账号在线客户端列表",tabindex:"-1"},Q=t("a",{class:"header-anchor",href:"#获取当前账号在线客户端列表","aria-hidden":"true"},"#",-1),j=l('<p>该接口用于获取当前账号在线客户端列表。</p><h3 id="api-端点-4" tabindex="-1"><a class="header-anchor" href="#api-端点-4" aria-hidden="true">#</a> API 端点</h3><p><code>/get_online_clients</code></p><h3 id="参数-4" tabindex="-1"><a class="header-anchor" href="#参数-4" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>no_cache</td><td>bool</td><td>是否无视缓存</td></tr></tbody></table><h3 id="响应-4" tabindex="-1"><a class="header-anchor" href="#响应-4" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>clients</td><td>Object&lt;<a href="#device">Device</a>&gt;</td><td>在线客户端列表</td></tr></tbody></table><h4 id="device" tabindex="-1"><a class="header-anchor" href="#device" aria-hidden="true">#</a> Device</h4><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>app_id</td><td>int64</td><td>客户端ID</td></tr><tr><td>device_name</td><td>string</td><td>设备名称</td></tr><tr><td>device_kind</td><td>string</td><td>设备类型</td></tr></tbody></table>',9);function D(I,q){const r=i("Badge"),o=i("Tabs");return p(),h("div",null,[t("div",b,[k,t("p",null,[n("对于 Shamrock 尚未实现的 API，会在标题添加标记 "),d(r,{text:"未实现",type:"danger",vertical:"baseline"})])]),m,d(o,{id:"28",data:[{id:"响应字段"},{id:"响应示例"}]},{title0:a(({value:e,isActive:s})=>[n("响应字段")]),title1:a(({value:e,isActive:s})=>[n("响应示例")]),tab0:a(({value:e,isActive:s})=>[v]),tab1:a(({value:e,isActive:s})=>[_]),_:1}),y,d(o,{id:"228",data:[{id:"参数字段"},{id:"参数示例"}]},{title0:a(({value:e,isActive:s})=>[n("参数字段")]),title1:a(({value:e,isActive:s})=>[n("参数示例")]),tab0:a(({value:e,isActive:s})=>[g]),tab1:a(({value:e,isActive:s})=>[f]),_:1}),x,d(o,{id:"272",data:[{id:"响应字段"},{id:"响应示例"}]},{title0:a(({value:e,isActive:s})=>[n("响应字段")]),title1:a(({value:e,isActive:s})=>[n("响应示例")]),tab0:a(({value:e,isActive:s})=>[P]),tab1:a(({value:e,isActive:s})=>[A]),_:1}),O,t("h2",w,[Q,n(" 获取当前账号在线客户端列表 "),d(r,{text:"未实现",type:"danger"})]),j])}const N=c(u,[["render",D],["__file","account.html.vue"]]);export{N as default};
