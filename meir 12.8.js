(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.zero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("0", "15px 'Arial'");
	this.text.lineHeight = 19;
	this.text.lineWidth = 9;
	this.text.alpha = 0.99215686;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,20.8);


(lib.Welldone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("!כל הכבוד מאיר\n!התקבלת", "10px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 73;
	this.text.alpha = 0.99607843;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77,30.1);


(lib.Wewon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("יש!!! נצחנו", "10px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 42;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.6,15.2);


(lib.sun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF33").ss(2,1,1).p("ABrjTIBFheACFiUICngaAB0AVICcA9ACKg7ICoASAgbj8IAGg1AApjrIAbhGABkg5QAABBgvAvQguAuhBAAQhCAAgvguQgugvAAhBQAAhCAuguQAvgvBCAAQBBAAAuAvQAvAuAABCgAhuj8IgIg1Ai4jgIgkhRAj9inIg0gUAkxA+IBLgMAkFgzIgsgEAkxDHIB2hfAjGEcIA9icAhCEyIASinABREZIhEiaADPDEIiJhi");
	this.shape.setTransform(30.6,30.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF33").s().p("AhvBwQgvguAAhCQAAhBAvgvQAuguBBAAQBCAAAvAuQAuAvAABBQAABCguAuQgvAvhCAAQhBAAgugvg");
	this.shape_1.setTransform(24.7,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,63.1,63.3);


(lib.startgame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("מתחילים", "10px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 38;
	this.text.alpha = 0.99607843;
	this.text.parent = this;
	this.text.setTransform(158.5,99);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(156.5,97,42.1,17);


(lib.speechbubbles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(239,239,239,0.941)").s().p("AAAAKIgCAAIAAgCIAAgRIACAAIADAAIAAARIAAACIgDAAg");
	this.shape.setTransform(0.3,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9F9").s().p("AgEAAIAAgBIAAgCIACAAIABgCIADAEQAFAHgDAAQgCAAgGgGg");
	this.shape_1.setTransform(1.8,20.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(41,41,41,0.169)").s().p("AABAAIgBAAIAAABIABgBg");
	this.shape_2.setTransform(78.3,44.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#747474").s().p("AgMAAIAWAAIAEAAIgBAAIgZABIAAgBg");
	this.shape_3.setTransform(73.9,42.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#898989").s().p("AAkABIhKAAIAAgBIBNAAIAAABIgDAAg");
	this.shape_4.setTransform(66,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#494949").s().p("AANABIgcAAIAAgBIAcAAIADAAIAAABIgDAAg");
	this.shape_5.setTransform(60.5,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5B5B5B").s().p("AgQAAIAhAAIAAABIgCAAIgLAAQgMAAgIgBg");
	this.shape_6.setTransform(70.8,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(47,47,47,0.192)").s().p("AgHgBIAAgBIAPAFIgPgEg");
	this.shape_7.setTransform(104.3,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(24,24,24,0.996)").s().p("Ao4D7QA/hDA7hGIhFgaQg/gWglgqQAGAGAIAFQBFAxBhAcIh4CFIAAACIE/hdIABgCQDaAZDigWQDQgVCNhFQA/gfASg8QAJgfgSgXQhChRiFgjQhSgVhhgOQhfgOhxgBIAAgBIhNgBIgCAAIgeAAIAAACQiRAFh3AXIhOAQQihAkhGBkIAAAFIAAACIgBACIgCAAIAAACIAAACQgBApASAZQgPgTgKgYIAAgCIAAgRIAAgCIAAgCQAuhgCBgmQApgMAtgLQCygrDwABIAGAAQAMAEAUgCIACAAQDlAIClAzQBzAkA5BMQAOASgBAdIAAAGIAAACQgIAYgRASQg1A3hYAeQihA3jhAKIgDAAIgYAAIAAACIgCAAQilAEiIgSIAAABQipA0inAsIABgCg");
	this.shape_8.setTransform(65.5,25.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFEFE").s().p("Ao0D1IB4iFQhhgchFgxQgIgFgGgGIgJgLQgSgZABgpQAQAMgIgOIgFgEIAAgCIAAgFQBGhkChgkIBOgQQB3gXCRgFIAeAAIACAAIBKAAIADAAQBxABBfAOQBhAOBSAVQCFAjBCBRQASAXgJAfQgSA8g/AfQiNBFjQAVQjiAWjagZIgBACIk/BdIAAgCgAKLgYIgLAAIAAgCIAAgGIALAAIAAAAIAAAIg");
	this.shape_9.setTransform(66.4,25.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.5,50.9);


(lib.replaybut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("לחץ כדי להפעיל מחדש", "40px 'Arial'", "#454545");
	this.text.lineHeight = 47;
	this.text.lineWidth = 357;
	this.text.parent = this;
	this.text.setTransform(113,175.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgqzgfKMBVnAAAMAAAA+VMhVnAAAg");
	this.shape.setTransform(274,199.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAk9AAAQAAHfq1FRQq1FTvTAAQvSAAq2lTQq0lRAAnfQAAndK0lTQK2lSPSAAQPTAAK1FSQK1FTAAHdg");
	this.shape_1.setTransform(285.5,211.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A6HMwQq1lSAAneQAAndK1lTQK1lSPSAAQPUAAK0FSQK1FTAAHdQAAHeq1FSQq0FTvUAAQvSAAq1lTg");
	this.shape_2.setTransform(285.5,211.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("EgqzAfLMAAAg+VMBVnAAAMAAAA+VgA4Uq4Qq1FTAAHdQAAHfK1FSQK1FSPSAAQPUAAK0lSQK1lSAAnfQAAndq1lTQq0lSvUAAQvSAAq1FSg");
	this.shape_3.setTransform(274,199.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("A6HMwQq1lSAAneQAAndK1lTQK1lSPSAAQPUAAK0FSQK1FTAAHdQAAHeq1FSQq0FTvUAAQvSAAq1lTg");
	this.shape_4.setTransform(285.5,211.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC6666").s().p("A6HMwQq1lSAAneQAAndK1lTQK1lSPSAAQPUAAK0FSQK1FTAAHdQAAHeq1FSQq0FTvUAAQvSAAq1lTg");
	this.shape_5.setTransform(285.5,211.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_3},{t:this.shape_4},{t:this.shape_1},{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape_3},{t:this.shape_5},{t:this.shape_1},{t:this.shape},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,550,401);


(lib.player2standing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(126,126,126,0.576)").s().p("AABA5QgHgHAAgUQAMgggCg5IADAAIAABtIAAAKQgDAAgDgDg");
	this.shape.setTransform(85.8,362.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(146,98,51,0.604)").s().p("AgEAoIAAhZIAHAAIAAAKQAFA4gMAhIAAgKg");
	this.shape_1.setTransform(87,337.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(94,63,32,0.388)").s().p("AgEAyIAAhtIAHAAIAAAKQAFBCgMArIAAgKg");
	this.shape_2.setTransform(87.8,318.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(62,62,62,0.259)").s().p("AgEAyIAAhtIAHAAIAAAKQAFBDgMAqIAAgKg");
	this.shape_3.setTransform(53.9,353.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(27,35,26,0.984)").s().p("AgGDCIg0AAIAAgFQhjAPgThaQAzhCAohRQABgCAEAAQAJhJAXg3QAAgBABAAQAAAAABgBQAAAAABAAQABAAABAAQA5g9AqBIQASAeAqgZQAdgRACA9QABATAIAIQACADAEAAIAAAKQAFA0AKAvQgBAAgBAAQgBAAAAAAQgBABAAAAQAAAAAAAAQgoCLiFAKIAAAKIgGAAg");
	this.shape_4.setTransform(70.4,375.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(22,19,13,0.988)").s().p("AiwByQA1hJAuhUQABgCADAAIAOhaIABgKQAIgFAFgIQACgCAAgFQBKhPA1BuQAFAJAOABQAeACAOgXIABAKQALBZASBQQgBAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABQgkBSg3A4QhMAXhGACIgEAAQhbAAgQhVg");
	this.shape_5.setTransform(38.7,373.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(145,137,130,0.616)").s().p("AgGCMIAAkhIAGAAQAACMAECLIADAAQAAAFgBACQgGAIgGAFIAAgKg");
	this.shape_6.setTransform(33.5,344.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(61,41,21,0.255)").s().p("AgDBaIAAgKIAAipIAHAAIAACpIAAAKIgHAAg");
	this.shape_7.setTransform(33.2,320.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(244,244,243,0.996)").s().p("AA5CIQgqAagRgfQgqhIg6A9IAAgKIAAkhIAHAAQBiAABjAPQABAAAAAPIAABaIAAAKIAACBIAAAKIgDAAQACA5gNAhQgDg9gdARg");
	this.shape_8.setTransform(76.3,347.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(162,150,137,0.671)").s().p("AgDA8IAAgKIAAhtIAHAAIAABtIAAAKIgHAAg");
	this.shape_9.setTransform(53.8,341.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(245,244,243,0.996)").s().p("AAzCgQgOgBgFgJQg0hthLBOIgDAAQgEiLAAiMIDFAAIAIAAIAAAyIAAAKIgIAAIAABtIAAAKIAABuIAAAKQgMAWgbAAIgFgBg");
	this.shape_10.setTransform(43.9,345.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(62,41,21,0.259)").s().p("AgDBuIAAgKIAAjRIAHAAIAADRIAAAKIgHAAg");
	this.shape_11.setTransform(66.3,318.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(122,82,42,0.51)").s().p("AgEAoIAAgKIAAhFQAMAXgFAuIAAAKIgHAAg");
	this.shape_12.setTransform(66.4,303.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(91,61,32,0.38)").s().p("AgEAtIAAhjIAHAAIAAAKQAFA+gMAlIAAgKg");
	this.shape_13.setTransform(55.4,298.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(152,102,53,0.631)").s().p("AAvBoQgEgnAAgoQANAWgFAwIAAAKIgEgBgAgzgEIAAhkIAHAAIAAAKQAFA+gMAlIAAgJg");
	this.shape_14.setTransform(60.9,275.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(93,62,32,0.388)").s().p("AAAAnQgEgnAAgnQAMAWgFAvIAAAKIgDgBg");
	this.shape_15.setTransform(64.9,269.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F0693C").s().p("AgogEIBJAAIAHAAIAAAEQgoAFgoAAIAAgJg");
	this.shape_16.setTransform(69.3,259.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(124,77,41,0.514)").s().p("AAPD6QAAiMAHiKIAAEMIAAAKIgHAAgAgVjvIAAgKIAkAAIAHAAIAAA0QgMgmgfgEg");
	this.shape_17.setTransform(31.3,286.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(243,163,85,0.996)").s().p("ABUFcIjFAAIAAgKIAAiqIAAgKIAAkMIAGhaQADgygJgeIAAg0QBxgLBygDIAAAEIAAApIAAAKIgHAAIAABkIAAAKIAACgIAAAKIgIAAIAABjIAAAJIABAKQAFBEgNAqIAAB5IAAAKIgIAAg");
	this.shape_18.setTransform(45,294.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(121,79,50,0.494)").s().p("AgvgFQAvAAAwAFIAAAEIgHAAQgQACgNAAQgiAAgZgLg");
	this.shape_19.setTransform(23.6,232.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(8,2,1,0.035)").s().p("AAMAwQgggZADhIQASAOANAXQABADADAAIAAAxIAAAKQgDAAgDgCg");
	this.shape_20.setTransform(27.3,226.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(183,123,64,0.757)").s().p("AAABaQgDhaAAhZIAHAAIAACpIAAAKIgEAAg");
	this.shape_21.setTransform(87.7,281.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(122,81,42,0.506)").s().p("AgDBGIAAgKIAAiBIAHAAIAACBIAAAKIgHAAg");
	this.shape_22.setTransform(87.7,265.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(243,164,85,0.996)").s().p("ABnFyQAAgPgBAAQhjgPhiAAIAAgKIAAjSIAAgKQAGgvgNgXIAAgKIAAh3IAAgKQAGgwgOgWIAAgKIAAgoIABgKQAFgwgNgWIAAgKIAAgoIAHAAQApAAAogFIAAgFICEgKIAHAAIAACCIAAAKQABBaADBaIAEAAIAADRIAAAKIgIAAIAABuIAAAKIAABGIAAAKIgHAAg");
	this.shape_23.setTransform(76.3,295.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(124,81,51,0.506)").s().p("AgrgEIBQAAIAHAAIAAAEQgWAFgTAAQgaAAgUgJg");
	this.shape_24.setTransform(96.9,230.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(236,44,35,0.992)").s().p("Ak1E/QgpgJAMhQQAVhVAIhpIAAgKQAEgFACgGQABgEAAgFIAAgKIAAgxQAagPgQgbQgCgDAAgFQAVhlAMh2IAEgBQAwAiBVgFQDWgQDEAWQAEAAAEAFQANDUAfDLQATB/hGARIgIAAIgHAAIiFAKIgHAAIhKAAIAAAKIgHAAQgEAAgDgCQgugfgbAhIAAgFQhzAEhxALIgIAAIglAAIAAAKIgHgBg");
	this.shape_25.setTransform(59.4,230.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(118,77,48,0.482)").s().p("AAABzQgDhzAAhyQALBigFB5IAAAKg");
	this.shape_26.setTransform(103.2,202.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(108,70,44,0.443)").s().p("AgDAeIAAhFQAMAbgIAzQgBAAAAAAQAAABAAAAQAAAAgBAAQgBAAgBAAIAAgKg");
	this.shape_27.setTransform(95,203.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(131,85,54,0.537)").s().p("AADBeQgDgnAAgoQAMAWgFAwIgBAKIgDgBgAgEgOQgDgoAAgoQAMAWgFAwIAAAKIgEAAg");
	this.shape_28.setTransform(94,183.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(116,75,47,0.475)").s().p("AAAAxQgDgxAAgxQALAggFA5IAAAKIgDgBg");
	this.shape_29.setTransform(100.3,144.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(113,74,46,0.875)").s().p("AgDAtIAAgKIAAhPIAHAAIAABPIAAAKIgHAAg");
	this.shape_30.setTransform(87.7,133.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(245,159,101,0.984)").s().p("AAsIfIhQAAQAXgdAKgrIADgSQgdAhgWg1QAkghABhOIAAgKQABAAABAAQABAAAAAAQABAAAAAAQAAAAABgBQAIgzgNgcIAAgKIAAgxIAAgKQAGgwgNgWIAAgKIAAgVIAAgKQAFgvgMgVIgBgLQgYixgbisIAAgLIAAhPIAAgLIAAgKQA6gzAzgEIAAAGQABBUAHBMIAAAKQAAAyADAxIAEABQAJDPANDJIAAAKQABBzADBzIADAAQAIAZAAAkIAAAKIgBAJQgLAsgRAlIgIAAg");
	this.shape_31.setTransform(96.2,176);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(7,3,2,0.035)").s().p("AgKF/QglhNAFiDQAakmAykIQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIABAKQANB4gVBuIAAErIAAAKIgEABQgMB2gUBlQgEAAgBgCg");
	this.shape_32.setTransform(30.5,181.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(244,158,101,0.984)").s().p("AAgImQgvgFgwAAQAAgFgCgDQgVgpgGg9QAjnkAXnlIABgKIAAgKQA+AdA3AnQADACAEAAQAFBIgFA6IAAAKQgBAAgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgzEIgaEmQgFCDAlBNQABACAEAAQAAAFACADQAQAbgaAPQgDAAgBgDQgNgXgTgOQgDBJAhAZQADACADAAQAAAFgBAEQgCAGgEAFg");
	this.shape_33.setTransform(25.2,177.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7F4E22").s().p("AglgLQB7gBhPAVQgJADgIAAQgXAAgEgXg");
	this.shape_34.setTransform(49.1,42.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.624)").s().p("AAABLQgDhLAAhKIAHAAIAACLIAAAKIgEAAg");
	this.shape_35.setTransform(35.4,29.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7E4E22").s().p("AglgLQB7gBhPAVQgJADgIAAQgXAAgEgXg");
	this.shape_36.setTransform(69,42.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F7F2ED").s().p("AAGAUIgGAAIgHAAQgBAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQgDgOAAgOQAPgTAIARQACACAEAAIAAAJQAEAUgKAAIgCAAg");
	this.shape_37.setTransform(70.5,48.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#AA7237").s().p("Ag+gEIB1AAIAIAAIgBAEQgeAFgaAAQglAAgfgJg");
	this.shape_38.setTransform(57.5,28.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A45F20").s().p("ABRgPQAQgIAUADIABAFQAAAPADAMQAAAAAAABQABAAAAAAQABAAAAAAQABABABAAQAAAFgBAAQgKADgHAAQgaAAAAglgAh8gPQAQgIAUADIAAAFQAAAPAEAMQAAAAAAABQAAAAABAAQAAAAABAAQABABABAAIgBAFQgKADgHAAQgaAAAAglg");
	this.shape_39.setTransform(57.1,48.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F7F1EC").s().p("AAGAUIgGAAIgHAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgEgOAAgOQAPgTAJARQABACAEAAIABAJQADAUgKAAIgCAAg");
	this.shape_40.setTransform(49.8,48.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A86426").s().p("ABXARQAKAAgEgTIgBgKIAAgFQA1AjgxAAIgJgBgAh3ARQAKAAgDgTIgBgKIAAgFQA0AjgwAAIgKgBg");
	this.shape_41.setTransform(62.6,48.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.992)").s().p("AEZI6QjEgWjWAQQhVAFgwgiIAAgKIAAksQAVhugNh3IgBgKIAAgKQAFg6gFhIQgEAAgDgCQg3gng/gdIAAAKIgIgBQgMgCAFgbQAUhxAehhQACgFAAgFIDWhsQADgCAEAAQAZCDCAgKIAIgBQBCgeAchRQABgEAAgFQBuAzBwAvIAHACQAqB1gJCEIgEABIAAgFQg0AEg6AzIAAAKIAAAKIgIAAIAABQIAAAKIAAAKQgBBSgNBDIAdHWIAAAKQgEgFgEAAg");
	this.shape_42.setTransform(59.9,144.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(220,147,71,0.984)").s().p("AiBENQASAAASgEQANgEgPgRQhRhggjieIgHgBQhBgfAGiAQBPBQAJiVQAHhwBSgTQAzAMgqAgQgCABAAAFQA2ASBGgNIABgFQAxghAvgjQADgCAEAAQBTBOAFC2IAAAKQAYgNALgcQACgEAAgFQABAAAAABQABAAABAAQAAAAABABQAAAAAAAAQAnBdhBA3QgBAAgBAAQgBABAAAAQgBAAAAAAQAAAAAAAAQgcCbhlA1QgFA5AVAVQADACADAAQAAAFgBAEQgcBRhCAeIgIABIgSABQhwAAgXh6gAAuiCQAAAyAsgOQABgBAAgFIAHAAIAHAAIACAAQA/AEg5gnIAAAFQgEAAgCgCQgJgRgPATIAAgFIgLAAQgOAAgMAFgAifiCQAAAyAsgOIAAgGIAIAAIAHAAIACAAQA+AEg5gnIAAAFQgDAAgCgCQgJgRgPATIAAgFIgLAAQgOAAgMAFgAAui+QAGAhAngLQBMgWhvAAIgKAAgAiYi+QAGAhAngLQBMgWhvAAIgKAAg");
	this.shape_43.setTransform(60.6,60.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(8,4,4,0.984)").s().p("ADgDnQgFi3hThMQgEAAgDACQgvAigxAhIgIAAIh1AAQAAgFACgBQAqgggzgLQhSARgHBxQgJCVhPhQIAAgKQAmALgIgzIAAgKIAAgKIAAiLIAAgKIAAgKQBSjHDFgDQAigBAgADQAuAgAYAIIgEAAQAIAoArAqQAkAjAYA1QAEB4gSBZQgBAFAAAFQAAAFgCAEQgLAcgYANIAAgKg");
	this.shape_44.setTransform(60.5,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.9,0,88.4,395.2);


(lib.player1rivalstanding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#767171").s().p("AgngFIBFAAIAKAAIAAAJIgKAAQgOACgLAAQgcAAgQgLg");
	this.shape.setTransform(87,310.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(165,127,93,0.961)").s().p("AAFAtIgJAAQAAgFgCgEQgOgeAGgyQALAvAGgDQACAAAAgEQARAHgGAgIgBAKIgKAAg");
	this.shape_1.setTransform(40.5,300.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A8A3A4").s().p("AgTAUQAsAEgKg1IAFAAIAAAnIAAAKQAAAFgBAAQgTAFgTAAIAAgKg");
	this.shape_2.setTransform(59,304);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(31,36,30,0.984)").s().p("AErCMIjIAAQghgRguAFQkaAfjQh3IAAgKIAAgKQAkhXCEgLIAWgCQAggCAIgRQBUgGBVgJIABgFIAKAAIAKAAQAwAfBbgKIAKgBQAUAAATgFQABAAAAgFQAKgFAHgIQADgCAAgFIAAgKIAKAAQgRBDAvgCIAAgFQBUgGBCAPIAKABQAWASAwgIIAKAAIAKAAQAAAFACAEQAaA9gIAxQAAAFgCABQhLAlhTAbIAAAKIgKAAg");
	this.shape_3.setTransform(47.1,317);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9F9C9B").s().p("AgMgWIAAgKIAAgKQAKAoAOAmQAAABAFAAIAAAFIgCABQgrAAAQhBg");
	this.shape_4.setTransform(65.3,305.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(56,46,42,0.973)").s().p("AgJA3IAAgoIAAgKIAAhFIAJAAQAAA3AFA1IAFABQAAAFgDACQgHAIgJAFIAAgKg");
	this.shape_5.setTransform(62,299.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E49B54").s().p("AAAA8QgFg3AAg2IAAgKQAPgBgFAWIgBAJIAABFIAAAKIAAAKIgEAAg");
	this.shape_6.setTransform(62.6,298);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(39,34,35,0.984)").s().p("AgEAoIAAgKIAAhFIAJAAIAAAxIAAAKIAAAKIAAAKIgJAAg");
	this.shape_7.setTransform(63.5,299);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#726D6D").s().p("AgFAjIAAhPIAJAAIAAAKQAHAzgQAcIAAgKg");
	this.shape_8.setTransform(61.6,279.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#949192").s().p("AgngEIBFAAIAKAAQAAAEgBAAQgVAFgRAAQgYAAgQgJg");
	this.shape_9.setTransform(53,263.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AFABAB").s().p("AgEAtIAAgKIAAhPIAJAAIAABPIAAAKIgJAAg");
	this.shape_10.setTransform(61.5,270.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(95,75,58,0.902)").s().p("AgEARQgFAAAAgBQgFgcAAgeQAPACgBgWIAFAAQAHA2ADA3IAAAKQAAAFgBABIgBAAQgHAAgKgug");
	this.shape_11.setTransform(39.5,294.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#927965").s().p("AgKAoIAAgKIAAgUIAAgKIAAgJQAPABgFgWIAAgJQAQANgGAkIgBAKIgFAAQABAUgNAAIgCAAg");
	this.shape_12.setTransform(39.1,286);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(98,76,57,0.8)").s().p("AgFA7QgFg2AAg2QAFAAACgCQADgDAAgFQAQARgHAqIAAAKIABAKQAFAVgPgBIAAAKIAAAKIgFgBg");
	this.shape_13.setTransform(38.1,281);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(89,75,65,0.839)").s().p("AgBAyQgQgrAIhCIAJAAQARAmgHA9IAAAKQAAAFgDADQgCACgFAAQAAgFgBgFg");
	this.shape_14.setTransform(37,270);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(62,49,37,0.933)").s().p("AgFAeIAAhFIAJAAIAAAKQAHAvgQAWIAAgKg");
	this.shape_15.setTransform(35.6,251);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(51,47,47,0.965)").s().p("AgFDNIAAgKIAAgKIAAl7IAAgKQAQC8gHDTIAAAKIgJAAg");
	this.shape_16.setTransform(91.6,290.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F8F9FA").s().p("AEEDvIhGAAIgKgBQhCgPhUAGQgFAAgBgCQgOgmgKgoIAAgKIAAgyIAAgKQgBh1gIhwICzAAIAKAAIBQAAIAKAAIAAF7IAAAKIgKAAgAjbC9IABgKQAGgggRgIIAAgKQgDg5gHg1IABgKQAGgkgRgNIABgKQAGgrgRgRIABgKQAGg/gRglIAAgKIBuAAIAKAAQAbARA0gMQABAAAAgFQA4gVgGApIAAAKIgKAAIAABQIAAAKIAABQIAAAKIAABPIAAAKIAABGIAAAKIgFAAQAKA2gtgEIAAAKIgKAAQgYADgUAAQg8AAgkgXg");
	this.shape_17.setTransform(64,286.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(74,66,63,0.98)").s().p("AhUCRIABgKQAGgVgRABIAAAKIgKAAIAAgKIAAhQQASgcgIgzIAAgKIAAgKIAAhQIAKAAIAAAUIAAAKQBNARBmgGIAKgBIAAAKIgKAAIizAAQAIBvACB2IAAAKIgKAAg");
	this.shape_18.setTransform(71.5,280.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#AD7B4D").s().p("AhegFICzAAIAKAAIAAAJIgKAAQgdACgcAAQhDAAg3gLg");
	this.shape_19.setTransform(72.5,269.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(131,100,73,0.839)").s().p("AAjBLIhPAAIAAgKIAAgKQByAOgiiGIgBgJIAKAAIAACBIAAAKIAAAKIgKAAg");
	this.shape_20.setTransform(86.5,263.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F3A556").s().p("AAzBAIgKAAIizAAIAAgKIAAgUIAAgKIAAgdQCEgbB/ggIAKgBIABAKQAeB5haAAIgVgCg");
	this.shape_21.setTransform(76.9,262.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#83603F").s().p("AgPgTIAKAAQASAnAGAAIgFAAIgKAAIgCAAQgcAAALgng");
	this.shape_22.setTransform(90.6,206);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(17,14,12,0.314)").s().p("AAAAoQgEgoAAgnIAJAAIAABFIAAAKIgFAAg");
	this.shape_23.setTransform(106.5,170);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(50,37,24,0.475)").s().p("AgOhSIAKAAQANBHAGBPIAAAKIAAAEQgchCgBhig");
	this.shape_24.setTransform(101.5,134.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(242,164,86,0.992)").s().p("AiVH4IgBgFQhTgLgGhUQAKgZAJgZQABgFAAgFIAFAAQgGAAgTgoIAAgKIAAgKQAugcA3gUQAEgCAFAAQBCgTgMhwQgGgzAMgwIAAgJIAAhGIABgKQALg6gChIQgFAAgBgCIgshiIAAgKQgGhPgOhHQB3gpCWABIAEAIQABACAFAAQBLDIAPEEIAAAKQgeAUgLAgQhND1hmDUQgFAAgDADQgyAng1AAQgdAAgdgMg");
	this.shape_25.setTransform(114,173.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(5,8,7,0.996)").s().p("Ag6FoIABgKQAFgpg4AVIgKAAIhGAAIgKAAIhuAAIAAAKIgKAAQAAgFgCgEQgPgdAHg0QASgWgHgwIgBgKIAAgKIAAjHQAXiOgDioIAAgKQERBKFkgxIAAAFQgFAAgEACQg2ATgvAdIAAAKIAAAKIgKAAQgLApAfgBIAKAAQAAAFgBAFQgJAZgKAZQAHBTBTAMIAAAFQgbAcABAzQADCTg5BTIAAAKIgKAAIgJABQiAAfiEAcIAAAeIAAAKIgKAAg");
	this.shape_26.setTransform(67.9,230);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(98,66,34,0.408)").s().p("AAAAFQgOgEgPAAIAAgJQBegGg4AXQgEACgFAAQAAgFAAgBg");
	this.shape_27.setTransform(23,176.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(239,162,85,0.98)").s().p("AgaEhQhKgngihLQALg2AxgPQAFgBAFAAQAFAAAEgCQA3gYheAGIAAAKIgKAAQgdAFAJgjQBCgsBKghQAEgCAFAAQAxiNA4iKQAAgBAFAAIAABuIAAAKIgBAJQgtCpgEDTIAAAoIAAAKQgFAAgEABQgwARg0AMQAAgFgCgBg");
	this.shape_28.setTransform(29.5,167.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AC7A4D").s().p("AgEA3IAAhtIAAgKQAQA0gMBMQAAABgEAAIAAgKg");
	this.shape_29.setTransform(43.5,143.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(122,82,43,0.506)").s().p("AgFAeIAAhFIAJAAIAAAKQAHAugQAXIAAgKg");
	this.shape_30.setTransform(49.6,24);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(41,113,56,0.996)").s().p("AnSIzIAAgKIAAgoQAEjTAtiqIABgJQAFAAAAgBQANhNgSgzIAAgKQAlkwCwikQACgCAFAAIABAKQAGAbgRADQgFB7BPhkQBQhkBfhTIBQAAIAKAAQBxAMA4BGQBbBxBGCHQAMBSgdAoQgDADAAAFQgFAAgBgCIgEgIQiXgCh3AqIgKAAQABBjAdBBIAAgFIAsBiQABACAFAAQACBHgLA7IgBAKIgKAAQAAAoAFAnIAFABQgMAwAGAyQAMBwhCAUIAAgFQiOATiAAAQjCAAilgsg");
	this.shape_31.setTransform(84.7,137.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(173,123,77,0.992)").s().p("AAjAFIhPAAIAAgJIBPAAIAKAAIAAAJIgKAAg");
	this.shape_32.setTransform(93.5,76.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(175,122,62,0.722)").s().p("AgEBGIAAiVQAQBEgMBbIgEAAIAAgKg");
	this.shape_33.setTransform(98.5,68);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(242,194,90,0.992)").s().p("AhFGvQARgDgGgbIgBgKIABgKQAahwgRhsIAAgFQg9Ahg7gIQghgRgFgsQgLhzgzhJQA3gogFhkIAAgKQASgWgIgwIAAgKIAAgKIAAgeQAYhxBAgfQACgBAAgFQA8AAA7gFIAAgFIAyAAIAKAAQBBA3BDA0QADADAFAAQA3DbAOEEIABAKIAACWIAAAKIgKAAIhQAAIAAAKQhgBUhQBjQgjAtgSAAQgXAAADhEg");
	this.shape_34.setTransform(71,49.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138,331);


(lib.player1rivalgoing1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(32,35,30,0.984)").s().p("AjbCFIANgwQA/g3A7hLQABgCAFACQAQhIAbg0IADgJQBxggA3BbIAcgBQAggDgVgdQgJgOAAgVQApBjAJB3QAAACAEABIgFATQgEgBgBABQgbAsgdAhQgFgBgEABQg+AbhEAVIgYAHIgHADg");
	this.shape.setTransform(102.8,327.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(32,35,30,0.98)").s().p("AjKAHIgDgJIgShDIgDgKIgShDIDiAgIADgJQAAgCAEgBIADAKIADAJIAIAGIAuAYIAJAFQBKAmBPAgQADACAFgBQAFACAFABIACAAQALAFAAAFIADB7IgJACQg9AKg3AAQjJAAh5iMg");
	this.shape_1.setTransform(35.9,316.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(238,161,85,0.992)").s().p("ABXBCQgSgEgFABIgBAAQgUgGgZgDQgSgDgUgBQgbgBgTAGIg8gHIAAgBIgEgMIAAgiIABgDQABgNgBgMIgBgHIAAgCIADgGQACgFgFgQIAHABIARABIASAAQAcgBAkgGIAWABQAqABAnAFIArAGQACABABADIAAABIADAKQAHA4gKAvIgBAAQgFACgCgBQgDAAgEADQgCACgEAAQgGAAgLgDg");
	this.shape_2.setTransform(47.6,261.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(108,79,39,0.71)").s().p("AgJgEQARgDgDgbIAFAAIAAAKQAAAngTAUg");
	this.shape_3.setTransform(41.8,219.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6F7F8").s().p("AjJD8QgEABgEgCQhOgghLgmIgJgFIgtgYQAIgcgFgjIgCgKQAHhZgGhhIgPhiQgEgdAEgOIAAABIA8AHQATgGAbACQAVABASACQAZADAUAGIABAAQAFAAASAEQATAEAEgDQAEgEADABQACAAAFgBIADACIADAKQABAFgKAtQgBADADAHQAGA0gMAqIAIAdIADAKIgFABQAJAZgPAHIAFATIACAKIgFACQAKAugQAcIADAJIADAJQALAUgQADIAIAdIACAJIgEACQAFAmgNAZQgGgBgFgDgADYCyQABgFgCgFQg1iahFiPIgDgGIgMgXQACgFgBgFIgBgMIAAAAIAAAAQBpgdBigmIADgBQABgBAAAAQAAAAAAAAQAAAAgBAAQAAAAgBABIASgHIAAAAQgLALAAACQAeBbAZBdQABACAFACQAHA6ATAxQABACAFACQAHA7ATAxQABACAFACQAAAVAJANQAUAegfACIgdABQg2hahyAgg");
	this.shape_4.setTransform(77.9,291.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(76,66,60,0.937)").s().p("AgBgBIABgBIACAFIgDgEg");
	this.shape_5.setTransform(87,278.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(238,162,85,0.988)").s().p("AhgBWQgNgGgGgaQgFgbgEgfIgEgkIDqgtIAABnIABAAQABgBABAAQABAAAAAAQAAAAAAAAQAAAAgBAAIgDACQhiAlhoAeIAAAAgAB+ALIADgBIgEABg");
	this.shape_6.setTransform(95.4,264.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(241,163,86,0.992)").s().p("Ah8H3QhAgsgRgrQgMhDAogSIAMgFQg2ALAEg9QAXgJAZgPQACgBAAgFQBmg6AKiiQAFhXArg+QgXihguiMQgBgEAAgFQBchSCJALIAKABQAAAFACACQADADAFAAIABAJQA1DYgODrQgLAQgFAPQhIDDhcCtIAAAUIgFAAQgQB3iAABQgFAAgEgDg");
	this.shape_7.setTransform(104.4,172.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(40,36,30,0.776)").s().p("AgDA1QgCgDAAgFIAAhjQAQAmgHA9IAAAKQgEAAgDgCg");
	this.shape_8.setTransform(121.4,117.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(6,9,8,0.988)").s().p("ABXHZQguifgviVQgXA6gDBIQgDBlhBAlQAAgDgDgBIgqgGQgxgGg4AAIgBAAIgWAAQgkAFgcABIgSgCIAAADIgRgBIgFgOQgWg1ADgLQAuhyAdiHQAAgBAFAAQAUgUAAgoIAAgKIAAgdQAthrAnh5QABgCAFAAIAAhuIAAiCQARCBgHCXIAAAKQCNA9DGgoIAKgBQAAAFgCACQgZAOgXAJQgEA9A2gLIgMAGQgoARAMBCQARAsBAAsQAEACAFAAQCBAAAQh2IAFgBQACCAAfBrQAnCHhaBSIjrAtQAAgFAAAFIgBAAIgGACQgFAAgBgCg");
	this.shape_9.setTransform(72.5,213.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(241,163,85,0.984)").s().p("AhYE4Qgugpggg9QAZhMBGgOIgPACQgqAGgSgSQAug7BVgUIAJgBQBSi1BRimQABgCAFAAIABAKQANDIgsCLIAAAUIAACCQgEAAgDADQgyA5ghBGIgKABQg1AGhCADQAAgFgCgDg");
	this.shape_10.setTransform(38.5,160.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(118,80,41,0.49)").s().p("AAAAoQgFgmAAgpQAQAWgHAvIAAAKIgEAAg");
	this.shape_11.setTransform(70.4,81.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(114,112,45,0.475)").s().p("AgsgEIBZAAIgBAEQgqAFguAAg");
	this.shape_12.setTransform(68.3,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(41,113,56,0.996)").s().p("AlOI8IAAgKQAHiXgRiBIAAgUQAsiMgOjHIAAgKIAAgeQAujDBriEQACgDAFAAQAHB2BBhuQAegyAmhEQAig8BpAKQCaB/BBDWQABAEAAAFIAABkIgKAAQiJgLhdBRQAAAFABAFQAuCKAXChQgrA+gFBZQgKChhmA6IgKABQhOAQhGAAQhqAAhVglg");
	this.shape_13.setTransform(86.3,137.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(119,117,47,0.498)").s().p("AAAAsQgFgqAAguQAQAcgHAzIAAAKIgEgBg");
	this.shape_14.setTransform(100.4,56.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(242,165,86,0.992)").s().p("AgnFKIAAhGIAAgKQAIgwgSgWIAAgKQAEg7gOgpIAAgFQgvAog1gFQAAgFgCgDQg6g+AAh3QgFAAgDgDQgdgWgDgtQA8hMgKiQIAAgKQBKAyBMgeQANgCAbACQADCLBCBCIAAgFQAPhUAvApQAEADAEAAQgWCJApBmQABAFAAAFQA0gLA6gJIAKAAQAAAFgCAEIgSApIAABkQhpgLgjA9QgmBDgeAyQgfA1gRAAQgTAAgEg8g");
	this.shape_15.setTransform(74.8,59.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(241,236,96,0.992)").s().p("AB4E2QgphnAWiJQgEAAgEgDQgvgpgPBUIAAAFQhChCgDiKQgbgCgNACQhMAfhKgzQAAgFgBgEQgQgsAHhDQAeg9BHgSIAJgBQAwAAAqgFIAAgFIAnAAQBYArBBBAQACADAFAAIAiBOQABACAFAAQgECzAhCMIABAKQAAAvAFAqIAFABIAAAKIgKAAQg6AJg0ALQAAgFgBgFg");
	this.shape_16.setTransform(76.7,31.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.4,-0.1,114.7,346);


(lib.playbut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("לחץ כדי להתחיל", "bold 44px 'Arial'", "#999999");
	this.text.lineHeight = 51;
	this.text.lineWidth = 306;
	this.text.parent = this;
	this.text.setTransform(55,86);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A2XLjQpRkyAAmxQAAmwJRkyQJRkyNGAAQNHAAJREyQJREyAAGwQAAGxpREyQpREytHAAQtGAApRkyg");
	this.shape.setTransform(202.5,104.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("A2XLjQpRkyAAmxQAAmwJRkyQJRkyNGAAQNHAAJREyQJREyAAGwQAAGxpREyQpREytHAAQtGAApRkyg");
	this.shape_1.setTransform(202.5,104.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9999").s().p("A2XLjQpRkyAAmxQAAmwJRkyQJRkyNGAAQNHAAJREyQJREyAAGwQAAGxpREyQpREytHAAQtGAApRkyg");
	this.shape_2.setTransform(202.5,104.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#999999"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,405,209);


(lib.mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3333").ss(1,1,1).p("AAYAAQAAACgHACQgHABgKAAQgJAAgHgBQgHgCAAgCQAAgBAHgCQAHgBAJAAQAKAAAHABQAHACAAABg");
	this.shape.setTransform(2.4,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3333").s().p("AgQADQgHgBAAgCQAAgBAHgBQAHgCAJAAQAKAAAHACQAHABAAABQAAACgHABQgHACgKAAQgJAAgHgCg");
	this.shape_1.setTransform(2.4,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,6.8,3);


(lib.Meirsayshellbegood = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("תודה המאמן! אני אתן את הכל", "10px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 119;
	this.text.alpha = 0.99607843;
	this.text.parent = this;
	this.text.setTransform(-117.1,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.1,0,123,15.2);


(lib.meirsaytnx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("!יואו תודה המאמן", "10px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 74;
	this.text.alpha = 0.99607843;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,16.1);


(lib.meirsayok = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("סבבה", "10px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 32;
	this.text.alpha = 0.99607843;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,17.4);


(lib.Meirsaiditwasexcitement = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("אוף... זה היה רק בגלל שהתרגשתי", "10px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 91;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.2,34);


(lib.meirkickagain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("לא נורא, תנסה שוב", "10px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 78;
	this.text.alpha = 0.99607843;
	this.text.parent = this;
	this.text.setTransform(0.5,5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,3,82.1,17.6);


(lib.meirexcitedforthetraning = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("אני מתרגש \n!לקראת האימון", "10px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 65;
	this.text.alpha = 0.99607843;
	this.text.parent = this;
	this.text.setTransform(2,5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3,69.1,29.1);


(lib.Meirasksforanotherattempt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("המאמן אפשר עוד ?הזדמנות אחת", "10px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 83;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87,32.7);


(lib.lasttry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("אין בעיה, תנסה\nאבל זה ניסיון אחרון", "10px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 78;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,31.1);


(lib.kick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("!היי מאיר\nתתחיל בבעיטות לשער", "10px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 87;
	this.text.alpha = 0.99607843;
	this.text.parent = this;
	this.text.setTransform(-38.5,-2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-4,91.1,31.1);


(lib.holon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("חולון", "8px 'Arial'");
	this.text.lineHeight = 11;
	this.text.lineWidth = 15;
	this.text.alpha = 0.99607843;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.6,13.4);


(lib.goodlake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text(".בהצלחה לנבחרת שלי\n!מאיר אני סומך עלייך", "10px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 88;
	this.text.alpha = 0.99607843;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.1,28.3);


(lib.gate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.384)").s().p("AgFCgIAAgKIAAk1QAQCOgHCnIAAAKIgJAAg");
	this.shape.setTransform(40.5,44.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.376)").s().p("AgFKAIAA0JIAJAAIAAAKQAHKRgQJ4IAAgKg");
	this.shape_1.setTransform(352.5,181.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.506)").s().p("AWXNmIAA79QASNuAAOFQAAGJgSFvIAArugA2o4XIBGAAIAKAAIAAAFQgoAFgoAAIAAgKgAAp5JIBGAAIAKAAIAAAFQgoAFgoAAIAAgKgAFV5TIBGAAIAKAAIAAAFQgoAFgoAAIAAgKg");
	this.shape_2.setTransform(191.8,151.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.502)").s().p("AwGARQgEgOAAgOQN/AAN+gGQCZgBB/ARIkOAAI79AAIAAAJIAAAKQgFAAgBgBg");
	this.shape_3.setTransform(231.4,59.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.482)").s().p("AAeAFIhFAAIAAgJIBFAAIAKAAIAAAJIgKAAg");
	this.shape_4.setTransform(349.9,-14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.984)").s().p("AMveZIiWAAIAAgKQAHkHgRjtQjfgvjsgkQjogjjigzQmFhamTBAQmIA/mMBAQjRAjitgRQgFgFgBgGQgemJgFmqQgItrgLt0IAAgKQAIiogSiOIAAgKIAAk2IA8AAIAKAAQAoAAAngFIABgFQK7gVK9gTIAKAAQAoAAAngFIABgFIDSAAIAKAAQAoAAAngFIABgFQIogSItgMIAKAAIBGAAIAKAAQGTFMGPFPQADADAFAAQCrLUCbLgQCVLKClK3IAAAyIAAAKIgKABQrWCQreCHIAAAKIgKAAgAM5W5QgICdASCFIAKgBQHJhJHFhMIgKgBQnPhHnJhOIAAAKgEAhXAYJQiergiWrhQiJqeilp8QlLgLlTAeIgKABQgRELAHElIAAAKIgKAAIAAUJIAAAKIAAKoIAAAKQKNBhKHBmIAKABIAAAAgAF3zOQt+AGt/AAQAAAPAEANQABACAFAAQDGK5DKKtQCMHYCWHHQKhBwKuBiIAKAAQARlvABmJQgBuFgRtuQh5gRiOAAIgRABgEgh4gHaQAJN5AjNcIAKgBQKFhoKPhfQiKnIiHnPQjLqyjMqyQgFAAgDgDQlajplQj0QAKJnAGJngAND74IAAHCIAKAAQEaACECgWQgFAAgDgCQkLjfkTjXIAAAKgAj+7nQtpAattARQAAAFACABQEAC6EGCyIFoAAIb9AAIAAgKQAHjagRjAQiMgCiPAAQkzAAk/AJg");
	this.shape_5.setTransform(269.4,180.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39.9,-14.7,459,390);


(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text(",ביום שבת יש משחק אני רוצה שתשחק", "10px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 99;
	this.text.alpha = 0.99607843;
	this.text.parent = this;
	this.text.setTransform(-11,29);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,27,103,31.1);


(lib.eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AAUAAQAAAGgBAEQgBAEgBAAQgBAAgBgEQAAgEAAgGQAAgFAAgEQABgEABAAQABAAABAEQABAEAAAFgAgOAAQAAAGgBAEQAAAEgBAAQgBAAgBgEQgBgEAAgGQAAgFABgEQABgEABAAQABAAAAAEQABAEAAAFg");
	this.shape.setTransform(2,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAPAKIAAgKIAAgJQABgBAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQABABAAABIABAJIgBAKQAAABgBABQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAgBgBgBgAgSAKIgBgKIABgJQAAgBAAgBQABgBAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABABQAAAAAAABQAAABAAABIABAJIgBAKQAAABAAABQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAgBAAgBg");
	this.shape_1.setTransform(2,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,6,4.8);


(lib.coach2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(145,146,147,0.584)").s().p("AAAAyQgFgyAAgxQAQAggHA5IAAAKIgEAAg");
	this.shape.setTransform(51.6,401);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,50,6,0.988)").s().p("ABBByQhrgoggh1IAAgKIAAgeQANglA5AGIAJABQAAAFACADQBLB0gHBpQgFAAgFgCg");
	this.shape_1.setTransform(150.5,469.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(1,51,7,0.984)").s().p("ABAB3Qhsgtggh7IAAgKIAAgeQAVgdAxgBIAJAAQAGAtAUAcQA9BZgRBNQgFAAgEgBg");
	this.shape_2.setTransform(89.7,477);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(23,136,65,0.98)").s().p("AAUDDIgKAAIgJgBQgzgOg7gFQAAgFgCgBQhjgxgJiGQAnhCABhoQACBrBZgtQAEgCAFAAQAfB7BsAsQAFACAFAAQARhMg+haQgTgdgGgsIAKAAQBOAlACBxIAAAKQBXBIAqB1QABAFAAAFQhTAehxAAIgEAAg");
	this.shape_3.setTransform(90,484.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(251,252,251,0.988)").s().p("AgJDoIAAgKQAAgFgCgEIiongQBLAZBogFIAKAAQA4gOAbgrQACgDAFAAIAAFTIAAAKQAsBRAiBaQACAEAAAFIgKAAIgKAAQgxABgVAdIAAAeIAAAKQgFAAgEACQgaAOgTAAQgsAAgBhMg");
	this.shape_4.setTransform(73,442.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(112,205,242,0.984)").s().p("Ah9A3QgFAAgBgCQgOgwgKgxQBtAiB4gXIAKgBQAXgWAcgQQAEgCAFAAQARAcgHAzIAAAKQgFAAgCACQgbAsg4AOIgKAAIgiAAQhTAAg+gUg");
	this.shape_5.setTransform(67.6,410.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(251,251,251,0.988)").s().p("AgJDqIAAgIIAAgKQAAgFgCgFIionVIAAgKQBJAbBhADIAJAAQA3gTAmgnQACgCAFAAIAAFJIAAAKQAsBWAiBeQACAFAAAFIgKAAIgKgBQg5gGgNAlIAAAeIAAAKQgFAAgFABQgVAHgQAAQgyAAgChGg");
	this.shape_6.setTransform(134,435.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(23,136,66,0.98)").s().p("AhyCnQAAgFgCgCQhKg5gihgQAuhKAEh1QADBcBXgdQAFgBAFAAQAgB2BsAnQAEACAFAAQAHhohKh1QgDgDAAgFIAKAAQCFB6BHC5QABACAFAAIAAAeIAAAKQgFAAgEACQhUAihYAAQhNAAhRgag");
	this.shape_7.setTransform(150.5,477.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(112,204,241,0.98)").s().p("AAsBQQhggDhJgbIAAAKQgFAAgBgBQgRg0gHg4QByAxB9gmQAFgBAFAAQAUgUAWgRQADgDAFAAQARAggHA5IAAAKQgFAAgDADQglAmg3ATIgKAAg");
	this.shape_8.setTransform(128.6,403);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(109,109,109,0.435)").s().p("AAABFQgEhFAAhFIAJAAIAACBIAAAKIgFgBg");
	this.shape_9.setTransform(111.5,378);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(105,188,221,0.906)").s().p("AB8BBIiVAAQAAgFgCAAQhFgdgxgtIAAgKIAAgoQA4AnBIAZQACAAAAAFQBIALBNgTIAKgBIAAAJQAHAqgRASIgKAAg");
	this.shape_10.setTransform(126.6,370.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(251,252,253,0.992)").s().p("AiPCDQAAgFgBgFQgQgwAHhIIAAgJIAAiCIAAgKIAAgKQAxAuBGAcQABABAAAFICVAAIAKAAQAKBZATBQIABAKQgFAAgDACQgWASgUAUQgFAAgEABQg3ARg0AAQhEAAhBgcg");
	this.shape_11.setTransform(127.4,384.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(247,249,249,0.992)").s().p("AgOAvQAAgFgCgBQhIgZg4gmIAAgKIAAgKQA9gYBNA0QAxAhBNgUQAbgHgCAtIgKABQgyANgwAAQgaAAgZgEg");
	this.shape_12.setTransform(126.5,366.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(54,38,21,0.251)").s().p("AgFBkIAAjRIAJAAIAAAKQAHB0gQBdIAAgKg");
	this.shape_13.setTransform(88.6,332);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(108,77,45,0.506)").s().p("AAFDhQADjtgRjUIAJAAIAKAAIAAG3IAAAKg");
	this.shape_14.setTransform(111,337.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(125,125,125,0.498)").s().p("AAAAyQgEgyAAgxIAJAAIAABZIAAAKIgFAAg");
	this.shape_15.setTransform(50.5,384);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(252,253,253,0.992)").s().p("AiQCHIAAgKQAIg6gSggIAAgKIAAg7IAAgKIAAhaIAAgKIAAgKQA+ArBNAfQABABAAAFICBAAIAKAAQARBSANBXIAAAKQgFAAgDACQgcAQgYAWIgKABQgxAJguAAQhFAAhBgUg");
	this.shape_16.setTransform(66.5,392.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(106,186,218,0.89)").s().p("AB4BBIiBAAQAAgFgBAAQhNggg+gqIAAgKIAAgoQCNBsCShSQACgBAAgFIAAgKIAKAAIAAAKQgDA9gRAwIgKAAg");
	this.shape_17.setTransform(66,378.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(246,250,251,0.992)").s().p("AiQgKIAAgKIAAgUQAFAAACgDQADgCAAgFQCABUCNgYIAKgBQAAAFgCABQhAAkg+AAQhRAAhQg9g");
	this.shape_18.setTransform(65.5,373.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(221,157,88,0.992)").s().p("AnfDvIAAgKIAAnBQDDAmCbguQAFgCAFAAIAADSIAAAKIAAAKQgECqhCBtIAAAKIgKAAIAAAKIgKABQgfAGgfAAQhsAAhkhDgAGBDcQhNAVgygiQhNgzg9AXIAAgKIAAgKIAAgKIAAm3QDEAWCkglIAAAFIAAAKQAADNgUC4QgFAAAAABQgOA8gfAnQAKAZgFAjIgFAAQACgugbAHg");
	this.shape_19.setTransform(100,344.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(57,42,25,0.263)").s().p("AgEDhIAAnLIAJAAIAAHBIAAAKQAAAFgCACQgDADgEAAIAAgKg");
	this.shape_20.setTransform(51.5,345.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(9,14,37,0.255)").s().p("AAABeQgEheAAheIAJAAIAACzIAAAKIgFgBg");
	this.shape_21.setTransform(38.5,241.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(25,19,10,0.118)").s().p("AAPAYQgngEAAgsQAWAIAaAGQABABAAAFIAAATIAAAKIgKgBg");
	this.shape_22.setTransform(38.5,210.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(11,18,46,0.318)").s().p("AgEBeQgFheAAheQAJAUAJAVQABAEAAAFIgKAAIAACBIAAAKIgEgBg");
	this.shape_23.setTransform(100,296.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(39,58,147,0.992)").s().p("AmtIOIgKAAQhJggAEiAQAChYgJhuQgPivgdiwIAAgKIAAi0IAAgKIAAh4QAQACgFgWIgBgKIAKAAQG/AIGmgSIAKAAQAWASAcALQAFABAFAAQBsHdA0HZQACAQgggHIAAgFQikAljEgWIgKAAIgKAAQgFAAgCgCQhHhVgMiPQAAgFgCgEQgIgVgKgUQAABfAFBfIAFAAIgBAKQgKBthiAVIAAAKIgKAAQgFAAgFACQhVAahiAAQhPAAhYgSg");
	this.shape_24.setTransform(95,269.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(47,38,20,0.22)").s().p("AgNAKIAAgTIAAgKQAzAGgrAfQgDACgFAAIAAgKg");
	this.shape_25.setTransform(133.4,211);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(218,155,87,0.976)").s().p("ABAGQQgKAAgCgEQhUiug6jJQg5jGgcjoQB+gHBdAaIAKABQAAAFgCAEQgVAmgRArQgFF1CeDVQACADAFAAIABAKQAGAbgRADQAAgFgBgBQgbgGgWgIQAAAtAoAEIAKABIAAAUIAAAKIgKAAQgFAAgEACQgfATgWAAQgRAAgLgLg");
	this.shape_26.setTransform(24.6,177);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(8,7,3,0.039)").s().p("ABCGIQidjVAFl1QARgrAVgmQACgEAAgFIAAgKIAAgUIAFgBQAEgrgJgkQCwFAg5HLIAAAKQgFAAgCgDg");
	this.shape_27.setTransform(34.7,166.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(218,239,247,0.992)").s().p("ACNAyQhfgah9AHQgFAAgEgCQgVgNgoAFIAAgKIAAgTQARgDgGgbIgBgKQChgLB+BJQACACAAAFIAAAUIAAAKIgJgBg");
	this.shape_28.setTransform(15,132.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(218,239,248,0.992)").s().p("AApCFQi7hchnivQB6ARA/BSQA9BPBdAzQBrglgCiYIAFAAQAbgCAPAKQADACAFAAQAAAFgBAEQgSA1gBBDQgFAAgBACQgtBXiBABQgFAAgEgCg");
	this.shape_29.setTransform(86,76.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8F674A").s().p("AgiAAQBygghIAnQgOAIgKAAQgOAAgEgPg");
	this.shape_30.setTransform(100.5,29.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(57,40,22,0.275)").s().p("AgEAtIAAhjQAQArgMBBQAAABgEAAIAAgKg");
	this.shape_31.setTransform(118.5,37.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8F684B").s().p("AgdABQBegjg4AoQgNAKgJAAQgMAAgEgPg");
	this.shape_32.setTransform(86,28.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7C5329").s().p("AArAAIAAgFQBVALgMAAQgJAAhAgGgAh0AAIAAgFQBVALgMAAQgJAAhAgGg");
	this.shape_33.setTransform(93.7,22.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(214,151,85,0.969)").s().p("AhjDlQg/hSh6gRIAAgKQCZATgfh4QgCgEAAgFQgwg4gMhdIAAgKIAAgKQAjAxAWgEQADAAgCgOQgKhIAggxQgQhBAlgWQAEgDAFAAQCQgUClAAIAKAAQAYBjAaB+IgBgPQgBghAgADIAABkIAAAKQgFAUgGANQgrBqhCBQIAAAKIAAAKIgFAAQACCZhrAlQhdgzg9hQgABLjRQAHAbAkgTQAogXgRAAQgOAAg0APgAhAjRQAHAbAggWQAdgWgMAAQgMAAgsARgABVkSQCVAPiVgUIAAAFgAhJkSQCUAPiVgUIABAFg");
	this.shape_34.setTransform(89.5,50);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(135,93,54,0.984)").s().p("Aj5CTIAAAKQgFAAgBgCQgEgIAAgKQARh1AvhfQArhaBxgbIBtAAIAKAAQBbAoA1BOQABACAFAAQAQBdAOBgIAAAKQgggCABAgIABAPQgah9gYhjIgKAAQilAAiQAUQgFAAgEADQglAXAQA/QggAyAKBHQACAOgDABIgDAAQgWAAgggug");
	this.shape_35.setTransform(92,19.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(218,154,86,0.976)").s().p("AiGGPQgcgMgWgRIAAgKQAPAAANgEQACgBAAgFQAFAAADgCQAsggg0gGIAAAKQgFAAgFgBQgRgHAHggQBXhTAbiSQAKgzAagnQAcirghiKQAAgBgFAAIAAgKQB0gIBegfQAEgBAFAAQgoCpgyCoQgwCfgpClQggCDhiAHQgFAAgFgBg");
	this.shape_36.setTransform(147.5,178);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(217,238,247,0.984)").s().p("AidALIAAgKQCpgjB5ghQAEgBAFAAQAHArAJAkIgGAAQgFAAgEABQhdAfh1AIIAAAKQgEAAgFABQgSAHgOAAQgpAAgIg6g");
	this.shape_37.setTransform(150.8,136.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(206,222,111,0.996)").s().p("AmjL8IAAgKIAAgUIAAgKIAAgUQARgDgGgbIgBgKIAAgKQA5nMixk/QAJAkgEArIgFABQAAgFgCgCQh+hKiiALIAAgKIAAgKQBCi9A/jAQABgEAAgFQBahBBShJQADgCAFAAQChgdB4hFQAEgCAFAAQBnCwC7BcQAEACAFAAQCBgBAthXQABgCAFAAQABhFASg0QABgEAAgFQDaBIB3CqQB4CrBTDPQgFAAgEABQh5AhiqAkIAAAKQgPgKgHgTQgNgegCAUQgREJgaEvQgBBWAdA3QACAEAAAFQgHAgARAGQAFACAFAAIAAAUIAAAKQAAAFgCAAQgNAFgPAAIAAAKIgKAAQkoAMkzAAQiEAAiGgCg");
	this.shape_38.setTransform(83,139.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173,504);


(lib.coachsayWelldone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("כל הכבוד, הייתם מעולים.\n...מאיר אתה לא מתאים לקבוצה", "10px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 148;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152.4,35.2);


(lib.coach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(23,136,66,0.98)").s().p("AgtA9IgBgDQgdgUgOgjQATgbABgtQABAmAjgMIAEAAQAOArApANIAEAAQAGgZgYghQgIgKgCgOIAEAAQA1AsAcBDIADAAIAAALIAAAEQgkANglAAQgeAAgggJg");
	this.shape.setTransform(59.9,172.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,50,6,0.988)").s().p("AAZApQgpgNgOgrIAAgEIAAgKQAGgOAWACIADABQADAOAHAJQAYAggGAbIgEgBg");
	this.shape_1.setTransform(59.9,170.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(23,136,65,0.98)").s().p("AAEBGIgEAAQhNgDgKhIQAQgXAAgmQACAnAjgRIADgBQANAvAuAMIAAgCQAHgagXghQgIgKgEgNIAEAAQAMAHAJAKIADABQAJAOgBAWIAAAEQAhAZASAoIABADQgbAPgqAAIgPgBg");
	this.shape_2.setTransform(35.7,175.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(1,51,7,0.984)").s().p("AgegRIAAgDIAAgLQAJgLATAAIADAAQAEANAIAKQAXAggHAbIAAADQgugMgNgwg");
	this.shape_3.setTransform(35.6,172.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(251,252,251,0.988)").s().p("AgDBUIAAgEIgBgDIhDiuQAhAKAqgCIAEAAQASgHALgOIADgBIAAB6IAAAEQATAdANAkIgEAAIgEAAQgTAAgJALIAAALIAAADIgEABQgKAGgIAAQgQAAgBgcg");
	this.shape_4.setTransform(28.9,160.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(112,205,242,0.984)").s().p("AgxAUIgCgBQgGgRgEgRQBDATAwgdIAEgBQAHAJgDATIAAAEIgDAAQgLAPgSAGIgEAAIgPAAQgiAAgagHg");
	this.shape_5.setTransform(26.7,148.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(145,146,147,0.584)").s().p("AAAASQgCgSAAgRQAGALgCAVIgBADg");
	this.shape_6.setTransform(20.4,145.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(125,125,125,0.498)").s().p("AAAASQgBgSAAgRIADAAIAAAgIAAADIgCAAg");
	this.shape_7.setTransform(19.9,139.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(106,186,218,0.89)").s().p("AgDAXIgBgBQgegMgZgOIAAgEIAAgOQA5AmA5gdIABgCIAAgEIAEAAIAAAEQgCAVgGARIg3AAg");
	this.shape_8.setTransform(26.1,137.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(252,253,253,0.992)").s().p("Ag5AwIAAgDQADgWgHgLIAAgEIAAgUIAAgEIAAggIAAgEIAAgDQAZAPAeAMIABABIA3AAQAGAdAGAgIAAADIgEABQgcATgjAAQgZAAgbgJg");
	this.shape_9.setTransform(26.3,142.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(246,250,251,0.992)").s().p("Ag5gDIAAgEIAAgHIADgBIABgCQA0AdA3gIIAEgBIgBADQgZAMgZAAQggAAgggVg");
	this.shape_10.setTransform(25.9,135.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(57,42,25,0.263)").s().p("AgBBSIAAimIADAAIAACiIAAAEIgBACIgCABIAAgDg");
	this.shape_11.setTransform(20.3,125.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(54,38,21,0.251)").s().p("AgBAkIAAhLIADAAIAAADQADArgGAhIAAgEg");
	this.shape_12.setTransform(35.1,120.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(11,18,46,0.318)").s().p("AgBAiQgCgiAAghIAGAOIABAEIgEAAIAAAuIAAADg");
	this.shape_13.setTransform(39.7,107.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(251,251,251,0.988)").s().p("AgDBSIAAgEIAAgDIhEiqIAAgDQBBAZArgjIADgBIAAB2IAAAEQATAfANAmIgEAAIgEgBQgWgCgGAOIAAAKIAAAEIgEABQgIACgHAAQgUAAAAgcg");
	this.shape_14.setTransform(53.3,157.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(112,204,241,0.98)").s().p("AgxATIAAADQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQgHgSgDgUQBCAZAxgjIAEgBQAHAMgDAUIAAAEIgDABQgaAUghAAQgWAAgbgKg");
	this.shape_15.setTransform(51.1,146);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(109,109,109,0.435)").s().p("AAAAaQgBgaAAgZIADAAIAAAvIAAAEg");
	this.shape_16.setTransform(44.3,137);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(251,252,253,0.992)").s().p("Ag5AvIAAgDQgGgRACgbIAAgCIAAgwIAAgDIAAgEQAUARAcAKIAAACIA/AAQAEAgAIAdIAAADIgDABQgdAVghAAQgZAAgdgLg");
	this.shape_17.setTransform(50.6,139.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(247,249,249,0.992)").s().p("Ag5gHIAAgEIAAgDQAZgJAeATQATALAfgHQAKgCAAAQIgEAAQgSAEgQAAQgrAAgigZg");
	this.shape_18.setTransform(50.3,132.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(105,188,221,0.906)").s().p("AgKAYIAAgCQgcgKgUgQIAAgEIAAgOQAvAhBAgMIAEAAIABACQACARgHAGIg/AAg");
	this.shape_19.setTransform(50.3,134.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(221,157,88,0.992)").s().p("Ai/BXIAAgEIAAiiQBOAOA+gRIAEgBIAABMIAAAEIAAADQgCA/gaAmIAAAEIgEAAIAAADIgEABQgMACgMAAQgrAAgpgYgACkBeQAAgRgKADQgfAHgUgMQgegTgZAJIAAgEIAAgDIAAgEIAAieQBOAHBCgNIAAACIAAAEQgBBKgHBCIgCAAQgGAWgMAOQAEAJgCANg");
	this.shape_20.setTransform(39.7,124.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(108,77,45,0.506)").s().p("AACBRQABhVgGhNIADAAIAEAAIAACfIAAADg");
	this.shape_21.setTransform(44.1,122.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(114,81,45,0.522)").s().p("AAAAUQgBgUAAgTQAGANgDAWIAAAEg");
	this.shape_22.setTransform(60.3,79.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(109,77,43,0.498)").s().p("AAAATQgBgTAAgTQAGANgDAWIAAAEIgCgBg");
	this.shape_23.setTransform(59.9,73.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(219,155,86,0.984)").s().p("AAADEQAJgKAEgQIACgGQgTASgIgWQAQgNgEgiIAAgEIAAgDQACgXgGgNIAAgEIAAgLIAAgEQADgXgHgNIAAgDQgMhvgohUQArgMAwgEIAAABIAcEsQAGA5gOAiQgDAGgJABIgSAAQgSAAgDgEg");
	this.shape_24.setTransform(60.5,70.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(39,58,147,0.992)").s().p("AirDAIgEAAQgdgKACgwQAAgfgDgoQgGg/gMhAIAAgDIAAhCIAAgDIAAgsQAGABgCgIIAAgEQDBAGCtgNIAEAAQApCDAaCTQAJAugEAlIgEAAIgIAAIAAgBQhCANhOgIIgEAAIgEAAIgCgBQgcgegFg0IgBgEIgHgOQAAAiACAiIACAAIgBAEQgFAoglAHIAAAEIgEAAIgEAAQgjAKgmAAQggAAgjgHg");
	this.shape_25.setTransform(37.7,97.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(9,14,37,0.255)").s().p("AAAAjQgBgjAAghIADAAIAABAIAAAEg");
	this.shape_26.setTransform(15.1,87.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(218,154,86,0.976)").s().p("AAEDAQgPgrgHg2QgViOgMiUIBTAAIAEAAIgBAEQgaC/ArCjQglgNAhAfQABAAAAABQAAAAAAABQABAAAAAAQAAABAAAAQgEAMgRAAQgKAAgPgEg");
	this.shape_27.setTransform(8.2,69.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(218,236,243,0.988)").s().p("Ag4gMQA5AEA5AIQABAAAAAFIAAAEIAAADIgEAAIhTAAIgEABIgJAAQgWAAAHgZg");
	this.shape_28.setTransform(5.9,48.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8F674A").s().p("AgNAAQAtgLgdANQgFAEgEAAQgFAAgCgGg");
	this.shape_29.setTransform(39.9,10.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8F684B").s().p("AgLAAQAlgMgWAOQgFAEgDAAQgFAAgCgGg");
	this.shape_30.setTransform(34.1,10.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7C5329").s().p("AARAAIAAgBIAdADIgdgCgAguAAIAAgBIAdADIgdgCg");
	this.shape_31.setTransform(37.2,8.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(217,237,246,0.984)").s().p("Ag3AUQgFgGgCgIIAAgEQBDgKAwgOIAEgBIAAAEQATAfgngDIAAgBQgwAEgrAMIgBgEg");
	this.shape_32.setTransform(60,49.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(206,222,111,0.996)").s().p("AirEUQAHgUADgaQATikhEhvQADAOgBASIgCABQAAgGgCAAQg5gJg5gEIAAgDQAchGAThPIAAgDQAlgaAjgdIAgAAQAogVAwgPQApA/BFAhIABACIAkAAQAVgNATgQQAIgTAAgcIgBgEQCFAiA2BzIAhBMIgEAAQgvAOhFALIAAAEQgFgEgEgHQgEgKgBAHQgHBfgKBuQAEAvATAhIAAADIgDAAQh6AJiBAAQg5AAg7gCg");
	this.shape_33.setTransform(32.9,50.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(219,239,249,0.996)").s().p("AAOAxIgBgCQhGghgog+QAvAHAZAdQAZAcAmASQAqgMAAg3IACAAQAKgDADAFIACABIABAEQAAAbgIATQgTAQgVANIgkAAg");
	this.shape_34.setTransform(33.9,27.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(219,155,87,0.988)").s().p("AgoBTQgagdgvgHIAAgEQAhAFAOgNIABgDQAIgfgUgKIgEgBQgBgVgGgQIgBgHIAAgDQAXAlACgiQABgVAGghQgGgGANgGIABgDQBCgKBBAHQAKAgAKAuIAAgGQgBgMANABIAAAlIAAADIgFANQgRAlgaAdIAAADIAAAEIgCAAQAAA5gqAMQglgSgZgdgAAehMQAEALAOgIQAQgIgIAAQgFAAgVAFgAgZhMQAEALAMgJQALgIgEAAQgFAAgSAGgAAihjQA8AFg8gHgAgdhjQA7AFg7gHg");
	this.shape_35.setTransform(35.5,18.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(57,40,22,0.275)").s().p("AgBAQIAAgjQAGAPgFAYIgBAAIAAgEg");
	this.shape_36.setTransform(47.1,13.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(135,93,54,0.984)").s().p("AhjA0IAAAEIgCgBQgCgDAAgEQAJglAHgmIAAgDQAcgdAsgLIArAAIAEAAIAgARIAEABIAVAYIADABIALBBIABAHQgNgCABANIAAAFQgKgtgKggQhBgGhCAKIgBACQgNAHAGAEQgGAigBAVQgBAPgGAAQgGAAgMgTg");
	this.shape_37.setTransform(36.5,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.9,182.7);


(lib.cloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2,1,1).p("ABBAZQABgBACAAQA7gfBVAAQA/AAAyARAAsizQA5gVBKAAQBgAABDAjQBDAjAAAyQAAAyhDAiQgHADgGADQAQAGAPAIQA7AgAAAtQAAAtg7AfQg8AghUAAQhVAAg7ggQgfgQgOgTQgPgTAAgWQAAgrA3gfQABgBABgBQgDgBgCgBQABACACACABkiSQAXAWAAAZQAAAthJAgQgUAJgWAGQABAAABABQAfANATAQAAXCOQgHACgGADQhIAghnAAQhnAAhJggQhJggAAgtQAAgtBJgfQAUgIAWgHQgBgBgBAAQhJggAAgtQAAgtBJggQBJggBnAAQBRAAA+AUAAIgHQg6AQhLAAQhmAAhIge");
	this.shape.setTransform(41.5,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("ABDCxQgegQgPgUQgOgSAAgWQAAgrA3gfIADgCIgHgCIAEAEQg3AfAAArQAAAWAOASIgMAGQhIAghnAAQhnAAhJggQhJggAAgtQAAgtBJgfQAUgJAWgGIgCgBQhJggAAgtQAAgtBJggQBJggBnAAQBRAAA+AUQANAEAMAGQA6gWBKAAQBgAABCAjQBEAkAAAxQAAAyhEAhIgMAHQAQAGAOAHQA8AhAAAtQAAAtg8AfQg7AghVAAQhUAAg8gggABDAXIgBACIABgCQA8geBUAAQBAAAAyARQgygRhAAAQhUAAg8AegAAKgGQAgANARAQQgRgQgggNIgCgBQg6AQhLAAQhlAAhJgeQBJAeBlAAQBLAAA6gQIACABgAAygWQgUAIgWAHQAWgHAUgIQBJggAAgtQAAgagXgVQAXAVAAAaQAAAthJAgg");
	this.shape_1.setTransform(41.5,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,85,43.8);


(lib.ballcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78797B").s().p("AghgEIA7AAIAIAAQAAAEgBAAQgSAFgOAAQgUAAgOgJg");
	this.shape.setTransform(42.1,2033.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.427)").s().p("ABHAFIiVAAIAAgJICVAAIAIAAIAAAJIgIAAg");
	this.shape_1.setTransform(54.2,2037.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(32,32,32,0.227)").s().p("AAVAhQgYghgWgiQAiARAQArQABAEAAAFQgDAAgCgCg");
	this.shape_2.setTransform(125,1878.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(77,78,79,0.443)").s().p("AAAAsQgDgsAAgsIAHAAIAABPIAAAKIgEgBg");
	this.shape_3.setTransform(76.8,1800.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(151,152,154,0.973)").s().p("AgOgJQAEAAACgDQACgCAAgFQAJAKAIARQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAQAAAFgCACQgDADgDAAQgKAAgLgdg");
	this.shape_4.setTransform(-52.4,1980.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(18,18,18,0.145)").s().p("AAkBuQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQgHgRgLgLQAAgFgBgEQgchVgXhfQAuBoAhBzg");
	this.shape_5.setTransform(-54.5,1970.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(9,9,9,0.078)").s().p("ABdDFQhzi1hWjcQBuDFBpDLQACAEAAAFQgLAAgFgIg");
	this.shape_6.setTransform(-71.7,1909.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(250,250,250,0.996)").s().p("AilhsQhJjlgkkfQBTAOAyBwQDHG1CkHmQAXBfAcBWQACAEAAAFQAAAFgCACQgCADgDAAQkekOiTnPg");
	this.shape_7.setTransform(-80.7,1917.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.439)").s().p("AgDBpIAAgKIAAjHIAHAAIAADHIAAAKIgHAAg");
	this.shape_8.setTransform(-116.1,1817.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(142,143,145,0.914)").s().p("AAAAnQgEgnAAgnQAMAWgFAvIAAAKIgDgBg");
	this.shape_9.setTransform(-89.6,1745.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(137,138,140,0.784)").s().p("AAAAsQgEgsAAgsQANAcgGAzIAAAKIgDgBg");
	this.shape_10.setTransform(-90.4,1734.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(138,139,141,0.953)").s().p("AAAAtQgEgtAAgsQANAbgGA0IAAAKIgDAAg");
	this.shape_11.setTransform(-91.2,1723.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(166,167,168,0.843)").s().p("AgsgEIBSAAIAHAAIAAAEQgtAFgsAAIAAgJg");
	this.shape_12.setTransform(-10.3,1630.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(143,144,146,0.937)").s().p("AgEBaIAAi9IAHAAIAAAKQAFBqgMBTIAAgKg");
	this.shape_13.setTransform(77.6,1780.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(139,141,143,0.969)").s().p("AgEBVIAAizIAHAAIAAAKQAFBmgMBNIAAgKg");
	this.shape_14.setTransform(78.4,1755.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(159,160,160,0.722)").s().p("AgEAyIAAhtIAHAAIAAAKQAFBDgMAqIAAgKg");
	this.shape_15.setTransform(79.1,1733.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(33,34,35,0.31)").s().p("AgKBGIAAgKIAAh3QAHgFAHgEQADgBAEAAIAAAKQgEAAgDACQgEADgDAFIAABtIAAAKIgHAAg");
	this.shape_16.setTransform(79.8,1720.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(70,70,70,0.408)").s().p("AgWAFQAQgOAVgEIAHgBQAAAFgBABQgVANgWAKIAAgKg");
	this.shape_17.setTransform(92.2,1707.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(26,26,26,0.247)").s().p("AghAPIAAgKQAegOAegNIAHgCQAAAFgCABQgiATgfAYIAAgKg");
	this.shape_18.setTransform(84.3,1712.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7C7E80").s().p("AgpgFQApAAApAFIAAAEIgHAAQgOACgMAAQgdAAgUgLg");
	this.shape_19.setTransform(63.2,1601.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.396)").s().p("AgdgFIA0AAIAHAAIAAAJIgHAAQgLACgIAAQgVAAgMgLg");
	this.shape_20.setTransform(65.1,1592.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(252,252,252,0.996)").s().p("AmWFyIg8AAIgHAAQhugThmgfQB3jUB1jWQACgDAEAAQGPiHGWh8IAHgBQCQB8CmBeQADACAEAAQkfFinMBvQikAnitAPIgIAAg");
	this.shape_21.setTransform(85.4,1995.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(134,135,137,0.78)").s().p("AgEBpIAAjbIAHAAIAAAKQAFB6gMBhIAAgKg");
	this.shape_22.setTransform(182.3,1832.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(16,16,16,0.157)").s().p("AgoCgQAqieAjipQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABAAIAAAKQgVC+g8CLIAAgKg");
	this.shape_23.setTransform(206.3,1875.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(3,3,3,0.224)").s().p("AgEBBIAAiLIAHAAIAAAKQAFBSgMA5IAAgKg");
	this.shape_24.setTransform(214,1823.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(37,37,37,0.149)").s().p("AgNARQAShHAHAbQAGAXgIASQgJAWgFAAQgGAAgDgTg");
	this.shape_25.setTransform(193.1,1828.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#606163").s().p("AgDAyIAAhtQAMAwgJBGQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAIAAgKg");
	this.shape_26.setTransform(214.6,1803.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(10,10,10,0.075)").s().p("AASBdIgoh1QATgZAGgsQAAAAABAAQAAgBABAAQAAAAABAAQABAAABAAQALBVAEBeIAAAKQgBAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_27.setTransform(210.5,1776.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(194,195,196,0.882)").s().p("AgDFjIAAgKIAAq7IAHAAIAAK7IAAAKIgHAAg");
	this.shape_28.setTransform(182.2,1785.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(252,252,252,0.992)").s().p("AgCNiQghh4gZh8QgeifgtiNQAOnwgGoLIAAgKQBFhOA8hZQACgDAEAAQA1DWAsDjIABAJQgBAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgHAsgTAZIApB2QAAABABAAQAAAAABABQAAAAABAAQABAAABAAQAOAuABBAIAAAKIAABuIAAAJIAAAyIAAAKIgIAAIAACMIAAAKIAAAKQAJCOgnBOIAAAoIAAAKQgBAAgBAAQgBAAAAABQAAAAgBAAQAAAAAAABQgkCrgrCdIAAAKQAAAPgDAOQgFARgEAAQgDAAgCgMgAhZDKQAHAnARgqQAIgTgGgXQgCgHgDAAQgHAAgOA0g");
	this.shape_29.setTransform(200.7,1809.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(193,194,195,0.882)").s().p("AgEH5IAAv7IAHAAIAAAKQAGIJgNHyIAAgKg");
	this.shape_30.setTransform(187.6,1790.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(253,253,253,0.996)").s().p("ADjdnQkgjwjKllQBbmvBPnBQAAAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAQEuhtE7haIAIgBQEoEKDiFpQABADAEAAQAXAiAZAhQACACADAAIAEAAQgkFmg7FMQAAAFgBABQmHCTmPCJQgDAAgDgCgAsBVtQhqjMhvjGQgphgg4hMQg1hJgIiHQA9mjBglyIABgKQDag8DygdIAHgBQC2FXDBFJQACACAAAGQhdG5hjG1QAAAAAAABQAAAAgBAAQAAAAgBAAQgBAAgBAAQhcAxhwAUQh0AWhuAeQAAgGgBgDgAwemRIAAgKQAGgwgNgWIAAgKIAAgVIAAgKQAFg0gNgcIAAgKIAAgKIABgKQAFg0gNgcIAAgKIAAhQQCHkNCgjtQBmiYCUhSQBdg0CCACQAtAAAtgFIAAgFQAjABAbAQQATALAHAxQAaDGAWDYQAAAEgBAEQjVF0jQF7QhhAWhiARQhnARhcAgQgmAOgcAAQhhAAADiXgAJqs3QlGiJlJiEIgBgKQgmj3gOkbQEEiHEDiBIAAAEQAcASAwgHIAHgBIAIABQEXAdDLCCIABAKQBOEYBAEtQgDAAgDACQj+CekDCVQgEABgEgCg");
	this.shape_31.setTransform(16.1,1790.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(254,254,254,0.996)").s().p("AACO+QkIlSkIlUIAAgKIAAhQIAAgKIAAgoQANhTgGhqIAAgKIAAgKIAAgyQANhNgFhnIAAgKIAAgKIAAgyQANgrgGhDIAAgKIAAgKIAAhuQAEgFAEgDQADgCAEAAQAfgYAjgUQACgBAAgFQAQAGADgPQAAAAAAAAQAAgBABAAQAAAAABAAQABAAABAAQAWgKAVgOQACgBAAgFQDGh6DBh+QADgCAEAAQDwEVDsEYQACADAEAAIAAB4IAAAKIgHAAIAAK7IAAAKIAADcIAAAKQgEAAgDACQj4CXkCCJQgDAAgCgCg");
	this.shape_32.setTransform(129.9,1776.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(1,1,1,0.992)").s().p("EABjAixIiWAAQj0gGi6hSQn7jek2nlQk2njg/ssIAAgKIAAjHIAAgKIAAiMQBYsLE9nZQE9nbILjBQCbg6CvgWIDDAAIAHAAQARARAkgGIAIgBQBIAEBAAPQHDBlEuEoQGFF+CfKqQBRFYgPHGQgZLdjyHIQiNEJi2DTQlnGipnBOIgHAAgAK+WmQmXB8mPCHQgDAAgCADQh1DXh3DUQBlAfBuATIAIAAQAYARArgMQABAAAAgFQCsgPCkgnQHNhvEeljQgDAAgDgCQimheiQh8IgHABgA3OOZQCTHQEeEOQAPAoANgNQACgCAAgFIAEAAQghh0guhoQiknnjIm1QgyhwhTgOQAjEfBKDlgACugXQk6BZkvBtQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQhOHBhbGuQDJFmEiDwQADACADAAQGNiJGIiUQABAAAAgFQA7lNAkllIgEAAQAAgFgCgEQgPgsgkgRQgEAAgBgCQjilpkokKIgIABgAtwoLQjxAcjaA9IgBAKQhgFzg9GiQAICGA1BJQA4BNApBgQBWDdB0C1QAFAIALAAQBugdB0gXQBwgUBcgwQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAAAQBjm1Bdm6QAAgFgCgDQjBlIi2lXIgIABgAVNEJIAAAKQAsCNAfCfQAYB7AiB5QAGAaAIggQAEgNAAgPQA9iLAVi/IAAgKIAAgKIAAgoQAnhOgIiOIAAgKQANg6gFhSIgBgKIAAgKIAAgxQABAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQAJhHgNgwIAAgKQgBhAgOguIAAgKQgEhfgLhVIgBgKQgrjig2jWQgEAAgCACQg9BahFBOIgHAAIAAP7gAD9hfIAEABQEIFTEJFSQACACAEAAQECiJD3iXQADgCAEAAQANhhgFh7IAAgKIAAgKIAAq7IAAgKIAAh4QgEAAgCgDQjskYjwkVQgEAAgDACQjDB+jGB6IgHABQgWAEgQAPIAAAKQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgCAPgRgGIgHACQgeANgeAPIAAAKQgEAAgDABQgIAEgIAFIAAB4IAAAKIAABuIAAAKIAAAyIAAAKIgHAAIAAC0IAAAKIAAAyIAAAKIgIAAIAAC+IAAAKIAAAoIAAAKIgIAAQAAAtAEAsgAt075QiVBThlCXQigDtiIEOIAABQIAAAKQAAAtAEAtIAEAAIAAAKIAAAKQAAAtAEAsIAEABIAAAUIAAAKQAAAoADAnIAEABQgFDEClg6QBcghBmgRQBjgRBhgVQDQl8DUl0QACgDAAgFQgWjXgajGQgHgygTgKQgcgRgiAAIgHAAIhTAAIAAAKIgMAAQh7AAhYAxgAm79SQAOEaAmD4IABAKQFKCEFFCIQADACAEAAQEEiWD9ieQADgCAEAAQhAkshOkYIgBgKQjLiDkXgcIgIgBIAAgFQgpgFgqAAIAAgFQkDCCkECHg");
	this.shape_33.setTransform(51.4,1814.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.5,1591.9,335.2,446);


(lib.ballcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78797B").s().p("AghgEIA7AAIAIAAQAAAEgBAAQgSAFgOAAQgUAAgOgJg");
	this.shape.setTransform(42.1,2033.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.427)").s().p("ABHAFIiVAAIAAgJICVAAIAIAAIAAAJIgIAAg");
	this.shape_1.setTransform(54.2,2037.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(32,32,32,0.227)").s().p("AAVAhQgYghgWgiQAiARAQArQABAEAAAFQgDAAgCgCg");
	this.shape_2.setTransform(125,1878.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(77,78,79,0.443)").s().p("AAAAsQgDgsAAgsIAHAAIAABPIAAAKIgEgBg");
	this.shape_3.setTransform(76.8,1800.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(151,152,154,0.973)").s().p("AgOgJQAEAAACgDQACgCAAgFQAJAKAIARQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAQAAAFgCACQgDADgDAAQgKAAgLgdg");
	this.shape_4.setTransform(-52.4,1980.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(18,18,18,0.145)").s().p("AAkBuQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQgHgRgLgLQAAgFgBgEQgchVgXhfQAuBoAhBzg");
	this.shape_5.setTransform(-54.5,1970.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(9,9,9,0.078)").s().p("ABdDFQhzi1hWjcQBuDFBpDLQACAEAAAFQgLAAgFgIg");
	this.shape_6.setTransform(-71.7,1909.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(250,250,250,0.996)").s().p("AilhsQhJjlgkkfQBTAOAyBwQDHG1CkHmQAXBfAcBWQACAEAAAFQAAAFgCACQgCADgDAAQkekOiTnPg");
	this.shape_7.setTransform(-80.7,1917.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.439)").s().p("AgDBpIAAgKIAAjHIAHAAIAADHIAAAKIgHAAg");
	this.shape_8.setTransform(-116.1,1817.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(142,143,145,0.914)").s().p("AAAAnQgEgnAAgnQAMAWgFAvIAAAKIgDgBg");
	this.shape_9.setTransform(-89.6,1745.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(137,138,140,0.784)").s().p("AAAAsQgEgsAAgsQANAcgGAzIAAAKIgDgBg");
	this.shape_10.setTransform(-90.4,1734.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(138,139,141,0.953)").s().p("AAAAtQgEgtAAgsQANAbgGA0IAAAKIgDAAg");
	this.shape_11.setTransform(-91.2,1723.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(166,167,168,0.843)").s().p("AgsgEIBSAAIAHAAIAAAEQgtAFgsAAIAAgJg");
	this.shape_12.setTransform(-10.3,1630.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(143,144,146,0.937)").s().p("AgEBaIAAi9IAHAAIAAAKQAFBqgMBTIAAgKg");
	this.shape_13.setTransform(77.6,1780.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(139,141,143,0.969)").s().p("AgEBVIAAizIAHAAIAAAKQAFBmgMBNIAAgKg");
	this.shape_14.setTransform(78.4,1755.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(159,160,160,0.722)").s().p("AgEAyIAAhtIAHAAIAAAKQAFBDgMAqIAAgKg");
	this.shape_15.setTransform(79.1,1733.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(33,34,35,0.31)").s().p("AgKBGIAAgKIAAh3QAHgFAHgEQADgBAEAAIAAAKQgEAAgDACQgEADgDAFIAABtIAAAKIgHAAg");
	this.shape_16.setTransform(79.8,1720.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(70,70,70,0.408)").s().p("AgWAFQAQgOAVgEIAHgBQAAAFgBABQgVANgWAKIAAgKg");
	this.shape_17.setTransform(92.2,1707.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(26,26,26,0.247)").s().p("AghAPIAAgKQAegOAegNIAHgCQAAAFgCABQgiATgfAYIAAgKg");
	this.shape_18.setTransform(84.3,1712.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7C7E80").s().p("AgpgFQApAAApAFIAAAEIgHAAQgOACgMAAQgdAAgUgLg");
	this.shape_19.setTransform(63.2,1601.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.396)").s().p("AgdgFIA0AAIAHAAIAAAJIgHAAQgLACgIAAQgVAAgMgLg");
	this.shape_20.setTransform(65.1,1592.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(252,252,252,0.996)").s().p("AmWFyIg8AAIgHAAQhugThmgfQB3jUB1jWQACgDAEAAQGPiHGWh8IAHgBQCQB8CmBeQADACAEAAQkfFinMBvQikAnitAPIgIAAg");
	this.shape_21.setTransform(85.4,1995.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(134,135,137,0.78)").s().p("AgEBpIAAjbIAHAAIAAAKQAFB6gMBhIAAgKg");
	this.shape_22.setTransform(182.3,1832.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(16,16,16,0.157)").s().p("AgoCgQAqieAjipQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABAAIAAAKQgVC+g8CLIAAgKg");
	this.shape_23.setTransform(206.3,1875.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(3,3,3,0.224)").s().p("AgEBBIAAiLIAHAAIAAAKQAFBSgMA5IAAgKg");
	this.shape_24.setTransform(214,1823.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(37,37,37,0.149)").s().p("AgNARQAShHAHAbQAGAXgIASQgJAWgFAAQgGAAgDgTg");
	this.shape_25.setTransform(193.1,1828.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#606163").s().p("AgDAyIAAhtQAMAwgJBGQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAIAAgKg");
	this.shape_26.setTransform(214.6,1803.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(10,10,10,0.075)").s().p("AASBdIgoh1QATgZAGgsQAAAAABAAQAAgBABAAQAAAAABAAQABAAABAAQALBVAEBeIAAAKQgBAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_27.setTransform(210.5,1776.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(194,195,196,0.882)").s().p("AgDFjIAAgKIAAq7IAHAAIAAK7IAAAKIgHAAg");
	this.shape_28.setTransform(182.2,1785.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(252,252,252,0.992)").s().p("AgCNiQghh4gZh8QgeifgtiNQAOnwgGoLIAAgKQBFhOA8hZQACgDAEAAQA1DWAsDjIABAJQgBAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgHAsgTAZIApB2QAAABABAAQAAAAABABQAAAAABAAQABAAABAAQAOAuABBAIAAAKIAABuIAAAJIAAAyIAAAKIgIAAIAACMIAAAKIAAAKQAJCOgnBOIAAAoIAAAKQgBAAgBAAQgBAAAAABQAAAAgBAAQAAAAAAABQgkCrgrCdIAAAKQAAAPgDAOQgFARgEAAQgDAAgCgMgAhZDKQAHAnARgqQAIgTgGgXQgCgHgDAAQgHAAgOA0g");
	this.shape_29.setTransform(200.7,1809.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(193,194,195,0.882)").s().p("AgEH5IAAv7IAHAAIAAAKQAGIJgNHyIAAgKg");
	this.shape_30.setTransform(187.6,1790.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(253,253,253,0.996)").s().p("ADjdnQkgjwjKllQBbmvBPnBQAAAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAQEuhtE7haIAIgBQEoEKDiFpQABADAEAAQAXAiAZAhQACACADAAIAEAAQgkFmg7FMQAAAFgBABQmHCTmPCJQgDAAgDgCgAsBVtQhqjMhvjGQgphgg4hMQg1hJgIiHQA9mjBglyIABgKQDag8DygdIAHgBQC2FXDBFJQACACAAAGQhdG5hjG1QAAAAAAABQAAAAgBAAQAAAAgBAAQgBAAgBAAQhcAxhwAUQh0AWhuAeQAAgGgBgDgAwemRIAAgKQAGgwgNgWIAAgKIAAgVIAAgKQAFg0gNgcIAAgKIAAgKIABgKQAFg0gNgcIAAgKIAAhQQCHkNCgjtQBmiYCUhSQBdg0CCACQAtAAAtgFIAAgFQAjABAbAQQATALAHAxQAaDGAWDYQAAAEgBAEQjVF0jQF7QhhAWhiARQhnARhcAgQgmAOgcAAQhhAAADiXgAJqs3QlGiJlJiEIgBgKQgmj3gOkbQEEiHEDiBIAAAEQAcASAwgHIAHgBIAIABQEXAdDLCCIABAKQBOEYBAEtQgDAAgDACQj+CekDCVQgEABgEgCg");
	this.shape_31.setTransform(16.1,1790.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(254,254,254,0.996)").s().p("AACO+QkIlSkIlUIAAgKIAAhQIAAgKIAAgoQANhTgGhqIAAgKIAAgKIAAgyQANhNgFhnIAAgKIAAgKIAAgyQANgrgGhDIAAgKIAAgKIAAhuQAEgFAEgDQADgCAEAAQAfgYAjgUQACgBAAgFQAQAGADgPQAAAAAAAAQAAgBABAAQAAAAABAAQABAAABAAQAWgKAVgOQACgBAAgFQDGh6DBh+QADgCAEAAQDwEVDsEYQACADAEAAIAAB4IAAAKIgHAAIAAK7IAAAKIAADcIAAAKQgEAAgDACQj4CXkCCJQgDAAgCgCg");
	this.shape_32.setTransform(129.9,1776.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(1,1,1,0.992)").s().p("EABjAixIiWAAQj0gGi6hSQn7jek2nlQk2njg/ssIAAgKIAAjHIAAgKIAAiMQBYsLE9nZQE9nbILjBQCbg6CvgWIDDAAIAHAAQARARAkgGIAIgBQBIAEBAAPQHDBlEuEoQGFF+CfKqQBRFYgPHGQgZLdjyHIQiNEJi2DTQlnGipnBOIgHAAgAK+WmQmXB8mPCHQgDAAgCADQh1DXh3DUQBlAfBuATIAIAAQAYARArgMQABAAAAgFQCsgPCkgnQHNhvEeljQgDAAgDgCQimheiQh8IgHABgA3OOZQCTHQEeEOQAPAoANgNQACgCAAgFIAEAAQghh0guhoQiknnjIm1QgyhwhTgOQAjEfBKDlgACugXQk6BZkvBtQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQhOHBhbGuQDJFmEiDwQADACADAAQGNiJGIiUQABAAAAgFQA7lNAkllIgEAAQAAgFgCgEQgPgsgkgRQgEAAgBgCQjilpkokKIgIABgAtwoLQjxAcjaA9IgBAKQhgFzg9GiQAICGA1BJQA4BNApBgQBWDdB0C1QAFAIALAAQBugdB0gXQBwgUBcgwQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAAAQBjm1Bdm6QAAgFgCgDQjBlIi2lXIgIABgAVNEJIAAAKQAsCNAfCfQAYB7AiB5QAGAaAIggQAEgNAAgPQA9iLAVi/IAAgKIAAgKIAAgoQAnhOgIiOIAAgKQANg6gFhSIgBgKIAAgKIAAgxQABAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQAJhHgNgwIAAgKQgBhAgOguIAAgKQgEhfgLhVIgBgKQgrjig2jWQgEAAgCACQg9BahFBOIgHAAIAAP7gAD9hfIAEABQEIFTEJFSQACACAEAAQECiJD3iXQADgCAEAAQANhhgFh7IAAgKIAAgKIAAq7IAAgKIAAh4QgEAAgCgDQjskYjwkVQgEAAgDACQjDB+jGB6IgHABQgWAEgQAPIAAAKQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgCAPgRgGIgHACQgeANgeAPIAAAKQgEAAgDABQgIAEgIAFIAAB4IAAAKIAABuIAAAKIAAAyIAAAKIgHAAIAAC0IAAAKIAAAyIAAAKIgIAAIAAC+IAAAKIAAAoIAAAKIgIAAQAAAtAEAsgAt075QiVBThlCXQigDtiIEOIAABQIAAAKQAAAtAEAtIAEAAIAAAKIAAAKQAAAtAEAsIAEABIAAAUIAAAKQAAAoADAnIAEABQgFDEClg6QBcghBmgRQBjgRBhgVQDQl8DUl0QACgDAAgFQgWjXgajGQgHgygTgKQgcgRgiAAIgHAAIhTAAIAAAKIgMAAQh7AAhYAxgAm79SQAOEaAmD4IABAKQFKCEFFCIQADACAEAAQEEiWD9ieQADgCAEAAQhAkshOkYIgBgKQjLiDkXgcIgIgBIAAgFQgpgFgqAAIAAgFQkDCCkECHg");
	this.shape_33.setTransform(51.4,1814.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.5,1591.9,335.2,446);


(lib.ball3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78797B").s().p("AghgEIA7AAIAIAAQAAAEgBAAQgSAFgOAAQgUAAgOgJg");
	this.shape.setTransform(42.1,2033.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.427)").s().p("ABHAFIiVAAIAAgJICVAAIAIAAIAAAJIgIAAg");
	this.shape_1.setTransform(54.2,2037.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(32,32,32,0.227)").s().p("AAVAhQgYghgWgiQAiARAQArQABAEAAAFQgDAAgCgCg");
	this.shape_2.setTransform(125,1878.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(77,78,79,0.443)").s().p("AAAAsQgDgsAAgsIAHAAIAABPIAAAKIgEgBg");
	this.shape_3.setTransform(76.8,1800.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(151,152,154,0.973)").s().p("AgOgJQAEAAACgDQACgCAAgFQAJAKAIARQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAQAAAFgCACQgDADgDAAQgKAAgLgdg");
	this.shape_4.setTransform(-52.4,1980.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(18,18,18,0.145)").s().p("AAkBuQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQgHgRgLgLQAAgFgBgEQgchVgXhfQAuBoAhBzg");
	this.shape_5.setTransform(-54.5,1970.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(9,9,9,0.078)").s().p("ABdDFQhzi1hWjcQBuDFBpDLQACAEAAAFQgLAAgFgIg");
	this.shape_6.setTransform(-71.7,1909.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(250,250,250,0.996)").s().p("AilhsQhJjlgkkfQBTAOAyBwQDHG1CkHmQAXBfAcBWQACAEAAAFQAAAFgCACQgCADgDAAQkekOiTnPg");
	this.shape_7.setTransform(-80.7,1917.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.439)").s().p("AgDBpIAAgKIAAjHIAHAAIAADHIAAAKIgHAAg");
	this.shape_8.setTransform(-116.1,1817.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(142,143,145,0.914)").s().p("AAAAnQgEgnAAgnQAMAWgFAvIAAAKIgDgBg");
	this.shape_9.setTransform(-89.6,1745.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(137,138,140,0.784)").s().p("AAAAsQgEgsAAgsQANAcgGAzIAAAKIgDgBg");
	this.shape_10.setTransform(-90.4,1734.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(138,139,141,0.953)").s().p("AAAAtQgEgtAAgsQANAbgGA0IAAAKIgDAAg");
	this.shape_11.setTransform(-91.2,1723.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(166,167,168,0.843)").s().p("AgsgEIBSAAIAHAAIAAAEQgtAFgsAAIAAgJg");
	this.shape_12.setTransform(-10.3,1630.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(143,144,146,0.937)").s().p("AgEBaIAAi9IAHAAIAAAKQAFBqgMBTIAAgKg");
	this.shape_13.setTransform(77.6,1780.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(139,141,143,0.969)").s().p("AgEBVIAAizIAHAAIAAAKQAFBmgMBNIAAgKg");
	this.shape_14.setTransform(78.4,1755.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(159,160,160,0.722)").s().p("AgEAyIAAhtIAHAAIAAAKQAFBDgMAqIAAgKg");
	this.shape_15.setTransform(79.1,1733.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(33,34,35,0.31)").s().p("AgKBGIAAgKIAAh3QAHgFAHgEQADgBAEAAIAAAKQgEAAgDACQgEADgDAFIAABtIAAAKIgHAAg");
	this.shape_16.setTransform(79.8,1720.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(70,70,70,0.408)").s().p("AgWAFQAQgOAVgEIAHgBQAAAFgBABQgVANgWAKIAAgKg");
	this.shape_17.setTransform(92.2,1707.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(26,26,26,0.247)").s().p("AghAPIAAgKQAegOAegNIAHgCQAAAFgCABQgiATgfAYIAAgKg");
	this.shape_18.setTransform(84.3,1712.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7C7E80").s().p("AgpgFQApAAApAFIAAAEIgHAAQgOACgMAAQgdAAgUgLg");
	this.shape_19.setTransform(63.2,1601.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.396)").s().p("AgdgFIA0AAIAHAAIAAAJIgHAAQgLACgIAAQgVAAgMgLg");
	this.shape_20.setTransform(65.1,1592.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(252,252,252,0.996)").s().p("AmWFyIg8AAIgHAAQhugThmgfQB3jUB1jWQACgDAEAAQGPiHGWh8IAHgBQCQB8CmBeQADACAEAAQkfFinMBvQikAnitAPIgIAAg");
	this.shape_21.setTransform(85.4,1995.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(134,135,137,0.78)").s().p("AgEBpIAAjbIAHAAIAAAKQAFB6gMBhIAAgKg");
	this.shape_22.setTransform(182.3,1832.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(16,16,16,0.157)").s().p("AgoCgQAqieAjipQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABAAIAAAKQgVC+g8CLIAAgKg");
	this.shape_23.setTransform(206.3,1875.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(3,3,3,0.224)").s().p("AgEBBIAAiLIAHAAIAAAKQAFBSgMA5IAAgKg");
	this.shape_24.setTransform(214,1823.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(37,37,37,0.149)").s().p("AgNARQAShHAHAbQAGAXgIASQgJAWgFAAQgGAAgDgTg");
	this.shape_25.setTransform(193.1,1828.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#606163").s().p("AgDAyIAAhtQAMAwgJBGQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAIAAgKg");
	this.shape_26.setTransform(214.6,1803.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(10,10,10,0.075)").s().p("AASBdIgoh1QATgZAGgsQAAAAABAAQAAgBABAAQAAAAABAAQABAAABAAQALBVAEBeIAAAKQgBAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_27.setTransform(210.5,1776.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(194,195,196,0.882)").s().p("AgDFjIAAgKIAAq7IAHAAIAAK7IAAAKIgHAAg");
	this.shape_28.setTransform(182.2,1785.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(252,252,252,0.992)").s().p("AgCNiQghh4gZh8QgeifgtiNQAOnwgGoLIAAgKQBFhOA8hZQACgDAEAAQA1DWAsDjIABAJQgBAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgHAsgTAZIApB2QAAABABAAQAAAAABABQAAAAABAAQABAAABAAQAOAuABBAIAAAKIAABuIAAAJIAAAyIAAAKIgIAAIAACMIAAAKIAAAKQAJCOgnBOIAAAoIAAAKQgBAAgBAAQgBAAAAABQAAAAgBAAQAAAAAAABQgkCrgrCdIAAAKQAAAPgDAOQgFARgEAAQgDAAgCgMgAhZDKQAHAnARgqQAIgTgGgXQgCgHgDAAQgHAAgOA0g");
	this.shape_29.setTransform(200.7,1809.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(193,194,195,0.882)").s().p("AgEH5IAAv7IAHAAIAAAKQAGIJgNHyIAAgKg");
	this.shape_30.setTransform(187.6,1790.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(253,253,253,0.996)").s().p("ADjdnQkgjwjKllQBbmvBPnBQAAAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAQEuhtE7haIAIgBQEoEKDiFpQABADAEAAQAXAiAZAhQACACADAAIAEAAQgkFmg7FMQAAAFgBABQmHCTmPCJQgDAAgDgCgAsBVtQhqjMhvjGQgphgg4hMQg1hJgIiHQA9mjBglyIABgKQDag8DygdIAHgBQC2FXDBFJQACACAAAGQhdG5hjG1QAAAAAAABQAAAAgBAAQAAAAgBAAQgBAAgBAAQhcAxhwAUQh0AWhuAeQAAgGgBgDgAwemRIAAgKQAGgwgNgWIAAgKIAAgVIAAgKQAFg0gNgcIAAgKIAAgKIABgKQAFg0gNgcIAAgKIAAhQQCHkNCgjtQBmiYCUhSQBdg0CCACQAtAAAtgFIAAgFQAjABAbAQQATALAHAxQAaDGAWDYQAAAEgBAEQjVF0jQF7QhhAWhiARQhnARhcAgQgmAOgcAAQhhAAADiXgAJqs3QlGiJlJiEIgBgKQgmj3gOkbQEEiHEDiBIAAAEQAcASAwgHIAHgBIAIABQEXAdDLCCIABAKQBOEYBAEtQgDAAgDACQj+CekDCVQgEABgEgCg");
	this.shape_31.setTransform(16.1,1790.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(254,254,254,0.996)").s().p("AACO+QkIlSkIlUIAAgKIAAhQIAAgKIAAgoQANhTgGhqIAAgKIAAgKIAAgyQANhNgFhnIAAgKIAAgKIAAgyQANgrgGhDIAAgKIAAgKIAAhuQAEgFAEgDQADgCAEAAQAfgYAjgUQACgBAAgFQAQAGADgPQAAAAAAAAQAAgBABAAQAAAAABAAQABAAABAAQAWgKAVgOQACgBAAgFQDGh6DBh+QADgCAEAAQDwEVDsEYQACADAEAAIAAB4IAAAKIgHAAIAAK7IAAAKIAADcIAAAKQgEAAgDACQj4CXkCCJQgDAAgCgCg");
	this.shape_32.setTransform(129.9,1776.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(1,1,1,0.992)").s().p("EABjAixIiWAAQj0gGi6hSQn7jek2nlQk2njg/ssIAAgKIAAjHIAAgKIAAiMQBYsLE9nZQE9nbILjBQCbg6CvgWIDDAAIAHAAQARARAkgGIAIgBQBIAEBAAPQHDBlEuEoQGFF+CfKqQBRFYgPHGQgZLdjyHIQiNEJi2DTQlnGipnBOIgHAAgAK+WmQmXB8mPCHQgDAAgCADQh1DXh3DUQBlAfBuATIAIAAQAYARArgMQABAAAAgFQCsgPCkgnQHNhvEeljQgDAAgDgCQimheiQh8IgHABgA3OOZQCTHQEeEOQAPAoANgNQACgCAAgFIAEAAQghh0guhoQiknnjIm1QgyhwhTgOQAjEfBKDlgACugXQk6BZkvBtQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQhOHBhbGuQDJFmEiDwQADACADAAQGNiJGIiUQABAAAAgFQA7lNAkllIgEAAQAAgFgCgEQgPgsgkgRQgEAAgBgCQjilpkokKIgIABgAtwoLQjxAcjaA9IgBAKQhgFzg9GiQAICGA1BJQA4BNApBgQBWDdB0C1QAFAIALAAQBugdB0gXQBwgUBcgwQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAAAQBjm1Bdm6QAAgFgCgDQjBlIi2lXIgIABgAVNEJIAAAKQAsCNAfCfQAYB7AiB5QAGAaAIggQAEgNAAgPQA9iLAVi/IAAgKIAAgKIAAgoQAnhOgIiOIAAgKQANg6gFhSIgBgKIAAgKIAAgxQABAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQAJhHgNgwIAAgKQgBhAgOguIAAgKQgEhfgLhVIgBgKQgrjig2jWQgEAAgCACQg9BahFBOIgHAAIAAP7gAD9hfIAEABQEIFTEJFSQACACAEAAQECiJD3iXQADgCAEAAQANhhgFh7IAAgKIAAgKIAAq7IAAgKIAAh4QgEAAgCgDQjskYjwkVQgEAAgDACQjDB+jGB6IgHABQgWAEgQAPIAAAKQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgCAPgRgGIgHACQgeANgeAPIAAAKQgEAAgDABQgIAEgIAFIAAB4IAAAKIAABuIAAAKIAAAyIAAAKIgHAAIAAC0IAAAKIAAAyIAAAKIgIAAIAAC+IAAAKIAAAoIAAAKIgIAAQAAAtAEAsgAt075QiVBThlCXQigDtiIEOIAABQIAAAKQAAAtAEAtIAEAAIAAAKIAAAKQAAAtAEAsIAEABIAAAUIAAAKQAAAoADAnIAEABQgFDEClg6QBcghBmgRQBjgRBhgVQDQl8DUl0QACgDAAgFQgWjXgajGQgHgygTgKQgcgRgiAAIgHAAIhTAAIAAAKIgMAAQh7AAhYAxgAm79SQAOEaAmD4IABAKQFKCEFFCIQADACAEAAQEEiWD9ieQADgCAEAAQhAkshOkYIgBgKQjLiDkXgcIgIgBIAAgFQgpgFgqAAIAAgFQkDCCkECHg");
	this.shape_33.setTransform(51.4,1814.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.5,1591.9,335.2,446);


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78797B").s().p("AghgEIA7AAIAIAAQAAAEgBAAQgSAFgOAAQgUAAgOgJg");
	this.shape.setTransform(42.1,2033.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.427)").s().p("ABHAFIiVAAIAAgJICVAAIAIAAIAAAJIgIAAg");
	this.shape_1.setTransform(54.2,2037.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(32,32,32,0.227)").s().p("AAVAhQgYghgWgiQAiARAQArQABAEAAAFQgDAAgCgCg");
	this.shape_2.setTransform(125,1878.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(77,78,79,0.443)").s().p("AAAAsQgDgsAAgsIAHAAIAABPIAAAKIgEgBg");
	this.shape_3.setTransform(76.8,1800.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(151,152,154,0.973)").s().p("AgOgJQAEAAACgDQACgCAAgFQAJAKAIARQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAQAAAFgCACQgDADgDAAQgKAAgLgdg");
	this.shape_4.setTransform(-52.4,1980.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(18,18,18,0.145)").s().p("AAkBuQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQgHgRgLgLQAAgFgBgEQgchVgXhfQAuBoAhBzg");
	this.shape_5.setTransform(-54.5,1970.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(9,9,9,0.078)").s().p("ABdDFQhzi1hWjcQBuDFBpDLQACAEAAAFQgLAAgFgIg");
	this.shape_6.setTransform(-71.7,1909.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(250,250,250,0.996)").s().p("AilhsQhJjlgkkfQBTAOAyBwQDHG1CkHmQAXBfAcBWQACAEAAAFQAAAFgCACQgCADgDAAQkekOiTnPg");
	this.shape_7.setTransform(-80.7,1917.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.439)").s().p("AgDBpIAAgKIAAjHIAHAAIAADHIAAAKIgHAAg");
	this.shape_8.setTransform(-116.1,1817.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(142,143,145,0.914)").s().p("AAAAnQgEgnAAgnQAMAWgFAvIAAAKIgDgBg");
	this.shape_9.setTransform(-89.6,1745.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(137,138,140,0.784)").s().p("AAAAsQgEgsAAgsQANAcgGAzIAAAKIgDgBg");
	this.shape_10.setTransform(-90.4,1734.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(138,139,141,0.953)").s().p("AAAAtQgEgtAAgsQANAbgGA0IAAAKIgDAAg");
	this.shape_11.setTransform(-91.2,1723.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(166,167,168,0.843)").s().p("AgsgEIBSAAIAHAAIAAAEQgtAFgsAAIAAgJg");
	this.shape_12.setTransform(-10.3,1630.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(143,144,146,0.937)").s().p("AgEBaIAAi9IAHAAIAAAKQAFBqgMBTIAAgKg");
	this.shape_13.setTransform(77.6,1780.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(139,141,143,0.969)").s().p("AgEBVIAAizIAHAAIAAAKQAFBmgMBNIAAgKg");
	this.shape_14.setTransform(78.4,1755.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(159,160,160,0.722)").s().p("AgEAyIAAhtIAHAAIAAAKQAFBDgMAqIAAgKg");
	this.shape_15.setTransform(79.1,1733.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(33,34,35,0.31)").s().p("AgKBGIAAgKIAAh3QAHgFAHgEQADgBAEAAIAAAKQgEAAgDACQgEADgDAFIAABtIAAAKIgHAAg");
	this.shape_16.setTransform(79.8,1720.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(70,70,70,0.408)").s().p("AgWAFQAQgOAVgEIAHgBQAAAFgBABQgVANgWAKIAAgKg");
	this.shape_17.setTransform(92.2,1707.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(26,26,26,0.247)").s().p("AghAPIAAgKQAegOAegNIAHgCQAAAFgCABQgiATgfAYIAAgKg");
	this.shape_18.setTransform(84.3,1712.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7C7E80").s().p("AgpgFQApAAApAFIAAAEIgHAAQgOACgMAAQgdAAgUgLg");
	this.shape_19.setTransform(63.2,1601.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.396)").s().p("AgdgFIA0AAIAHAAIAAAJIgHAAQgLACgIAAQgVAAgMgLg");
	this.shape_20.setTransform(65.1,1592.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(252,252,252,0.996)").s().p("AmWFyIg8AAIgHAAQhugThmgfQB3jUB1jWQACgDAEAAQGPiHGWh8IAHgBQCQB8CmBeQADACAEAAQkfFinMBvQikAnitAPIgIAAg");
	this.shape_21.setTransform(85.4,1995.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(134,135,137,0.78)").s().p("AgEBpIAAjbIAHAAIAAAKQAFB6gMBhIAAgKg");
	this.shape_22.setTransform(182.3,1832.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(16,16,16,0.157)").s().p("AgoCgQAqieAjipQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABAAIAAAKQgVC+g8CLIAAgKg");
	this.shape_23.setTransform(206.3,1875.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(3,3,3,0.224)").s().p("AgEBBIAAiLIAHAAIAAAKQAFBSgMA5IAAgKg");
	this.shape_24.setTransform(214,1823.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(37,37,37,0.149)").s().p("AgNARQAShHAHAbQAGAXgIASQgJAWgFAAQgGAAgDgTg");
	this.shape_25.setTransform(193.1,1828.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#606163").s().p("AgDAyIAAhtQAMAwgJBGQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAIAAgKg");
	this.shape_26.setTransform(214.6,1803.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(10,10,10,0.075)").s().p("AASBdIgoh1QATgZAGgsQAAAAABAAQAAgBABAAQAAAAABAAQABAAABAAQALBVAEBeIAAAKQgBAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_27.setTransform(210.5,1776.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(194,195,196,0.882)").s().p("AgDFjIAAgKIAAq7IAHAAIAAK7IAAAKIgHAAg");
	this.shape_28.setTransform(182.2,1785.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(252,252,252,0.992)").s().p("AgCNiQghh4gZh8QgeifgtiNQAOnwgGoLIAAgKQBFhOA8hZQACgDAEAAQA1DWAsDjIABAJQgBAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgHAsgTAZIApB2QAAABABAAQAAAAABABQAAAAABAAQABAAABAAQAOAuABBAIAAAKIAABuIAAAJIAAAyIAAAKIgIAAIAACMIAAAKIAAAKQAJCOgnBOIAAAoIAAAKQgBAAgBAAQgBAAAAABQAAAAgBAAQAAAAAAABQgkCrgrCdIAAAKQAAAPgDAOQgFARgEAAQgDAAgCgMgAhZDKQAHAnARgqQAIgTgGgXQgCgHgDAAQgHAAgOA0g");
	this.shape_29.setTransform(200.7,1809.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(193,194,195,0.882)").s().p("AgEH5IAAv7IAHAAIAAAKQAGIJgNHyIAAgKg");
	this.shape_30.setTransform(187.6,1790.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(253,253,253,0.996)").s().p("ADjdnQkgjwjKllQBbmvBPnBQAAAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAQEuhtE7haIAIgBQEoEKDiFpQABADAEAAQAXAiAZAhQACACADAAIAEAAQgkFmg7FMQAAAFgBABQmHCTmPCJQgDAAgDgCgAsBVtQhqjMhvjGQgphgg4hMQg1hJgIiHQA9mjBglyIABgKQDag8DygdIAHgBQC2FXDBFJQACACAAAGQhdG5hjG1QAAAAAAABQAAAAgBAAQAAAAgBAAQgBAAgBAAQhcAxhwAUQh0AWhuAeQAAgGgBgDgAwemRIAAgKQAGgwgNgWIAAgKIAAgVIAAgKQAFg0gNgcIAAgKIAAgKIABgKQAFg0gNgcIAAgKIAAhQQCHkNCgjtQBmiYCUhSQBdg0CCACQAtAAAtgFIAAgFQAjABAbAQQATALAHAxQAaDGAWDYQAAAEgBAEQjVF0jQF7QhhAWhiARQhnARhcAgQgmAOgcAAQhhAAADiXgAJqs3QlGiJlJiEIgBgKQgmj3gOkbQEEiHEDiBIAAAEQAcASAwgHIAHgBIAIABQEXAdDLCCIABAKQBOEYBAEtQgDAAgDACQj+CekDCVQgEABgEgCg");
	this.shape_31.setTransform(16.1,1790.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(254,254,254,0.996)").s().p("AACO+QkIlSkIlUIAAgKIAAhQIAAgKIAAgoQANhTgGhqIAAgKIAAgKIAAgyQANhNgFhnIAAgKIAAgKIAAgyQANgrgGhDIAAgKIAAgKIAAhuQAEgFAEgDQADgCAEAAQAfgYAjgUQACgBAAgFQAQAGADgPQAAAAAAAAQAAgBABAAQAAAAABAAQABAAABAAQAWgKAVgOQACgBAAgFQDGh6DBh+QADgCAEAAQDwEVDsEYQACADAEAAIAAB4IAAAKIgHAAIAAK7IAAAKIAADcIAAAKQgEAAgDACQj4CXkCCJQgDAAgCgCg");
	this.shape_32.setTransform(129.9,1776.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(1,1,1,0.992)").s().p("EABjAixIiWAAQj0gGi6hSQn7jek2nlQk2njg/ssIAAgKIAAjHIAAgKIAAiMQBYsLE9nZQE9nbILjBQCbg6CvgWIDDAAIAHAAQARARAkgGIAIgBQBIAEBAAPQHDBlEuEoQGFF+CfKqQBRFYgPHGQgZLdjyHIQiNEJi2DTQlnGipnBOIgHAAgAK+WmQmXB8mPCHQgDAAgCADQh1DXh3DUQBlAfBuATIAIAAQAYARArgMQABAAAAgFQCsgPCkgnQHNhvEeljQgDAAgDgCQimheiQh8IgHABgA3OOZQCTHQEeEOQAPAoANgNQACgCAAgFIAEAAQghh0guhoQiknnjIm1QgyhwhTgOQAjEfBKDlgACugXQk6BZkvBtQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQhOHBhbGuQDJFmEiDwQADACADAAQGNiJGIiUQABAAAAgFQA7lNAkllIgEAAQAAgFgCgEQgPgsgkgRQgEAAgBgCQjilpkokKIgIABgAtwoLQjxAcjaA9IgBAKQhgFzg9GiQAICGA1BJQA4BNApBgQBWDdB0C1QAFAIALAAQBugdB0gXQBwgUBcgwQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAAAQBjm1Bdm6QAAgFgCgDQjBlIi2lXIgIABgAVNEJIAAAKQAsCNAfCfQAYB7AiB5QAGAaAIggQAEgNAAgPQA9iLAVi/IAAgKIAAgKIAAgoQAnhOgIiOIAAgKQANg6gFhSIgBgKIAAgKIAAgxQABAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQAJhHgNgwIAAgKQgBhAgOguIAAgKQgEhfgLhVIgBgKQgrjig2jWQgEAAgCACQg9BahFBOIgHAAIAAP7gAD9hfIAEABQEIFTEJFSQACACAEAAQECiJD3iXQADgCAEAAQANhhgFh7IAAgKIAAgKIAAq7IAAgKIAAh4QgEAAgCgDQjskYjwkVQgEAAgDACQjDB+jGB6IgHABQgWAEgQAPIAAAKQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgCAPgRgGIgHACQgeANgeAPIAAAKQgEAAgDABQgIAEgIAFIAAB4IAAAKIAABuIAAAKIAAAyIAAAKIgHAAIAAC0IAAAKIAAAyIAAAKIgIAAIAAC+IAAAKIAAAoIAAAKIgIAAQAAAtAEAsgAt075QiVBThlCXQigDtiIEOIAABQIAAAKQAAAtAEAtIAEAAIAAAKIAAAKQAAAtAEAsIAEABIAAAUIAAAKQAAAoADAnIAEABQgFDEClg6QBcghBmgRQBjgRBhgVQDQl8DUl0QACgDAAgFQgWjXgajGQgHgygTgKQgcgRgiAAIgHAAIhTAAIAAAKIgMAAQh7AAhYAxgAm79SQAOEaAmD4IABAKQFKCEFFCIQADACAEAAQEEiWD9ieQADgCAEAAQhAkshOkYIgBgKQjLiDkXgcIgIgBIAAgFQgpgFgqAAIAAgFQkDCCkECHg");
	this.shape_33.setTransform(51.4,1814.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.5,1591.9,335.2,446);


(lib.ThecoachtellsMeiraboutthegameonSaturday = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(55,18,1,1,0,0,0,55,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,27,103,31.1);


(lib.playerstanding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eye("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43.3,36,1.41,2.286,0,0,0,1.9,1.4);

	this.instance_1 = new lib.mouth("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.4,62.9,1.82,1,0,0,0,2.4,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(120,96,75,0.894)").s().p("AAGAtIgJAAQAAgFgCgEQgOgeAGgyQAPgBgBAVIAFAAIAJA7IABAKIgKAAg");
	this.shape.setTransform(30.8,305.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(1,0,1,0.031)").s().p("AjUg7QCdBvDogZQAUgCAUAFIAAAKQibAAiYASQgRACgOAAQhxAAAWh3g");
	this.shape_1.setTransform(21.7,332);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(15,14,15,0.475)").s().p("ABGAFIiVAAIAAgJICVAAIAKAAIAAAJIgKAAg");
	this.shape_2.setTransform(51.4,335.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(140,134,133,0.984)").s().p("AAEBVQACgrgQgRIAAgKIAAgKQAQgagGg1IAAgKQAQBEgHBbIAAAKg");
	this.shape_3.setTransform(48.5,305.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A29E9E").s().p("AgEBGIAAgKIAAiBIAJAAIAACBIAAAKIgJAAg");
	this.shape_4.setTransform(45.9,304);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(31,36,30,0.984)").s().p("AlhAsIAAgKIAAgnQA/gvBLglQACgBAAgFQBWABBAgTQAFgCAFAAIAKAAIAKAAQApAhBXgSQABAAAAgFIAKAAQAQACgFgWIgBgKQARASgCAqIAFAAQBTgFBhAPIAKAAIAKAAIAKAAIABAKQAPBEgQAzQAAAFgDACQgyAjg5AcIgKAAIiWAAQgUgFgUACQgpAFgnAAQi0AAiBhcg");
	this.shape_5.setTransform(35.8,321.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#757070").s().p("AgEDDIAAgKIAAl7IAJAAIAAF7IAAAKIgJAAg");
	this.shape_6.setTransform(68.9,295.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(35,33,33,0.6)").s().p("AgFDNIAAgKIAAl7IAAgKIAAgKQAQC7gHDUIAAAKIgJAAg");
	this.shape_7.setTransform(70,294.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(54,46,44,0.984)").s().p("AgKCCIAAgKIAAiBIAAgKIAAhuQAQADgCAbIAFAAIAABQIAAAKIAAAJQAHA0gQAcIAAAKIAAAKIAAAJQAEAVgMAAIgCAAg");
	this.shape_8.setTransform(47.5,298);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8F9FA").s().p("ABaDCQhfgOhUAFIABgKQAHhcgShEIAAgKIAAhPIAAgKIAAhuIAyAAIAKAAICBAAIAKAAIAAF7IAAAKIgKgBg");
	this.shape_9.setTransform(58.4,295.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ACA8A8").s().p("AA8AFIiBAAIAAgJQBFAABGAEIAAAFIgKAAg");
	this.shape_10.setTransform(61.4,275.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(82,72,68,0.996)").s().p("AhjBGQACgbgRgDIAAgKIAAhjIAKAAIAKAAIC9AAIAKAAIAKAAIAAAKIAAAKIgKAAIAAgFQhGgFhFAAIAAAKIgKAAIgyAAIAABtIAAAKg");
	this.shape_11.setTransform(57.9,281);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7D6154").s().p("AAAAoIgJAAIAAgKIAAg7IAAgKIAJAAIAKAAIAABFIAAAKIgKAAg");
	this.shape_12.setTransform(47.4,270);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(65,43,22,0.275)").s().p("AgEBGIAAgKIAAiBIAJAAIAACBIAAAKIgJAAg");
	this.shape_13.setTransform(68.9,267);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F4A455").s().p("ABaBGIi9AAIAAgKIAAhFQBlgXBZgjQAEgCAFAAIAACBIAAAKIgKAAg");
	this.shape_14.setTransform(58.4,267);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(88,69,55,0.796)").s().p("AALA8QABgVgPABQAAgFgCgEQgOgiAGg4IAKAAIAJAAQADA5AGA0IABAKg");
	this.shape_15.setTransform(29.8,297);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(106,89,76,0.945)").s().p("AAAAeIgKAAIAAgKIAAgnQAFAAACgDQADgCAAgFQAQANgGAkIgBAKIgJAAg");
	this.shape_16.setTransform(29.5,288);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F7F7F8").s().p("AgxDMIAAgKIgKg8IAAgKQgHg1gDg5IABgKQAGgkgRgNIABgKQAFhbgQhFIBZAAIAKAAQApACAdgKQAFgCAFAAIAAA8IAAAKIAABkIAAAKIAABtIAAAKIgKAAIAACCIAAAKQAAAFgBAAQgfAHgZAAQgtAAgbgWg");
	this.shape_17.setTransform(37.4,289.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(83,70,63,0.855)").s().p("AAEBVQgIhagLhZIAKAAIAJAAIAAAKQAQBFgFBaIgBAKQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_18.setTransform(27.9,276.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F48E6F").s().p("AAoAFIhZAAIAAgJQAxAAAyAEIAAAFIgKAAg");
	this.shape_19.setTransform(33.4,267.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(203,74,38,0.863)").s().p("AgFA3IAAh3IAJAAIAAAKQAHBHgQAwIAAgKg");
	this.shape_20.setTransform(27,258.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(148,26,22,0.631)").s().p("AgFA3IAAh3IAJAAIAAAKQAHBIgQAvIAAgKg");
	this.shape_21.setTransform(28,232.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(137,29,24,0.627)").s().p("AgFBBIAAiBIAAgKIAJAAIAAAUIAAAKIAAAKQAHBDgQAqIAAgKg");
	this.shape_22.setTransform(29,205.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(237,42,35,0.996)").s().p("AiDFPIAAgFQgygFgyAAIgKAAIgKAAIAAgKIAAgKQASgwgHhIIgBgKIAAgKIAAh4QASgvgHhIIgBgKIAAgKIAAh4QASgrgHhDIgBgKQBaAWBiAEQgEAygRA8IgDAKQAZAWAWAZQACACgBAFQAsAqBGgnQADgCAFABIA5hXIBFhqIANgCQgDAPgJAaIgIAaQgFAvgCAkQgSDJACBRQACBcghA6IgKAAQgFAAgEABQhZAkhlAXIgKAAIgKAAIAAAKQgFAAgEABQgZAJgjAAIgLAAg");
	this.shape_23.setTransform(51.5,234.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#392824").s().p("AjvCOIAAgKIAAgUIAAgKIAAkNIAKAAIAAEXIAAAKQBSAaBgAHIgBANQhigEhZgWgADiCPIAEAAIAFgBIAFAAQAAAFgBABIgGABIgMACIAFgIg");
	this.shape_24.setTransform(53.4,186.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(236,160,84,0.976)").s().p("AhnCqQAjg7AUgLIgPADQgnAGAJgnQAugmA2geQAEgCAFAAQAfiTAviEQACgFAAgFIAFABQAOCGgnBVIAAAyIAAAKIgKAAIAAENIAAAKIgKAAIAAAKQgFAAgFACQgaAIgVAAQhSAAgUh4g");
	this.shape_25.setTransform(22.8,171);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(241,163,85,0.992)").s().p("AjXHTQABgFgCgCQgWgZgZgWIADgKQARg8AEgzIABgMQABgTgCgRQAegcApgJQACgBABgFQAUAFATABIADgFQA1hNAdh2IADgJQAagbAIg5IACgKIACgJIAhh+QgFgCAAgBQgHgnAEgrIADgJQANg9gEgzIACgKIAKgnQBOgFBTAJIA2AHIgBAFQABDgg6EBIgDAKQgEgBgBABIiGDPIgRAbIgIANIgFAHIhFBrIg5BXQgFgBgDACQgiATgcAAQgeAAgXgWg");
	this.shape_26.setTransform(72.1,174.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(6,8,9,0.996)").s().p("AlaI9IAAgJIAAkYIAAgKIAAgzQAnhVgOiGIgFAAIAAgJIAAgKQAQkTCJiZQACgDAFABQgLBjAagiQBYhwBWhyIBkAAIAKAAQCjCTAyEHQAIApgfgBIAAgFIgrAGQhTgJhNAFIgLAnIgCAJQAEA0gNA7IgDAKQgEArAHAnQABABAFACIgiB+IgDAJIgCAJQgIA6gaAbIgCAJQgdB2g1BNIgDAGQgTgBgUgFQgBAFgCABQgpAJgdAcQABARgBATQhggIhSgagAB1JGIARgbQgFAUgGASIgGABIgEAAIgEAAIAIgMg");
	this.shape_27.setTransform(65.1,141.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(241,163,85,0.988)").s().p("AhKFXIAFAAQADh/AMhxQAAgFgCgDQgagcg0AuQgagYgGglQgUh0gmhcQAXgVAMglQAAgCAFAAIAAhuIAAgKQAFhzBxAxQACABAAAFQAmA/AUBOQACAEAAAFICBgTIAKgBQA6DPAfDoIABAKIgKAAIhkAAQhXByhXBwQgGAIgFAAQgMAAAIhKg");
	this.shape_28.setTransform(55.9,62.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(6,8,7,0.98)").s().p("AADC1QgThPgmg+QAAgFgCgBQhxgwgFByIAAgKIAAi9QASg+A8gXQACAAAAgFIAKAAIAKAAQAxAkA9AWQAEACAFAAQBIBTA4BhQACAEAAAFQgKA3gTAtQgBAFAAAFIgKABIiCATQAAgFgCgEg");
	this.shape_29.setTransform(54.9,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.8,338);


(lib.meirwalk4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eye("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(77,44.3,2,2.143,0,0,0,2,1.5);

	this.instance_1 = new lib.mouth("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(75.1,63.5,2.087,1.5,0,0,0,2.3,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(19,17,18,0.58)").s().p("AgxgFIBZAAIAKAAQAAAFgBAAQgaAGgVAAQgdAAgWgLg");
	this.shape.setTransform(108,345.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,80,62,0.914)").s().p("ABYCTQhniHhPigQBkCDBXCTQACADAAAGIAAAKQgFAAgCgCg");
	this.shape_1.setTransform(87.5,316.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(32,35,30,0.984)").s().p("Ah1C8IhaAAQgFAAgBgCQgdg+gZhAIAAgLQBSgOBChTQACgDAAgFIAAgLIAKAAQA+AcBMg6QAngfAsgcQBag5A6AyQAYBmhPBcQhuCCjMAbIgKAAg");
	this.shape_2.setTransform(123.8,325.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(67,62,63,0.925)").s().p("AgRAzQgCgDAAgFIAAgLIAAgVQAWgWAMgoQAAgBAFAAIgBAKQgGApgWAWIAAAWIAAAKQgFAAgDgCg");
	this.shape_3.setTransform(33,319);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(32,35,31,0.984)").s().p("ACvCrIgeAAIAAgGQk/gFhujfQAjg7AvgtQADgDAFAAQAAAFACADQADADAFAAQA5AjA1gNIAKgBQBOBiAthVQABgCAFAAIABAKQAFAXgQgBQAsBBBNAbQBcAfARA5QAABahkgKIAAAGIgKAAg");
	this.shape_4.setTransform(50.5,340.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(62,58,58,0.922)").s().p("AgxBlIAAgVQA0hWAphnQABgCAFAAQAAAFgBAFQgoB0g6BhIAAgLg");
	this.shape_5.setTransform(62,316.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(57,53,53,0.914)").s().p("AASAjQgWgegUgfIAAgKQAfAYAQAoQACAEAAAFQgFAAgCgCg");
	this.shape_6.setTransform(75.5,298.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(97,74,64,0.988)").s().p("AglAeQgGgMgBgUQAsgVAtgQIAAAFQgFAAgDADQgbAYgiAPQAFAFADAHQACAEAAAFQgFAAgEACQgGADgFAGQAAgGgDgEg");
	this.shape_7.setTransform(74.5,290.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6F7F8").s().p("AhACsIgKABQg2ANg4gjIAAgLIAAgVQAXgXAGgpIABgLQA/h2AtiJQACgFAAgGQAzgJBPAcIAhANQAXAJAQAOQAyAsgrBTQgFAAgBACQgpBmg1BXIAAAVIAAALQgFAAgBACQgVAogcAAQggAAgqg1g");
	this.shape_8.setTransform(50.5,309.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(63,59,59,0.922)").s().p("Ag2B7IAAgWQA5hsAvh8QAAgCAFAAQAAAGgCAFQgsCIg/B3IAAgKg");
	this.shape_9.setTransform(40.5,300.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(77,67,62,0.953)").s().p("ABEgOIAmARQAEADAFAAQAFgGAGgCQAEgDAFAAIAAALIAAAKQgFAAgBACQgZAygdAsQArhTgygrgAiGhFIAAgKIAAgVQAFgFAGgEQAEgCAFAAQA2AgA5AdQhPgbg0AIg");
	this.shape_10.setTransform(59.5,293.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#943529").s().p("AgxgFIBZAAIAKAAQAAAFgBAAQgaAGgVAAQgdAAgWgLg");
	this.shape_11.setTransform(74,218.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#813329").s().p("Ag2gGQA2AAA2AGIABAEIgKAAQgSADgQAAQgmAAgbgNg");
	this.shape_12.setTransform(56.5,217.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(107,82,64,0.906)").s().p("ABPC9QhQixhdigIAAgLIAAggQBiCxBZC5QACAFAAAFIgKAAIAAALQgFAAgBgDg");
	this.shape_13.setTransform(103.5,300.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F6F7F7").s().p("AAwDYQhWiUhliCQAAgGgCgEQgQgogggZIAAgLQAAgFgCgEQgDgHgFgFQAjgQAbgYQADgDAFAAQA9gPBOAFIAKAAQBdChBRCxQABACAFAAQAAAFgCAEQhCBThSAPQAAgGgCgDg");
	this.shape_14.setTransform(92,308.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(145,25,22,0.62)").s().p("AAAA6QgFg6AAg6QAQAogHBCIAAALIgEgBg");
	this.shape_15.setTransform(93.6,264);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(90,15,13,0.384)").s().p("AAAA1QgFg1AAg1QAQAkgHA8IAAALIgEgBg");
	this.shape_16.setTransform(92.6,235.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(236,47,38,0.996)").s().p("AAzGOIgmgSQgOgOgYgJIghgNQg5gdg2ggQAMgcgOgDQgmgHgFgUQguiggdilQAAgGABAAQA4gOAXgsQAAgGgCgFQgZhUAlghQAAgGgCgEQgcg8g8gaQBLAABBAKIAKAAQAlATA/gIIAKAAIA7AAIAKAAQAlATA+gOQABAAAAgFQA1gTA5gMIAKgBQAAAwAFAvIAFABIAAA1IAAALQAAA1AFA1IAFABIAACfIAAAKQAAA7AFA6IAFABIAABqIAAALIAAAgIAAALIgKAAQhPgFg9APIAAgFQgtAQgtAVQABAVAGANQADAEAAAFQgFAAgEgCg");
	this.shape_17.setTransform(65,254.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(139,38,27,0.627)").s().p("AgJA6QgFgvAAgwIAAgKIAAgKQAOAAAOAEQABAAAAAGIgKAAIgJAAIAABfIAAALIgFgBg");
	this.shape_18.setTransform(92.5,218.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#594536").s().p("AAAA1QgFg1AAg0QAQAigHA9IAAAKIgEAAg");
	this.shape_19.setTransform(90.6,192);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(238,161,84,0.976)").s().p("AgtEoIgJgBQAAgFgBgBQgOgEgPAAIAAgLIAAiLIABgKQAGg+gRgiIAAgLQgFhqgZhVIAAgLIAAh1IAKAAQAtCKArCMIACAKQBfAdAnBXIgFAAQhZgHBUA5QAFAEACAKQADAWAPAKQgtBnhTAAQgUAAgWgGg");
	this.shape_20.setTransform(99.5,183.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(118,87,63,0.976)").s().p("AgEBKQgFhKAAhKIAJAAQAFAGADAGQACAEAAAGIgKAAIAAB0IAAALIgEgBg");
	this.shape_21.setTransform(87,158.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(16,14,15,0.494)").s().p("AAAA6QgFg6AAg6QAQAogHBCIAAALIgEgBg");
	this.shape_22.setTransform(86.6,144.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(132,90,46,0.549)").s().p("AgFArIAAhfIAJAAIAAAKQAHA8gQAkIAAgLg");
	this.shape_23.setTransform(1.6,171.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(242,164,86,0.992)").s().p("AA3IlQhmhHgkiPIgMg5QgljChch4IAAgLIAAgVQARgOgGgoIgBgKQARgjgGg+IgBgKIAAgLIAAggQAph/AciMIABgKQBAAHBCADIAJAAQAsAcA4AOIAKABQgHCfgvB0QgBACgFAAQgBD6A7DgQACAGAUAAQA8AaAcA8QACAEAAAGQglAhAZBUQACAFAAAGQgXAsg4AOQgBAAAAAGQgFAAgCACQgOATgWAAQgQAAgVgLg");
	this.shape_24.setTransform(22.5,190.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(129,87,45,0.537)").s().p("AAAA1QgEg1AAg1IAJAAIAABgIAAALIgFgBg");
	this.shape_25.setTransform(65.5,81.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(183,124,65,0.757)").s().p("AAABKQgEhKAAhKIAJAAIAACKIAAALIgFgBg");
	this.shape_26.setTransform(36.5,78.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(7,8,9,0.992)").s().p("AEpKLIhaAAIgKAAIg8AAIgBgFQg2gGg3AAIgKAAQhAgKhLAAQgUAAgCgGQg8jgACj7QAFAAABgCQAvh0AHieIgKgBQg4gOgsgcIgKAAQhDgDg/gHQgFAAgEgCQgjgVAOhJQBajwDCh/QALgHAPAAQCBAGA3BbQAhA3AkA3QA+BfgGiDQCLBxAoDaIABAKQAAA7AFA6IAFABIAAAKIgKAAQAABKAFBKIAFABQAZBVAFBrIAAALQAAA1AFA1IAFAAIAACLIAAALIAAAKIAAALIgKABQg6AMg0ATIgKAAg");
	this.shape_27.setTransform(48.3,152.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(242,164,86,0.996)").s().p("AAJGZQgjg3ghg3Qg3hbiCgGIAAgKIAAgLIAAiLIB4gUIAKgBQAliKgWiVIAFAAQA4BEAzgeQACgBAAgFQAAhQAahZQAJgdAjgFQA3gkAxBMQABADAFAAIAAALQABCZAxBnQgFAAgCACQg1BOAACEQgFAAgCADQg6A9hLhLIAAALIgKAAQAAA1AFA1IAFABQAABfATBMIABAKQADBMgTAAQgOAAgagog");
	this.shape_28.setTransform(61.5,67.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(125,80,48,0.992)").s().p("AjrFlIAAgKQgEjlgQjwQBIiIB3hVQAEgDAFAAQBqgCBngIIAKAAQAsAYArAhQADABAAAGQAMA9gyAwQgCADAAAFIAABVIAAALQgFAAgCgDQgwhMg3AkQgkAFgIAdQgbBYABBQQAAAFgCABQgzAeg4hEIgFAAQAWCVglCLIgKABIh4AUIgKAAg");
	this.shape_29.setTransform(59.6,35.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150.6,357.4);


(lib.meirwalk3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mouth("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(84.4,61.2,1.417,1,0,0,0,2.4,-0.1);

	this.instance_1 = new lib.eye("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(86,40.9,1.615,1.714,0,0,0,1.8,1.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#757070").s().p("AAABKQgEhKAAhKIAJAAIAACLIAAAKIgFgBg");
	this.shape.setTransform(80.5,303.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(76,67,62,0.906)").s().p("Ag1BxQgGgDgFgFQBEhgAxhyQACgEAAgFIAKAAQAAAFgBAFQgtB2g/BlQgFAAgEgCg");
	this.shape_1.setTransform(50.5,283.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(71,65,64,0.929)").s().p("AgTAoIAAgKQAXgZALgrQAAgBAFAAIAAAKIgBAKQgIAjgUAYIgKAAg");
	this.shape_2.setTransform(58,268);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(33,35,31,0.976)").s().p("AAZFEIgKgBQg8gIhFgBQAAgFgBgBQh6gfg5hdQAbgrASg4QAAgBAFAAIAAmPIAAgKQAFAAACACQADADAAAFIAADwIAAAKQAABKAFBKIAFABQBwAMB1AHIAKABIAAiVIAAgKIAKAAIAACVIAAAKQCXAdB1BBQACABAAAFQggBsiJAMQgUACgXAAQgbAAgfgCg");
	this.shape_3.setTransform(103.5,302.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(147,25,22,0.624)").s().p("AAAAxQgFgxAAgxQAQAhgHA4IAAAKIgEgBg");
	this.shape_4.setTransform(73.6,255);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(32,35,30,0.984)").s().p("AgTDBQAAgFgBAAQhqgYg1hHIAAgKIAAipQAkgtAShAQABgBAFAAIAAAKIABAKQAGAbgRADQBAA1BRhCQAJgHAPAAQAFAFAGADQAEACAFAAQAAAFADACQAdAfASAqQgWAoAaAkQA8BYAGBfQAAAFgBAAQg0AJg8AAQgqAAgsgEg");
	this.shape_5.setTransform(40,310.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7F7F8").s().p("AiqC9QARgDgGgbIgBgKQA6iFAficIABgKQAohLCEARQBgAMgnBCQgFAAAAABQgLArgYAaIAAAKQAAAFgCAEQgxByhEBgQgPAAgJAHQgtAkgoAAQggAAgdgXg");
	this.shape_6.setTransform(44.1,277.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(76,70,68,0.937)").s().p("AgsCMIAAgKIAAgUQAvh5AliIQAAgCAFAAIgBAKQgfCdg5CEIAAgKg");
	this.shape_7.setTransform(32.5,277);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(154,104,54,0.635)").s().p("AAAAtQAFg8gPgnQAKAAAHAEQACABAAAFIAAAKQAHA4gQAhIAAgKg");
	this.shape_8.setTransform(33.1,224.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(34,31,32,0.796)").s().p("AgFBaIAAiBIAAgKIAAgyIAJAAIAAAKQAHBrgQBSIAAgKg");
	this.shape_9.setTransform(106.6,287);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8F8B8B").s().p("AgEBGIAAgKIAAiBIAJAAIAACBIAAAKIgJAAg");
	this.shape_10.setTransform(105.5,290);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AEAAAA").s().p("AgEB9IAAgKIAAjvIAJAAIAADvIAAAKIgJAAg");
	this.shape_11.setTransform(80.5,283.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ABA7A7").s().p("Ag2gCIAAgCIARAAIBSAAIAKAAIAAAEQg3AFg2AAIAAgHg");
	this.shape_12.setTransform(94.5,270.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8F9FA").s().p("ABnDYQh0gHhxgMIAAgKIAAiMIAAgKIAAjvIBGAAIAKAAQA2AAA3gFIAAgFQBNgRgQBNIgBAKIAAAyIAAAKIgKAAIAACBIAAAKIAAAKIAACWIgKgBg");
	this.shape_13.setTransform(93.7,291.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(108,86,70,0.89)").s().p("AgOA3IhGAAIgKAAQAAgFgDgCQgCgDgFAAIAAgKIAAhZIAKAAQgRBtBrgIIAAAIIgKAAgABfAtIhTAAIAPgDQAmgHAoAAIAAAKIgKAAg");
	this.shape_14.setTransform(89.5,265.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(47,43,44,0.957)").s().p("AAWAoIABgKQAQhMhMARIAAgKIAxAAIAKAAQAXAGgMA/IgBAKIgKAAg");
	this.shape_15.setTransform(103.8,273);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F4A556").s().p("AiAgqQCFgfB6AeQAEABAAAUIAAA7IAAAKIgKAAIgyAAQgoAAglAHIgPADIgRAAIAAACIgOAAQhcAAAQhlg");
	this.shape_16.setTransform(92.9,264.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(234,42,36,0.992)").s().p("AiBE7QAnhChggMQiFgRgoBLIAAgKQAAg0gKhYIAym3IAAgKQE1AqENg5QABAAAAgFIBtIRIABAKQgfAYgEA4IgFAAQAAgUgEgBQh6geiGAfIgKAAQgFAAgBgCQgqhPgMhtIAABQIAAAKQAAAyAFAxIAFABIAAAFQhsgbgfBIIAAgKg");
	this.shape_17.setTransform(73,232.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(240,162,85,0.98)").s().p("ABEDWIkBh8IgBgKQgRhlgWhiIAAgKIAAhaQB3BMBnBbQADADAEAAQB0gbAuAiQADADAFAAQhsBDBsggIAAAEQAvANAMAwIABAJIgBAKQgJA2gUAuQAAAFgBABQg/AUhCAOQAAgFgCgBg");
	this.shape_18.setTransform(118,168);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(110,82,61,0.98)").s().p("AAAA3QgEg3AAg2IAJAAIAAAKIAABZIAAAKIgFAAg");
	this.shape_19.setTransform(94.5,150.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(17,15,16,0.506)").s().p("AgFBGIAAgKIAAiBQAQA0gHBNIAAAKIgJAAg");
	this.shape_20.setTransform(94.6,138);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(85,57,30,0.357)").s().p("AgFAyIAAhtIAJAAIAAAKQAHBDgQAqIAAgKg");
	this.shape_21.setTransform(27.6,189);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(144,97,50,0.592)").s().p("AgEAyIAAgKIAAhZIAJAAIAABZIAAAKIgJAAg");
	this.shape_22.setTransform(27.5,178);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(242,164,86,0.988)").s().p("AgNIjQgvglgtgoQgMgdgHgoQgShfgChqQgDijg6hgIAAgKIAAgeQBKjiBUjWQACgFAAgFICLAKIAKAAQByANgOBhIAAAKQAAAFgCAEQg6CnhGCaIAAAKIgKAAIAABZIAAAKIAABuIAAAKQALCVBKBUQAYAagngJQAAgFgCgBQgIgEgKAAQAQAngGA9IAAAKQAAAFgCABIh/A2QgFAAgDgDg");
	this.shape_23.setTransform(20.6,181);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(6,8,9,0.996)").s().p("AiZJPQgFAAAAgBQgnjSgGjvQAxhGAGhtIgFAAIAAgKQAOhghygOIgKAAIiMgKQgFAAgCgCQgVgeAIg6QBajgDCh3QALgHAPAAQCBAFA3BWQAhAzAkA0QA+BZgGh7QCPBrAkDVIABAKIAACBIAAAKQAAA3AFA3IAFAAQAWBiARBmIABAKIAADcIAAAKQAAAFgBAAQibAhipAAQh7AAiDgSg");
	this.shape_24.setTransform(56.4,142.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(183,124,65,0.757)").s().p("AAABFQgEhFAAhFIAJAAIAACBIAAAKIgFgBg");
	this.shape_25.setTransform(44.5,74);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(129,87,45,0.537)").s().p("AAAAxQgEgxAAgxIAJAAIAABZIAAAKIgFgBg");
	this.shape_26.setTransform(73.5,76);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(242,164,86,0.996)").s().p("AAJGAQgjg0ghg0Qg3hViCgFIAAgKIAAgKIAAiCIB4gTIAKgBQAmiCgXiLIAFAAQA4BAAzgcQACgBAAgFQAAhLAahTQAIgcAkgEQA3giAxBHQABADAFAAIAAAKQACCPAwBhQgFAAgCACQg1BJAAB8QgFAAgDACQg4A6hMhGIAAAKIgKAAQAAAyAFAxIAFABQAABZATBHIABAKQADBHgTAAQgOAAgaglg");
	this.shape_27.setTransform(69.5,63);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(125,80,48,0.992)").s().p("AjvFPIAAgKQgDjWgRjhQBJh/B2hQQAEgDAFAAQBrgDBmgGIAKgBIBOArQAWAMAAAjQgVAngaAhQgDADAAAFIAABQIAAAKQgFAAgBgDQgxhHg3AiQgkAFgIAbQgaBSAABLQAAAFgCABQgzAcg4hAIgFAAQAXCMgmCCIgKABIh4ATIgKAAg");
	this.shape_28.setTransform(68,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,335.3);


(lib.meirwalk2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eye("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(42.1,23.9,1,1,0,0,0,2,1.4);

	this.instance_1 = new lib.mouth("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(41.4,36.5,0.856,1,0,0,0,2.3,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8F8B8B").s().p("AgBAqIAAgGIAAhNIADAAIAABNIAAAGIgDAAg");
	this.shape.setTransform(52.3,175.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(34,31,32,0.796)").s().p("AgCA3IAAhOIAAgGIAAgfIADAAIABAHQADA/gHAyIAAgFg");
	this.shape_1.setTransform(52.8,173.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(50,45,46,0.988)").s().p("AAMAYIAAgFQALgrgoAHIAAgGIAYAAIAFAAQAIAPgDAaIgBAGIgEAAg");
	this.shape_2.setTransform(51.3,165);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ABA7A7").s().p("AgagBIAAgBIAGAAIAqAAIAFAAIAAACQgbADgaAAIAAgEg");
	this.shape_3.setTransform(46.9,163.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#757070").s().p("AAAAtQgCgtABgsIADAAIAABTIAAAGg");
	this.shape_4.setTransform(40.1,183.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8F9FA").s().p("AAtCCQg2gFg0gHIAAgGIAAhUIAAgGIAAiQIAiAAIAEAAQAaAAAbgDIAAgDQAogIgKAsIgBAGIAAAeIAAAGIgFAAIAABOIAAAGQAEA2gJArIgEgBg");
	this.shape_5.setTransform(46.6,176.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(32,34,30,0.984)").s().p("Ag+BXIgFgHQgNgRgLgTIAAgGIAAhsQANgoAIAJQAAABAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAAAGQAoAKAhgbQALgJAHAIIAFAGIAGAFIAEABIABAGQALAogCAnIAEAGQAdAzAKBFQgKAFgOAAIgRABQhHAAgqgeg");
	this.shape_6.setTransform(9.2,195);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(76,66,61,0.925)").s().p("AgZA2IgGgGQAkgrAYg6QAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAAAGIAAAGIAAAFQgaAugaAsIgEAAg");
	this.shape_7.setTransform(15.3,179.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(66,61,61,0.925)").s().p("AgjBYIAAgGIAAgGQAlhQAghYQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAABAAIAAAGIgBAGQgiBZglBWIAAgGg");
	this.shape_8.setTransform(6.1,176.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AEAAAA").s().p("AgBBMIAAgHIAAiPIADAAIAACPIAAAHIgDAAg");
	this.shape_9.setTransform(40.1,171.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(33,35,31,0.98)").s().p("AiOBwQAmh8gOixIAAgGIADABQACACAAADIAACRIAAAGQAAAsACAtIADAAQA0AHA3AFIADABQAJgrgEg1IAFAAIAABgIAAAGQBbAFAkA6QAEAGAAAJQgfAkg9AJQgWADgVAAQhrAAgrhUg");
	this.shape_10.setTransform(51.3,182.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(61,54,52,0.894)").s().p("AgQAeIAAgGIAAgGQAQgYAOgdIADAAIgBAFQgPAigRAgIAAgGg");
	this.shape_11.setTransform(20.2,171.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F6F6F7").s().p("AhlCNQAnhWAhhZIABgGQAbguASg4IADAAQA/AcARAvQAEAOgIAKQgDADAAAHIgDAAQgOAdgRAYIAAAGQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQgXA6gkAsIgFgGQgHgJgMAKQgZATgcAAQgKAAgLgCg");
	this.shape_12.setTransform(12.6,171.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(70,63,60,0.945)").s().p("AAzAyQAJgKgFgOQgQgtg/gdIgCABQgTA3gbAuIAAgGIAAgGIAAgGQAZgsAVgzIACAAQAwAeAtAhQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIAAAGQABAagaAWQAAgGADgEg");
	this.shape_13.setTransform(17,162);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(240,161,84,0.988)").s().p("AAhA1QgsgjgxgdIAAgGIAAgGQAJgLAFgOIABgFQA4AUAxAeIABADIgBAFQgJAYgOAUIAAAGQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_14.setTransform(20.6,157.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(108,86,70,0.89)").s().p("AgGAhIgiAAIgFAAQAAgDgCgCIgDgBIAAgGIAAg1IAFAAQgKA7A1ABIAAAFIgEAAgAAvAbIgsAAQALAAANgDQAMgDAMAAIAAAGIgEAAg");
	this.shape_15.setTransform(44.5,160.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F4A254").s().p("Ag+gXIAAgGQBHgMA1AJQACAAAAAJIAAAMIAAAkIAAAGIgFAAIgZAAQgMAAgLACQgNADgLABIgFAAIAAAAQg1AAAJg8g");
	this.shape_16.setTransform(46.1,159.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(235,42,35,0.992)").s().p("AC3C4IAAgMQAAgJgCAAQg1gJhIAMIAAAGIgFAAQgEAAgBgBQgWhQgMhYQgOA4gJA2QgNBOgygTIgBgEQgxgdg5gVQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQgRgGADgaQAPgrAJgvIABgGQA0AUAigtQABgCAAgDQgCgzAMgoQgRgagbgQQCPAYB3geIAFAAQAXCYAXCbIACAAQgIAbgEAhg");
	this.shape_17.setTransform(34.2,139.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(129,94,66,0.992)").s().p("AAAAeQgCgeAAgdQAHAVgDAgIAAAGg");
	this.shape_18.setTransform(48.9,106.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(136,92,48,0.561)").s().p("AgcgCIA0AAIAFAAIAAACQgPADgMAAQgRAAgNgFg");
	this.shape_19.setTransform(59.3,118.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(113,84,62,0.988)").s().p("AAAA6QgCg6AAg5IAFAAIAAAHIAAAFIAABgIAAAHg");
	this.shape_20.setTransform(46.9,88.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(240,163,85,0.98)").s().p("AAzCpIg0AAIgEgBQgcgtgpggIAAgGIAAgGQADgigIgVIgBgGQgFgqgJgpIAAgGIAAhhQAyBRAsBXQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAtAHAZAaQADADAAAGQguAIARAEQAnAIAKAjIAAAGIAAAGQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABQgPAhgVAaIgFAAg");
	this.shape_21.setTransform(56.6,100.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(132,90,46,0.549)").s().p("AgCAYIAAg1IADAAIABAGQADAggHAVIAAgGg");
	this.shape_22.setTransform(5.7,97.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(243,164,86,0.992)").s().p("AAME0QgFgGgGgEIgDgEQg2iFgcibQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQgQgNgEgbQAIgJgDgVIAAgGQAIgVgDghIgBgGIAAgGIAAgTQAUhIAOhPIAAgGQAfAEAhACIAEAAQAVAQAbAJQgFBqgJB2QgHBNABBaQAAApAjgEQAaAQARAaQgLAoACAzQAAADgCACQgXAgggAAQgOAAgRgHg");
	this.shape_23.setTransform(15.8,107.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(7,8,9,0.992)").s().p("Ag7FlQgjAFAAgpQAAhbAGhOQAJh1AGhqQgcgJgVgPIgFAAQgggCgfgEIgEgBQgSgPAHgnQAqiEBhhMQAFgDAHAAQA8AAAUAsIASAiQAaAtAaAKIAAgGIAAgeQBRBQALCVIAAAGIgFAAQAAA5ADA5IACAAQAJApAFAsIABAGQAAAeACAeIADAAIAAAGIAABtIAAAGIgFABQhBAQhJAAQg8AAhAgLg");
	this.shape_24.setTransform(28.3,86.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(129,87,45,0.537)").s().p("AAAAeQgBgeAAgdIAEAAIAAA1IAAAGg");
	this.shape_25.setTransform(36.7,45.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(183,124,65,0.757)").s().p("AAAAqQgCgqAAgpIAFAAIAABNIAAAGg");
	this.shape_26.setTransform(22.6,44.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(242,164,86,0.996)").s().p("AgUDEIgRghQgVgtg8AAIAAgGIAAgGIAAhOQBJAEgCg/QgCg5AEg6IAFAGQAgAsAPgmQgHglAHgbQAGgYANgKIANgKQACgBAAgGQAhgGAUAkQAABYAZA/QggArADBNQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAQgbAjglgqIAAAGIgFAAQAAAeADAeIACAAQAAA1AJAsIAAAGIAAAeIAAAGQgZgKgagtg");
	this.shape_27.setTransform(34.8,37.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(125,80,48,0.992)").s().p("AhvDKIgFAAIAAgGQgBiCgIiHQAIgLABgTIAAgGQArgsApgtQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAwAAArgFIAPgBIAlAbQALAIAAAUQgKAXgOATIAAA8QgVgjggAFQAAAGgDACIgNAJQgMAKgHAZQgHAZAHAlQgOAnghgtIgFgFQgEA6ACA4QACA9hAAAIgJgBg");
	this.shape_28.setTransform(34,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.1,206.7);


(lib.meirwalk1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mouth("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(91,58.9,1.143,1.8,0,0,0,2.3,0.5);

	this.instance_1 = new lib.eye("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(91.7,41.7,1.6,2.9,0,0,0,1.8,1.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(47,43,43,0.867)").s().p("AAJAwQgQgtgHg0QAXAkAGA1IAAAKQgFAAgBgCg");
	this.shape.setTransform(98.5,301);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(47,43,44,0.871)").s().p("AAJAwQgQgtgHg0QAYAkAFA1IAAAKQgFAAgBgCg");
	this.shape_1.setTransform(101.5,311);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(1,1,1,0.051)").s().p("ADDBkImPAAIAAgKIAAi9QAYAkAPAsQABAFAAAFQBSAqBGA3QADACAFAAQBoAABpAFIAAAFIgKAAg");
	this.shape_2.setTransform(20.5,339);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,47,48,0.871)").s().p("AgiAtIAAgKQAhgpAeguQABgCAFAAQAAAFgCAEQgbA4goAsIAAgKg");
	this.shape_3.setTransform(13.5,304.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(33,35,31,0.984)").s().p("ADIDDIAAgFQhpgFhoAAQgFAAgDgCQhGg3hSgrQAAgFgBgEQgPgtgYgjIAAgKQAxhVAthdQABgCAFAAQAAAFgCAEQgDAGgFAFQAzBOA4hIQAmgyAsAsQANANAbgDQAPBCgFBAIAAAKQBBBUAYB9IABAKIgKAAg");
	this.shape_4.setTransform(21,329.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(65,61,62,0.922)").s().p("AgnAoIAAgKQAngiAhgrQACgCAFAAQAAAFgCADQggA0gtAnIAAgKg");
	this.shape_5.setTransform(36,308);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(61,57,58,0.914)").s().p("AgnAoIAAgKQAngjAhgqQACgCAFAAQAAAFgCAEQggAzgtAnIAAgKg");
	this.shape_6.setTransform(44,298);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(60,56,57,0.898)").s().p("AgnAoIAAgKQAngiAhgrQACgCAFAAQAAAFgCAEQggAzgtAnIAAgKg");
	this.shape_7.setTransform(52,288);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(58,54,54,0.914)").s().p("AgYAeIAAgKQAYgYATghQABgCAFAAQAAAFgBAFQgRApgfAcIAAgKg");
	this.shape_8.setTransform(19.5,295);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(53,49,49,0.875)").s().p("AgiAtIAAgKQAhgpAegtQABgDAFAAQAAAFgCAEQgbA4goAsIAAgKg");
	this.shape_9.setTransform(25.5,285.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6F7F7").s().p("AjqC+QAFgFADgGQACgEAAgFQApgsAbg5QACgEAAgFQAggcARgqQABgEAAgFQApgsAbg5QACgEAAgFQAjgsAfgwIADgFIAAgDIALAGQBiA1BYBAQADACAAAFQgFAAgCACQghAqgoAkIAAAKIAAAJQgFAAgCACQgiAqgnAkIAAAKIAAAKQgFAAgCACQgiAqgmAkIAAAKIAAAKQgbACgNgMQgsgtgnAyQgbAjgaAAQgcAAgagog");
	this.shape_10.setTransform(32.5,293);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(76,66,63,0.973)").s().p("AB6A6QhYg/hhg1QBrAYBdBMQADADAFAAQAAAFgCADQgIAHgKAFQAAgFgDgCgAiQAZIAAgKQAaghAWglQACgEAAgFIAUAEIgDAEQgfAwgkArIAAgKg");
	this.shape_11.setTransform(43.5,276.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(240,162,85,0.988)").s().p("ABXB6QhchNhsgYIgLgGIAAAEIgUgEIAAgKIAAgJQAXgvAHg/IAAgKQCOAgBzA+QACABAAAFIgBAKQgIBVgpA2QgFAAgDgDg");
	this.shape_12.setTransform(48.5,268.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(61,54,51,0.882)").s().p("AAjB7IhKj3QAKAFALAEQAEABAFAAQAFAAADACQABADAAAFIgJAAIgKAAQAgBqAaBxIABAKQgFAAAAgCg");
	this.shape_13.setTransform(93,283.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F6F7F8").s().p("AgxDkIAAgKQgFg2gZgkIAAgKQgGg2gYgkIgBgJQgahxghhrIAKAAIAKAAQBogjBzgPIAEAIQABACAFAAQAAAFACAFQAvCwApC3QgxAfgnApQgxA0glAAQgZAAgUgYg");
	this.shape_14.setTransform(108,293.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(34,37,32,0.98)").s().p("AjNFFQgNhWgQhUQAyA6BShWQAngpAxgfQgpi4gviwQgCgEAAgFIAAgKIAAgKQA4C4AzC5QACAFAAAFQBuhKBugFIgDAUQgEAaARADIAABGIAAAKQgFAAgCACQhXCBiIBPQgFAAgDABQhYAbhxACIgBgKg");
	this.shape_15.setTransform(126.5,300.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(92,79,71,0.996)").s().p("AhvAhQgDgDgFAAIAAgKQB4gXBtgjQAFgBAFAAIAAAKIAAAKIAAAKIAAAJQgFAAgBgBIgEgIQhzAOhoAjQAAgFgCgCg");
	this.shape_16.setTransform(104,269);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(242,162,85,0.992)").s().p("AhnBeQgLgEgKgFQAAgFgCgEQgRgggBgwIAAgKIAAgUQCAgbB5ggIAKgBQAHA/AVAvQACAEAAAFQgFAAgFABQhtAjh4AYIAAAKQgFAAgEgBg");
	this.shape_17.setTransform(101.5,262.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(235,43,35,0.988)").s().p("AhhFOQhzg+iPggIgKgBQg5gMARhXQAmiJACisIAAgKIAdBGQABAFAAAFQA5AXA2AZQAEACAFAAQBXghAShhIgFAAQgFg5glgMIALADQBKAVgrhLQDPAaCMg8QACgBAAgFQCAEGAvEfIgFAAIgJABQh7AgiAAbIAAAUIAAAKQgqgRgMgmQgnh+gvhtIgBAKQgdCyhFCOQAAgFgCgBg");
	this.shape_18.setTransform(72.6,232);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(240,162,85,0.984)").s().p("AggExIgKAAQgphFg0g6QgCgDgFAAIAAgKQgDiTgbh6IAAgKIAAjSIAKAAQBQCvBXClQACAEAAAFQB2AWARBEIgFAAQhjgDAyAKQA1AKAQArQAbAegUAbQgCADgFAAQgiApghApQgDADAAAFQg4gOg/gGg");
	this.shape_19.setTransform(109.3,164.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(115,85,62,0.969)").s().p("AgEB4QgFh4AAh3IAJAAQAFAFADAGQACAEAAAFIgKAAIAADRIAAAKg");
	this.shape_20.setTransform(92,142);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(241,163,85,0.992)").s().p("ABsH9Qg2gZg4gXQAAgFgBgFIgdhGQAAgFgCgEQhjilgxjXQgFAAgEgCQgfgMgKgkQAGj0A1jFIABgJQCSgKBvBJQACACAAAFQgdCMgxB4QgCAFAAAFQA/CnAkDAIABAKQAtAjA4AXQAEACAFAAQArBKhKgUIgLgDQAlALAFA6IAFAAQgSBghXAiQgFAAgEgCg");
	this.shape_21.setTransform(39.3,175.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(154,104,54,0.639)").s().p("AgFA8IAAiBIAJAAIAAAKQAHBNgQA0IAAgKg");
	this.shape_22.setTransform(77.6,85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(7,8,9,0.996)").s().p("AAUJeQgFAAgFgCQg2gXgtgjIgBgKQgkjAg/ioQAAgFABgEQAyh4AdiMQAAgFgCgBQhxhKiRAKIAAgKIAAhuQBPjOCjh5QADgDAFAAQCQALAxBxQAKAWAOAZQA0BiADhPQACgqAZAWQBsCAApDAIABAKIgKAAQAAB3AFB4IAFAAQAaB8AECSIAAAKQAIBIACBOIAAAKQAAAFgCABQhiAqiDAAQg4AAg/gIg");
	this.shape_23.setTransform(59,141.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(45,29,17,0.373)").s().p("AAAA2QgEg2AAg2IAJAAIAABjIAAAKIgFgBg");
	this.shape_24.setTransform(46.5,55.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(242,164,86,0.992)").s().p("AguFhQgOgagKgWQgxhxiRgKIAAgKIAAh4QA8gQBQAFIAKABQAYiOgTh/IAFAAQA7AkApADIAJABQgDh2AxhFQAJgNAPgKQAbgVBKAdQAEACAFAAIABAJQAkCGArB/QAAAFgDADQg2BVgXB0IgKAJQgPALgGgEQhSg1gbA5IAAAoIAAAKIgKAAIAACCIAAAKIAAAoIAAAKQgZgXgCAqQgBAkgLAAQgNAAgdg2g");
	this.shape_25.setTransform(73.5,61.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(124,79,47,0.988)").s().p("AjvFFIAAgyIAAgKIAAhkIAAgKQgMiEgIiJQAVgYAIgkIABgKQBTg+BKhHQADgCAAgFQB1ACBmgLIAKgBIA3AfIAMAGIAhAXQgUA9gcBjQgCAFAAAFQgFAAgEgBQhKgegbAVQgPAKgJAOQgxBEADB1IgKgBQgogDg7gkIgFAAQATCAgYCOIgKAAQhQgGg8AQIAAgKg");
	this.shape_26.setTransform(71,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,349);


(lib.meirstanding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mouth("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(76.1,61.6,1.036,1.1,0,0,0,2.1,0.5);

	this.instance_1 = new lib.eye("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(77.6,41.1,1.207,1.714,0,0,0,1.9,1.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(166,131,100,0.961)").s().p("AAAAyQAGgrgQgQIAAgKIAAgoIAKAAQAGAgACAlIABAKIABAKQAGAbgQADIAAgKg");
	this.shape.setTransform(89.1,303);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(16,14,15,0.486)").s().p("ABVAFIizAAIAAgJICzAAIAKAAIAAAJIgKAAg");
	this.shape_1.setTransform(64.5,336.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#969191").s().p("AgsAVIAAgKIAAgsQACBGBXgLIAAAFIgKABQgPACgNAAQgfAAgUgNg");
	this.shape_2.setTransform(74.5,309.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(32,36,30,0.98)").s().p("AhJC+Ii0AAIgJgBQhlgYgyhLQAcg+gIhhIAAgKIAKAAQAAAjAFAjIAFAAQB/gOBnAEIAKAAIAAigIAAgKQASAwgDBIIAFAAQAAAKAEAIQABACAFAAQAcASA0gIIAKAAQBuAQgUh0IgBgKQARARgGArIgBAKQAAAFACABQBLAlBxgDQAAAFADACQATAQASAQIAKAAQA4gBAgAVIAABdQgqAthMAGQi5APiuALIgKAAg");
	this.shape_3.setTransform(80.4,317);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(58,51,49,0.976)").s().p("AAECPQgEgIAAgKIAAgKQgGh/gDiEIAJAAQAAAUAFATQAAABAFAAIAACzIAAAKIAAAEIAAABIAAAtIAAAKQgFAAgBgCg");
	this.shape_4.setTransform(69,297.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(164,135,111,0.988)").s().p("AAFCHQADhIgRgwIAAgKIAAiLIAJAAQADCEAHB/IAAAKg");
	this.shape_5.setTransform(68,296.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#746F6F").s().p("AAADIQgEgjAAgjIAAgKIAAk/IAJAAIAAAKIAAF7IAAAKIgFAAg");
	this.shape_6.setTransform(42.5,296);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(16,14,15,0.502)").s().p("AgECqIAAgKIAAlJIAJAAIAAAKIAAE/IAAAKIgJAAg");
	this.shape_7.setTransform(41.5,292);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8F9FA").s().p("Ah8C5IAAl7ICfAAIAKAAIBGAAIAKAAIAAAyIAAAKIgKAAIAACLIAAAKIAAAKIAACgIgKAAQhngEh+AOIAAgKg");
	this.shape_8.setTransform(55.5,296.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(72,61,55,0.992)").s().p("ABQAFIifAAIgKAAIAAgJIAKAAICfAAIAKAAIAAAJIgKAAg");
	this.shape_9.setTransform(51,275.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ADA9A9").s().p("ABLAFIifAAIAAgJICfAAIAKAAIAAAJIgKAAg");
	this.shape_10.setTransform(51.5,276.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#76675E").s().p("AAeAKIhFAAIAAgKIAAgJIBFAAIAKAAIAAAJIAAAKIgKAAg");
	this.shape_11.setTransform(64,276);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#928D8D").s().p("AAABeQgEgTAAgUIAAgKIAAiLIAJAAIAACzIAAAKQgFAAAAgBg");
	this.shape_12.setTransform(69.5,277.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(62,51,49,0.988)").s().p("AgEBQIAAgKIAAgyIAAgKIAAgKIAAgJIAAg8IAAgKQAEAAADACQACADAAAFIAACLIAAAKIgJAAg");
	this.shape_13.setTransform(68.5,275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F4A556").s().p("ABzBBIhGAAIgKAAIifAAIAAgKIAAh3QCBAUBuAmQAFACAFAAIAAA7IAAAKIgKAAg");
	this.shape_14.setTransform(55.5,268.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(78,58,41,0.702)").s().p("AgBAyQgCgmgHgfIAAgKIAAgeQAQANgCAlIAFAAIABAJQAGAqgQASIgBgKg");
	this.shape_15.setTransform(90.1,299);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(145,110,79,0.937)").s().p("AAFAoQACglgQgMIAAgKIAAgUIAJAAQAFAFADAGQACAEAAAFIAAAxIAAAKg");
	this.shape_16.setTransform(90,294);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(98,79,65,0.8)").s().p("AgCA9QgDgGgFgFIAAgKIAAhtIAKAAQAAAPADAOQABABAFAAIAAAKQAHA+gQAlQAAgFgCgEg");
	this.shape_17.setTransform(91.1,285);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(72,56,46,0.796)").s().p("AgGBAQgEgOAAgPIAAgKIAAgnQAQgIgGggIAAgKIAJAAIAAAKQAHA9gQAmIAAAKIAAAKQgFAAgBgBg");
	this.shape_18.setTransform(92.1,274.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F8F9F9").s().p("AgODgIAAgFQhYAKgChGIAAgCIAAgDIAAgKIAAizIAAgKIAAi0QA5ANBIgDIAKAAQBDgRADAvIAAAKIAAAoIAAAKIgKAAIAABuIAAAKIgKAAIAAATIAAAKIAAAeIAAAKIgKAAIAAAoIAAAKIABAKQASBmhTAAQgLAAgOgCg");
	this.shape_19.setTransform(80.5,290.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CA9481").s().p("AAcAPQgCguhCARIAAgKIBFAAIAKAAIABAKQAGAfgRAIIgBgKg");
	this.shape_20.setTransform(88.1,270.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(148,26,22,0.631)").s().p("AAAA3QgFg3AAg2QAQAmgHA9IAAAKIgEAAg");
	this.shape_21.setTransform(92.6,240.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(144,25,21,0.612)").s().p("AAAA2QgFg2AAg2QAQAlgHA+IAAAKIgEgBg");
	this.shape_22.setTransform(91.6,218.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(236,42,36,0.996)").s().p("AAvFKIgKAAQAAgFgDgDQgCgCgFAAIAAAKQgFAAgFgCQhtgmiCgUQAAgFgCgBQgIgEgBgDQgsiPgFitQAAgFABgBQA2gOAFg8QgVhDAMgTQAhgxhUgtQErAoDmg7IAKgBIAABuIAAAKQAAA3AFA2IAFABIAABkIAAAJQAAA3AFA2IAFABQAKBpgFBzIgFAAIgKAAIgKAAIhGAAIAAAKIgKAAIgeAAQg3AAgtgKg");
	this.shape_23.setTransform(65.3,235);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8E6745").s().p("AAABBQgFhBAAhAQAQAwgHBHIAAAKIgEAAg");
	this.shape_24.setTransform(90.6,192.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(57,38,20,0.235)").s().p("AgGAOQgVgJgUgJQAtAAAsgFIAAgFIAFABQACAegvgMIAAAKQgEAAgEgBg");
	this.shape_25.setTransform(105.8,182.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(240,163,85,0.984)").s().p("AAVEmQgngPgzgEIAAgKIABgKQAGhIgRgwIgBgKQgUjPgTjUQA5CJAzCQQACAEAAAFQBLAbAzA3QADACAAAFIAAAFQgtAFgtAAQAUAKAUAJQAFABAFAAQAFAAACACQBNBviGBDQgFAAgEgBg");
	this.shape_26.setTransform(98,172.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(40,29,19,0.392)").s().p("AgIA8IAAgyQAQgWgHgvIAAgKIAFAAQALBVgZA2IAAgKg");
	this.shape_27.setTransform(32.9,139);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(23,21,22,0.886)").s().p("AgVAeQAWgaALgqQABgBAEAAIAGAAQgGA2gmAZIAAgKg");
	this.shape_28.setTransform(8.3,113);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(7,8,9,0.996)").s().p("AhwJVIgUAAQgPAAgBgEQg8jIgEj2QAiguAPhBIABgJQAag1gLhWIgFAAQAAgFgCgBQiEg7h0AZQAAgFgCgDQgggcAOhKQAogZAFg3IgFAAIAAgKIAAgKQBdiTCOhgQAKgHAPAAQCMAOA9BiQAtBHA/AlIAAgUIAAgoQC6CBAEE3IAAAKQATDSAVDRIAAAKQAABBAFBAIAFABIAAAKIAAAKIgJABQiJAjiiAAQhuAAh5gQg");
	this.shape_29.setTransform(48.3,143.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(111,75,39,0.502)").s().p("AgEAyQgFgyAAgxQAJAAAIAEQACABAAAFIgKAAIAABPIAAAKIgEAAg");
	this.shape_30.setTransform(36,71);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(44,29,17,0.365)").s().p("AAAAxQgEgxAAgxIAJAAIAABZIAAAKIgFgBg");
	this.shape_31.setTransform(34.5,56);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(242,164,86,0.992)").s().p("AjlPmQgQgcgQglQglhWgWhlQgiiUhLhkIAAgKIAAhaQAXjKA3ioQACgFAAgFQB0gYCEA6QACABAAAFIAAAKQAIAwgSAWIAAAyIAAAKIgBAKQgPBAgiAuQAED2A8DIQABAEAPAAIAUAAQBTAtggAyQgMATAUBCQgEA8g1APQgCAAAAAFQgFAAgEACQgeARgdAAQgzAAgzgxgACElIQg+hiiLgPIAAgKIAAgyIAAgKIAAhQIAKAAQAhgXArAGIA1AHQAbiLgZh5QgDgQAVAGQAzAnAdAKQAFABAFAAQAOhvAshVQACgEAIgEQACgBAAgFQAngdBHAcQAFABAFAAIAAAKQAHBYADBcQAFAAABACQAVAuAXAqQgFAAgCADQg5BEAECBQgFAAgCADQg5A4hWg7QgCCPAVB1IABAKIAAAoIAAAUQg/glgthGg");
	this.shape_32.setTransform(43,126.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(124,80,47,0.992)").s().p("AjiFJQgIgEgKAAIAAgKIAAgoIAAgKIAAhaIAAgKQgGiRgOiGQBFhuBnhOQADgCAFAAQBTgbB0ACIAAgFIAoAAIAKAAQAtAZA1AwQACACAAAFQgtA3gOBVIgBAKQgFAAgFgBQhHgcgnAdQAAAFgCABQgIAEgCAEQgsBVgOBuQgFAAgFgCQgcgJgzgnQgVgGADAQQAZB5gbCLIg1gHQgsgGghAXQAAgFgCgBg");
	this.shape_33.setTransform(59.5,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.8,337);


(lib.lawn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gate("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(442.5,110,0.403,0.472,0,0,0,229.6,195);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,255,0,0.996)").s().p("EgrCANmIAA7LMBWFAAAIAAbLg");
	this.shape.setTransform(275.5,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,11.1,551,275.9);


(lib.azurandholon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.holon("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-26.7,-10.8,1,1,0,0,0,9.3,6.7);

	this.text = new cjs.Text("אזור", "8px 'Arial'");
	this.text.lineHeight = 11;
	this.text.lineWidth = 15;
	this.text.alpha = 0.99607843;
	this.text.parent = this;
	this.text.setTransform(5.2,-14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-17.5,58.4,13.6);


(lib.playerstanding2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.playerstanding("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(34.7,77.6,0.664,0.459,0,0,180,52.1,169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,0,66.3,155.2);


// stage content:
(lib.meir128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
		
		self.playbut.addEventListener("click", clickPlayStart);
		createjs.Sound.registerSound("/sounds/soundmeir.mp3","soundmeir");
		
		  
		  
		function clickPlayStart()
		{
			self.gotoAndPlay(2);
			createjs.Sound.play("soundmeir");
		}
	}
	this.frame_715 = function() {
		var self = this; 
		self.stop(); 
		
		self.replay.addEventListener("click", clickRestart);
		
		function clickRestart()
		{
			self.gotoAndPlay(2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(715).call(this.frame_715).wait(1));

	// playbut
	this.playbut = new lib.playbut();
	this.playbut.parent = this;
	this.playbut.setTransform(278.6,208.6,1,1,0,0,0,202.5,104.5);
	new cjs.ButtonHelper(this.playbut, 0, 1, 2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egq4gfPMBVxAAAMAAAA+fMhVxAAAg");
	this.shape.setTransform(275.5,201);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AfpAAQAAGxpREyQpREytHAAQtGAApRkyQpRkyAAmxQAAmwJRkyQJRkyNGAAQNHAAJREyQJREyAAGwg");
	this.shape_1.setTransform(278.6,208.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fgA15qXQpREyAAGwQAAGxJREyQJREyNGAAQNHAAJRkyQJRkyAAmxQAAmwpRkyQpRkytHAAQtGAApREyg");
	this.shape_2.setTransform(275.5,201);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.playbut}]}).to({state:[]},1).wait(715));

	// meir say tnx2
	this.text = new cjs.Text("!תודה רבה", "10px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 47;
	this.text.alpha = 0.99607843;
	this.text.parent = this;
	this.text.setTransform(164.5,176.1);

	this.instance = new lib.speechbubbles("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(188,186,0.744,1,0,0,180,65.8,25.4);

	this.instance_1 = new lib.mouth("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(249.6,235.5,1,1.8,0,0,0,2.4,0.5);

	this.instance_2 = new lib.cloud("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(498.9,37.5,1,1,0,0,0,41.5,20.9);

	this.instance_3 = new lib.cloud("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(319,44.3,1,1,0,0,0,41.5,20.9);

	this.instance_4 = new lib.sun("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(420.1,63.7,1,1,0,0,0,30.6,30.6);

	this.instance_5 = new lib.cloud("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(182.4,48.8,1,1,0,0,0,41.5,20.9);

	this.replay = new lib.replaybut();
	this.replay.parent = this;
	this.replay.setTransform(276,201.6,1,1,0,0,0,273.9,199.5);
	new cjs.ButtonHelper(this.replay, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.text}]},699).to({state:[{t:this.instance_1},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},15).to({state:[{t:this.replay}]},1).wait(1));

	// The coach is grateful to Meir
	this.instance_6 = new lib.cloud("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(498.8,37.9,1,1,0,0,0,41.5,20.9);

	this.instance_7 = new lib.cloud("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(319,43.5,1,1,0,0,0,41.5,20.9);

	this.instance_8 = new lib.sun("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(420.4,63.9,1,1,0,0,0,30.6,30.6);

	this.instance_9 = new lib.cloud("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(182.4,48.5,1,1,0,0,0,41.5,20.9);

	this.text_1 = new cjs.Text("!כל הכבוד, אני גאה בכם\n.מאיר, שיחקת אותה", "10px 'Arial'", "#181610");
	this.text_1.lineHeight = 13;
	this.text_1.lineWidth = 93;
	this.text_1.parent = this;
	this.text_1.setTransform(78.3,156.2);

	this.instance_10 = new lib.speechbubbles("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(122.7,173.4,0.894,1,0,0,0,65.8,25.4);

	this.instance_11 = new lib.mouth("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(53.9,201.6,1.316,2.395,0,0,0,2.5,0.6);

	this.instance_12 = new lib.mouth("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(394.8,241.7,1.316,1,0,0,0,2.5,0.5);

	this.instance_13 = new lib.player2standing("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(394.1,303.2,0.63,0.491,0,0,0,60.1,197.8);

	this.instance_14 = new lib.playerstanding("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(327.8,301.3,0.655,0.585,0,0,0,49.9,169.2);

	this.instance_15 = new lib.meirstanding("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(257.2,299.5,0.547,0.597,0,0,180,60.9,168.6);

	this.instance_16 = new lib.coach("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(50.8,289,1,1.215,0,0,0,34.4,91.3);

	this.instance_17 = new lib.lawn("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(275.5,262.1,1,1,0,0,0,275.5,149);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17},{t:this.instance_16,p:{regX:34.4,regY:91.3,scaleX:1,scaleY:1.215,x:50.8,y:289}},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11,p:{scaleX:1.316,scaleY:2.395,y:201.6,regX:2.5,regY:0.6,x:53.9}},{t:this.instance_10},{t:this.text_1},{t:this.instance_9,p:{x:182.4,y:48.5}},{t:this.instance_8,p:{x:420.4,y:63.9}},{t:this.instance_7},{t:this.instance_6,p:{x:498.8,y:37.9}}]},675).to({state:[{t:this.instance_17},{t:this.instance_16,p:{regX:34.4,regY:91.3,scaleX:1,scaleY:1.215,x:50.8,y:289}},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11,p:{scaleX:1.047,scaleY:1.198,y:201.5,regX:2.5,regY:0.6,x:53.9}},{t:this.instance_9,p:{x:181.9,y:49}},{t:this.instance_8,p:{x:420.1,y:63.4}},{t:this.instance_7},{t:this.instance_6,p:{x:499.2,y:38.2}}]},24).to({state:[{t:this.instance_17},{t:this.instance_16,p:{regX:34.5,regY:91.4,scaleX:1.466,scaleY:1.39,x:50.6,y:273.1}},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11,p:{scaleX:1.047,scaleY:1.198,y:174.9,regX:2.4,regY:0.5,x:55.7}}]},16).wait(1));

	// layer black4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("EAqwge+MAAAA99MhVfAAAMAAAg99");
	this.shape_3.setTransform(275.3,201.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("EgqvAe+MAAAg97MBVfAAAMAAAA97g");
	this.shape_4.setTransform(275.3,201.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},665).to({state:[]},10).wait(41));

	// The team won
	this.instance_18 = new lib.mouth("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(240.4,134.9,1.25,2.418,0,0,0,2.5,0.6);

	this.instance_19 = new lib.Wewon("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(288.3,99.4,1,1,0,0,0,34.1,10.4);

	this.instance_20 = new lib.speechbubbles("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(275.3,98.7,0.447,0.499,0,0,0,65.8,25.6);

	this.instance_21 = new lib.meirstanding("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(159.1,301.5,0.596,0.576,0,0,0,60.9,168.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]},646).to({state:[{t:this.instance_21}]},20).to({state:[]},1).wait(49));

	// meir kick ball to gate
	this.instance_22 = new lib.meirwalk4("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(156.1,301,0.554,0.541,0,0,0,75.3,178.7);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(643).to({_off:false},0).to({_off:true},3).wait(70));

	// meir game
	this.instance_23 = new lib.ballcopy2("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(187.9,367.7,0.099,0.085,0,0,0,52.1,1816.1);

	this.instance_24 = new lib.meirwalk3("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(147.5,296.8,0.499,0.543,0,0,0,70.5,167.8);

	this.instance_25 = new lib.meirwalk4("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(156.1,301,0.554,0.541,0,0,0,75.3,178.7);

	this.instance_26 = new lib.ball("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(187.9,367.8,0.095,0.085,0,0,0,50.8,1815.1);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_24},{t:this.instance_23}]},623).to({state:[{t:this.instance_26},{t:this.instance_25}]},11).to({state:[{t:this.instance_26}]},9).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[]},1).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(634).to({_off:false},0).wait(9).to({x:464.8,y:280.1},0).wait(1).to({regX:51.1,regY:1814.8},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(49));

	// coach counting on Meir
	this.instance_27 = new lib.ball("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(186.9,367.9,0.095,0.085,0,0,0,50.8,1815.1);

	this.instance_28 = new lib.goodlake("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(113.9,66.4,1,1,0,0,0,57,20.4);

	this.instance_29 = new lib.speechbubbles("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(103.7,64.5,0.82,0.901,0,0,0,65.9,25.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27}]},584).to({state:[]},28).wait(104));

	// coach say start game
	this.instance_30 = new lib.ballcopy2("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(188,367.3,0.091,0.089,0,0,0,51.1,1814.8);

	this.instance_31 = new lib.startgame("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(99.3,59.7,1,1,0,0,0,177.5,105.5);

	this.instance_32 = new lib.speechbubbles("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(96.5,61.6,0.527,0.743,0,0,0,65.8,25.4);

	this.instance_33 = new lib.mouth("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(286.7,236.2,0.729,1,0,0,0,2.4,0.6);

	this.instance_34 = new lib.eye("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(286.5,223.4,1,1,0,0,0,2,1.4);

	this.instance_35 = new lib.player1rivalgoing1("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(291.7,299.9,0.448,0.555,0,0,0,71,173.1);

	this.instance_36 = new lib.mouth("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(47.8,94.7,1.208,1.692,0,0,0,2.5,0.6);

	this.instance_37 = new lib.zero("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(164.2,100.3,1,1,0,0,0,6.7,10.4);

	this.text_2 = new cjs.Text("0", "15px 'Arial'");
	this.text_2.lineHeight = 19;
	this.text_2.lineWidth = 9;
	this.text_2.alpha = 0.99215686;
	this.text_2.parent = this;
	this.text_2.setTransform(119.6,92.6);

	this.instance_38 = new lib.azurandholon("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(143.6,84.3,1,1,0,0,0,-6.8,-10.7);

	this.instance_39 = new lib.playerstanding("synched",0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(235.1,183.5,0.664,0.459,0,0,180,52.1,169);

	this.instance_40 = new lib.meirstanding("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(126.2,297.1,0.57,0.553,0,0,0,61,168.6);

	this.instance_41 = new lib.mouth("synched",0);
	this.instance_41.parent = this;
	this.instance_41.setTransform(423.2,161.3,0.875,1,0,0,0,2.4,0.5);

	this.instance_42 = new lib.eye("synched",0);
	this.instance_42.parent = this;
	this.instance_42.setTransform(423.1,149.6,1,1,0,0,0,2,1.4);

	this.instance_43 = new lib.player1rivalstanding("synched",0);
	this.instance_43.parent = this;
	this.instance_43.setTransform(429.4,217.9,0.465,0.515,0,0,0,69,165.5);

	this.instance_44 = new lib.coach2("synched",0);
	this.instance_44.parent = this;
	this.instance_44.setTransform(44.4,166.3,0.366,0.362,0,0,0,86.6,252.1);

	this.instance_45 = new lib.lawn("synched",0);
	this.instance_45.parent = this;
	this.instance_45.setTransform(274.5,262.1,1,1,0,0,0,275.5,149);

	this.instance_46 = new lib.cloud("synched",0);
	this.instance_46.parent = this;
	this.instance_46.setTransform(490.3,45.9,1,1,0,0,0,41.5,20.9);

	this.instance_47 = new lib.cloud("synched",0);
	this.instance_47.parent = this;
	this.instance_47.setTransform(365,29.5,1,1,0,0,0,41.5,20.9);

	this.instance_48 = new lib.sun("synched",0);
	this.instance_48.parent = this;
	this.instance_48.setTransform(431,49.9,1,1,0,0,0,30.6,30.6);

	this.instance_49 = new lib.cloud("synched",0);
	this.instance_49.parent = this;
	this.instance_49.setTransform(249.9,34.5,1,1,0,0,0,41.5,20.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AAArYIGegIIAABrIAADKIAAR8AAArYImcAIIAABnIAADRIGcgJIGegKAAArYIAABpImcAGAAApvIAADOAGep1ImeAGAmcmYIAAR5");
	this.shape_5.setTransform(143,152.3);

	this.instance_50 = new lib.ball("synched",0);
	this.instance_50.parent = this;
	this.instance_50.setTransform(186.9,367.9,0.095,0.085,0,0,0,50.8,1815.1);

	this.instance_51 = new lib.playerstanding2("synched",0);
	this.instance_51.parent = this;
	this.instance_51.setTransform(235.1,183.5,1,1,0,0,0,34.6,77.6);

	this.text_3 = new cjs.Text("0", "15px 'Arial'");
	this.text_3.lineHeight = 19;
	this.text_3.lineWidth = 9;
	this.text_3.alpha = 0.99215686;
	this.text_3.parent = this;
	this.text_3.setTransform(119.6,92.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43,p:{x:429.4}},{t:this.instance_42,p:{x:423.1}},{t:this.instance_41,p:{x:423.2}},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.text_2,p:{x:119.6,y:92.6,text:"0",lineWidth:9}},{t:this.instance_37},{t:this.instance_36,p:{regX:2.5,scaleX:1.208,scaleY:1.692,x:47.8,regY:0.6,y:94.7}},{t:this.instance_35,p:{x:291.7,y:299.9}},{t:this.instance_34,p:{x:286.5,y:223.4}},{t:this.instance_33,p:{x:286.7,y:236.2}},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30,p:{y:367.3,regX:51.1,regY:1814.8,scaleX:0.091,scaleY:0.089,x:188}}]},557).to({state:[{t:this.shape_5},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43,p:{x:429.4}},{t:this.instance_42,p:{x:423.1}},{t:this.instance_41,p:{x:423.2}},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.text_2,p:{x:119.6,y:92.6,text:"0",lineWidth:9}},{t:this.instance_37},{t:this.instance_36,p:{regX:2.6,scaleX:0.771,scaleY:0.846,x:47.9,regY:0.6,y:94.7}},{t:this.instance_35,p:{x:291.7,y:299.9}},{t:this.instance_34,p:{x:286.5,y:223.4}},{t:this.instance_33,p:{x:286.7,y:236.2}},{t:this.instance_30,p:{y:367.8,regX:51.1,regY:1814.8,scaleX:0.091,scaleY:0.089,x:188}}]},18).to({state:[{t:this.shape_5},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43,p:{x:429.4}},{t:this.instance_42,p:{x:423.1}},{t:this.instance_41,p:{x:423.2}},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.text_2,p:{x:119.6,y:92.6,text:"0",lineWidth:9}},{t:this.instance_37},{t:this.instance_36,p:{regX:2.6,scaleX:0.999,scaleY:1.622,x:47.9,regY:0.7,y:94.9}},{t:this.instance_35,p:{x:291.7,y:299.9}},{t:this.instance_34,p:{x:286.5,y:223.4}},{t:this.instance_33,p:{x:286.7,y:236.2}},{t:this.instance_50}]},9).to({state:[{t:this.shape_5},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43,p:{x:429.4}},{t:this.instance_42,p:{x:423.1}},{t:this.instance_41,p:{x:423.2}},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.text_2,p:{x:119.6,y:92.6,text:"0",lineWidth:9}},{t:this.instance_37},{t:this.instance_36,p:{regX:2.6,scaleX:0.813,scaleY:0.865,x:47.9,regY:0.7,y:94.9}},{t:this.instance_35,p:{x:291.7,y:299.9}},{t:this.instance_34,p:{x:286.5,y:223.4}},{t:this.instance_33,p:{x:286.7,y:236.2}},{t:this.instance_30,p:{y:367.2,regX:52.1,regY:1816.1,scaleX:0.099,scaleY:0.085,x:187.6}}]},28).to({state:[{t:this.shape_5},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43,p:{x:429.4}},{t:this.instance_42,p:{x:423.1}},{t:this.instance_41,p:{x:423.2}},{t:this.instance_39},{t:this.instance_38},{t:this.text_2,p:{x:119.6,y:92.6,text:"0",lineWidth:9}},{t:this.instance_37},{t:this.instance_36,p:{regX:2.6,scaleX:0.813,scaleY:0.865,x:47.9,regY:0.7,y:94.9}},{t:this.instance_35,p:{x:277.8,y:301.8}},{t:this.instance_34,p:{x:273,y:224.7}},{t:this.instance_33,p:{x:273.2,y:238.7}}]},11).to({state:[{t:this.shape_5},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43,p:{x:429.4}},{t:this.instance_42,p:{x:423.1}},{t:this.instance_41,p:{x:423.2}},{t:this.instance_39},{t:this.instance_38},{t:this.text_2,p:{x:119.6,y:92.6,text:"0",lineWidth:9}},{t:this.instance_37},{t:this.instance_36,p:{regX:2.6,scaleX:0.813,scaleY:0.865,x:47.9,regY:0.7,y:94.9}},{t:this.instance_35,p:{x:277.8,y:301.8}},{t:this.instance_34,p:{x:273,y:224.7}},{t:this.instance_33,p:{x:273.2,y:238.7}}]},11).to({state:[{t:this.shape_5},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43,p:{x:421.2}},{t:this.instance_42,p:{x:415.9}},{t:this.instance_41,p:{x:415.2}},{t:this.instance_39},{t:this.instance_38},{t:this.text_2,p:{x:119.6,y:92.6,text:"0",lineWidth:9}},{t:this.instance_37},{t:this.instance_36,p:{regX:2.6,scaleX:0.813,scaleY:0.865,x:47.9,regY:0.7,y:94.9}},{t:this.instance_35,p:{x:277.8,y:301.8}},{t:this.instance_34,p:{x:273,y:224.7}},{t:this.instance_33,p:{x:273.2,y:238.7}}]},9).to({state:[{t:this.shape_5},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43,p:{x:421.2}},{t:this.instance_42,p:{x:415.9}},{t:this.instance_41,p:{x:415.2}},{t:this.instance_38},{t:this.text_3},{t:this.instance_36,p:{regX:2.6,scaleX:0.813,scaleY:0.865,x:47.9,regY:0.7,y:94.9}},{t:this.instance_35,p:{x:277.8,y:301.8}},{t:this.instance_34,p:{x:273,y:224.7}},{t:this.instance_33,p:{x:273.2,y:238.7}},{t:this.text_2,p:{x:158.2,y:91.3,text:"1",lineWidth:18}},{t:this.instance_51}]},3).to({state:[{t:this.shape_5},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43,p:{x:421.2}},{t:this.instance_42,p:{x:415.9}},{t:this.instance_41,p:{x:415.2}},{t:this.instance_38},{t:this.text_3},{t:this.instance_36,p:{regX:2.6,scaleX:0.813,scaleY:0.865,x:47.9,regY:0.7,y:94.9}},{t:this.instance_35,p:{x:277.8,y:301.8}},{t:this.instance_34,p:{x:273,y:224.7}},{t:this.instance_33,p:{x:273.2,y:238.7}},{t:this.text_2,p:{x:158.2,y:91.3,text:"1",lineWidth:18}},{t:this.instance_51}]},20).to({state:[]},1).wait(49));

	// layer black3
	this.text_4 = new cjs.Text("יום שבת", "120px 'Arial'", "#FFFFFF");
	this.text_4.lineHeight = 136;
	this.text_4.lineWidth = 440;
	this.text_4.alpha = 0.99607843;
	this.text_4.parent = this;
	this.text_4.setTransform(91.2,123.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AAI/PMAAAA+fIgPAAMAAAg+fg");
	this.shape_6.setTransform(548,200);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.996)").s().p("EAqgAfQMAAAg+fMAAAA+fMhVPAAAMAAAg+fMBVPAAAIAQAAMAAAA+fg");
	this.shape_7.setTransform(275.2,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.text_4}]},540).to({state:[]},17).wait(159));

	// Meir says he'll be good
	this.instance_52 = new lib.mouth("synched",0);
	this.instance_52.parent = this;
	this.instance_52.setTransform(124,217.8,1.401,3,0,0,0,2.6,0.7);

	this.instance_53 = new lib.Meirsayshellbegood("synched",0);
	this.instance_53.parent = this;
	this.instance_53.setTransform(262.9,161.2,0.836,1,0,0,0,34.3,15);

	this.instance_54 = new lib.speechbubbles("synched",0);
	this.instance_54.parent = this;
	this.instance_54.setTransform(183.5,159.7,0.836,1.164,0,0,0,65.8,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_54},{t:this.instance_53},{t:this.instance_52}]},502).to({state:[]},28).wait(186));

	// game in Saturday
	this.instance_55 = new lib.ThecoachtellsMeiraboutthegameonSaturday("synched",0);
	this.instance_55.parent = this;
	this.instance_55.setTransform(192.8,126.1,1,1,0,0,0,40.5,39);

	this.instance_56 = new lib.speechbubbles("synched",0);
	this.instance_56.parent = this;
	this.instance_56.setTransform(187.1,132.7,0.918,1.047,0,0,180,65.5,25.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_56},{t:this.instance_55}]},468).to({state:[]},23).wait(225));

	// meir say yeshhhhh
	this.instance_57 = new lib.meirsaytnx("synched",0);
	this.instance_57.parent = this;
	this.instance_57.setTransform(194.9,160.6,1,1,0,0,0,55,12.2);

	this.instance_58 = new lib.speechbubbles("synched",0);
	this.instance_58.parent = this;
	this.instance_58.setTransform(176.9,160.8,0.685,0.913,0,0,0,66.1,26);

	this.instance_59 = new lib.mouth("synched",0);
	this.instance_59.parent = this;
	this.instance_59.setTransform(125,217.2,1,2.6,0,0,0,2.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_59},{t:this.instance_58},{t:this.instance_57}]},434).to({state:[]},25).wait(257));

	// Meir succeeded
	this.instance_60 = new lib.Welldone("synched",0);
	this.instance_60.parent = this;
	this.instance_60.setTransform(184.6,118,1,1,0,0,0,32.5,7.5);

	this.instance_61 = new lib.speechbubbles("synched",0);
	this.instance_61.parent = this;
	this.instance_61.setTransform(187.1,128.8,0.825,1,0,0,180,65.8,25.4);

	this.instance_62 = new lib.mouth("synched",0);
	this.instance_62.parent = this;
	this.instance_62.setTransform(258.1,160.2,1.053,2.403,0,0,0,2.6,0.8);

	this.instance_63 = new lib.coach("synched",0);
	this.instance_63.parent = this;
	this.instance_63.setTransform(253.8,260.4,1.327,1.394,0,0,0,34.5,91.3);

	this.instance_64 = new lib.meirstanding("synched",0);
	this.instance_64.parent = this;
	this.instance_64.setTransform(116,283.3,0.632,0.62,0,0,0,60.9,168.6);

	this.instance_65 = new lib.mouth("synched",0);
	this.instance_65.parent = this;
	this.instance_65.setTransform(258.2,160.3,1.053,1.413,0,0,0,2.7,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_64},{t:this.instance_63},{t:this.instance_62,p:{regX:2.6,regY:0.8,scaleY:2.403,x:258.1,y:160.2,scaleX:1.053}},{t:this.instance_61},{t:this.instance_60}]},402).to({state:[{t:this.instance_64},{t:this.instance_63},{t:this.instance_62,p:{regX:2.7,regY:0.9,scaleY:1.413,x:258.2,y:160.3,scaleX:1.053}}]},24).to({state:[{t:this.instance_64},{t:this.instance_63},{t:this.instance_62,p:{regX:2.7,regY:0.9,scaleY:1.413,x:258.2,y:160.3,scaleX:1.053}}]},8).to({state:[{t:this.instance_64},{t:this.instance_63},{t:this.instance_62,p:{regX:2.7,regY:0.9,scaleY:1.413,x:258.2,y:160.3,scaleX:1.053}}]},25).to({state:[{t:this.instance_64},{t:this.instance_63},{t:this.instance_62,p:{regX:2.7,regY:0.9,scaleY:1.413,x:258.2,y:160.3,scaleX:1.053}}]},8).to({state:[{t:this.instance_64},{t:this.instance_63},{t:this.instance_65},{t:this.instance_62,p:{regX:2.4,regY:0.5,scaleY:2.6,x:257.7,y:159.2,scaleX:1.106}}]},1).to({state:[{t:this.instance_64},{t:this.instance_63},{t:this.instance_62,p:{regX:2.7,regY:0.9,scaleY:1.413,x:258.2,y:160.3,scaleX:1.053}}]},23).to({state:[{t:this.instance_64},{t:this.instance_63},{t:this.instance_62,p:{regX:2.7,regY:0.9,scaleY:1.413,x:258.2,y:160.3,scaleX:1.053}}]},11).to({state:[{t:this.instance_64},{t:this.instance_63},{t:this.instance_62,p:{regX:2.7,regY:0.9,scaleY:1.413,x:258.2,y:160.3,scaleX:1.053}}]},28).to({state:[]},10).wait(176));

	// meir kick again
	this.instance_66 = new lib.mouth("synched",0);
	this.instance_66.parent = this;
	this.instance_66.setTransform(219,94.7,0.833,1,0,0,0,2.4,0.5);

	this.instance_67 = new lib.meirwalk4("synched",0);
	this.instance_67.parent = this;
	this.instance_67.setTransform(124.9,281.5,0.617,0.566,0,0,0,75.5,178.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_67},{t:this.instance_66}]},388).to({state:[]},14).wait(314));

	// meir kick again
	this.instance_68 = new lib.ball3("synched",0);
	this.instance_68.parent = this;
	this.instance_68.setTransform(452.7,70,0.143,0.109);
	this.instance_68._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(388).to({_off:false},0).wait(1).to({regX:51.1,regY:1814.8,x:460,y:267.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(176));

	// meir kick try3
	this.instance_69 = new lib.meirstanding("synched",0);
	this.instance_69.parent = this;
	this.instance_69.setTransform(91.2,278.5,0.658,0.582,0,0,0,60.9,168.6);

	this.instance_70 = new lib.ball3("synched",0);
	this.instance_70.parent = this;
	this.instance_70.setTransform(168.9,345.7,0.143,0.109,0,0,0,51.5,1815.4);

	this.instance_71 = new lib.coach2("synched",0);
	this.instance_71.parent = this;
	this.instance_71.setTransform(215.3,169,0.471,0.365,0,0,0,86.6,252.1);

	this.instance_72 = new lib.sun("synched",0);
	this.instance_72.parent = this;
	this.instance_72.setTransform(31.3,32,1,1,0,0,0,30.6,30.6);

	this.instance_73 = new lib.cloud("synched",0);
	this.instance_73.parent = this;
	this.instance_73.setTransform(163.2,48.8,1,1,0,0,0,41.5,20.9);

	this.instance_74 = new lib.cloud("synched",0);
	this.instance_74.parent = this;
	this.instance_74.setTransform(331.2,27.2,1,1,0,0,0,41.5,20.9);

	this.instance_75 = new lib.cloud("synched",0);
	this.instance_75.parent = this;
	this.instance_75.setTransform(488,56,1,1,0,0,0,41.5,20.9);

	this.instance_76 = new lib.lawn("synched",0);
	this.instance_76.parent = this;
	this.instance_76.setTransform(275.5,262.1,1,1,0,0,0,275.5,149);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("EgpNAPfMBShAAAMAAAguuICoAAMAAAA72IioAAIAACfEgr7AXXMAAAg2mICuAAMAAAAuuIAAH4gEApUAfQIAAgKEApkAfGIgQAAEApkAfGIAAAKIgQAAMhVPAAAIAAn5EAr8AfGIiYAA");
	this.shape_8.setTransform(282.8,200);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.996)").s().p("EApUAfQIAAgKIAAAKMhVPAAAIAAn5MAAAg2mICvAAMAAAAuuMBSgAAAMAAAguuICoAAMAAAA71IioAAIAACgIAAigICoAAIAACgIiYAAIgQAAIAQAAIAAAKgEgpMAXXIAAn4IAAH4IivAAg");
	this.shape_9.setTransform(282.8,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69}]},380).to({state:[{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71}]},8).to({state:[{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72}]},14).to({state:[{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72}]},24).to({state:[{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72}]},8).to({state:[{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72}]},25).to({state:[{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72}]},8).to({state:[{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72}]},1).to({state:[{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72}]},23).to({state:[{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72}]},11).to({state:[{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72}]},28).to({state:[{t:this.shape_9},{t:this.shape_8}]},10).to({state:[]},17).wait(159));

	// layer balck2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("Egq3gfHMBVvAAAMAAAA+PMhVvAAAg");
	this.shape_10.setTransform(274.4,200.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Egq3AfIMAAAg+PMBVvAAAMAAAA+Pg");
	this.shape_11.setTransform(274.4,200.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10}]},365).to({state:[]},15).wait(336));

	// kick ball2
	this.instance_77 = new lib.ballcopy("synched",0);
	this.instance_77.parent = this;
	this.instance_77.setTransform(251.2,385.6,0.09,0.087,0,0,0,47.8,1811.7);
	this.instance_77._off = true;

	this.instance_78 = new lib.coachsayWelldone("synched",0);
	this.instance_78.parent = this;
	this.instance_78.setTransform(159.8,152.1,1,1,0,0,0,76.2,17.6);

	this.instance_79 = new lib.speechbubbles("synched",0);
	this.instance_79.parent = this;
	this.instance_79.setTransform(144.6,155.5,1.148,1.33,0,0,0,65.8,25.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_77}]},140).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_77}]},1).to({state:[]},1).to({state:[{t:this.instance_79},{t:this.instance_78}]},15).to({state:[]},23).wait(526));
	this.timeline.addTween(cjs.Tween.get(this.instance_77).wait(140).to({_off:false},0).wait(1).to({regX:51.1,regY:1814.8,x:280.8,y:292.2},0).wait(1).to({x:310.2,y:198.4},0).wait(1).to({x:339.5,y:104.7},0).wait(1).to({x:416.6,y:102},0).wait(1).to({x:493.7,y:99.2},0).wait(1).to({x:570.8,y:96.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(564));

	// meir excited
	this.instance_80 = new lib.meirexcitedforthetraning("synched",0);
	this.instance_80.parent = this;
	this.instance_80.setTransform(104.4,194.9,1,1,0,0,0,34.5,17.5);

	this.instance_81 = new lib.speechbubbles("synched",0);
	this.instance_81.parent = this;
	this.instance_81.setTransform(99.1,199.5,0.614,0.771,0,0,0,65.9,25.5);

	this.instance_82 = new lib.mouth("synched",0);
	this.instance_82.parent = this;
	this.instance_82.setTransform(51.1,237.1,1,2.7,0,0,0,2.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_82},{t:this.instance_81},{t:this.instance_80}]},25).to({state:[]},18).wait(673));

	// meir say ok
	this.instance_83 = new lib.meirsayok("synched",0);
	this.instance_83.parent = this;
	this.instance_83.setTransform(104.1,191.4,1,1,0,0,0,18,8.7);

	this.instance_84 = new lib.mouth("synched",0);
	this.instance_84.parent = this;
	this.instance_84.setTransform(50.5,236.3,1.214,3,0,0,0,2.6,0.5);

	this.instance_85 = new lib.speechbubbles("synched",0);
	this.instance_85.parent = this;
	this.instance_85.setTransform(102.1,194.1,0.544,0.725,0,0,0,66,25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_85},{t:this.instance_84},{t:this.instance_83}]},89).to({state:[]},14).wait(613));

	// meir going
	this.instance_86 = new lib.meirstanding("synched",0);
	this.instance_86.parent = this;
	this.instance_86.setTransform(-46.4,299.5,0.688,0.596,0,0,0,60.9,168.5);
	this.instance_86._off = true;

	this.instance_87 = new lib.meirwalk1("synched",0);
	this.instance_87.parent = this;
	this.instance_87.setTransform(-9.4,301.6,0.613,0.582,0,0,0,74.6,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_86}]},2).to({state:[{t:this.instance_87}]},7).to({state:[{t:this.instance_86}]},7).to({state:[{t:this.instance_86}]},9).to({state:[{t:this.instance_86}]},18).to({state:[{t:this.instance_86}]},5).to({state:[{t:this.instance_86}]},33).to({state:[{t:this.instance_86}]},22).to({state:[]},8).wait(605));
	this.timeline.addTween(cjs.Tween.get(this.instance_86).wait(2).to({_off:false},0).to({_off:true},7).wait(7).to({_off:false,regX:61,regY:168.7,scaleX:0.67,x:41.2,y:300.6},0).wait(9).to({startPosition:0},0).wait(18).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(33).to({startPosition:0},0).wait(22).to({startPosition:0},0).to({_off:true},8).wait(605));

	// coach talk with meir
	this.instance_88 = new lib.kick("synched",0);
	this.instance_88.parent = this;
	this.instance_88.setTransform(291.8,58,1,1,0,0,0,5,11.5);

	this.instance_89 = new lib.speechbubbles("synched",0);
	this.instance_89.parent = this;
	this.instance_89.setTransform(289.7,63.6,0.871,1,0,0,0,65.8,25.4);

	this.instance_90 = new lib.mouth("synched",0);
	this.instance_90.parent = this;
	this.instance_90.setTransform(227,88.2,1,2.3,0,0,0,2.4,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_90},{t:this.instance_89},{t:this.instance_88}]},57).to({state:[]},24).wait(635));

	// coach say yes - kick again
	this.instance_91 = new lib.mouth("synched",0);
	this.instance_91.parent = this;
	this.instance_91.setTransform(56.2,184.7,1.563,2.8,0,0,0,2.5,0.7);

	this.instance_92 = new lib.lasttry("synched",0);
	this.instance_92.parent = this;
	this.instance_92.setTransform(133.2,152.8,1,1,0,0,0,48,19.8);

	this.instance_93 = new lib.speechbubbles("synched",0);
	this.instance_93.parent = this;
	this.instance_93.setTransform(121.9,152.8,0.783,0.937,0,0,0,66,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_93},{t:this.instance_92},{t:this.instance_91}]},334).to({state:[]},24).wait(358));

	// meir ask kick again
	this.instance_94 = new lib.Meirasksforanotherattempt("synched",0);
	this.instance_94.parent = this;
	this.instance_94.setTransform(151.6,188.5,1,1,0,0,0,43.5,16.4);

	this.instance_95 = new lib.mouth("synched",0);
	this.instance_95.parent = this;
	this.instance_95.setTransform(194.5,258.6,1,1.8,0,0,0,2.4,0.6);

	this.instance_96 = new lib.speechbubbles("synched",0);
	this.instance_96.parent = this;
	this.instance_96.setTransform(146.7,194.2,0.778,1.266,0,0,180,65.8,25.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_96},{t:this.instance_95},{t:this.instance_94}]},302).to({state:[]},21).wait(393));

	// meir say oppp
	this.instance_97 = new lib.Meirsaiditwasexcitement("synched",0);
	this.instance_97.parent = this;
	this.instance_97.setTransform(371.1,224.5,1,1,0,0,0,47.6,16.9);

	this.instance_98 = new lib.speechbubbles("synched",0);
	this.instance_98.parent = this;
	this.instance_98.setTransform(366.4,224,0.813,0.843,0,0,180,65.6,25.4);

	this.instance_99 = new lib.meirwalk1("synched",0);
	this.instance_99.parent = this;
	this.instance_99.setTransform(426.4,314.4,0.419,0.491,0,0,180,75,174.7);

	this.instance_100 = new lib.meirwalk2("synched",0);
	this.instance_100.parent = this;
	this.instance_100.setTransform(415.3,315.2,0.791,0.853,0,0,180,33,103.4);

	this.instance_101 = new lib.meirwalk3("synched",0);
	this.instance_101.parent = this;
	this.instance_101.setTransform(390.7,314.9,0.43,0.528,0,0,180,70.5,167.8);

	this.instance_102 = new lib.meirstanding("synched",0);
	this.instance_102.parent = this;
	this.instance_102.setTransform(368.8,314,0.406,0.52,0,0,180,60.9,168.6);
	this.instance_102._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_99,p:{regY:174.7,scaleX:0.419,scaleY:0.491,x:426.4,y:314.4}},{t:this.instance_98},{t:this.instance_97}]},199).to({state:[{t:this.instance_100,p:{regY:103.4,scaleX:0.791,x:415.3,y:315.2,scaleY:0.853}}]},26).to({state:[{t:this.instance_101,p:{regY:167.8,scaleX:0.43,scaleY:0.528,x:390.7,y:314.9}}]},7).to({state:[{t:this.instance_102}]},7).to({state:[{t:this.instance_99,p:{regY:174.5,scaleX:0.429,scaleY:0.496,x:342.2,y:315.1}}]},7).to({state:[{t:this.instance_100,p:{regY:103.5,scaleX:0.961,x:324,y:316,scaleY:0.853}}]},7).to({state:[{t:this.instance_101,p:{regY:167.6,scaleX:0.475,scaleY:0.518,x:296.2,y:314.5}}]},7).to({state:[{t:this.instance_102}]},7).to({state:[{t:this.instance_99,p:{regY:174.8,scaleX:0.553,scaleY:0.492,x:234.8,y:314.3}}]},7).to({state:[{t:this.instance_100,p:{regY:103.4,scaleX:1.034,x:215.2,y:316.4,scaleY:0.849}}]},7).to({state:[{t:this.instance_100,p:{regY:103.4,scaleX:1.034,x:215.2,y:316.4,scaleY:0.849}}]},7).to({state:[{t:this.instance_102}]},7).to({state:[{t:this.instance_102}]},7).to({state:[{t:this.instance_102}]},21).to({state:[{t:this.instance_102}]},11).to({state:[{t:this.instance_102}]},24).to({state:[]},7).wait(351));
	this.timeline.addTween(cjs.Tween.get(this.instance_102).wait(239).to({_off:false},0).to({_off:true},7).wait(21).to({_off:false,regX:60.7,regY:168.5,scaleX:0.54,scaleY:0.52,x:270.8,y:313.9},0).to({_off:true},7).wait(21).to({_off:false,regX:60.8,regY:168.7,scaleX:0.5,scaleY:0.51,x:201,y:313.5},0).wait(7).to({startPosition:0},0).wait(21).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(24).to({startPosition:0},0).to({_off:true},7).wait(351));

	// Meir is not suitable for the group
	this.instance_103 = new lib.mouth("synched",0);
	this.instance_103.parent = this;
	this.instance_103.setTransform(55.9,183.9,1.417,2.394,0,0,0,2.5,0.6);

	this.instance_104 = new lib.mouth("synched",0);
	this.instance_104.parent = this;
	this.instance_104.setTransform(56,184.2,1.292,1,0,0,0,2.4,0.6);

	this.instance_105 = new lib.mouth("synched",0);
	this.instance_105.parent = this;
	this.instance_105.setTransform(320.4,255.2,1.292,1,0,0,0,2.4,0.5);

	this.instance_106 = new lib.player2standing("synched",0);
	this.instance_106.parent = this;
	this.instance_106.setTransform(320.5,311.3,0.687,0.451,0,0,0,60.1,197.7);

	this.instance_107 = new lib.meirstanding("synched",0);
	this.instance_107.parent = this;
	this.instance_107.setTransform(451.1,314,0.511,0.511,0,0,180,61,168.6);

	this.instance_108 = new lib.coach("synched",0);
	this.instance_108.parent = this;
	this.instance_108.setTransform(52,279.9,1.511,1.315,0,0,0,34.4,91.3);

	this.instance_109 = new lib.cloud("synched",0);
	this.instance_109.parent = this;
	this.instance_109.setTransform(330.5,27.5,1,1,0,0,0,41.5,20.9);

	this.instance_110 = new lib.cloud("synched",0);
	this.instance_110.parent = this;
	this.instance_110.setTransform(487.5,56,1,1,0,0,0,41.5,20.9);

	this.instance_111 = new lib.cloud("synched",0);
	this.instance_111.parent = this;
	this.instance_111.setTransform(163.6,49,1,1,0,0,0,41.5,20.9);

	this.instance_112 = new lib.sun("synched",0);
	this.instance_112.parent = this;
	this.instance_112.setTransform(30.7,31.6,1,1,0,0,0,30.6,30.6);

	this.instance_113 = new lib.ball("synched",0);
	this.instance_113.parent = this;
	this.instance_113.setTransform(193.9,174.3,0.146,0.108,0,0,0,222.4,223);

	this.instance_114 = new lib.playerstanding("synched",0);
	this.instance_114.parent = this;
	this.instance_114.setTransform(387.9,313,0.713,0.515,0,0,0,52.1,169);

	this.instance_115 = new lib.lawn("synched",0);
	this.instance_115.parent = this;
	this.instance_115.setTransform(275.5,200.1,1,1,0,0,0,275.4,87);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104,p:{regY:0.6,x:56,y:184.2}},{t:this.instance_103,p:{regX:2.5,scaleX:1.417,scaleY:2.394,x:55.9,y:183.9}}]},167).to({state:[{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_104,p:{regY:0.5,x:320.4,y:255.2}},{t:this.instance_103,p:{regX:2.4,scaleX:1.292,scaleY:1,x:56,y:184.2}}]},23).to({state:[{t:this.instance_115},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_103,p:{regX:2.4,scaleX:1.292,scaleY:1,x:56,y:184.2}}]},9).to({state:[{t:this.instance_115},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_103,p:{regX:2.4,scaleX:1.292,scaleY:1,x:56,y:184.2}}]},26).to({state:[{t:this.instance_115},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_103,p:{regX:2.4,scaleX:1.292,scaleY:1,x:56,y:184.2}}]},7).to({state:[{t:this.instance_115},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_103,p:{regX:2.4,scaleX:1.292,scaleY:1,x:56,y:184.2}}]},7).to({state:[{t:this.instance_115},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_103,p:{regX:2.4,scaleX:1.292,scaleY:1,x:56,y:184.2}}]},7).to({state:[{t:this.instance_115},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_103,p:{regX:2.4,scaleX:1.292,scaleY:1,x:56,y:184.2}}]},7).to({state:[{t:this.instance_115},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_103,p:{regX:2.4,scaleX:1.292,scaleY:1,x:56,y:184.2}}]},7).to({state:[{t:this.instance_115},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_103,p:{regX:2.4,scaleX:1.292,scaleY:1,x:56,y:184.2}}]},7).to({state:[{t:this.instance_115},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_103,p:{regX:2.4,scaleX:1.292,scaleY:1,x:56,y:184.2}}]},7).to({state:[{t:this.instance_115},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_103,p:{regX:2.4,scaleX:1.292,scaleY:1,x:56,y:184.2}}]},7).to({state:[{t:this.instance_115},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_103,p:{regX:2.4,scaleX:1.292,scaleY:1,x:56,y:184.2}}]},7).to({state:[{t:this.instance_115},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_103,p:{regX:2.4,scaleX:1.292,scaleY:1,x:56,y:184.2}}]},7).to({state:[{t:this.instance_115},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_103,p:{regX:2.4,scaleX:1.292,scaleY:1,x:56,y:184.2}}]},7).to({state:[{t:this.instance_115},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_103,p:{regX:2.4,scaleX:1.292,scaleY:1,x:56,y:184.2}}]},21).to({state:[{t:this.instance_115},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_103,p:{regX:2.4,scaleX:1.292,scaleY:1,x:56,y:184.2}}]},11).to({state:[{t:this.instance_115},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_103,p:{regX:2.4,scaleX:1.292,scaleY:1,x:56,y:184.2}}]},24).to({state:[]},7).wait(351));

	// meir going kick
	this.instance_116 = new lib.meirwalk2("synched",0);
	this.instance_116.parent = this;
	this.instance_116.setTransform(89.1,303.4,1.121,1,0,0,0,33.1,103.4);

	this.instance_117 = new lib.meirwalk3("synched",0);
	this.instance_117.parent = this;
	this.instance_117.setTransform(109.7,300.5,0.617,0.594,0,0,0,70.6,167.8);

	this.instance_118 = new lib.meirstanding("synched",0);
	this.instance_118.parent = this;
	this.instance_118.setTransform(133.2,301.7,0.721,0.591,0,0,0,61.1,168.8);

	this.instance_119 = new lib.meirwalk4("synched",0);
	this.instance_119.parent = this;
	this.instance_119.setTransform(215.4,300.7,0.584,0.568,0,0,0,75.4,179);
	this.instance_119._off = true;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("Egq/gfPMBV/AAAMAAAA+fMhV/AAAg");
	this.shape_12.setTransform(275.2,201.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Egq/AfQMAAAg+fMBV/AAAMAAAA+fg");
	this.shape_13.setTransform(275.2,201.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_116}]},111).to({state:[{t:this.instance_117,p:{regX:70.6,regY:167.8,scaleX:0.617,scaleY:0.594,x:109.7,y:300.5}}]},2).to({state:[{t:this.instance_118}]},2).to({state:[{t:this.instance_117,p:{regX:70.5,regY:167.6,scaleX:0.688,scaleY:0.588,x:172.6,y:301.4}}]},2).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_119}]},20).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_119}]},6).to({state:[{t:this.shape_13},{t:this.shape_12}]},6).to({state:[]},15).wait(549));
	this.timeline.addTween(cjs.Tween.get(this.instance_119).wait(118).to({_off:false},0).wait(1).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(6).to({startPosition:0},0).to({_off:true},6).wait(564));

	// coach say try again
	this.instance_120 = new lib.meirkickagain("synched",0);
	this.instance_120.parent = this;
	this.instance_120.setTransform(290.7,65.6,1,1,0,0,0,39.5,11.8);

	this.instance_121 = new lib.speechbubbles("synched",0);
	this.instance_121.parent = this;
	this.instance_121.setTransform(288.1,67.5,0.817,0.842,0,0,0,65.8,25.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_121},{t:this.instance_120}]},124).to({state:[]},29).wait(563));

	// meir kick
	this.instance_122 = new lib.mouth("synched",0);
	this.instance_122.parent = this;
	this.instance_122.setTransform(227,88.2,1,1,0,0,0,2.4,0.5);

	this.instance_123 = new lib.coach("synched",0);
	this.instance_123.parent = this;
	this.instance_123.setTransform(223.7,161.2,1,1,0,0,0,34.4,91.3);

	this.instance_124 = new lib.cloud("synched",0);
	this.instance_124.parent = this;
	this.instance_124.setTransform(330.5,27.5,1,1,0,0,0,41.5,20.9);

	this.instance_125 = new lib.cloud("synched",0);
	this.instance_125.parent = this;
	this.instance_125.setTransform(487.5,56,1,1,0,0,0,41.5,20.9);

	this.instance_126 = new lib.cloud("synched",0);
	this.instance_126.parent = this;
	this.instance_126.setTransform(163.6,49,1,1,0,0,0,41.5,20.9);

	this.instance_127 = new lib.sun("synched",0);
	this.instance_127.parent = this;
	this.instance_127.setTransform(30.7,31.6,1,1,0,0,0,30.6,30.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("Egq6gI+MBV1AAAIAAR9MhV1AAAg");
	this.shape_14.setTransform(276.3,50.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.996)").s().p("Egq6AI/IAAx9MBV1AAAIAAR9g");
	this.shape_15.setTransform(276.3,50.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122}]},119).to({state:[{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122}]},21).to({state:[{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122}]},6).to({state:[]},7).to({state:[{t:this.shape_15},{t:this.shape_14}]},514).to({state:[]},10).wait(39));

	// meir kick
	this.instance_128 = new lib.ball("synched",0);
	this.instance_128.parent = this;
	this.instance_128.setTransform(388.5,-70.5,0.146,0.108,0,0,0,221.4,218);
	this.instance_128._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_128).wait(119).to({_off:false},0).wait(1).to({regX:51.1,regY:1814.8,x:363.6,y:101.4},0).wait(1).to({startPosition:0},0).wait(1).to({x:476.1,y:101.3},0).wait(1).to({x:588.6,y:101.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(563));

	// sun+gate+player
	this.instance_129 = new lib.mouth("synched",0);
	this.instance_129.parent = this;
	this.instance_129.setTransform(227,88.2,1,1,0,0,0,2.4,0.5);

	this.instance_130 = new lib.coach("synched",0);
	this.instance_130.parent = this;
	this.instance_130.setTransform(223.7,161.2,1,1,0,0,0,34.4,91.3);

	this.instance_131 = new lib.cloud("synched",0);
	this.instance_131.parent = this;
	this.instance_131.setTransform(330.5,27.5,1,1,0,0,0,41.5,20.9);

	this.instance_132 = new lib.cloud("synched",0);
	this.instance_132.parent = this;
	this.instance_132.setTransform(487.5,56,1,1,0,0,0,41.5,20.9);

	this.instance_133 = new lib.cloud("synched",0);
	this.instance_133.parent = this;
	this.instance_133.setTransform(163.6,49,1,1,0,0,0,41.5,20.9);

	this.instance_134 = new lib.sun("synched",0);
	this.instance_134.parent = this;
	this.instance_134.setTransform(30.7,31.6,1,1,0,0,0,30.6,30.6);

	this.instance_135 = new lib.ball("synched",0);
	this.instance_135.parent = this;
	this.instance_135.setTransform(275.5,200,0.146,0.108,0,0,0,222.4,223);

	this.instance_136 = new lib.playerstanding("synched",0);
	this.instance_136.parent = this;
	this.instance_136.setTransform(429.5,217.1,0.713,0.515,0,0,0,52.1,169);

	this.instance_137 = new lib.lawn("synched",0);
	this.instance_137.parent = this;
	this.instance_137.setTransform(275.5,200.1,1,1,0,0,0,275.4,87);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129}]},1).to({state:[{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129}]},24).to({state:[{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129}]},18).to({state:[{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129}]},5).to({state:[{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129}]},33).to({state:[{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129}]},22).to({state:[{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129}]},8).to({state:[{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129}]},3).to({state:[{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129}]},3).to({state:[{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129}]},3).to({state:[{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129}]},1).to({state:[{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129}]},1).to({state:[{t:this.instance_137},{t:this.instance_136}]},1).to({state:[{t:this.instance_137},{t:this.instance_136}]},21).to({state:[{t:this.instance_137},{t:this.instance_136}]},6).to({state:[]},7).to({state:[]},551).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275.1,200.1,551,402);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 18,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;