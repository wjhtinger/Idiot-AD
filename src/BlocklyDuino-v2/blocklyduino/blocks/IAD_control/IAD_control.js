/**
 * @license
 * Copyright 2020 Sébastien Canet
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Relay actuator blocks for Blockly.
 * @author scanet@libreduc.cc (Sébastien Canet)
 */
 
'use strict';

goog.provide('Blockly.Constants.IDA_CONTROL');

goog.require('Blockly.Blocks');
goog.require('Blockly');

var relayMediaFolder = "./blocklyduino/blocks/IAD_control/";

Blockly.Blocks['lat_control'] = {
	init: function() {
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_LEFT)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF3), "STAT")
			.appendField("横向控制")
		this.appendDummyInput()
			.appendField(Blockly.Msg.RELAY_LOGICAL_INPUT)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setStyle('relay_blocks');
		this.setTooltip(Blockly.Msg.RELAY_LOGICAL_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.RELAY_LOGICAL_HELPURL);
	}
};

Blockly.Blocks['lon_control'] = {
	init: function() {
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_LEFT)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF3), "STAT")
			.appendField("纵向控制")
		this.appendDummyInput()
			.appendField(Blockly.Msg.RELAY_MOSFET_INPUT)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setStyle('relay_blocks');
		this.setTooltip(Blockly.Msg.RELAY_LOGICAL_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.RELAY_LOGICAL_HELPURL);
	}
};