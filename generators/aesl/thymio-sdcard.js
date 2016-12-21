Blockly.AESL['sound_play'] = function(block) {

  var n = Blockly.AESL.valueToCode(block, 'n', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call sound.play('+n+')\n';
  
  return code;
};

Blockly.AESL['sound_record'] = function(block) {

  var n = Blockly.AESL.valueToCode(block, 'n', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call sound.record('+n+')\n';
  
  return code;
};

Blockly.AESL['sound_replay'] = function(block) {

  var n = Blockly.AESL.valueToCode(block, 'n', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call sound.replay('+n+')\n';
  
  return code;
};


Blockly.AESL['sd_open'] = function(block) {

  var file = Blockly.AESL.valueToCode(block, 'file', Blockly.AESL.ORDER_ATOMIC);
  var status = Blockly.AESL.valueToCode(block, 'status', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call sd.open('+file+','+status+')\n';
  
  return code;
};


Blockly.AESL['sd_write'] = function(block) {

  var data = Blockly.AESL.valueToCode(block, 'data', Blockly.AESL.ORDER_ATOMIC);
  var written = Blockly.AESL.valueToCode(block, 'written', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call sd.write('+data+','+written+')\n';
  
  return code;
};


Blockly.AESL['sd_read'] = function(block) {

  var data = Blockly.AESL.valueToCode(block, 'data', Blockly.AESL.ORDER_ATOMIC);
  var read = Blockly.AESL.valueToCode(block, 'read', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call sd.read('+data+','+read+')\n';
  
  return code;
};


Blockly.AESL['sd_seek'] = function(block) {

  var position = Blockly.AESL.valueToCode(block, 'position', Blockly.AESL.ORDER_ATOMIC);
  var status = Blockly.AESL.valueToCode(block, 'status', Blockly.AESL.ORDER_ATOMIC);

  var code = 'call sd.seek('+position+','+status+')\n';
  
  return code;
};



