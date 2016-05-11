/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-11 18:24:53
 * @version $Id$
 */

function Editor(selector) {
	this.$editor = $(selector)
	this.bindEvents_()
	//私有函数加个下划线
}
Editor.prototype.bindEvents_ = function() {
	this.$editor.on('click','button',function(e) {
		switch(e.currentTarget.id) {
			case 'bold' :
				document.exeCommand('bold')
				break
			case 'italic' :
				document.exeCommand('italic')
				break
			case 'underline' :
				document.exeCommand('underline')
				break
		}
	})
}