import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as e,a as n,d as o,b as l,e as c}from"./app-1b6211c1.js";const i={},u={class:"hint-container warning"},r=n("p",{class:"hint-container-title"},"注意",-1),d=c(`<h2 id="获取频道系统内bot的资料" tabindex="-1"><a class="header-anchor" href="#获取频道系统内bot的资料" aria-hidden="true">#</a> 获取频道系统内BOT的资料</h2><p>该接口用于获取频道系统内BOT的资料。</p><h3 id="api-端点" tabindex="-1"><a class="header-anchor" href="#api-端点" aria-hidden="true">#</a> API 端点</h3><p><code>/get_guild_service_profile</code></p><h3 id="响应示例" tabindex="-1"><a class="header-anchor" href="#响应示例" aria-hidden="true">#</a> 响应示例</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;retcode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;田所浩二&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tiny_id&quot;</span><span class="token operator">:</span> <span class="token number">1145141919810</span><span class="token punctuation">,</span>
    <span class="token property">&quot;avatar_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://thirdqq.qlogo.cn/g?b=oidb&amp;k=***&amp;kti=***&amp;s=0&amp;t=***&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;echo&quot;</span><span class="token operator">:</span> <span class="token number">123446</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取频道列表" tabindex="-1"><a class="header-anchor" href="#获取频道列表" aria-hidden="true">#</a> 获取频道列表</h2><p>获取频道列表，数据相比于Go-CQHTTP会有一点不一样。</p><h3 id="api-端点-1" tabindex="-1"><a class="header-anchor" href="#api-端点-1" aria-hidden="true">#</a> API 端点</h3><p><code>/get_guild_list</code></p><h3 id="响应示例-1" tabindex="-1"><a class="header-anchor" href="#响应示例-1" aria-hidden="true">#</a> 响应示例</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;retcode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;guild_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;guild_id&quot;</span><span class="token operator">:</span> <span class="token number">111111111111111</span><span class="token punctuation">,</span>
        <span class="token property">&quot;guild_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;北京大学频道&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;guild_display_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;abcdefg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;北京大学交流频道&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;is_enable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;is_banned&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token property">&quot;is_frozen&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;owner_id&quot;</span><span class="token operator">:</span> <span class="token number">22222222222222</span><span class="token punctuation">,</span>
        <span class="token property">&quot;shutup_expire_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;allow_search&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;echo&quot;</span><span class="token operator">:</span> <span class="token number">111</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通过访客获取频道元数据" tabindex="-1"><a class="header-anchor" href="#通过访客获取频道元数据" aria-hidden="true">#</a> 通过访客获取频道元数据</h2><p>获取频道元数据，例如当前成员数量之类。</p><h3 id="api-端点-2" tabindex="-1"><a class="header-anchor" href="#api-端点-2" aria-hidden="true">#</a> API 端点</h3><p><code>/get_guild_meta_by_guest</code></p><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>guild_id</td><td>uint64</td><td>频道ID</td></tr></tbody></table><h3 id="响应示例-2" tabindex="-1"><a class="header-anchor" href="#响应示例-2" aria-hidden="true">#</a> 响应示例</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;retcode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;guild_id&quot;</span><span class="token operator">:</span> <span class="token number">11111111111</span><span class="token punctuation">,</span>
    <span class="token property">&quot;guild_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;北京大学交流频道&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;guild_profile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;create_time&quot;</span><span class="token operator">:</span> <span class="token number">1606878500</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_member_count&quot;</span><span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_robot_count&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_admin_count&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token property">&quot;member_count&quot;</span><span class="token operator">:</span> <span class="token number">6241</span><span class="token punctuation">,</span>
    <span class="token property">&quot;owner_id&quot;</span><span class="token operator">:</span> <span class="token number">2222222221</span><span class="token punctuation">,</span>
    <span class="token property">&quot;guild_display_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;echo&quot;</span><span class="token operator">:</span> <span class="token number">111</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取子频道列表" tabindex="-1"><a class="header-anchor" href="#获取子频道列表" aria-hidden="true">#</a> 获取子频道列表</h2><p>获取一个频道的子频道(channel)列表。</p><h3 id="api-端点-3" tabindex="-1"><a class="header-anchor" href="#api-端点-3" aria-hidden="true">#</a> API 端点</h3><p><code>/get_guild_channel_list</code></p><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>guild_id</td><td>uint64</td><td>频道ID</td></tr><tr><td>refresh</td><td>bool</td><td>是否刷新数据，默认<code>false</code></td></tr></tbody></table><h3 id="响应示例-3" tabindex="-1"><a class="header-anchor" href="#响应示例-3" aria-hidden="true">#</a> 响应示例</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;retcode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;channel_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;owner_guild_id&quot;</span><span class="token operator">:</span> <span class="token number">1111111111111111111</span><span class="token punctuation">,</span>
        <span class="token property">&quot;channel_id&quot;</span><span class="token operator">:</span> <span class="token number">639093000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;channel_uin&quot;</span><span class="token operator">:</span> <span class="token number">639093000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;guild_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1111111111111111111&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;channel_type&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;channel_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;create_time&quot;</span><span class="token operator">:</span> <span class="token number">1606879350</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_member_count&quot;</span><span class="token operator">:</span> <span class="token number">99</span><span class="token punctuation">,</span>
        <span class="token property">&quot;creator_tiny_id&quot;</span><span class="token operator">:</span> <span class="token number">124105218677239793</span><span class="token punctuation">,</span>
        <span class="token property">&quot;talk_permission&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;visible_type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;current_slow_mode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;slow_modes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;jump_switch&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;jump_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;jump_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;category_id&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;my_talk_permission&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;owner_guild_id&quot;</span><span class="token operator">:</span> <span class="token number">1111111111111111111</span><span class="token punctuation">,</span>
        <span class="token property">&quot;channel_id&quot;</span><span class="token operator">:</span> <span class="token number">639093001</span><span class="token punctuation">,</span>
        <span class="token property">&quot;channel_uin&quot;</span><span class="token operator">:</span> <span class="token number">639093001</span><span class="token punctuation">,</span>
        <span class="token property">&quot;guild_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1111111111111111111&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;channel_type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;channel_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;闲聊吹水&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;create_time&quot;</span><span class="token operator">:</span> <span class="token number">1606878501</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_member_count&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;creator_tiny_id&quot;</span><span class="token operator">:</span> <span class="token number">124105218677239793</span><span class="token punctuation">,</span>
        <span class="token property">&quot;talk_permission&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;visible_type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;current_slow_mode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;slow_modes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;slow_mode_key&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;关闭&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;speak_frequency&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_circle&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;slow_mode_key&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;每分钟1条&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;speak_frequency&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_circle&quot;</span><span class="token operator">:</span> <span class="token number">60</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;slow_mode_key&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;每分钟2条&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;speak_frequency&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_circle&quot;</span><span class="token operator">:</span> <span class="token number">60</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;slow_mode_key&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;每分钟5条&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;speak_frequency&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_circle&quot;</span><span class="token operator">:</span> <span class="token number">60</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;slow_mode_key&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;每分钟10条&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;speak_frequency&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_circle&quot;</span><span class="token operator">:</span> <span class="token number">60</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;slow_mode_key&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;每5分钟1条&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;speak_frequency&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_circle&quot;</span><span class="token operator">:</span> <span class="token number">300</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;slow_mode_key&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;每10分钟1条&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;speak_frequency&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_circle&quot;</span><span class="token operator">:</span> <span class="token number">600</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;slow_mode_key&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;每15分钟1条&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;speak_frequency&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_circle&quot;</span><span class="token operator">:</span> <span class="token number">900</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;slow_mode_key&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;每30分钟1条&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;speak_frequency&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_circle&quot;</span><span class="token operator">:</span> <span class="token number">1800</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;slow_mode_key&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;每1小时1条&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;speak_frequency&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_circle&quot;</span><span class="token operator">:</span> <span class="token number">3600</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;slow_mode_key&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;每12小时1条&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;speak_frequency&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_circle&quot;</span><span class="token operator">:</span> <span class="token number">43200</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;slow_mode_key&quot;</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;每24小时1条&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;speak_frequency&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slow_mode_circle&quot;</span><span class="token operator">:</span> <span class="token number">86400</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;jump_switch&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;jump_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;jump_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;category_id&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;my_talk_permission&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;echo&quot;</span><span class="token operator">:</span> <span class="token number">111</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="已知子频道类型列表" tabindex="-1"><a class="header-anchor" href="#已知子频道类型列表" aria-hidden="true">#</a> 已知子频道类型列表</h4><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>1</td><td>文字频道</td></tr><tr><td>2</td><td>语音频道</td></tr><tr><td>5</td><td>直播频道</td></tr><tr><td>7</td><td>主题频道</td></tr></tbody></table><h2 id="获取频道成员列表" tabindex="-1"><a class="header-anchor" href="#获取频道成员列表" aria-hidden="true">#</a> 获取频道成员列表</h2><p>获取一个频道成员列表，但是因为数据量大，可能需要分页。</p><h3 id="api-端点-4" tabindex="-1"><a class="header-anchor" href="#api-端点-4" aria-hidden="true">#</a> API 端点</h3><p><code>/get_guild_member_list</code></p><h3 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>guild_id</td><td>uint64</td><td>频道ID</td></tr><tr><td>next_token</td><td>string</td><td>不提供则从首页开始获取</td></tr><tr><td>all</td><td>bool</td><td>是否一次性获取完所有成员，默认<code>false</code></td></tr><tr><td>refresh</td><td>bool</td><td>是否刷新数据，默认<code>false</code></td></tr></tbody></table><h3 id="响应示例-4" tabindex="-1"><a class="header-anchor" href="#响应示例-4" aria-hidden="true">#</a> 响应示例</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;retcode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;members&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;tiny_id&quot;</span><span class="token operator">:</span> <span class="token number">144115218185291865</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;频道助手&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;频道助手&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;role_id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;role_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小管家&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;role_color&quot;</span><span class="token operator">:</span> <span class="token number">4294936110</span><span class="token punctuation">,</span>
        <span class="token property">&quot;join_time&quot;</span><span class="token operator">:</span> <span class="token number">1606878501</span><span class="token punctuation">,</span>
        <span class="token property">&quot;robot_type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;in_black&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;next_token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0800100118032001&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;finished&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;echo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单独获取频道成员资料" tabindex="-1"><a class="header-anchor" href="#单独获取频道成员资料" aria-hidden="true">#</a> 单独获取频道成员资料</h2><p>单独获取频道成员信息，附带有权限信息和身份组哦~！</p><h3 id="api-端点-5" tabindex="-1"><a class="header-anchor" href="#api-端点-5" aria-hidden="true">#</a> API 端点</h3><p><code>/get_guild_member_profile</code></p><h3 id="参数-3" tabindex="-1"><a class="header-anchor" href="#参数-3" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>guild_id</td><td>uint64</td><td>频道ID</td></tr><tr><td>user_id</td><td>uint64</td><td>成员<code>tinyId</code></td></tr></tbody></table><h3 id="响应示例-5" tabindex="-1"><a class="header-anchor" href="#响应示例-5" aria-hidden="true">#</a> 响应示例</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;retcode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;tiny_id&quot;</span><span class="token operator">:</span> <span class="token number">123456</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;***&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;avatar_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://qqchannel-profile-1251316161.file.myqcloud.com/***&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;join_time&quot;</span><span class="token operator">:</span> <span class="token number">1606878500</span><span class="token punctuation">,</span>
    <span class="token property">&quot;roles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;role_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;role_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;频道主&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token number">4294917938</span><span class="token punctuation">,</span>
        <span class="token property">&quot;permission&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;root_id&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;child_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token number">10001</span><span class="token punctuation">,</span>
              <span class="token number">10002</span><span class="token punctuation">,</span>
              <span class="token number">10003</span><span class="token punctuation">,</span>
              <span class="token number">10004</span><span class="token punctuation">,</span>
              <span class="token number">10005</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;root_id&quot;</span><span class="token operator">:</span> <span class="token number">20000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;child_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token number">20001</span><span class="token punctuation">,</span>
              <span class="token number">20002</span><span class="token punctuation">,</span>
              <span class="token number">20003</span><span class="token punctuation">,</span>
              <span class="token number">20004</span><span class="token punctuation">,</span>
              <span class="token number">20005</span><span class="token punctuation">,</span>
              <span class="token number">20006</span><span class="token punctuation">,</span>
              <span class="token number">20007</span><span class="token punctuation">,</span>
              <span class="token number">20008</span><span class="token punctuation">,</span>
              <span class="token number">20009</span><span class="token punctuation">,</span>
              <span class="token number">20010</span><span class="token punctuation">,</span>
              <span class="token number">20011</span><span class="token punctuation">,</span>
              <span class="token number">20012</span><span class="token punctuation">,</span>
              <span class="token number">20013</span><span class="token punctuation">,</span>
              <span class="token number">20014</span><span class="token punctuation">,</span>
              <span class="token number">20015</span><span class="token punctuation">,</span>
              <span class="token number">20018</span><span class="token punctuation">,</span>
              <span class="token number">20019</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;root_id&quot;</span><span class="token operator">:</span> <span class="token number">30000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;child_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token number">30001</span><span class="token punctuation">,</span>
              <span class="token number">30002</span><span class="token punctuation">,</span>
              <span class="token number">30003</span><span class="token punctuation">,</span>
              <span class="token number">30004</span><span class="token punctuation">,</span>
              <span class="token number">30005</span><span class="token punctuation">,</span>
              <span class="token number">30006</span><span class="token punctuation">,</span>
              <span class="token number">30007</span><span class="token punctuation">,</span>
              <span class="token number">90002</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;root_id&quot;</span><span class="token operator">:</span> <span class="token number">40000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;child_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token number">40001</span><span class="token punctuation">,</span>
              <span class="token number">40002</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;root_id&quot;</span><span class="token operator">:</span> <span class="token number">50000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;child_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token number">50001</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;root_id&quot;</span><span class="token operator">:</span> <span class="token number">60000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;child_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token number">60001</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;root_id&quot;</span><span class="token operator">:</span> <span class="token number">70000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;child_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token number">70001</span><span class="token punctuation">,</span>
              <span class="token number">70002</span><span class="token punctuation">,</span>
              <span class="token number">70003</span><span class="token punctuation">,</span>
              <span class="token number">70004</span><span class="token punctuation">,</span>
              <span class="token number">70005</span><span class="token punctuation">,</span>
              <span class="token number">70006</span><span class="token punctuation">,</span>
              <span class="token number">70007</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;root_id&quot;</span><span class="token operator">:</span> <span class="token number">80000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;child_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token number">80001</span><span class="token punctuation">,</span>
              <span class="token number">80002</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;root_id&quot;</span><span class="token operator">:</span> <span class="token number">90000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;child_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token number">90001</span><span class="token punctuation">,</span>
              <span class="token number">30003</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;root_id&quot;</span><span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;child_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token number">100001</span><span class="token punctuation">,</span>
              <span class="token number">100002</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;root_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;child_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token number">1001</span><span class="token punctuation">,</span>
              <span class="token number">1002</span><span class="token punctuation">,</span>
              <span class="token number">1003</span><span class="token punctuation">,</span>
              <span class="token number">1004</span><span class="token punctuation">,</span>
              <span class="token number">1005</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;root_id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;child_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token number">2001</span><span class="token punctuation">,</span>
              <span class="token number">2002</span><span class="token punctuation">,</span>
              <span class="token number">2003</span><span class="token punctuation">,</span>
              <span class="token number">2004</span><span class="token punctuation">,</span>
              <span class="token number">2005</span><span class="token punctuation">,</span>
              <span class="token number">2006</span><span class="token punctuation">,</span>
              <span class="token number">2007</span><span class="token punctuation">,</span>
              <span class="token number">2008</span><span class="token punctuation">,</span>
              <span class="token number">2009</span><span class="token punctuation">,</span>
              <span class="token number">2010</span><span class="token punctuation">,</span>
              <span class="token number">2011</span><span class="token punctuation">,</span>
              <span class="token number">2012</span><span class="token punctuation">,</span>
              <span class="token number">2013</span><span class="token punctuation">,</span>
              <span class="token number">2014</span><span class="token punctuation">,</span>
              <span class="token number">2015</span><span class="token punctuation">,</span>
              <span class="token number">2016</span><span class="token punctuation">,</span>
              <span class="token number">2017</span><span class="token punctuation">,</span>
              <span class="token number">2018</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;root_id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;child_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token number">3001</span><span class="token punctuation">,</span>
              <span class="token number">3002</span><span class="token punctuation">,</span>
              <span class="token number">3003</span><span class="token punctuation">,</span>
              <span class="token number">3004</span><span class="token punctuation">,</span>
              <span class="token number">3005</span><span class="token punctuation">,</span>
              <span class="token number">3006</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;root_id&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">&quot;child_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token number">4001</span><span class="token punctuation">,</span>
              <span class="token number">4002</span><span class="token punctuation">,</span>
              <span class="token number">4003</span><span class="token punctuation">,</span>
              <span class="token number">4004</span><span class="token punctuation">,</span>
              <span class="token number">4005</span><span class="token punctuation">,</span>
              <span class="token number">4006</span><span class="token punctuation">,</span>
              <span class="token number">4007</span><span class="token punctuation">,</span>
              <span class="token number">4008</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;root_id&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;child_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token number">5001</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;root_id&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token property">&quot;child_ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token number">6001</span><span class="token punctuation">,</span>
              <span class="token number">6002</span><span class="token punctuation">,</span>
              <span class="token number">6003</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;display_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;频道主&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;role_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;15&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;role_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;15活跃值&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token number">4278190080</span><span class="token punctuation">,</span>
        <span class="token property">&quot;permission&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token property">&quot;display_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;echo&quot;</span><span class="token operator">:</span> <span class="token number">111</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发送信息到子频道" tabindex="-1"><a class="header-anchor" href="#发送信息到子频道" aria-hidden="true">#</a> 发送信息到子频道</h2><p>发送频道内信息，需要单独的API哦，不要使用<code>/send_message</code>去发频道消息，发不出去的~~</p><h3 id="api-端点-6" tabindex="-1"><a class="header-anchor" href="#api-端点-6" aria-hidden="true">#</a> API 端点</h3><p><code>/send_guild_channel_msg</code></p><h3 id="参数-4" tabindex="-1"><a class="header-anchor" href="#参数-4" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>guild_id</td><td>uint64</td><td>频道ID</td></tr><tr><td>channel_id</td><td>uint64</td><td>子频道ID</td></tr><tr><td>message</td><td>string or <code>Message</code></td><td>消息体，可为消息段或者CQ码</td></tr><tr><td>auto_escape</td><td>bool</td><td>是否解析CQ码，<code>true</code>为不解析，默认<code>false</code></td></tr><tr><td>retry_cnt</td><td>int32</td><td>消息发送失败，最大重试次数，默认<code>3</code></td></tr><tr><td>recall_duration</td><td>int64</td><td>自动撤回间隔(毫秒)，默认不撤回</td></tr></tbody></table><h3 id="响应示例-6" tabindex="-1"><a class="header-anchor" href="#响应示例-6" aria-hidden="true">#</a> 响应示例</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;retcode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;message_id&quot;</span><span class="token operator">:</span> <span class="token number">1933593189</span><span class="token punctuation">,</span>
    <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token number">1706909190</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;echo&quot;</span><span class="token operator">:</span> <span class="token number">111</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取话题频道帖子" tabindex="-1"><a class="header-anchor" href="#获取话题频道帖子" aria-hidden="true">#</a> 获取话题频道帖子</h2><p>该API接口已经被遗弃！</p><h2 id="获取频道帖子广场帖子" tabindex="-1"><a class="header-anchor" href="#获取频道帖子广场帖子" aria-hidden="true">#</a> 获取频道帖子广场帖子</h2><p>新的获取帖子广场的帖子哦！</p><h3 id="api-端点-7" tabindex="-1"><a class="header-anchor" href="#api-端点-7" aria-hidden="true">#</a> API 端点</h3><p><code>/get_guild_feeds</code></p><h3 id="参数-5" tabindex="-1"><a class="header-anchor" href="#参数-5" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>guild_id</td><td>uint64</td><td>频道ID</td></tr><tr><td>from</td><td>uint32</td><td>开始获取的位置</td></tr></tbody></table><h3 id="响应示例-7" tabindex="-1"><a class="header-anchor" href="#响应示例-7" aria-hidden="true">#</a> 响应示例</h3><blockquote><p>该请求携带了大量原生响应数据，无法详细介绍，请自行测试！</p></blockquote><h2 id="获取频道角色列表" tabindex="-1"><a class="header-anchor" href="#获取频道角色列表" aria-hidden="true">#</a> 获取频道角色列表</h2><p>获取身份组列表，包括隐藏的身份组哦~~</p><h3 id="api-端点-8" tabindex="-1"><a class="header-anchor" href="#api-端点-8" aria-hidden="true">#</a> API 端点</h3><p><code>/get_guild_roles</code></p><h3 id="参数-6" tabindex="-1"><a class="header-anchor" href="#参数-6" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>guild_id</td><td>uint64</td><td>频道ID</td></tr></tbody></table><h3 id="响应示例-8" tabindex="-1"><a class="header-anchor" href="#响应示例-8" aria-hidden="true">#</a> 响应示例</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;retcode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;roles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;argb_color&quot;</span><span class="token operator">:</span> <span class="token number">4286151052</span><span class="token punctuation">,</span>
        <span class="token property">&quot;disabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;independent&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_count&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;member_count&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;owned&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;role_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;role_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;普通成员&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;permission&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;echo&quot;</span><span class="token operator">:</span> <span class="token number">111</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取频道消息" tabindex="-1"><a class="header-anchor" href="#获取频道消息" aria-hidden="true">#</a> 获取频道消息</h2><p>该接口不会实现，因为您可以调用<code>/get_msg</code>来获取来自频道的消息，无需实现一个专属的接口。</p><h2 id="删除频道角色" tabindex="-1"><a class="header-anchor" href="#删除频道角色" aria-hidden="true">#</a> 删除频道角色</h2><p>删除一个身份组，首先，你得保证你有权限，因为这个API不会提供任何返回数据哦！</p><h3 id="api-端点-9" tabindex="-1"><a class="header-anchor" href="#api-端点-9" aria-hidden="true">#</a> API 端点</h3><p><code>/delete_guild_role</code></p><h3 id="参数-7" tabindex="-1"><a class="header-anchor" href="#参数-7" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>guild_id</td><td>uint64</td><td>频道ID</td></tr><tr><td>role_id</td><td>uint64</td><td>角色ID</td></tr></tbody></table><h3 id="响应" tabindex="-1"><a class="header-anchor" href="#响应" aria-hidden="true">#</a> 响应</h3><blockquote><p>该 API 无响应数据</p></blockquote><h2 id="设置用户在频道中的角色" tabindex="-1"><a class="header-anchor" href="#设置用户在频道中的角色" aria-hidden="true">#</a> 设置用户在频道中的角色</h2><p>设置用户身份组。</p><h3 id="api端点" tabindex="-1"><a class="header-anchor" href="#api端点" aria-hidden="true">#</a> API端点</h3><p><code>/set_guild_member_role</code></p><h3 id="参数-8" tabindex="-1"><a class="header-anchor" href="#参数-8" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>guild_id</td><td>uint64</td><td>频道ID</td></tr><tr><td>role_id</td><td>uint64</td><td>角色ID</td></tr><tr><td>set</td><td>bool</td><td>设置还是移除，默认<code>false</code></td></tr><tr><td>users</td><td>string or <code>array&lt;long&gt;</code></td><td>批量设置用户s</td></tr></tbody></table>`,88);function k(v,m){const s=t("Badge");return p(),e("div",null,[n("div",u,[r,n("p",null,[o("对于 Shamrock 尚未实现的 API，会在标题添加标记 "),l(s,{text:"未实现",type:"danger",vertical:"baseline"})])]),d])}const h=a(i,[["render",k],["__file","guild.html.vue"]]);export{h as default};