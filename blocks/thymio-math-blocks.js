Blockly.Blocks['math_copy'] = {
  init: function(){

    this.appendDummyInput()
        .appendField("math.copy (");

    this.appendValueInput("A")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");
    this.appendValueInput("B")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");

    this.appendDummyInput()
        .appendField(")");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('math.copy(A,B) : Ai=Bi');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};


Blockly.Blocks['math_fill'] = {
  init: function() {

    this.appendDummyInput()
        .appendField("math.fill (");
    this.appendValueInput("A")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");
    this.appendValueInput("s")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('math.fill(A,s) : Ai=s');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};

Blockly.Blocks['math_addscalar'] = {
  init: function(){

    this.appendDummyInput()
        .appendField("math.addscalar (");
    this.appendValueInput("A")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");
    this.appendValueInput("B")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");
    this.appendValueInput("c")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");


    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('math.addscalar(A,B,c) : Ai=Bi+c');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};

Blockly.Blocks['math_add'] = {
  init: function(){

    this.appendDummyInput()
        .appendField("math.add (");
    this.appendValueInput("A")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");
    this.appendValueInput("B")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");
    this.appendValueInput("C")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");
    this.appendDummyInput()
        .appendField(" )");


    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('math.add(A,B,C) : Ai=Bi+Ci');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};



Blockly.Blocks['math_sub'] = {
  init: function(){

    this.appendDummyInput()
        .appendField("math.sub (");

    this.appendValueInput("A")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");
    this.appendValueInput("B")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");
    this.appendValueInput("C")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");

    this.appendDummyInput()
        .appendField(" )");


    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('math.sub(A,B,C) : Ai=Bi-Ci');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};

Blockly.Blocks['math_mul'] = {
  init: function(){

    this.appendDummyInput()
        .appendField("math.mul (");

    this.appendValueInput("A")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");
    this.appendValueInput("B")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");
    this.appendValueInput("C")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");

    this.appendDummyInput()
        .appendField(" )");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('math.mul(A,B,C) : Ai=Bi*Ci');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};

Blockly.Blocks['math_div'] = {
  init: function(){


    this.appendDummyInput()
        .appendField("math.div (");

    this.appendValueInput("A")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");
    this.appendValueInput("B")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");
    this.appendValueInput("C")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");

    this.appendDummyInput()
        .appendField(" )");


    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('math.div(A,B,C) : Ai=Bi/Ci');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};

Blockly.Blocks['math_min'] = {
  init: function(){


    this.appendDummyInput()
        .appendField("math.min (");

    this.appendValueInput("A")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");
    this.appendValueInput("B")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");
    this.appendValueInput("C")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");

    this.appendDummyInput()
        .appendField(" )");


    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('math.min(A,B,C) : Ai=min(Bi,Ci)');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};

Blockly.Blocks['math_max'] = {
  init: function(){


    this.appendDummyInput()
        .appendField("math.max (");

    this.appendValueInput("A")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");
    this.appendValueInput("B")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");
    this.appendValueInput("C")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");

    this.appendDummyInput()
        .appendField(" )");


    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('math.max(A,B,C) : Ai=max(Bi,Ci)');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};

Blockly.Blocks['math_clamp'] = {
  init: function(){


    this.appendDummyInput()
        .appendField("math.clamp (");

    this.appendValueInput("A")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");
    this.appendValueInput("B")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");
    this.appendValueInput("C")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");
    this.appendValueInput("D")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");
    this.appendDummyInput()
        .appendField(" )");


    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('math.clamp(A,B,C,D) : Ai=Bi mit Ci<Bi<Di');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};


Blockly.Blocks['math_dot'] = {
  init: function() {

    this.appendDummyInput()
        .appendField("math.dot(");

    this.appendValueInput("r")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");

    this.appendValueInput("A")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");

    this.appendValueInput("B")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");

    this.appendValueInput("n")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");

    this.appendDummyInput()
        .appendField(")");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('math.dot(r,A,B,n): r=sum(Ai*Bi)/(2 hoch n)');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};


Blockly.Blocks['math_stat'] = {
  init: function(){


    this.appendDummyInput()
        .appendField("math.stat (");

    this.appendValueInput("V")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");

    this.appendValueInput("min")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");

    this.appendValueInput("max")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");

    this.appendValueInput("mean")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");


    this.appendDummyInput()
        .appendField(")");


    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('math.stat(V,min,max,mean) : set min, max, mean from V');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};

Blockly.Blocks['math_argbounds'] = {
  init: function(){


    this.appendDummyInput()
        .appendField("math.argbounds (");

    this.appendValueInput("A")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");

    this.appendValueInput("argmin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");

    this.appendValueInput("argmax")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");



    this.appendDummyInput()
        .appendField(")");


    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('math.argbound(A,argmin,argmax) : set argmin, argmax');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};

Blockly.Blocks['math_sort'] = {
  init: function(){


    this.appendDummyInput()
        .appendField("math.sort (");

    this.appendValueInput("A")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");



    this.appendDummyInput()
        .appendField(" )");


    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('math.sort(A) : inline sort A');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};

Blockly.Blocks['math_muldiv'] = {
  init: function(){


    this.appendDummyInput()
        .appendField("math.muldiv (");

    this.appendValueInput("A")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");

    this.appendValueInput("B")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");

    this.appendValueInput("C")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");

    this.appendValueInput("D")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");



    this.appendDummyInput()
        .appendField(")");


    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('math.muldiv(A,B,C,D) : Ai=(Bi*Ci)/Di');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};

Blockly.Blocks['math_atan2'] = {
  init: function(){


    this.appendDummyInput()
        .appendField("math.atan2 (");

    this.appendValueInput("A")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");

    this.appendValueInput("Y")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");

    this.appendValueInput("X")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");



    this.appendDummyInput()
        .appendField(" )");


    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('math.atan2(A,Y,X) : Ai=atan(Yi/Xi)');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};

Blockly.Blocks['math_sin'] = {
  init: function(){


    this.appendDummyInput()
        .appendField("math.sin (");

    this.appendValueInput("A")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");

    this.appendValueInput("B")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");


    this.appendDummyInput()
        .appendField(")");


    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('math.sin(A,B) : Ai=sin(Bi)');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};

Blockly.Blocks['math_cos'] = {
  init: function(){


    this.appendDummyInput()
        .appendField("math.cos (");

    this.appendValueInput("A")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");

    this.appendValueInput("B")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");


    this.appendDummyInput()
        .appendField(")");


    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('math.cos(A,B) : Ai=cos(Bi)');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};

Blockly.Blocks['math_rot2'] = {
  init: function(){


    this.appendDummyInput()
        .appendField("math.rot2 (");

    this.appendValueInput("A")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");

    this.appendValueInput("B")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");

    this.appendValueInput("Winkel")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");



    this.appendDummyInput()
        .appendField(" )");


    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('math.rot2(A,B,Winkel) : A = rotate B by Winkel');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};

Blockly.Blocks['math_sqrt'] = {
  init: function(){


    this.appendDummyInput()
        .appendField("math.sqrt (");

    this.appendValueInput("A")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");

    this.appendValueInput("B")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(",");


    this.appendDummyInput()
        .appendField(")");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('math.sqrt(A,B) : Ai=sqrt(Bi)');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};

Blockly.Blocks['math_rand'] = {
  init: function(){


    this.appendDummyInput()
        .appendField("math.rand (");

    this.appendValueInput("v")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("");



    this.appendDummyInput()
        .appendField(" )");


    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('math.rand(v) : v=random');
    this.setHelpUrl('https://www.thymio.org/de:asebastdnative/');
  }
};

