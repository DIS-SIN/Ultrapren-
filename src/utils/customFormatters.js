// Map dropdown text to background colours
const textColorMap = {
	// Priority column
	'High': '#ff3d57',
	'Medium': '#fc0',
	'Low': '#00d647',
	// Progress column
	'Done': '#00d647',
	'In Progress': '#fc0',
	'Falling Behind': '#ff3d57',
	'Planning': '#595ad4'
};

function colorFormatter(cell, formatterParams, onRendered) {
	let cellValue = cell.getValue();
	// Set background colour according to value chosen in dropdown
	cell.getElement().style.backgroundColor = textColorMap[cellValue];
	// Tabulator JS requires cell text be returned by formatter funcs
	return cellValue;
}

function plusFormatter(cell, formatterParams, onRendered) {
	return '<svg class="svg-exclude" enable-background="new 0 0 304.223 304.223" version="1.1" viewBox="0 0 304.223 304.223" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g fill="#26a69a"><path d="m152.11 0c-83.871 0-152.1 68.244-152.1 152.11 0 83.865 68.233 152.11 152.1 152.11 83.865 0 152.1-68.244 152.1-152.11 1e-3 -83.87-68.237-152.11-152.1-152.11zm0 275.99c-68.32 0-123.89-55.565-123.89-123.88 0-68.326 55.571-123.89 123.89-123.89s123.89 55.565 123.89 123.89c0 68.31-55.577 123.88-123.89 123.88z"/><path d="m221.92 139.19h-56.887v-56.888c0-7.141-5.782-12.929-12.923-12.929s-12.929 5.782-12.929 12.929v56.887h-56.887c-7.141 0-12.923 5.782-12.923 12.929 0 7.141 5.782 12.923 12.923 12.923h56.882v56.893c0 7.142 5.787 12.923 12.929 12.923 7.141 0 12.929-5.782 12.929-12.923v-56.893h56.882c7.142 0 12.929-5.782 12.929-12.923 4e-3 -7.147-5.784-12.928-12.925-12.928z"/></g></svg>';
}

export { textColorMap, colorFormatter, plusFormatter };
