/* Package scope methods that can be called on the client or server */


// Extract swatches from text return a
extractSwatches = function(text, pid) {
	var swatches = Huely.extract(text);
	// If Huely extracts swatches, insert them into a new palette
	if (!_.isEmpty(swatches)) {
		if (pid && Palettes.findOne(pid)) {
			return Palettes.update({_id: pid}, {swatches: swatches, text: text});
		} else{};
		return Palettes.insert({swatches: swatches, text: text});
	} else {
		return null;
	};
};

renderPalette = function() {
	$('.gridly').gridly({
	      base: 60, // px 
	      gutter: 20, // px
	      columns: 10,
	      draggable: {
	        zIndex: 800,
	        selector: '> *'
	      }
	  });
	$('.palette .swatch-item').each(function(index, el) {
		setTimeout(function() {
			$(el).addClass('fade-in');
		}, Math.floor(index/5)*100);
	});
}


samples = ["Basic #HEX Colors\n#F29727 #E05723 #B0382F #982E4B #713045\n#F29727 #E05723 #B0382F #982E4B #713045\n#F29727 #E05723 #B0382F #982E4B #713045\n#F29727 #E05723 #B0382F #982E4B #713045\n", "RGB and RGBA Support too!\nrgba(0,0,0,1);\nrgba(0,0,0,0.9);\nrgba(0,0,0,0.8);\nrgba(0,0,0,0.7);\nrgba(0,0,0,0.6);\nrgba(0,0,0,0.5);\nrgba(0,0,0,0.4);\nrgba(0,0,0,0.3);\nrgba(0,0,0,0.2);\nrgba(0,0,0,0.1);\n", "Sass Variable Names are Extracted!\n$dark-blue: #334D5C;\n$turquoise: #45B29D;\n$yellowy-color: #EFC94C;\n$tangerine-color: #E27A3F;\n$grapefruit: #DF4949;\n$dark-blue: #334D5C;\n$turquoise: #45B29D;\n$yellowy-color: #EFC94C;\n$tangerine-color: #E27A3F;\n$grapefruit: #DF4949;\n", "Less Variables Work Too!\n@dark-blue: #334D5C;\n@turquoise: #45B29D;\n@yellowy-color: #EFC94C;\n@tangerine-color: #E27A3F;\n@grapefruit: #DF4949;\n"]
