Blockly.Blocks['math_fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("math.fill (");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("c")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(" , ");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_dot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("math_dot(");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("r"), "r");
    this.appendValueInput("A")
        .setCheck("Array")
        .appendField(",");
    this.appendValueInput("B")
        .setCheck("Array")
        .appendField(",");
    this.appendValueInput("n")
        .setCheck("Number")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_min'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("math.min(");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck(["Array", "Number"])
        .appendField(",");
    this.appendValueInput("C")
        .setCheck(["Array", "Number"])
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_copy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("math.copy(");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck("Array")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_addscalar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("math.addscalar(");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck("Array")
        .appendField(",");
    this.appendValueInput("c")
        .setCheck("Number")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_add'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("math.add(");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck("Array")
        .appendField(",");
    this.appendValueInput("C")
        .setCheck("Array")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_sub'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mat_sub(");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck("Array")
        .appendField(",");
    this.appendValueInput("C")
        .setCheck("Array")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_mul'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("math.mul(");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck("Array")
        .appendField(",");
    this.appendValueInput("C")
        .setCheck("Array")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_div'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("math.div(");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck("Array")
        .appendField(",");
    this.appendValueInput("C")
        .setCheck("Array")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_max'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("math.max(");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck(["Array", "Number"])
        .appendField(",");
    this.appendValueInput("C")
        .setCheck(["Array", "Number"])
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_clamp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("math.clamp(");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck(["Array", "Number"])
        .appendField(",");
    this.appendValueInput("C")
        .setCheck(["Array", "Number"])
        .appendField(",");
    this.appendValueInput("D")
        .setCheck(["Array", "Number"])
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_stat'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("math.stat(");
    this.appendValueInput("A")
        .setCheck("Array");
    this.appendDummyInput()
        .appendField(",")
        .appendField(new Blockly.FieldVariable("min"), "min");
    this.appendDummyInput()
        .appendField(",")
        .appendField(new Blockly.FieldVariable("max"), "max");
    this.appendDummyInput()
        .appendField(",")
        .appendField(new Blockly.FieldVariable("mean"), "mean");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_argbounds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("math.argbounds(");
    this.appendValueInput("A")
        .setCheck("Array");
    this.appendDummyInput()
        .appendField(",")
        .appendField(new Blockly.FieldVariable("argmin"), "argmin");
    this.appendDummyInput()
        .appendField(",")
        .appendField(new Blockly.FieldVariable("argmax"), "argmax");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_sort'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("math.sort(");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_sort_easy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sort (");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['math_muldiv'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("math.muldiv(");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck(["Number", "Array"])
        .appendField(",");
    this.appendValueInput("C")
        .setCheck(["Number", "Array"])
        .appendField(",");
    this.appendValueInput("D")
        .setCheck(["Number", "Array"])
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_atan2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("math.atan2(");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("Y")
        .setCheck(["Array", "Number"])
        .appendField(",");
    this.appendValueInput("X")
        .setCheck(["Array", "Number"])
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_sin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("math.sin(");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck(["Number", "Array"])
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_cos'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("math.cos(");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck(["Number", "Array"])
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_rot2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("math.rot2(");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck("Array")
        .appendField(",");
    this.appendValueInput("phi")
        .setCheck("Number")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_sqrt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("math.sqrt(");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("NAME")
        .setCheck(["Number", "Array"])
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_rand'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("math.rand(");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("v"), "v");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_dot_easy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("r"), "r")
        .appendField("= dot (");
    this.appendValueInput("NAME")
        .setCheck("Array");
    this.appendValueInput("NAME")
        .setCheck("Array")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['array_literal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("1,2,3,4,5"), "A");
    this.appendDummyInput()
        .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_min_easy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("")
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck(["Array", "Number"])
        .appendField("= min ( ");
    this.appendValueInput("C")
        .setCheck(["Array", "Number"])
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_rand_easy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("v"), "v");
    this.appendDummyInput()
        .appendField("= rand ( )");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_sqrt_easy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck(["Number", "Array"])
        .appendField("= sqrt (");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['thymio_sensor_arrays'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["front proxies [5]", "front"], ["bottom proxies [2]", "bottom"], ["back proxies [2]", "back"], ["acc sensors [3]", "acc"]]), "which");
    this.setOutput(true, "Array");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_fill_easy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("c")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("= fill (");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_copy_easy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck("Array")
        .appendField("= copy (");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_addscalar_easy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck("Array")
        .appendField("= addscalar (");
    this.appendValueInput("c")
        .setCheck("Number")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_add_easy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck("Array")
        .appendField("= add (");
    this.appendValueInput("C")
        .setCheck("Array")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_sub_easy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck("Array")
        .appendField("= sub (");
    this.appendValueInput("C")
        .setCheck("Array")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_mul_easy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck("Array")
        .appendField("= mul (");
    this.appendValueInput("C")
        .setCheck("Array")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_div_easy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck("Array")
        .appendField("= div (");
    this.appendValueInput("C")
        .setCheck("Array")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_max_easy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck(["Array", "Number"])
        .appendField("= max (");
    this.appendValueInput("C")
        .setCheck(["Array", "Number"])
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_clamp_easy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck(["Array", "Number"])
        .appendField("= clamp (");
    this.appendValueInput("C")
        .setCheck(["Array", "Number"])
        .appendField(",");
    this.appendValueInput("D")
        .setCheck(["Array", "Number"])
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_muldiv_easy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck(["Number", "Array"])
        .appendField("= (");
    this.appendValueInput("C")
        .setCheck(["Number", "Array"])
        .appendField("*");
    this.appendValueInput("D")
        .setCheck(["Number", "Array"])
        .appendField(") /");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_atan2_easy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("Y")
        .setCheck(["Array", "Number"])
        .appendField("= atan2 (");
    this.appendValueInput("X")
        .setCheck(["Array", "Number"])
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_sin_easy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck(["Number", "Array"])
        .appendField("= sin (");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_cos_easy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck(["Number", "Array"])
        .appendField("= cos (");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['math_rot2_easy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("A"), "A");
    this.appendValueInput("B")
        .setCheck("Array")
        .appendField("= rot2 (");
    this.appendValueInput("phi")
        .setCheck("Number")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
