"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[51165],{209166:(e,t,a)=>{a.r(t),a.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-564e03da","path":"/devices/KEYZB-110.html","title":"Develco KEYZB-110 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Develco KEYZB-110 control via MQTT","description":"Integrate your Develco KEYZB-110 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-30T12:58:50.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Arming/Disarming from the server","slug":"arming-disarming-from-the-server","link":"#arming-disarming-from-the-server","children":[]},{"level":3,"title":"Arming/Disarming from the keypad","slug":"arming-disarming-from-the-keypad","link":"#arming-disarming-from-the-keypad","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Tamper (binary)","slug":"tamper-binary","link":"#tamper-binary","children":[]},{"level":3,"title":"Action code (text)","slug":"action-code-text","link":"#action-code-text","children":[]},{"level":3,"title":"Action transaction (numeric)","slug":"action-transaction-numeric","link":"#action-transaction-numeric","children":[]},{"level":3,"title":"Action zone (text)","slug":"action-zone-text","link":"#action-zone-text","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1711481069000},"filePathRelative":"devices/KEYZB-110.md"}')},207462:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(166252);const o=(0,n._)("h1",{id:"develco-keyzb-110",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#develco-keyzb-110","aria-hidden":"true"},"#"),(0,n.Uk)(" Develco KEYZB-110")],-1),i=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),s=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"KEYZB-110")],-1),r=(0,n._)("td",null,"Vendor",-1),d=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Keypad")],-1),c=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"battery, battery_low, voltage, tamper, action_code, action_transaction, action_zone, action, linkquality")],-1),l=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/KEYZB-110.png",alt:"Develco KEYZB-110"})])],-1),p=(0,n._)("tr",null,[(0,n._)("td",null,"White-label"),(0,n._)("td",null,"Frient KEPZB-110")],-1),u=(0,n.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="arming-disarming-from-the-server" tabindex="-1"><a class="header-anchor" href="#arming-disarming-from-the-server" aria-hidden="true">#</a> Arming/Disarming from the server</h3><p>To set arming mode publish the following payload to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> topic:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;arm_mode&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string-property property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arm_all_zones&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Valid <code>mode</code> values as per ZCL specifications are <code>disarm</code>, <code>arm_day_zones</code>, <code>arm_night_zones</code>, <code>arm_all_zones</code>, <code>exit_delay</code>, <code>entry_delay</code>, <code>not_ready</code>, <code>in_alarm</code>, <code>arming_stay</code>, <code>arming_night</code>, <code>arming_away</code>.</p><h3 id="arming-disarming-from-the-keypad" tabindex="-1"><a class="header-anchor" href="#arming-disarming-from-the-keypad" aria-hidden="true">#</a> Arming/Disarming from the keypad</h3><p>When an attempt to set arm mode is done on the keypad, Zigbee2MQTT will publish the following payload to topic <code>zigbee2mqtt/FRIENDLY_NAME</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arm_all_zones&quot;</span><span class="token punctuation">,</span> <span class="token comment">// This is the example</span>\n    <span class="token string-property property">&quot;action_code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span> <span class="token comment">// The code being entered</span>\n    <span class="token string-property property">&quot;action_zone&quot;</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token comment">// The zone being armed (default 23)</span>\n    <span class="token string-property property">&quot;action_transaction&quot;</span><span class="token operator">:</span> <span class="token number">99</span> <span class="token comment">// The transaction number</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The automation server must validate the request and send a notification to the keypad, confirming or denying the request.</p><p>Do so by sending the following payload to <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;arm_mode&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string-property property">&quot;transaction&quot;</span><span class="token operator">:</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token comment">// Transaction number (this must be the same as the keypad request `action_transaction`)</span>\n        <span class="token string-property property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arm_all_zones&quot;</span> <span class="token comment">// Mode (this must be the same as the keypad request `action`)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Valid <code>mode</code> values are <code>disarm</code>, <code>arm_day_zones</code>, <code>arm_night_zones</code>, <code>arm_all_zones</code>, <code>invalid_code</code>, <code>not_ready</code>, <code>already_disarmed</code></p><p>The automation server must follow the notification with an actual change to the correct arm mode. For the example above, the server should respond with <code>exit_delay</code>, count the elapsed time (e.g 30 secs), then change mode again to <code>arm_all_zones</code> (see &quot;Arming/Disarming from the server&quot; section above)</p>',13),h=(0,n._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,n.Uk)(" OTA updates")],-1),m=(0,n.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary" aria-hidden="true">#</a> Tamper (binary)</h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="action-code-text" tabindex="-1"><a class="header-anchor" href="#action-code-text" aria-hidden="true">#</a> Action code (text)</h3><p>Pin code introduced.. Value can be found in the published state on the <code>action_code</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-transaction-numeric" tabindex="-1"><a class="header-anchor" href="#action-transaction-numeric" aria-hidden="true">#</a> Action transaction (numeric)</h3><p>Last action transaction number.. Value can be found in the published state on the <code>action_transaction</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-zone-text" tabindex="-1"><a class="header-anchor" href="#action-zone-text" aria-hidden="true">#</a> Action zone (text)</h3><p>Alarm zone. Default value 23. Value can be found in the published state on the <code>action_zone</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>disarm</code>, <code>arm_day_zones</code>, <code>arm_night_zones</code>, <code>arm_all_zones</code>, <code>exit_delay</code>, <code>emergency</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',19),v={},g=(0,a(983744).Z)(v,[["render",function(e,t){const a=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),o,(0,n._)("table",null,[i,(0,n._)("tbody",null,[s,(0,n._)("tr",null,[r,(0,n._)("td",null,[(0,n.Wm)(a,{to:"/supported-devices/#v=Develco"},{default:(0,n.w5)((()=>[(0,n.Uk)("Develco")])),_:1})])]),d,c,l,p])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,n.kq)(" Notes END: Do not edit below this line "),h,(0,n._)("p",null,[(0,n.Uk)("This device supports OTA updates, for more information see "),(0,n.Wm)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,n.w5)((()=>[(0,n.Uk)("OTA updates")])),_:1}),(0,n.Uk)(".")]),m])}]])}}]);