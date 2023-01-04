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

/*
Blockly.Blocks['algo_pid'] = {
	init: function() {
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_LEFT)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF3), "STAT")
			.appendField("PID算法")
		this.appendDummyInput()
			.appendField(Blockly.Msg.RELAY_MOSFET_INPUT)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setStyle('relay_blocks');
		this.setTooltip(Blockly.Msg.RELAY_LOGICAL_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.RELAY_LOGICAL_HELPURL);
	}	
};
*/

Blockly.Blocks['algo_pid'] = {
    /**
     * Block for remainder of a division.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
		  "message0": "PID算法    setpoint %1 measurement %2",
		  "args0": [
		    {
		      "type": "input_value",
		      "name": "setpoint",
		      "check": "Number",
		      "align": "RIGHT"
		    },
		    {
		      "type": "input_value",
		      "name": "measurement",
		      "check": "Number",
		      "align": "RIGHT"
		    }
		  ],
		  "output": "Number",
		  "helpUrl": "PID算法",
		  "style": "relay_blocks",
		  "tooltip": "PID算法"
		});
    }
};

Blockly.Blocks['algo_lqr'] = {
    /**
     * Block for remainder of a division.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
		  "message0": "LQR算法    setgap %1 measuregap %2 setspeed %3 measurespeed %4",
		  "args0": [
		    {
		      "type": "input_value",
		      "name": "setgap",
		      "check": "Number",
		      "align": "RIGHT"
		    },
		    {
		      "type": "input_value",
		      "name": "measuregap",
		      "check": "Number",
		      "align": "RIGHT"
		    },
		  	{
		      "type": "input_value",
		      "name": "setspeed",
		      "check": "Number",
		      "align": "RIGHT"
		    },
		    {
		      "type": "input_value",
		      "name": "measurespeed",
		      "check": "Number",
		      "align": "RIGHT"
		    }
		  ],
		  "output": "Number",
		  "helpUrl": "LQR算法",
		  "style": "relay_blocks",
		  "tooltip": "LQR算法"
		});
    }
};