
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


Blockly.Arduino['algo_pid'] = function (block) {
  var c1 = Blockly.Arduino.valueToCode(block, 'setpoint', Blockly.Arduino.ORDER_ATOMIC);
  var c2 = Blockly.Arduino.valueToCode(block, 'measurement', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['algo_pid_include'] = '#include <PID.h>';
  Blockly.Arduino.definitions_['algo_pid_def_'] = 'PIDController pid;';
  Blockly.Arduino.userFunctions_['algoPid'] = 
  `float algoPidInit(void) {
  //Clear controller variables
  pid->integrator = 0.0f;
  pid->prevError  = 0.0f;
  pid->differentiator  = 0.0f;
  pid->prevMeasurement = 0.0f;
  pid->out = 0.0f;
}

float algoPid(float setpoint, float measurement) {
  //Error signal'
  float error = setpoint - measurement;
  //Proportional
  float proportional = pid->Kp * error;
  
  //Integral
  pid->integrator = pid->integrator + 0.5f * pid->Ki * pid->T * (error + pid->prevError);
  
  //Anti-wind-up via integrator clamping
  if (pid->integrator > pid->limMaxInt) {
    pid->integrator = pid->limMaxInt;
  } else if (pid->integrator < pid->limMinInt) {
    pid->integrator = pid->limMinInt;
  }
  
  //Derivative (band-limited differentiator)
  pid->differentiator = -(2.0f * pid->Kd * (measurement - pid->prevMeasurement) //Note: derivative on measurement, therefore minus sign in front of equation!
    + (2.0f * pid->tau - pid->T) * pid->differentiator) / (2.0f * pid->tau + pid->T);
  
  //Compute output and apply limits
  pid->out = proportional + pid->integrator + pid->differentiator;
  if (pid->out > pid->limMax) {
    pid->out = pid->limMax;
  } else if (pid->out < pid->limMin) {
    pid->out = pid->limMin;
  }
  
  //Store error and measurement for later use
  pid->prevError       = error;
  pid->prevMeasurement = measurement;
  
  //Return controller output
  return pid->out;
}`;

  Blockly.Arduino.setups_['algoPid'] = 'algoPidInit()';
  var code = 'algoPid(' + c1 + ' , ' + c2  + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];  

};


Blockly.Arduino['algo_lqr'] = function (block) {
  var c1 = Blockly.Arduino.valueToCode(block, 'setgap', Blockly.Arduino.ORDER_ATOMIC);
  var c2 = Blockly.Arduino.valueToCode(block, 'measuregap', Blockly.Arduino.ORDER_ATOMIC);
  var c3 = Blockly.Arduino.valueToCode(block, 'setspeed', Blockly.Arduino.ORDER_ATOMIC);
  var c4 = Blockly.Arduino.valueToCode(block, 'measurespeed', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['algo_lqr_include'] = '#include <LQR.h>';

  var code = 'algoLqr(' + c1 + ', ' + c2  + ', ' + c3 + ', ' + c4 + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];  

};