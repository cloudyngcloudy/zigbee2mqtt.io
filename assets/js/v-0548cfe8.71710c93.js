"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[79396],{300160:(e,i,t)=>{t.r(i),t.d(i,{data:()=>o});const o=JSON.parse('{"key":"v-0548cfe8","path":"/devices/BLE-YL01.html","title":"TuYa BLE-YL01 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa BLE-YL01 control via MQTT","description":"Integrate your TuYa BLE-YL01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-09-28T10:54:36.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Tds (numeric)","slug":"tds-numeric","link":"#tds-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Ph (numeric)","slug":"ph-numeric","link":"#ph-numeric","children":[]},{"level":3,"title":"Ec (numeric)","slug":"ec-numeric","link":"#ec-numeric","children":[]},{"level":3,"title":"Orp (numeric)","slug":"orp-numeric","link":"#orp-numeric","children":[]},{"level":3,"title":"Free chlorine (numeric)","slug":"free-chlorine-numeric","link":"#free-chlorine-numeric","children":[]},{"level":3,"title":"Ph max (numeric)","slug":"ph-max-numeric","link":"#ph-max-numeric","children":[]},{"level":3,"title":"Ph min (numeric)","slug":"ph-min-numeric","link":"#ph-min-numeric","children":[]},{"level":3,"title":"Ec max (numeric)","slug":"ec-max-numeric","link":"#ec-max-numeric","children":[]},{"level":3,"title":"Ec min (numeric)","slug":"ec-min-numeric","link":"#ec-min-numeric","children":[]},{"level":3,"title":"Orp max (numeric)","slug":"orp-max-numeric","link":"#orp-max-numeric","children":[]},{"level":3,"title":"Orp min (numeric)","slug":"orp-min-numeric","link":"#orp-min-numeric","children":[]},{"level":3,"title":"Free chlorine max (numeric)","slug":"free-chlorine-max-numeric","link":"#free-chlorine-max-numeric","children":[]},{"level":3,"title":"Free chlorine min (numeric)","slug":"free-chlorine-min-numeric","link":"#free-chlorine-min-numeric","children":[]},{"level":3,"title":"Salinity (numeric)","slug":"salinity-numeric","link":"#salinity-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1711481069000},"filePathRelative":"devices/BLE-YL01.md"}')},711841:(e,i,t)=>{t.r(i),t.d(i,{default:()=>p});var o=t(166252);const a=(0,o._)("h1",{id:"tuya-ble-yl01",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#tuya-ble-yl01","aria-hidden":"true"},"#"),(0,o.Uk)(" TuYa BLE-YL01")],-1),n=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"BLE-YL01")],-1),d=(0,o._)("td",null,"Vendor",-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Smart WiFi Zigbee chlorine meter")],-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"tds, temperature, battery, ph, ec, orp, free_chlorine, ph_max, ph_min, ec_max, ec_min, orp_max, orp_min, free_chlorine_max, free_chlorine_min, salinity, linkquality")],-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/BLE-YL01.png",alt:"TuYa BLE-YL01"})])],-1),h=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),s=(0,o.uE)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="tds-numeric" tabindex="-1"><a class="header-anchor" href="#tds-numeric" aria-hidden="true">#</a> Tds (numeric)</h3><p>Total Dissolved Solids. Value can be found in the published state on the <code>tds</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="ph-numeric" tabindex="-1"><a class="header-anchor" href="#ph-numeric" aria-hidden="true">#</a> Ph (numeric)</h3><p>pH value, if the pH value is lower than 6.5, it means that the water quality is too acidic and has impurities, and it is necessary to add disinfectant water for disinfection. Value can be found in the published state on the <code>ph</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>pH</code>.</p><h3 id="ec-numeric" tabindex="-1"><a class="header-anchor" href="#ec-numeric" aria-hidden="true">#</a> Ec (numeric)</h3><p>Electrical conductivity. Value can be found in the published state on the <code>ec</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>µS/cm</code>.</p><h3 id="orp-numeric" tabindex="-1"><a class="header-anchor" href="#orp-numeric" aria-hidden="true">#</a> Orp (numeric)</h3><p>Oxidation Reduction Potential value. If the ORP value is above 850mv, it means that the disinfectant has been added too much, and it is necessary to add water or change the water for neutralization. If the ORP value is below 487mv, it means that too little disinfectant has been added and the pool needs to be disinfected again. Value can be found in the published state on the <code>orp</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="free-chlorine-numeric" tabindex="-1"><a class="header-anchor" href="#free-chlorine-numeric" aria-hidden="true">#</a> Free chlorine (numeric)</h3><p>Free chlorine value. The water in the swimming pool should be between 6.5-8ph and ORP should be between 487-840mv, and the chlorine value will be displayed normally. Chlorine will not be displayed if either value is out of range. Value can be found in the published state on the <code>free_chlorine</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mg/L</code>.</p><h3 id="ph-max-numeric" tabindex="-1"><a class="header-anchor" href="#ph-max-numeric" aria-hidden="true">#</a> Ph max (numeric)</h3><p>pH maximal value. Value can be found in the published state on the <code>ph_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ph_max&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>20</code>. The unit of this value is <code>pH</code>.</p><h3 id="ph-min-numeric" tabindex="-1"><a class="header-anchor" href="#ph-min-numeric" aria-hidden="true">#</a> Ph min (numeric)</h3><p>pH minimal value. Value can be found in the published state on the <code>ph_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ph_min&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>20</code>. The unit of this value is <code>pH</code>.</p><h3 id="ec-max-numeric" tabindex="-1"><a class="header-anchor" href="#ec-max-numeric" aria-hidden="true">#</a> Ec max (numeric)</h3><p>Electrical Conductivity maximal value. Value can be found in the published state on the <code>ec_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ec_max&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>µS/cm</code>.</p><h3 id="ec-min-numeric" tabindex="-1"><a class="header-anchor" href="#ec-min-numeric" aria-hidden="true">#</a> Ec min (numeric)</h3><p>Electrical Conductivity minimal value. Value can be found in the published state on the <code>ec_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ec_min&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>µS/cm</code>.</p><h3 id="orp-max-numeric" tabindex="-1"><a class="header-anchor" href="#orp-max-numeric" aria-hidden="true">#</a> Orp max (numeric)</h3><p>Oxidation Reduction Potential maximal value. Value can be found in the published state on the <code>orp_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;orp_max&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1000</code>. The unit of this value is <code>mV</code>.</p><h3 id="orp-min-numeric" tabindex="-1"><a class="header-anchor" href="#orp-min-numeric" aria-hidden="true">#</a> Orp min (numeric)</h3><p>Oxidation Reduction Potential minimal value. Value can be found in the published state on the <code>orp_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;orp_min&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1000</code>. The unit of this value is <code>mV</code>.</p><h3 id="free-chlorine-max-numeric" tabindex="-1"><a class="header-anchor" href="#free-chlorine-max-numeric" aria-hidden="true">#</a> Free chlorine max (numeric)</h3><p>Free Chlorine maximal value. Value can be found in the published state on the <code>free_chlorine_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;free_chlorine_max&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>15</code>. The unit of this value is <code>mg/L</code>.</p><h3 id="free-chlorine-min-numeric" tabindex="-1"><a class="header-anchor" href="#free-chlorine-min-numeric" aria-hidden="true">#</a> Free chlorine min (numeric)</h3><p>Free Chlorine minimal value. Value can be found in the published state on the <code>free_chlorine_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;free_chlorine_min&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>15</code>. The unit of this value is <code>mg/L</code>.</p><h3 id="salinity-numeric" tabindex="-1"><a class="header-anchor" href="#salinity-numeric" aria-hidden="true">#</a> Salinity (numeric)</h3><p>Salt value. Value can be found in the published state on the <code>salinity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',36),m={},p=(0,t(983744).Z)(m,[["render",function(e,i){const t=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[n,(0,o._)("tbody",null,[c,(0,o._)("tr",null,[d,(0,o._)("td",null,[(0,o.Wm)(t,{to:"/supported-devices/#v=TuYa"},{default:(0,o.w5)((()=>[(0,o.Uk)("TuYa")])),_:1})])]),r,l,u])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,o.kq)(" Notes END: Do not edit below this line "),h,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),s])}]])}}]);