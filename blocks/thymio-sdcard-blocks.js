Blockly.Blocks['sound_play'] = {
  init: function(){

    this.appendDummyInput()
        .appendField("sound.play (");

    this.appendValueInput("n")
        .setCheck(["Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");

    this.appendDummyInput()
        .appendField(")");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('sound.play(n) : plays sound n');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};



Blockly.Blocks['sound_record'] = {
  init: function(){

    this.appendDummyInput()
        .appendField("sound.record (");

    this.appendValueInput("n")
        .setCheck(["Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");

    this.appendDummyInput()
        .appendField(")");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('sound.record(n) : starts recording sound n');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};


Blockly.Blocks['sound_replay'] = {
  init: function(){

    this.appendDummyInput()
        .appendField("sound.replay (");

    this.appendValueInput("n")
        .setCheck(["Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");

    this.appendDummyInput()
        .appendField(")");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('sound.record(n) : starts playing recorded sound n');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};




Blockly.Blocks['sd_open'] = {
  init: function(){

    this.appendDummyInput()
        .appendField("sd.open (");

    this.appendValueInput("file")
        .setCheck(["Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");

    this.appendValueInput("status")
        .setCheck(["Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");


    this.appendDummyInput()
        .appendField(")");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('sd.open(status,file) : opens file n');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};


Blockly.Blocks['sd_write'] = {
  init: function(){

    this.appendDummyInput()
        .appendField("sd.write (");

    this.appendValueInput("data")
        .setCheck(["Number","Array"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");

    this.appendValueInput("written")
        .setCheck(["Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");


    this.appendDummyInput()
        .appendField(")");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('sd.write(data,written) : writes dat to file');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};

Blockly.Blocks['sd_read'] = {
  init: function(){

    this.appendDummyInput()
        .appendField("sd.read (");

    this.appendValueInput("data")
        .setCheck(["Number","Array"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");

    this.appendValueInput("read")
        .setCheck(["Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");


    this.appendDummyInput()
        .appendField(")");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
      this.setTooltip('sd.read(data,read) : reads data from file');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};


Blockly.Blocks['sd_seek'] = {
  init: function(){

    this.appendDummyInput()
        .appendField("sd.seek (");

    this.appendValueInput("position")
        .setCheck(["Number","Array"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");

    this.appendValueInput("status")
        .setCheck(["Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");


    this.appendDummyInput()
        .appendField(")");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
      this.setTooltip('sd.seek(position,stauts) : seeks record position in file');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};




