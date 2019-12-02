import moment from 'moment';

const DATE_FORMAT = 'YYYY-MM-DD';

function dateEditor(cell, onRendered, success, cancel, editorParams) {
	let editor = document.createElement('input');
	editor.setAttribute('type', 'date');
	editor.style.width = '85%';
	editor.value = moment(cell.getValue(), DATE_FORMAT);
	onRendered(function() {
		editor.focus();
		editor.style.css = '100%';
	});
	function successFunc() {
		success(moment(editor.value, DATE_FORMAT));
	}
	editor.addEventListener('blur', successFunc);
	editor.addEventListener('change', successFunc);
	return editor;
}

export { DATE_FORMAT, dateEditor };
