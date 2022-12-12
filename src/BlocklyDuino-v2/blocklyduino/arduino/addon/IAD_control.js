
'use strict';

goog.provide('Blockly.Arduino.IAD_CONTROL');

goog.require('Blockly.Arduino');

Blockly.Arduino['lat_control'] = function() {
  //var dropdown_pin = this.getFieldValue('PIN');
  //var dropdown_stat = this.getFieldValue('STAT');
  //Blockly.Arduino.setups_['relay_logical_' + dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  //var code = 'lat_control(' + dropdown_pin + ', ' + dropdown_stat + ');\n';
  var code = 'lat_control();\n';
  return code;
};

Blockly.Arduino['lon_control'] = function() {
  //var dropdown_pin = this.getFieldValue('PIN');
  //var dropdown_stat = this.getFieldValue('STAT');
  //Blockly.Arduino.setups_['relay_mosfet_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
  //var code = 'lon_control(' + dropdown_pin + ', ' + dropdown_stat + ');\n';
  var code = 'lon_control();\n';
  return code;
};
