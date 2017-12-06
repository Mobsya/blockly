Blockly.AESL['array_partof'] = function(block) {
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var text_from = block.getFieldValue('FROM');
  var text_to = block.getFieldValue('TO');

  var code = variable_var+'['+text_from+':'+text_to+']';

  return [code, Blockly.AESL.ORDER_ATOMIC];
};



Blockly.AESL['array_const'] = function(block) {
  var text_arraydef = block.getFieldValue('ARRAYDEF');

  var code = '['+text_arraydef+']';

  return [code, Blockly.AESL.ORDER_ATOMIC];
};


Blockly.AESL['sensor_arrays'] = function(block) {
  var dropdown_which = block.getFieldValue('WHICH');
  var code="";

  switch(dropdown_which){
    case 'BACK':
       code="prox.horizontal[5:6]";
       break;
    case 'FRONT':
       code="prox.horizontal[0:4]";
       break;
    case 'BOTTOM':
       code="prox.ground.delta";
       break;
    case 'ACC':
       code="acc";
       break;
  }
  
  return [code, Blockly.AESL.ORDER_ATOMIC];
};



Blockly.AESL['math_copy'] = function(block) {

  var A = Blockly.AESL.valueToCode(block, 'A', Blockly.AESL.ORDER_ATOMIC);
  var B = Blockly.AESL.valueToCode(block, 'B', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call math.copy('+A+','+B+')\n';
  
  return code;
};


Blockly.AESL['math_fill'] = function(block) {

  var A = Blockly.AESL.valueToCode(block, 'A', Blockly.AESL.ORDER_ATOMIC);
  var s = Blockly.AESL.valueToCode(block, 's', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call math.fill('+A+','+s+')\n';
  
  return code;
};


Blockly.AESL['math_addscalar'] = function(block) {

  var A = Blockly.AESL.valueToCode(block, 'A', Blockly.AESL.ORDER_ATOMIC);
  var B = Blockly.AESL.valueToCode(block, 'B', Blockly.AESL.ORDER_ATOMIC);
  var c = Blockly.AESL.valueToCode(block, 'c', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call math.addscalar('+A+','+B+','+c+')\n';
  
  return code;
};

Blockly.AESL['math_add'] = function(block) {

  var A = Blockly.AESL.valueToCode(block, 'A', Blockly.AESL.ORDER_ATOMIC);
  var B = Blockly.AESL.valueToCode(block, 'B', Blockly.AESL.ORDER_ATOMIC);
  var C = Blockly.AESL.valueToCode(block, 'C', Blockly.AESL.ORDER_ATOMIC);


  var code = 'call math.add('+A+','+B+','+C+')\n';
  
  return code;
};

Blockly.AESL['math_sub'] = function(block) {

  var A = Blockly.AESL.valueToCode(block, 'A', Blockly.AESL.ORDER_ATOMIC);
  var B = Blockly.AESL.valueToCode(block, 'B', Blockly.AESL.ORDER_ATOMIC);
  var C = Blockly.AESL.valueToCode(block, 'C', Blockly.AESL.ORDER_ATOMIC);


  var code = 'call math.sub('+A+','+B+','+C+')\n';
  
  return code;
};

Blockly.AESL['math_mul'] = function(block) {

  var A = Blockly.AESL.valueToCode(block, 'A', Blockly.AESL.ORDER_ATOMIC);
  var B = Blockly.AESL.valueToCode(block, 'B', Blockly.AESL.ORDER_ATOMIC);
  var C = Blockly.AESL.valueToCode(block, 'C', Blockly.AESL.ORDER_ATOMIC);


  var code = 'call math.mul('+A+','+B+','+C+')\n';
    
  return code;
};

Blockly.AESL['math_div'] = function(block) {

  var A = Blockly.AESL.valueToCode(block, 'A', Blockly.AESL.ORDER_ATOMIC);
  var B = Blockly.AESL.valueToCode(block, 'B', Blockly.AESL.ORDER_ATOMIC);
  var C = Blockly.AESL.valueToCode(block, 'C', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call math.div('+A+','+B+','+C+')\n';
    
  return code;
};
Blockly.AESL['math_min'] = function(block) {

  var A = Blockly.AESL.valueToCode(block, 'A', Blockly.AESL.ORDER_ATOMIC);
  var B = Blockly.AESL.valueToCode(block, 'B', Blockly.AESL.ORDER_ATOMIC);
  var C = Blockly.AESL.valueToCode(block, 'C', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call math.min('+A+','+B+','+C+')\n';
    

  return code;
};

Blockly.AESL['math_max'] = function(block) {

  var A = Blockly.AESL.valueToCode(block, 'A', Blockly.AESL.ORDER_ATOMIC);
  var B = Blockly.AESL.valueToCode(block, 'B', Blockly.AESL.ORDER_ATOMIC);
  var C = Blockly.AESL.valueToCode(block, 'C', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call math.max('+A+','+B+','+C+')\n';
    
  return code;
};

Blockly.AESL['math_clamp'] = function(block) {

  var A = Blockly.AESL.valueToCode(block, 'A', Blockly.AESL.ORDER_ATOMIC);
  var B = Blockly.AESL.valueToCode(block, 'B', Blockly.AESL.ORDER_ATOMIC);
  var C = Blockly.AESL.valueToCode(block, 'C', Blockly.AESL.ORDER_ATOMIC);
  var D = Blockly.AESL.valueToCode(block, 'D', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call math.clamp('+A+','+B+','+C+','+D+')\n';

  return code;
};


Blockly.AESL['math_dot'] = function(block) {

  var r = Blockly.AESL.valueToCode(block, 'r', Blockly.AESL.ORDER_ATOMIC);
  var A = Blockly.AESL.valueToCode(block, 'A', Blockly.AESL.ORDER_ATOMIC);
  var B = Blockly.AESL.valueToCode(block, 'B', Blockly.AESL.ORDER_ATOMIC);
  var n = Blockly.AESL.valueToCode(block, 'n', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call math.dot('+r+','+A+','+B+','+n+')\n';

  return code;
};


Blockly.AESL['math_stat'] = function(block) {

  var V = Blockly.AESL.valueToCode(block, 'V', Blockly.AESL.ORDER_ATOMIC);
  var min = Blockly.AESL.valueToCode(block, 'min', Blockly.AESL.ORDER_ATOMIC);
  var max = Blockly.AESL.valueToCode(block, 'max', Blockly.AESL.ORDER_ATOMIC);
  var mean = Blockly.AESL.valueToCode(block, 'mean', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call math.stat('+V+','+min+','+max+','+mean+')\n';

  return code;
};

Blockly.AESL['math_argbounds'] = function(block) {

  var A = Blockly.AESL.valueToCode(block, 'A', Blockly.AESL.ORDER_ATOMIC);
  var argmin = Blockly.AESL.valueToCode(block, 'argmin', Blockly.AESL.ORDER_ATOMIC);
  var argmax = Blockly.AESL.valueToCode(block, 'argmax', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call math.argbounds('+A+','+argmin+','+argmax+')\n';
  
  return code;
};

Blockly.AESL['math_sort'] = function(block) {

  var A = Blockly.AESL.valueToCode(block, 'A', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call math.sort('+A+')\n';
  
  return code;
};

Blockly.AESL['math_muldiv'] = function(block) {

  var A = Blockly.AESL.valueToCode(block, 'A', Blockly.AESL.ORDER_ATOMIC);
  var B = Blockly.AESL.valueToCode(block, 'B', Blockly.AESL.ORDER_ATOMIC);
  var C = Blockly.AESL.valueToCode(block, 'C', Blockly.AESL.ORDER_ATOMIC);
  var D = Blockly.AESL.valueToCode(block, 'D', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call math.muldiv('+A+','+B+','+C+','+D+')\n';

  return code;
};

Blockly.AESL['math_atan2'] = function(block) {

  var A = Blockly.AESL.valueToCode(block, 'A', Blockly.AESL.ORDER_ATOMIC);
  var Y = Blockly.AESL.valueToCode(block, 'Y', Blockly.AESL.ORDER_ATOMIC);
  var X = Blockly.AESL.valueToCode(block, 'X', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call math.atan2('+A+','+Y+','+X+')\n';
  
  return code;
};
Blockly.AESL['math_sin'] = function(block) {

  var A = Blockly.AESL.valueToCode(block, 'A', Blockly.AESL.ORDER_ATOMIC);
  var B = Blockly.AESL.valueToCode(block, 'B', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call math.sin('+A+','+B+')\n';
  
  return code;
};

Blockly.AESL['math_cos'] = function(block) {

  var A = Blockly.AESL.valueToCode(block, 'A', Blockly.AESL.ORDER_ATOMIC);
  var B = Blockly.AESL.valueToCode(block, 'B', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call math.cos('+A+','+B+')\n';
  
  return code;
};
Blockly.AESL['math_rot2'] = function(block) {

  var A = Blockly.AESL.valueToCode(block, 'A', Blockly.AESL.ORDER_ATOMIC);
  var B = Blockly.AESL.valueToCode(block, 'B', Blockly.AESL.ORDER_ATOMIC);
  var Winkel = Blockly.AESL.valueToCode(block, 'Winkel', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call math.rot2('+A+','+B+','+Winkel+')\n';
  
  return code;
};

Blockly.AESL['math_sqrt'] = function(block) {

  var A = Blockly.AESL.valueToCode(block, 'A', Blockly.AESL.ORDER_ATOMIC);
  var B = Blockly.AESL.valueToCode(block, 'B', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call math.sqrt('+A+','+B+')\n';
  
  return code;
};

Blockly.AESL['math_rand'] = function(block) {

  var v = Blockly.AESL.valueToCode(block, 'v', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call math.rand('+v+')\n';
  
  return code;
};
