var gui = require('nw.gui'); 
var win = gui.Window.get();

var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { console.log("") }

function done(error, stdout, stderr) { alert("Done!") }

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
      	exec("bin/wget -P " + destination + " --recursive --no-clobber --page-requisites --html-extension --convert-links --restrict-file-names=windows --domains " + domain + " --no-parent " + domain, done);
    });

	chooser.trigger('click');  
}
/*
	Going to use wget for now until I have time to rewrite it. 
	wget --recursive --no-clobber --page-requisites --html-extension --convert-links --restrict-file-names=windows --domains example.com --no-parent example.com
 */



  