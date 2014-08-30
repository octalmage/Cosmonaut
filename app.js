var gui = require('nw.gui'); 
var win = gui.Window.get();

var mb = new gui.Menu({type:"menubar"});
mb.createMacBuiltin("Cosmonaut");
win.menu = mb;

win.showDevTools();

$(document).on("ready", function()
{
	$("#start").on("click", function()
	{
		chooseFile('#fileDialog');
	})
});

function chooseFile(name) 
{
    var chooser = $(name);
    chooser.change(function(evt) 
    {
    	domain=$("#sitename").val();
      	destination=$(this).val();
    });

	chooser.trigger('click');  
}
/*
	Going to use wget for now until I have time to rewrite it. 
	wget --recursive --no-clobber --page-requisites --html-extension --convert-links --restrict-file-names=windows --domains example.com --no-parent example.com
 */



  