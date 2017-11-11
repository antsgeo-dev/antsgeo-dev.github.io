webpackJsonp([1,2],{

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(656);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(936)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js?sourcemap!./../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js?sourcemap!./../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 656:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(657)();
// imports


// module
exports.push([module.i, "html, body {\r\n    height: auto !important;\r\n}\r\n\r\nbody {\r\n  -webkit-transition: 1s;\r\n  transition: 1s;\r\n}\r\n\r\n#map {\r\n  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, .15);\n  height: 100%;\r\n}\r\n\r\n#menu {\r\n  margin-top: 1em;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n#menu > .header {\r\n  padding-left: 16px !important;\r\n}\r\n\r\n.custon_dropdown, .custon_dropdown-mobile {\r\n  min-width: 100% !important;\r\n  width: 100%;\r\n}\r\n\r\n#moreSelect .custon_dropdown > .text > i {\r\n  margin-right: 3px !important;\r\n}\r\n\r\n#moreSelect .custon_dropdown > .menu {\r\n  width: 120% !important;\r\n  min-width: auto !important;\r\n}\r\n\r\n#moreSelect .custon_dropdown-mobile > .menu {\r\n  width: 100% !important;\r\n  min-width: auto !important;\r\n}\r\n\r\n .lang_drop > .text {\r\n  overflow: hidden;\r\n  width: 100%;\r\n}\r\n\r\n .lang_drop > .menu {\r\n  width: 120% !important;\r\n}\r\n\r\n.custon_dropdown-mobile > .menu {\r\n  width: 100% !important;\r\n}\r\n\r\nmy-app {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n\r\n  -moz-flex-direction: column;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  height: 100%;\r\n}\r\n\r\nmy-menu {\r\n  min-height: auto;\r\n}\r\n\r\nmy-map {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-flex: 7;\r\n      -ms-flex: 7;\r\n          flex: 7;\n\n  -moz-flex-direction: column;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  padding: 0px 2px;\r\n}\r\n\r\n.custom_footer {\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 12px;\r\n  padding: 4px 0px;\r\n}\r\n\r\n.loader {\r\n  font-size: 15px !important;\r\n}\r\n\r\n.custom_dimmer {\r\n  z-index: 1500 !important;\r\n}\r\n\r\n.lableClass {\r\n  border-radius: 50%;\r\n  height: 6px;\r\n  width: 6px;\r\n}\r\n\r\n.labelClass_specie {\r\n  color: #333;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  margin-bottom: 5px;\r\n  float: left;\r\n  word-wrap: break-word;\r\n  padding-right: 15px;\r\n}\r\n\r\n.labelClass_specie-user {\r\n  width: 59%;\r\n}\r\n\r\n.labelClass_specie-usually {\r\n  width: 93%;\r\n}\r\n\r\n.labelClass_complain {\r\n  -webkit-transition: .3s all;\r\n  transition: .3s all;\r\n  cursor: pointer;\r\n  font-size: 17px;\r\n  opacity: 0.7;\r\n}\r\n\r\n.labelClass_complain > .pointing {\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  visibility: hidden;\r\n  position: absolute !important;\r\n  right: 50px;\r\n  margin-right: -33px;\r\n  top: 8px;\r\n  /*max-width: 80% !important;*/\r\n}\r\n\r\n.labelClass_complain-user > .pointing {\r\n  max-width: auto !important;\r\n  white-space: nowrap;\r\n}\r\n\r\n.complain_label {\r\n  width: auto;\r\n  display: inline-block !important;\r\n  right: -17px;\r\n  left: inherit !important;\r\n  top: inherit !important;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  right: 5px;\r\n}\r\n\r\n.complain_label:disabled {\r\n  background: red !important;\r\n}\r\n\r\n.pointing-user {\r\n  top: 0px !important;\r\n}\r\n\r\n.labelClass_complain > .pointing-user {\r\n  top: 0px !important;\r\n}\r\n\r\n.labelClass_complain-window {\r\n  padding: 10px;\r\n  width: 45%;\r\n  background: white;\r\n  position: absolute;\r\n  left: -155px;\r\n  top: 0px;\r\n  border-radius: 3px;\r\n  display: none;\r\n}\r\n\r\n.labelClass_complain-window .basic {\r\n  margin-top: 10px;\r\n}\r\n\r\n.labelClass_complain-window .form textarea {\r\n  padding-left: 33px;\r\n  resize: none;\r\n}\r\n\r\n.ui.icon.input>textarea:focus~i.icon {\r\n  opacity: 1 !important\r\n}\r\n\r\n.popup_modals .header {\r\n  font-weight: normal;\r\n}\r\n\r\n.popup_modals {\r\n  border-radius: 0px !important;\r\n  padding: 5px !important;\r\n  margin-top: 2rem !important;\r\n  top: 0;\r\n  position: static!important;\r\n  margin: 3.5rem auto!important;\r\n}\r\n\r\n#popup_modal .description, #popup_modal_complain .description {\r\n  padding-top: 0px !important;\r\n  padding-bottom: 10px !important;\r\n}\r\n\r\n#popup_modal_complain .divider {\r\n  margin-top: 0px;\r\n}\r\n\r\n#popup_modal_complain .divider > i {\r\n  margin-right: 0px !important;\r\n}\r\n\r\n.mobPopup_textarea {\r\n  width: 100%;\r\n  height: 65px !important;\r\n  resize: none !important;\r\n  margin-bottom: 10px !important;\r\n}\r\n\r\n.popup_modals .content {\r\n  padding: 0px !important;\r\n}\r\n\r\n.popup_modals .footer .btnCopy {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.popup_modals .footer .btnComplain {\r\n  margin-bottom: 10px;\r\n  position: relative;\r\n}\r\n\r\n.mobPopup_name {\r\n  font-size: 1.4rem;\r\n  margin-bottom: 10px;\r\n  text-align: left;\r\n  width: 57%;\r\n  display: inline-block;\r\n  word-break: break-all;\r\n}\r\n\r\n.mobPopup_name-width {\r\n  width: 100% !important;\r\n  text-align: center !important;\r\n}\r\n\r\n.mobPopup_user-img {\r\n  height: 25px;\r\n  display: inline-block;\r\n  width: 25px;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  border-radius: 50%;\r\n}\r\n\r\n.mobPopup_user a {\r\n  position: relative;\r\n  top: -3px;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  max-width: 76px;\r\n}\r\n\r\n.mobPopup_user {\r\n  text-align: right;\r\n  width: 40%;\r\n  display: inline-block;\r\n  float: right;\r\n  padding-top: 2px;\r\n}\r\n\r\n.mobPopup_comment {\r\n  margin-bottom: 10px;\r\n  text-align: justify;\r\n  font-size: 18px;\r\n  color: #666;\r\n      word-wrap: break-word;\r\n}\r\n\r\n.mobPopup_time {\r\n  text-align: center;\r\n}\r\n\r\n.mobPopup_coor {\r\n  margin-bottom: 2px;\r\n  margin-top: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.popup_modals .content > .description {\r\n  padding: 0px !important;\r\n}\r\n\r\n.labelClass_complain-window > .form label {\r\n  color: rgba(0,0,0,.6)!important;\r\n  font-weight: normal !important;\r\n  margin-bottom: 4px !important;\r\n}\r\n\r\n.labelClass_complain-window .ui.icon.input>i.icon:before {\r\n  top: 20px !important;\r\n}\r\n\r\n.labelClass_complain-window h5 {\r\n  text-align: center;\r\n}\r\n\r\n.labelClass_complain-window-head {\r\n  color: #333;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin-bottom: 5px;\r\n  padding-top: 1px;\r\n}\r\n\r\n.labelClass_complain-window:before {\r\n  display: block;\r\n  content: '';\r\n  width: 0;\r\n  height: 0;\r\n  margin: 0;\r\n  border-left: 10px solid transparent;\r\n  border-right: 10px solid transparent;\r\n  border-top: 10px solid #fff;\r\n  position: absolute;\r\n  right: -14px;\r\n  -webkit-transform: rotate(270deg);\r\n          transform: rotate(270deg);\r\n  top: 46.5%;\r\n}\r\n\r\n.labelClass_complain-window-close {\r\n  font-size: 15px;\r\n  position: absolute;\r\n  right: 1px;\r\n  top: 1px;\r\n  font-weight: lighter;\r\n  cursor: pointer;\r\n  -webkit-transition: .3s all;\r\n  transition: .3s all;\r\n  color: rgba(0,0,0,0.5);\r\n}\r\n\r\n.labelClass_complain-tooltip {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 0px;\r\n}\r\n\r\n.labelClass_complain-window-close:hover {\r\n  color: rgba(0,0,0,1);\r\n}\r\n\r\n.labelClass_complain-window-loading {\r\n  display: none;\r\n}\r\n\r\n.labelClass_complain-user {\r\n  position: absolute;\r\n  left: -25px;\r\n  top: 2px;\r\n}\r\n\r\n.labelClass_complain:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.labelClass_complain-usually {\r\n  float: right;\r\n}\r\n\r\n.labelClass_complain-usually > i {\r\n  margin: 0px !important;\r\n}\r\n\r\n.labelClass_complain-user {\r\n  float: right;\r\n}\r\n\r\n.labelClass_complain-user > i {\r\n  position: relative;\r\n  right: 8px;\r\n  top: 2px;\r\n}\r\n\r\n.labelClass_user:after {\r\n  content: \"\";\r\n  display: block;\r\n  border-right: 1px solid #e1e1e1;\r\n  height: 30px;\r\n  width: 1px;\r\n  position: absolute;\r\n  left: -8px;\r\n  top: -2px;\r\n}\r\n\r\n.labelClass_user {\r\n  position: relative;\r\n  float: right;\r\n  max-width: 35%;\r\n  text-align: right;\r\n  margin-bottom: 5px;\r\n  position: relative;\r\n  top: -2px;\r\n}\r\n\r\n.labelClass_user-avatar {\r\n  width: 22px;\r\n  height: 22px;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n  border-radius: 50%;\r\n  margin-top: 2px;\r\n  float: left;\r\n}\r\n\r\n.labelClass_user-nickname {\r\n  width: auto;\r\n  text-align: left;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  margin-top: 4px;\r\n  padding-left: 4px;\r\n  max-width: 76%;\r\n  float: right;\r\n}\n\n.labelClass_specie-margin {\n  margin-bottom: 20px;\n}\r\n\r\n.labelClass_specie:first-letter {\r\n    text-transform: uppercase;\r\n}\r\n\r\n.labelClass_comment {\r\n  clear: both;\r\n}\r\n\r\n.custom_divider {\r\n  margin-bottom: 0px !important;\r\n}\r\n\r\n.labelClass_coor {\r\n    text-align: center;\r\n}\n\n.disabled {\n  pointer-events: none;\r\n   cursor: default;\n}\r\n\r\n.labelClass_time {\r\n  text-align: center;\r\n}\r\n\r\n.labelClass_clear {\r\n  clear: both;\r\n  margin-bottom: -10px;\r\n}\r\n\r\n.labelClass_hr {\r\n  border: 0;\r\n  height: 0;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.lableClass_label {\r\n  white-space: nowrap;\r\n  display: inline;\r\n  position: relative;\r\n  top: -29px;\r\n  left: 21px;\r\n  font-size: 17px;\r\n  background: white;\r\n  padding: 1px 10px;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n  box-shadow: 3px 3px 10px rgba(0,0,0,0.5);\r\n}\r\n\r\n#moreSelect .menu {\r\n  margin-left: -1px !important;\r\n  width: 100% !important;\r\n  min-width: calc(100% - -1px) !important;\r\n}\r\n\r\n#moreSelect .custom_select {\r\n  text-align: center;\r\n}\r\n\r\n#login_button {\r\n  width: auto;\r\n}\r\n\r\n#login_button > .item > button {\r\n  height: 36px;\r\n  position: relative;\r\n}\r\n\r\n.widthSearch {\r\n  max-width: 100% !important;\r\n  width: calc(100% - 25px) !important;\r\n  -webkit-transition: all .4s;\r\n  transition: all .4s;\r\n}\r\n\r\n.custom_logo-icon {\r\n  display: inline-block !important;\r\n  font-size: 60px !important;\r\n  margin-right: 4px;\r\n}\r\n\r\n.custom_logo-font {\r\n  font-size: 30px !important;\r\n  border-bottom: none !important;\r\n}\r\n\r\n.custom_actions {\r\n  border-top: none !important;\r\n}\r\n\r\n.basic.modal > .header {\r\n  border-bottom: none !important;\r\n}\r\n\r\n.celled.ordered > .item {\r\n  border-top: none !important;\r\n  border-bottom: none !important;\r\n}\r\n\r\n.signup_login-button {\r\n  text-align: center;\r\n}\r\n\r\n.search_box {\r\n  width: 100%;\r\n  -webkit-transition: width 0.5s;\r\n  transition:width 0.5s;\r\n}\r\n\r\n.search_box::before {\r\n  display: none !important;\r\n}\r\n\r\n.search_box-container {\r\n  width: 100%;\r\n}\r\n\r\n.custom_message {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.custom_select .text {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  margin-right: 0px !important;\r\n}\r\n\r\n.custom_select > .custon_dropdown > i.icon {\r\n  margin: -.78571429em !important;\r\n}\r\n\r\n.custom_logout {\r\n  margin-bottom: 7px !important;\r\n}\r\n\r\n.user_btn-img {\r\n  width: 36px;\r\n  height: 36px;\r\n  border: 1px solid #e1e1e1;\r\n  border-radius: 50%;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n.user_btn-img-mobile {\r\n  width: 25px !important;\r\n  height: 25px !important;\r\n  display: inline-block;\r\n}\r\n\r\n.user_btn-nickname-mobile {\r\n  position: relative;\r\n  top: -1px;\r\n  max-width: 90px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: inline-block;\r\n}\r\n\r\n.icon_world::before {\r\n  font-size: 25px;\r\n  position: relative;\r\n  left: -4px;\r\n  top: -4px;\r\n}\r\n\r\n.column_header {\r\n  color: #a3a3a3;\r\n  font-weight: 600;\r\n  position: relative;\r\n  top: -1.89em;\r\n}\r\n\r\n.custom_settings-one > .column-one {\r\n  width: 100% !important;\r\n}\r\n\r\n.user_btn-nickname {\r\n  display: inline-block;\r\n  width: auto;\r\n  max-width: 36px;\r\n  margin-left: 5px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.user_btn-img > img {\r\n  width: 100%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.custom_logout > button {\r\n  width: 100%;\r\n}\r\n\r\n.leaflet-popup {\r\n  margin-bottom: 6px !important;\r\n  margin-left: -1px;\r\n}\r\n\r\n.custom_menu-mobile {\r\n  display: none !important;\r\n  -webkit-transition: 1s;\r\n  transition: 1s;\r\n}\r\n\r\n.custom_content {\r\n  font-size: 17px;\r\n}\r\n\r\n.body-sidebar {\r\n  margin-left: 153px;\r\n}\r\n\r\n.open-sidebar {\r\n  left: 0px !important;\r\n}\r\n\r\n.dimmer {\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n.marker-account_info {\r\n  margin: 10px 0px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.custom_label-title {\r\n  -webkit-box-orient: vertical !important;\r\n  -webkit-box-direction: normal !important;\r\n      -ms-flex-direction: column !important;\r\n          flex-direction: column !important;\r\n  display: -webkit-box !important;\r\n  display: -ms-flexbox !important;\r\n  display: flex !important;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.marker-account_info:last-child {\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.custom_label-icon {\r\n  font-size: 18px !important;\r\n  color: #016936;\r\n  position: relative;\r\n  top: 2px;\r\n  left: -3px;\r\n}\r\n\r\n.custom_label-text {\r\n  -webkit-box-flex: 8;\r\n      -ms-flex-positive: 8;\r\n          flex-grow: 8;\r\n  word-break: break-all;\r\n}\r\n\r\n.marker-account_info > div {\r\n  font-size: 1em !important;\r\n}\r\n\r\n.marker-account_info > span {\r\n  font-size: 1em !important;\r\n}\r\n\r\n.link-icon {\r\n  color: #e3e3e3;\r\n  position: absolute !important;\r\n  cursor: pointer;\r\n  -webkit-transition: .3s;\r\n  transition: .3s;\r\n}\r\n\r\n.contact-form {\r\n  width: 85%;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .edit_input, .edit_second_input {\r\n    float: none !important;\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n    width: 100% !important;\r\n  }\r\n\r\n  .contact-form {\r\n    width: 100%;\r\n  }\r\n\r\n  .custom_title_comment {\r\n    display: none !important;\r\n  }\r\n\r\n  .divide_accordion-item .title {\r\n    padding-bottom: 14.5px !important;\r\n  }\r\n\r\n  .ui.modal>.header {\r\n    padding: .75rem 1rem .75rem 1rem !important;\r\n  }\r\n\r\n  .close-icon {\r\n    right: 9px !important;\r\n  }\r\n\r\n  .custom_title_name {\r\n    max-width: 56% !important;\r\n  }\r\n\r\n  .edit_second_input {\r\n    margin-top: 15px !important;\r\n  }\r\n\r\n  .custom_settings > .column {\r\n    width: 100% !important;\r\n    margin-top: 1rem !important;\r\n    margin-bottom: 1rem !important;\r\n  }\r\n\r\n  .column-left {\r\n    margin-bottom: 4em;\r\n  }\r\n\r\n  .custom_settings-one {\r\n    margin-top: 0px !important;\r\n  }\r\n\r\n  .column-left:after {\r\n    display: none !important;\r\n  }\r\n\r\n  .column-left:before {\r\n    content: \"\\A0\";\r\n    display: block;\r\n    width: 80%;\r\n    position: absolute;\r\n    left: 10%;\r\n    bottom: -4px;\r\n    line-height: 1px;\r\n    border-bottom: 1px solid #e1e1e1;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 991px) and (min-width: 768px) {\r\n  .ui.stackable.menu .item {\r\n    padding: .92857143em .9em !important;\r\n  }\r\n}\r\n\r\n.custom_label {\r\n  margin: 0 0 .28571429rem;\r\n  font-weight: 700;\r\n  font-size: .92857143em;\r\n  display: block;\r\n}\r\n\r\n.custom_textarea {\r\n  padding-left: 2.67142857em!important;\r\n  resize: none !important;\r\n}\r\n\r\n.custom_textarea--contact {\r\n  width: 100%;\r\n}\r\n\r\n.contact-error {\r\n  margin-top: 0px !important;\r\n}\r\n\r\n.contact-label {\r\n  margin: 0 0 .28571429rem;\r\n  display: block;\r\n  font-weight: 700;\r\n  color: rgba(255,255,255,.9);\r\n}\r\n\r\n.contact-divider {\r\n  left: 50% !important;\r\n  height: calc(31% - 1rem) !important;\r\n  top: 52% !important;\r\n}\r\n\r\n.contact-column:first-child {\r\n  padding-left: 0px !important;\r\n  padding-right: 30px !important;\r\n}\r\n\r\n.contact-column:last-child {\r\n  padding-left: 30px !important;\r\n  padding-right: 0px !important;\r\n}\r\n\r\n.ui.icon.input>.custom_textarea:focus~i.icon {\r\n  opacity: 1 !important\r\n}\r\n\r\n.ui.form textarea:focus > .textarea_icon  {\r\n   display: none !important;\r\n}\r\n\r\n.contact-href {\r\n  text-align: center;\r\n  font-size: 21px;\r\n}\r\n\r\n.custom_input-login {\r\n  margin-bottom: 20px !important;\r\n  max-width: 525px;\r\n  margin: 0 auto 1em !important;\r\n  margin-bottom: 20px !important;\r\n}\r\n\r\n#modalLogin > .divider {\r\n  max-width: 570px;\r\n  margin: 1rem auto;\r\n}\r\n\r\n.login_content {\r\n  margin-top: -1px !important;\r\n}\r\n\r\n.login_content .form {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.signup_login-button {\r\n  margin-top: 25px;\r\n}\r\n\r\n.login_content button{\r\n  max-width: 525px;\r\n  margin: 0 auto !important;\r\n}\r\n\r\n.textarea_icon::before {\r\n  top: 21.5px !important;\r\n  margin-top: 14px !important;\r\n}\r\n\r\n*::-webkit-scrollbar {\r\n  width: 6px;\r\n  height: 6px;\r\n}\r\n*::-webkit-scrollbar-track {\r\n  border-radius: 10px;\r\n  background: rgba(0,0,0,0.1);\r\n}\r\n*::-webkit-scrollbar-thumb{\r\n  border-radius: 10px;\r\n  background: rgba(255,255,255,0.8);\r\n}\r\n*::-webkit-scrollbar-thumb:hover{\r\n\tbackground: rgba(255,255,255,0.9);\r\n}\r\n*::-webkit-scrollbar-thumb:active{\r\n\tbackground: rgba(255,255,255,0.4);\r\n}\r\n\r\n.custom_specie {\r\n  display: block !important;\r\n}\r\n\r\n.custom_specie > i {\r\n  position: absolute !important;\r\n  height: 37px !important;\r\n  top: 22px !important;\r\n  left: 8px !important;\r\n}\r\n\r\n.custom_specie input {\r\n  width: 100% !important;\r\n}\r\n\r\n/*animation start view*/\r\n.antsgeo-loading-wrap {\r\n  height: 100%;\r\n  position: absolute;\r\n  width: 100%;\r\n  background: white;\r\n  top: 0px;\r\n  z-index: 1000;\r\n}\r\n\r\n.antsgeo-loading {\r\n  text-align: center;\r\n  position: absolute;\r\n  width: 100%;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n}\r\n\r\n.antsgeo-loading .earth {\r\n  font-size: 50px;\r\n  margin-bottom: -20px;\r\n}\r\n\r\n.antsgeo {\r\n  font-size: 20px;\r\n  padding-left: 5px;\r\n}\r\n\r\n.antsgeo span {\r\n  font-size: 35px;\r\n  -webkit-animation-name: blink;\r\n          animation-name: blink;\r\n  -webkit-animation-duration: 1.4s;\r\n          animation-duration: 1.4s;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n}\r\n\r\n.antsgeo span:nth-child(2) {\r\n  -webkit-animation-delay: .2s;\r\n          animation-delay: .2s;\r\n}\r\n\r\n.antsgeo span:nth-child(3) {\r\n  -webkit-animation-delay: .4s;\r\n          animation-delay: .4s;\r\n}\r\n\r\n.leaflet-popup-content-wrapper {\r\n  box-shadow: 3px 3px 15px rgba(0,0,0,0.5) !important;\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n  0% {\r\n    opacity: .2;\r\n  }\r\n  20% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: .2;\r\n  }\r\n}\r\n\r\n@keyframes blink {\r\n  0% {\r\n    opacity: .2;\r\n  }\r\n  20% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: .2;\r\n  }\r\n}\r\n/*animation start view*/\r\n\r\n.custom_sidebar-icon {\r\n  font-size: 1.5em !important;\r\n  margin: 0 auto !important;\r\n}\r\n\r\n.dimmer {\r\n  zoom: 1 !important;\r\n}\r\n\r\n.selection_genus input {\r\n  padding-left: 2.6em !important;\r\n}\r\n\r\n.selection_genus > .default {\r\n  padding-left: 1.6em !important;\r\n}\r\n\r\n.selection_genus > .text {\r\n  padding-left: 1.6em !important;\r\n}\r\n\r\n.selection_genus .item:first-child {\r\n  display: none !important;\r\n}\r\n\r\n.genus_icon:before {\r\n  opacity: 0.5;\r\n  -webkit-transition: .3s all;\r\n  transition: .3s all;\r\n  top: 70%;\r\n  position: relative;\r\n  left: 1px;\r\n}\r\n\r\n.genus_icon-bef::before {\r\n  opacity: 1 !important;\r\n}\r\n\r\n.genus_icon {\r\n  position: absolute;\r\n  z-index: 100;\r\n  color: black;\r\n\r\n  width: 37px !important;\r\n}\r\n\r\n.input_specie i {\r\n  margin-left: 6px !important;\r\n}\r\n\r\n.mobPopup_name-complain {\r\n  width: 100% !important;\r\n}\r\n\r\n.basic > i.close {\r\n  top: 18px !important;\r\n  position: relative;\r\n}\r\n\r\n#modalContact > .content > .container-contact {\r\n  width: 100% !important;\r\n}\r\n\r\n.ui.dimmer {\r\n  background-color: rgba(0,0,0,0.95) !important;\r\n}\r\n\r\n.basic > .close-modal-help {\r\n  display: block;\r\n  position: relative !important;\r\n  top: 55px !important;\r\n  float: right;\r\n}\r\n\r\n.privacy-container {\r\n  display: inline-block;\r\n  float: left;\r\n  margin-left: 8px;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n\r\n  #menu {\r\n    display: none;\r\n  }\r\n\r\n  .privacy-container {\r\n    text-align: left;\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n  .btnClose-privacy {\r\n    width: 100%;\r\n    margin-left: 0px !important;\r\n  }\r\n\r\n  .ui.grid .stackable.row\r\n  .ui.vertical.divider:after,\r\n  .ui.grid .stackable.row .ui.vertical.divider:before,\r\n  .ui.stackable.grid .ui.vertical.divider:after,\r\n  .ui.stackable.grid .ui.vertical.divider:before {\r\n    top: 0 !important;\r\n  }\r\n\r\n  .contact-divider {\r\n    height: 14px !important;\r\n    width: 95% !important;\r\n    margin: 0 auto !important;\r\n  }\r\n\r\n  .contact-href {\r\n    margin-top: 20px !important;\r\n    margin-bottom: 20px !important;\r\n  }\r\n\r\n  .basic > i.close {\r\n    margin-top: 5px;\r\n    margin-right: 0px !important;\r\n  }\r\n\r\n  #modalContact .content {\r\n    padding-left: 0px !important;\r\n    padding-right: 0px !important;\r\n  }\r\n\r\n  .custom_specie > i {\r\n    left: 1px !important;\r\n  }\r\n\r\n  .genus_label {\r\n    margin-bottom: 11px !important;\r\n  }\r\n\r\n  .input_specie i {\r\n    margin-left: 0px !important;\r\n  }\r\n\r\n  .genus_icon:before {\r\n    top: 30%;\r\n  }\r\n\r\n  .ui.form .fields {\r\n      width: 100% !important;\r\n      margin: 0 auto !important;\r\n  }\r\n\r\n  #userProfile_head {\r\n    padding: 17px 17px !important;\r\n  }\r\n\r\n  .custom_content {\r\n    padding-left: 0px !important;\r\n  }\r\n\r\n  .ui.list .list>.item>.image:only-child,\r\n  .ui.list .list>.item>img.image,\r\n  .ui.list>.item>.image:only-child,\r\n  .ui.list>.item>img.image {\r\n    width: 100% !important;\r\n  }\r\n\r\n  #modalHelp .actions > div {\r\n    width: 94% !important;\r\n    margin-left: 0px;\r\n  }\r\n\r\n  #modalAddTag .actions > div {\r\n    width: 100%;\r\n    margin-left: 0px;\r\n  }\r\n\r\n  #modalContact .actions > div {\r\n    width: 100%;\r\n    margin-left: 0px;\r\n  }\r\n\r\n  .custom_sidebar, .custom_menu-mobile {\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n  }\r\n\r\n  .ui.stackable.menu .item {\r\n    display: block !important;\r\n    line-height: 22px !important;\r\n    text-align: center;\r\n  }\r\n\r\n  .custom_menu-mobile {\r\n    margin-top: 10px !important;\r\n    margin-bottom: 1rem !important;\r\n  }\r\n\r\n  html, body {\r\n    overflow: visible;;\r\n  }\r\n\r\n  .ui.selection.dropdown {\r\n    top: -7px !important;\r\n    width: 100%;\r\n  }\r\n\r\n  .ui.menu:not(.vertical) .item>.input {\r\n    top: -1px !important;\r\n  }\r\n\r\n  .fields > .field {\r\n    padding: 0px !important;\r\n  }\r\n}\r\n\r\n.custom_errors {\r\n  max-width: 525px !important;\r\n  margin: auto !important;\r\n  margin-top: 0px !important;\r\n  margin-bottom: 20px !important;\r\n}\r\n\r\n.ui.icon.input>i.icon:after, .ui.icon.input>i.icon:before {\r\n  margin-top: -.5em !important;\r\n}\r\n\r\n.custom_input-login > input {\r\n  padding: 10px !important;\r\n}\r\n\r\n.leaflet-container.leaflet-clickable, .leaflet-container.map-clickable, .leaflet-marker-icon, .leaflet-overlay-pane path {\r\n  cursor: inherit !important;\r\n}\r\n\r\n.marker-cluster {\r\n  cursor: pointer !important;\r\n}\r\n\r\n.fa-map-marker:before {\r\n  content: \"\\F124\" !important;\r\n}\r\n\r\n.fa-spinner {\r\n  padding: 0px 0 0 0px !important;\r\n  margin-left: -2px;\r\n}\r\n\r\n.leaflet-control-locate a {\r\n  padding: 5px 0 0 7px !important\r\n}\r\n\r\n#modalUser {\r\n  z-index: 2000;\r\n}\r\n.posAbs {\r\n  position: absolute !important;\r\n  top: 0px !important;\r\n  margin-top: 3rem !important;\r\n  margin-bottom: 3rem !important;\r\n}\r\n\r\n.verify_message {\r\n  margin-top: 1em;\r\n}\r\n\r\n.verify_message a {\r\n  text-decoration: underline !important;\r\n}\r\n\r\n.verify_message .icon {\r\n  margin-right: .45em !important;\r\n}\r\n\r\n.custom_pointing-item {\r\n  width: 50%;\r\n  text-align: center;\r\n  display: inline-block !important;\r\n  height: 40px !important;\r\n  border-color: none !important;\r\n}\r\n\r\n.ui.inverted.menu {\r\n  border-top: none !important;\r\n  border-left: none !important;\r\n  border-right: none !important;\r\n}\r\n\r\n.changeBgDimmer {\r\n  background: rgba(0, 0, 0, 0.85) !important;\r\n}\r\n\r\n.ui.dimmer {\r\n  z-index: 2000 !important;\r\n}\r\n\r\n.custom_userProfile_head {\r\n  text-align: center;\r\n  min-height: 157px;\r\n  padding: 17px 17px !important;\r\n  position: relative;\r\n  background-image: url(https://raw.githubusercontent.com/antsgeo/images/master/cartographer-black.png) !important;\r\n}\r\n\r\n.custom_statistics {\r\n  margin: 2em 20% 0em !important;\r\n}\r\n\r\n.custom_statistics_btn {\r\n  padding-top: 10px !important;\r\n}\r\n\r\n.markers_header {\r\n  text-align: center;\r\n  color: black;\r\n  margin-top: 25px !important;\r\n  margin-bottom: 25px !important;\r\n}\r\n\r\n.changing_img_wrap {\r\n  height: 36px;\r\n  margin-bottom: 1em !important;\r\n  position: relative;\r\n}\r\n\r\n.setting-icon, .marker-icon {\r\n  float: left;\r\n  cursor: pointer;\r\n  color: #e3e3e3;\r\n  -webkit-transition: .3s all;\r\n  transition: .3s all;\r\n}\r\n\r\n#marker-icon {\r\n  -webkit-transition: .3s all;\r\n  transition: .3s all;\r\n}\r\n\r\n.close-icon {\r\n  cursor: pointer;\r\n  float: right;\r\n  margin: 0px !important;\r\n  padding: 0px !important;\r\n  -webkit-transition: all 300ms 0s ease-in-out;\r\n  transition: all 300ms 0s ease-in-out;\r\n  padding-left: 3px !important;\r\n  position: absolute;\r\n  right: 17px;\r\n}\r\n\r\n.close-icon {\r\n  -webkit-transition: .3s all !important;\r\n  transition: .3s all !important;\r\n  color: #e3e3e3;\r\n}\r\n\r\n.setting-icon:hover, .marker-icon:hover, .close-icon:hover, .link-icon:hover {\r\n  color: white !important;\r\n}\r\n\r\n.custom_settings {\r\n  color: black;\r\n}\r\n\r\n.custom_settings > span {\r\n  padding: 0px !important;\r\n  border-right: 1px solid #e1e1e1;\r\n}\r\n\r\n.custom_settings > .column {\r\n  text-align: center;\r\n  width: 49.93% ;\r\n}\r\n\r\n.column-left {\r\n  position: relative;\r\n}\r\n\r\n.column-left:after {\r\n  content: \"\\A0\";\r\n  display: block;\r\n  height: 100%;\r\n  width: 1px;\r\n  position: absolute;\r\n  right: 0px;\r\n  top: 0px;\r\n  line-height: 1px;\r\n  border-right: 1px solid #e1e1e1;\r\n}\r\n\r\n#marker-icon {\r\n  display: none;\r\n}\r\n\r\n.marker-block-group {\r\n  display: none;\r\n}\r\n\r\n.close-icon:hover:before {\r\n  -webkit-transition: all 300ms 0s ease-in-out;\r\n  transition: all 300ms 0s ease-in-out;\r\n  -webkit-transform: scale(0.5);\r\n  transform: scale(0.5);\r\n  -webkit-transform-origin: center;\r\n          transform-origin: center;\r\n}\r\n\r\n.custom_userProfile_body {\r\n  background-color: white !important;\r\n}\r\n\r\n.custom_shadow {\r\n  box-shadow: 0px 11px 20px rgba(0, 0, 0, 0.555);\r\n  width: 100%;\r\n  display: block;\r\n  height: 2px;\r\n}\r\n\r\n.custom_segment-markers {\r\n  padding: 0px !important;\r\n  border: 0px !important;\r\n  height: 245px;\r\n  margin-top: -1px !important;\r\n  border-radius: 0px  !important;\r\n  border-left: 1px solid #e1e1e1 !important;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n  width: 99.9%;\r\n  box-shadow: 0px 1px 0px rgba(34,36,38,.15), 0px -1px 0px rgba(34,36,38,.15) !important;\r\n}\r\n\r\n.not_markers {\r\n  color: black;\r\n  font-weight: 700;\r\n  text-align: center;\r\n  height: 100%;\r\n  padding-top: 11%;\r\n}\r\n\r\n.custom_input-markers {\r\n  z-index: 20 !important;\r\n  width: 99.9%;\r\n}\r\n\r\n.custom_input-markers input {\r\n  border-radius: .28571429rem .28571429rem 0px 0px !important;\r\n}\r\n\r\n.custom_segment-markers::-webkit-scrollbar {\r\n  width: 6px;\r\n  height: 6px;\r\n  position: relative;\r\n  left: 10px !important;\r\n}\r\n.custom_segment-markers::-webkit-scrollbar:horizontal {\r\n  width: 0px;\r\n  height: 0px;\r\n}\r\n.custom_segment-markers::-webkit-scrollbar-track {\r\n  border-radius: 0px !important;\r\n  background: #e1e1e1;\r\n}\r\n.custom_segment-markers::-webkit-scrollbar-thumb{\r\n  border-radius: 0px !important;\r\n  background: rgba(0,0,0,0.3);\r\n\r\n}\r\n.custom_segment-markers::-webkit-scrollbar-thumb:hover{\r\n\tbackground: rgba(0,0,0,0.2);\r\n}\r\n.custom_segment-markers::-webkit-scrollbar-thumb:active{\r\n\tbackground: rgba(0,0,0,0.2);\r\n}\r\n\r\n#marker_accordion {\r\n  width: 100%;\r\n  margin-left: 1px;\r\n  box-shadow: none !important;\r\n  bottom: -1px;\r\n  border-right: 1px solid #e1e1e1 !important;\r\n}\r\n\r\n#marker_accordion .divide_accordion-item {\r\n  margin-left: -1px !important;\r\n  position: relative;\r\n  border-right: 1px solid #e1e1e1 !important;\r\n}\r\n\r\n.custom_icon-dropdown {\r\n  float: right !important;\r\n  margin-top: 4px !important;\r\n  position: relative;\r\n  left: 6px;\r\n}\r\n\r\n.custom_icon-marker {\r\n  padding-top: 4px !important;\r\n  float: left !important;\r\n  display: inline-block !important;\r\n  margin-right: 8px !important;\r\n}\r\n\r\n.custom_icon-marker svg {\r\n  width: 12px;\r\n  height: 12px;\r\n  position: relative;\r\n  top: 1px;\r\n}\r\n\r\n.custom_icon-marker svg path {\r\n  fill: gray;\r\n}\r\n\r\n.custom_title_name, .custom_title_comment {\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  display: inline-block;\r\n  position: relative;\r\n  top: 1.5px;\r\n}\r\n\r\n.shadow_box {\r\n  box-shadow: 0px -15px 34px -1px rgba(224,208,224,1);\r\n  width: 100%;\r\n  height: 10px;\r\n}\r\n\r\n.custom_title_name {\r\n  max-width: 15%;\r\n  font-weight: 600;\r\n  margin-right: 2%;\r\n}\r\n\r\n.custom_userProfile_body .custom_statistics > div {\r\n  margin: 0 auto 2em auto !important;\r\n}\r\n\r\n.custom_title_comment {\r\n  max-width: 40%;\r\n  color: rgba(34,36,38,0.7);\r\n}\r\n\r\n.custom_title_btn {\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  position: relative;\r\n  top: -16px;\r\n  right: 14px;\r\n  float: right;\r\n}\r\n\r\n.custom_icon-marker i {\r\n  margin: 0px !important;\r\n  position: relative;\r\n  top: 2px;\r\n}\r\n\r\n.custom_userProfile-img {\r\n  width: 150px;\r\n  height: 150px;\r\n  margin: 0 auto;\r\n  border-radius: 50%;\r\n  border: 6px solid;\r\n  margin-bottom: -95px;\r\n  background: white;\r\n  position: relative;\r\n  top: -95px;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n.reset_password-button, .changing_img {\r\n  margin-bottom: 1em !important;\r\n}\r\n\r\n.custom_settings-two {\r\n  margin-top: 3rem !important;\r\n  margin-bottom: 2rem !important;\r\n}\r\n\r\n.changing_img {\r\n  height: 36px;\r\n}\r\n\r\n.custom_userProfile-img > img {\r\n  width: 100%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.divide_accordion-item div {\r\n  font-weight: 400 !important;\r\n  color: black !important;\r\n}\r\n\r\n.divide_accordion-item .title {\r\n  border-top: 0px !important;\r\n  border-bottom: 1px solid rgba(34,36,38,.15) !important;\r\n  position: relative;\r\n}\r\n\r\n.custom_title_linkbtn {\r\n  float: right;\r\n  padding: 8px !important;\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n\r\n.title_accordion_flex { /* Safari */\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.divide_accordion-item .content {\r\n  border-bottom: 1px solid rgba(34,36,38,.15) !important;\r\n  padding-left: 19px !important;\r\n  padding: 0px 1.5em !important;\r\n}\r\n\r\n\r\n.edit_input  {\r\n  float: left;\r\n  width: 49% ;\r\n  margin-top: 15px;\r\n}\r\n\r\n.edit_button {\r\n  margin-top: 15px !important;\r\n  margin-bottom: 1.5em !important;\r\n}\r\n\r\n.clearing {\r\n  clear: both;\r\n}\r\n\r\n.edit_second_input {\r\n  float: right !important;\r\n}\r\n\r\n.divide_accordion-item > .content > .header {\r\n  font-size: 18px;\r\n  text-align: center;\r\n  margin-top: 12px;\r\n}\r\n\r\n.custom-edit_marker {\r\n  font-size: 15px !important;\r\n}\r\n\r\n.custom_userProfile_body > .divider {\r\n  margin-top: 1.5rem;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.custom_userProfile-nick {\r\n  margin-bottom: 82px;\r\n}\r\n\r\n.custom_userProfile-nick-inside {\r\n  font-weight: 500;\r\n  font-size: 30px;\r\n  margin-top: 5px;\r\n  margin-bottom: 1px;\r\n  color: white;\r\n  text-align: center;\r\n  width: 200px;\r\n  margin: 0 auto;\r\n  word-break: break-word;\r\n  line-height: 30px;\r\n}\r\n\r\n.custom_userProfile-country {\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  color: white;\r\n  text-align: center;\r\n  opacity: .6;\r\n}\r\n\r\n.two_inputs:first-child {\r\n  padding-left: 0px !important;\r\n}\r\n\r\n.two_inputs:last-child {\r\n  padding-right: 0px !important;\r\n}\r\n\r\n.labelClass_point img {\r\n  width: 25px;\r\n  position: absolute;\r\n  top: -30px;\r\n  left: -8px;\r\n}\r\n\r\n.labelClass_point svg {\r\n  width: 37px;\r\n  position: absolute;\r\n  top: -30px;\r\n  left: -13px;\r\n  height: 37px;\r\n}\r\n\r\n.leaflet-popup {\r\n  bottom: 24px !important;\r\n}\r\n\r\n#addTagForm label {\r\n    color: white;\r\n}\r\n\r\n.ui.ordered.list .list > .item::before, .ui.ordered.list > .item::before, ol.ui.list li::before {\r\n  color: white !important;\r\n}\r\n\r\n.custom_content {\r\n  padding-left: 2em;\r\n}\r\n\r\n.ui.selection.dropdown>.delete.icon, .ui.selection.dropdown>.dropdown.icon, .ui.selection.dropdown>.search.icon {\r\n  top: .98571429em !important;\r\n}\r\n\r\n.ui.icon.input>i.circular.icon {\r\n  top: .2em !important;\r\n}\r\n\r\n.ui.celled.ordered.list .list>.item, .ui.celled.ordered.list>.item {\r\n  margin-top: 0.7rem;\r\n}\r\n\r\n.ui.modal>.header:not(.ui) {\r\n  font-size: 2rem !important;\r\n}\r\n\r\n.modalHelpImg {\r\n  width: 95%;\r\n  display: block;\r\n  text-align: center;\r\n  margin: 15 auto !important;\r\n}\r\n\r\n.:hover .arrow {\r\n  right: -28px;\r\n}\r\n\r\n.labelClass_copyLink {\r\n  width: 100%;\r\n}\r\n\r\n.lableClass_label:hover:after {\r\n  box-shadow: inset 0px -5px 30px rgba(255, 255, 255, 0.4), 0px 0px 5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.lableClass_label:active:after {\r\n  box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 0.3), 0px 0px 5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.ui.menu .item {\r\n  height: 50px;\r\n}\r\n\r\n#custom_input {\r\n  width: 88.5%;\r\n  height: 40px;\r\n  max-width: 200px;\r\n  -webkit-transition: all .4s;\r\n  transition: all .4s;\r\n  position: absolute;\r\n  right: 12px;\r\n  top: 12px;\r\n}\r\n\r\n.custom_input-mobile {\r\n  height: 40px;\r\n  margin-top: -5px !important;\r\n}\r\n\r\n.item_search-mobile {\r\n  padding: 0px 10px !important;\r\n  width: 100%;\r\n}\r\n\r\n#logo_menu-miobile {\r\n  font-size: 18px;\r\n  line-height: 11px !important;\r\n}\r\n\r\n#logo_menu-miobile .icon_world {\r\n  position: relative;\r\n  top: 7px;\r\n  margin: 0px;\r\n}\r\n\r\n.item_search-mobile-right {\r\n  width: 100% !important;\r\n}\r\n\r\n.busy_nickname {\r\n  position: absolute;\r\n  right: 7px;\r\n  color: #9F3A38;\r\n  padding: 7px;\r\n  height: 100%;\r\n  line-height: 22px;\r\n}\r\n\r\n#login_form > .error {\r\n  display: block !important;\r\n}\r\n\r\n.checking_icon {\r\n  opacity: 1 !important;\r\n  margin-left: calc(100% - 40px) !important;\r\n  color: green;\r\n}\r\n\r\n#signup_form .fields{\r\n  max-width: 525px;\r\n  margin: auto;\r\n}\r\n\r\n.leaflet-cluster-anim .leaflet-marker-icon, .leaflet-cluster-anim .leaflet-marker-shadow {\r\n\t-webkit-transition: -webkit-transform 0.3s ease-out, opacity 0.3s ease-in;\r\n\t-webkit-transition: opacity 0.3s ease-in, -webkit-transform 0.3s ease-out;\r\n\ttransition: opacity 0.3s ease-in, -webkit-transform 0.3s ease-out;\r\n\ttransition: transform 0.3s ease-out, opacity 0.3s ease-in;\r\n\ttransition: transform 0.3s ease-out, opacity 0.3s ease-in, -webkit-transform 0.3s ease-out;\r\n}\r\n", ""]);

// exports


/***/ },

/***/ 657:
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },

/***/ 936:
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ },

/***/ 939:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(399);


/***/ }

},[939]);
//# sourceMappingURL=styles.bundle.map