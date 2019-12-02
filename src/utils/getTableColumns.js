import { dateEditor, DATE_FORMAT } from './dateEditor';
import { colorFormatter, plusFormatter } from './customFormatters';

function getTableColumns(showModal) {
	return [
		// Row handle for dragging rows between tables
		{
			field: 'row_drag_handler',
			formatter: 'handle',
			frozen: true,
			headerSort: false,
			rowHandle: true,
			width: 25,
			resizable: false,
			// Hide first
			responsive: 2
		},
		{
			title: 'Objective',
			field: 'objective',
			align: 'left',
			editor: 'textarea',
			minWidth: 180,
			// Always display
			responsive: 0,
			formatter: 'textarea'
		},
		{
			title: 'Priority',
			field: 'priority',
			align: 'center',
			editor: 'select',
			editorParams: {
				values: ['High', 'Medium', 'Low']
			},
			formatter: colorFormatter,
			minWidth: 95
		},
		{
			title: 'Start Date',
			field: 'start_date',
			align: 'center',
			editor: dateEditor,
			formatter: 'datetime',
			formatterParams: {
				inputFormat: DATE_FORMAT,
				invalidPlaceholder: '',
				outputFormat: DATE_FORMAT
			},
			minWidth: 95,
			// Hide first
			responsive: 2,
			sorter: 'date'
		},
		{
			title: 'End Date',
			field: 'end_date',
			align: 'center',
			editor: dateEditor,
			formatter: 'datetime',
			formatterParams: {
				inputFormat: DATE_FORMAT,
				invalidPlaceholder: '',
				outputFormat: DATE_FORMAT
			},
			minWidth: 95,
			// Hide first
			responsive: 2,
			sorter: 'date'
		},
		{
			title: 'Progress',
			field: 'progress',
			align: 'center',
			editor: 'select',
			editorParams: {
				values: ['Done', 'In Progress', 'Falling Behind', 'Planning']
			},
			formatter: colorFormatter,
			minWidth: 95
		},
		{
			title: 'FTEs',
			field: 'ftes',
			align: 'center',
			editor: 'select',
			editorParams: {
				values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
			},
			minWidth: 70,
			// Hide first
			responsive: 2
		},
		{
			title: 'O&M',
			field: 'o_and_m',
			align: 'center',
			editor: 'input',
			formatter: 'money',
			formatterParams: {
				decimal: '.',
				precision: 0,
				symbol: '$',
				thousand: ' '
			},
			minWidth: 70,
			// Hide first
			responsive: 2
		},
		// Only visible to and edited by additional info modal
		{
			title: 'Project Lead',
			field: 'project_lead',
			visible: false
		},
		// Only visible to and edited by additional info modal
		{
			title: 'Cost Centre',
			field: 'cost_centre',
			visible: false
		},
		// Only visible to and edited by additional info modal
		{
			title: 'Last Edited By',
			field: 'last_edited_by',
			visible: false
		},
		{
			field: 'more_info_button',
			align: 'center',
			cellClick: (e, cell) => {
				// Pass row data
				// Needed for both row ID and for displaying row data in modal
				showModal(cell.getRow().getData());
			},
			formatter: plusFormatter,
			headerSort: false,
			// Always display
			responsive: 0,
			width: 55
		},
		{
			field: 'delete_row_button',
			align: 'center',
			cellClick: function(e, cell) {
				cell.getRow().delete();
			},
			formatter: 'buttonCross',
			headerSort: false,
			// Always display
			responsive: 0,
			width: 55
		}
	];
}

export default getTableColumns;
