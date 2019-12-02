function updateLocalStorage(row) {
	let table = row.getTable();
	let tableData = table.getData();
	let tableDataJSON = JSON.stringify(tableData);
	// Get table ID
	let tableID = table.element.id;
	localStorage.setItem(`tableData-${tableID}`, tableDataJSON);
}

const tableOptions = {
	reactiveData: true,
	// Add new rows to top of table
	addRowPos: 'top',
	initialSort: [
		{
			column: 'start_date',
			dir: 'desc'
		}
	],
	layout: 'fitColumns',
	// If mobile screen too small, hide columns
	responsiveLayout: 'hide',
	// Pagination
	pagination: false,
	// Move and resize
	movableColumns: false,
	movableRows: true,
	// Enable moving tasks between tables
	movableRowsConnectedTables: ['.current-todos', '.backlog-todos'],
	// Delete row from original table after move
	movableRowsSender: 'delete',
	resizableColumns: true,
	resizableRows: true,
	// Other
	// Enables Ctrl+Z in text fields
	history: true,
	// Disable highlighting on hover
	selectable: false,
	tooltips: false,
	// Callbacks
	// Update cell contents
	cellEdited: function(row) {
		updateLocalStorage(row);
	},
	// Drag row from #current-table <-> #backlog-table
	// Dragging consists of a) re-creating in new table and b)
	// deleting from previous table
	rowAdded: function(row) {
		updateLocalStorage(row);
	},
	rowDeleted: function(row) {
		updateLocalStorage(row);
	},
	// Called when row modified by the 'Additional Info' modal
	rowUpdated: function(row) {
		updateLocalStorage(row);
	}
};

export default tableOptions;
