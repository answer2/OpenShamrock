import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as h,c,a as t,d as a,b as s,w as e,e as r}from"./app-1b6211c1.js";const u={},b={class:"hint-container warning"},k=t("p",{class:"hint-container-title"},"注意",-1),f=r('<h2 id="上传私聊文件" tabindex="-1"><a class="header-anchor" href="#上传私聊文件" aria-hidden="true">#</a> 上传私聊文件</h2><p>该接口用于上传私聊文件。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>只能上传本地文件, 需要上传 <code>http</code> 文件的话请先下载至本地</p></div><h3 id="api-端点" tabindex="-1"><a class="header-anchor" href="#api-端点" aria-hidden="true">#</a> API 端点</h3><p><code>/upload_private_file</code></p><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>user_id</td><td>int64</td><td>目标</td></tr><tr><td>file</td><td>string</td><td>本地文件路径</td></tr><tr><td>name</td><td>string</td><td>文件名称</td></tr></tbody></table><h3 id="响应" tabindex="-1"><a class="header-anchor" href="#响应" aria-hidden="true">#</a> 响应</h3>',8),_=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"字段"),t("th",null,"类型"),t("th",null,"说明")])]),t("tbody",null,[t("tr",null,[t("td",null,"msg_id"),t("td",null,"int32"),t("td",null,"消息id")]),t("tr",null,[t("td",null,"bizid"),t("td",null,"int32"),t("td")]),t("tr",null,[t("td",null,"md5"),t("td",null,"string"),t("td",null,"MD5")]),t("tr",null,[t("td",null,"file_id"),t("td",null,"string"),t("td",null,"文件uuid")])])],-1),m=t("div",{class:"language-json line-numbers-mode","data-ext":"json"},[t("pre",{class:"language-json"},[t("code",null,[t("span",{class:"token punctuation"},"{"),a(`
  `),t("span",{class:"token property"},'"status"'),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},'"ok"'),t("span",{class:"token punctuation"},","),a(`
  `),t("span",{class:"token property"},'"retcode"'),t("span",{class:"token operator"},":"),a(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),a(`
  `),t("span",{class:"token property"},'"data"'),t("span",{class:"token operator"},":"),a(),t("span",{class:"token punctuation"},"{"),a(`
    `),t("span",{class:"token property"},'"msg_id"'),t("span",{class:"token operator"},":"),a(),t("span",{class:"token number"},"286479341"),t("span",{class:"token punctuation"},","),a(`
    `),t("span",{class:"token property"},'"bizid"'),t("span",{class:"token operator"},":"),a(),t("span",{class:"token number"},"102"),t("span",{class:"token punctuation"},","),a(`
    `),t("span",{class:"token property"},'"md5"'),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},'"6742327a8b0147eebd6e1d4018626082"'),t("span",{class:"token punctuation"},","),a(`
    `),t("span",{class:"token property"},'"sha"'),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),a(`
    `),t("span",{class:"token property"},'"sha3"'),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),a(`
    `),t("span",{class:"token property"},'"file_id"'),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},'"/c65b7c5c-50e0-47c6-951f-4e3377505f7f"'),a(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),a(`
  `),t("span",{class:"token property"},'"echo"'),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},'""'),a(`
`),t("span",{class:"token punctuation"},"}"),a(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),v=r('<h2 id="上传群文件" tabindex="-1"><a class="header-anchor" href="#上传群文件" aria-hidden="true">#</a> 上传群文件</h2><p>该接口用于上传群文件。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>只能上传本地文件, 需要上传 <code>http</code> 文件的话请先下载至本地</p></div><h3 id="api-端点-1" tabindex="-1"><a class="header-anchor" href="#api-端点-1" aria-hidden="true">#</a> API 端点</h3><p><code>/upload_group_file</code></p><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>file</td><td>string</td><td>本地文件路径</td></tr><tr><td>name</td><td>string</td><td>文件名称</td></tr></tbody></table><h3 id="响应-1" tabindex="-1"><a class="header-anchor" href="#响应-1" aria-hidden="true">#</a> 响应</h3>',8),g=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"字段"),t("th",null,"类型"),t("th",null,"说明")])]),t("tbody",null,[t("tr",null,[t("td",null,"msg_id"),t("td",null,"int32"),t("td",null,"消息id")]),t("tr",null,[t("td",null,"bizid"),t("td",null,"int32"),t("td")]),t("tr",null,[t("td",null,"md5"),t("td",null,"string"),t("td",null,"MD5")]),t("tr",null,[t("td",null,"file_id"),t("td",null,"string"),t("td",null,"文件uuid")])])],-1),y=t("div",{class:"language-json line-numbers-mode","data-ext":"json"},[t("pre",{class:"language-json"},[t("code",null,[t("span",{class:"token punctuation"},"{"),a(`
  `),t("span",{class:"token property"},'"status"'),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},'"ok"'),t("span",{class:"token punctuation"},","),a(`
  `),t("span",{class:"token property"},'"retcode"'),t("span",{class:"token operator"},":"),a(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),a(`
  `),t("span",{class:"token property"},'"data"'),t("span",{class:"token operator"},":"),a(),t("span",{class:"token punctuation"},"{"),a(`
    `),t("span",{class:"token property"},'"msg_id"'),t("span",{class:"token operator"},":"),a(),t("span",{class:"token number"},"286479341"),t("span",{class:"token punctuation"},","),a(`
    `),t("span",{class:"token property"},'"bizid"'),t("span",{class:"token operator"},":"),a(),t("span",{class:"token number"},"102"),t("span",{class:"token punctuation"},","),a(`
    `),t("span",{class:"token property"},'"md5"'),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},'"6742327a8b0147eebd6e1d4018626082"'),t("span",{class:"token punctuation"},","),a(`
    `),t("span",{class:"token property"},'"sha"'),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),a(`
    `),t("span",{class:"token property"},'"sha3"'),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),a(`
    `),t("span",{class:"token property"},'"file_id"'),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},'"/c65b7c5c-50e0-47c6-951f-4e3377505f7f"'),a(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),a(`
  `),t("span",{class:"token property"},'"echo"'),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},'""'),a(`
`),t("span",{class:"token punctuation"},"}"),a(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),x=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>参数 <code>folder</code>在Shamrock不受支持。</p></div><h2 id="删除群文件" tabindex="-1"><a class="header-anchor" href="#删除群文件" aria-hidden="true">#</a> 删除群文件</h2><p>该接口用于删除群文件。</p><h3 id="api-端点-2" tabindex="-1"><a class="header-anchor" href="#api-端点-2" aria-hidden="true">#</a> API 端点</h3><p><code>/delete_group_file</code></p><h3 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>file_id</td><td>string</td><td>文件ID 参考 <a href="#file">File</a> 对象</td></tr><tr><td>busid</td><td>int32</td><td>文件类型 参考 <a href="#file">File</a> 对象</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该 API 无响应数据</p></div><h2 id="创建群文件文件夹" tabindex="-1"><a class="header-anchor" href="#创建群文件文件夹" aria-hidden="true">#</a> 创建群文件文件夹</h2><p>该接口用于创建群文件文件夹。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>仅能在根目录创建文件夹</p></div><h3 id="api-端点-3" tabindex="-1"><a class="header-anchor" href="#api-端点-3" aria-hidden="true">#</a> API 端点</h3><p><code>/create_group_file_folder</code></p><h3 id="参数-3" tabindex="-1"><a class="header-anchor" href="#参数-3" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>name</td><td>string</td><td>群文件夹名字</td></tr></tbody></table><h3 id="响应示例" tabindex="-1"><a class="header-anchor" href="#响应示例" aria-hidden="true">#</a> 响应示例</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;retcode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;folder_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/ad86c100-031d-4139-8cab-c6c661a413ba&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;parent_folder_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;folder_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;测试&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;create_time&quot;</span><span class="token operator">:</span> <span class="token number">1706269735</span><span class="token punctuation">,</span>
    <span class="token property">&quot;modify_time&quot;</span><span class="token operator">:</span> <span class="token number">1706269735</span><span class="token punctuation">,</span>
    <span class="token property">&quot;creator_uin&quot;</span><span class="token operator">:</span> <span class="token number">1650114384</span><span class="token punctuation">,</span>
    <span class="token property">&quot;modifier_uin&quot;</span><span class="token operator">:</span> <span class="token number">1650114384</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;成功&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;echo&quot;</span><span class="token operator">:</span> <span class="token number">111</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重命名群文件夹" tabindex="-1"><a class="header-anchor" href="#重命名群文件夹" aria-hidden="true">#</a> 重命名群文件夹</h2><p>把已经存在的群文件夹改个名字。</p><h3 id="api-端点-4" tabindex="-1"><a class="header-anchor" href="#api-端点-4" aria-hidden="true">#</a> API 端点</h3><p><code>/rename_group_folder</code></p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>folder_id</td><td>string</td><td>群文件夹ID</td></tr><tr><td>name</td><td>string</td><td>群文件夹名字</td></tr></tbody></table><h3 id="响应解释" tabindex="-1"><a class="header-anchor" href="#响应解释" aria-hidden="true">#</a> 响应解释</h3><p>可通过返回的状态码判断重命名是否成功。</p><h2 id="删除群文件文件夹" tabindex="-1"><a class="header-anchor" href="#删除群文件文件夹" aria-hidden="true">#</a> 删除群文件文件夹</h2><p>该接口用于删除群文件文件夹。</p><h3 id="api-端点-5" tabindex="-1"><a class="header-anchor" href="#api-端点-5" aria-hidden="true">#</a> API 端点</h3><p><code>/delete_group_folder</code></p><h3 id="参数-4" tabindex="-1"><a class="header-anchor" href="#参数-4" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>folder_id</td><td>string</td><td>文件夹ID 参考 <a href="#folder">Folder</a> 对象</td></tr></tbody></table><h3 id="响应解释-1" tabindex="-1"><a class="header-anchor" href="#响应解释-1" aria-hidden="true">#</a> 响应解释</h3><p>可通过返回的状态码判断删除是否成功。</p><h2 id="获取群文件系统信息" tabindex="-1"><a class="header-anchor" href="#获取群文件系统信息" aria-hidden="true">#</a> 获取群文件系统信息</h2><p>该接口用于获取群文件系统信息。</p><h3 id="api-端点-6" tabindex="-1"><a class="header-anchor" href="#api-端点-6" aria-hidden="true">#</a> API 端点</h3><p><code>/get_group_file_system_info</code></p><h3 id="参数-5" tabindex="-1"><a class="header-anchor" href="#参数-5" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr></tbody></table><h3 id="响应-2" tabindex="-1"><a class="header-anchor" href="#响应-2" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>file_count</td><td>int32</td><td>文件总数</td></tr><tr><td>limit_count</td><td>int32</td><td>文件上限</td></tr><tr><td>used_space</td><td>int64</td><td>已使用空间</td></tr><tr><td>total_space</td><td>int64</td><td>空间上限</td></tr></tbody></table><h2 id="获取群根目录文件列表" tabindex="-1"><a class="header-anchor" href="#获取群根目录文件列表" aria-hidden="true">#</a> 获取群根目录文件列表</h2><p>该接口用于获取群根目录文件列表。</p><h3 id="api-端点-7" tabindex="-1"><a class="header-anchor" href="#api-端点-7" aria-hidden="true">#</a> API 端点</h3><p><code>/get_group_root_files</code></p><h3 id="参数-6" tabindex="-1"><a class="header-anchor" href="#参数-6" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr></tbody></table><h3 id="响应-3" tabindex="-1"><a class="header-anchor" href="#响应-3" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>files</td><td>List&lt;<a href="#file">File</a>&gt;</td><td>文件列表</td></tr><tr><td>folders</td><td>List&lt;<a href="#folder">Folder</a>&gt;</td><td>文件夹列表</td></tr></tbody></table><h4 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> File</h4><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int32</td><td>群号</td></tr><tr><td>file_id</td><td>string</td><td>文件ID</td></tr><tr><td>file_name</td><td>string</td><td>文件名</td></tr><tr><td>busid</td><td>int32</td><td>文件类型</td></tr><tr><td>file_size</td><td>int64</td><td>文件大小</td></tr><tr><td>upload_time</td><td>int64</td><td>上传时间</td></tr><tr><td>dead_time</td><td>int64</td><td>过期时间，永久文件恒为0</td></tr><tr><td>modify_time</td><td>int64</td><td>最后修改时间</td></tr><tr><td>download_times</td><td>int32</td><td>下载次数</td></tr><tr><td>uploader</td><td>int64</td><td>上传者ID</td></tr><tr><td>uploader_name</td><td>string</td><td>上传者名字</td></tr><tr><td>md5</td><td>string</td><td>md5</td></tr><tr><td>sha</td><td>string</td><td>sha</td></tr><tr><td>sha3</td><td>string</td><td>sha3 可能获取不到</td></tr></tbody></table><h4 id="folder" tabindex="-1"><a class="header-anchor" href="#folder" aria-hidden="true">#</a> Folder</h4><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int32</td><td>群号</td></tr><tr><td>folder_id</td><td>string</td><td>文件夹ID</td></tr><tr><td>folder_name</td><td>string</td><td>文件名</td></tr><tr><td>create_time</td><td>int64</td><td>创建时间</td></tr><tr><td>creator</td><td>int64</td><td>创建者</td></tr><tr><td>creator_name</td><td>string</td><td>创建者名字</td></tr><tr><td>total_file_count</td><td>int32</td><td>子文件数量</td></tr></tbody></table><h2 id="获取群子目录文件列表" tabindex="-1"><a class="header-anchor" href="#获取群子目录文件列表" aria-hidden="true">#</a> 获取群子目录文件列表</h2><p>该接口用于获取群子目录文件列表。</p><h3 id="api-端点-8" tabindex="-1"><a class="header-anchor" href="#api-端点-8" aria-hidden="true">#</a> API 端点</h3><p><code>/get_group_files_by_folder</code></p><h3 id="参数-7" tabindex="-1"><a class="header-anchor" href="#参数-7" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>folder_id</td><td>string</td><td>文件夹ID 参考 <a href="#folder">Folder</a> 对象</td></tr></tbody></table><h3 id="响应-4" tabindex="-1"><a class="header-anchor" href="#响应-4" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>files</td><td>File[]</td><td>文件列表</td></tr><tr><td>folders</td><td>Folder[]</td><td>文件夹列表</td></tr></tbody></table><h2 id="获取群文件资源链接" tabindex="-1"><a class="header-anchor" href="#获取群文件资源链接" aria-hidden="true">#</a> 获取群文件资源链接</h2><p>该接口用于获取群文件资源链接。</p><h3 id="api-端点-9" tabindex="-1"><a class="header-anchor" href="#api-端点-9" aria-hidden="true">#</a> API 端点</h3><p><code>/get_group_file_url</code></p><h3 id="参数-8" tabindex="-1"><a class="header-anchor" href="#参数-8" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>file_id</td><td>string</td><td>文件ID 参考 <a href="#file">File</a> 对象</td></tr><tr><td>busid</td><td>int32</td><td>文件类型 参考 <a href="#file">File</a> 对象</td></tr></tbody></table><h3 id="响应-5" tabindex="-1"><a class="header-anchor" href="#响应-5" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>文件下载链接</td></tr></tbody></table>`,68);function q(A,I){const l=o("Badge"),i=o("Tabs");return h(),c("div",null,[t("div",b,[k,t("p",null,[a("对于 Shamrock 尚未实现的 API，会在标题添加标记 "),s(l,{text:"未实现",type:"danger",vertical:"baseline"})])]),f,s(i,{id:"78",data:[{id:"响应字段"},{id:"响应示例"}]},{title0:e(({value:n,isActive:d})=>[a("响应字段")]),title1:e(({value:n,isActive:d})=>[a("响应示例")]),tab0:e(({value:n,isActive:d})=>[_]),tab1:e(({value:n,isActive:d})=>[m]),_:1}),v,s(i,{id:"219",data:[{id:"响应字段"},{id:"响应示例"}]},{title0:e(({value:n,isActive:d})=>[a("响应字段")]),title1:e(({value:n,isActive:d})=>[a("响应示例")]),tab0:e(({value:n,isActive:d})=>[g]),tab1:e(({value:n,isActive:d})=>[y]),_:1}),x])}const D=p(u,[["render",q],["__file","file.html.vue"]]);export{D as default};