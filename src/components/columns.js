
export const COLUMNS = [
	{
		Header: 'id',
		accessor: 'i',
	},
	{
		Header: 'Name',
		accessor: 'name',
		// Cell: ({value})=>{return value.slice(0, 8)},
		
	},
	{
		Header: 'Email',
		accessor: 'email',
		
	},
	{
		Header: 'Street',
		accessor: 'address.street',
		
	},
	{
		Header: 'Phone',
		accessor: 'address.phone',
		
	},
	{
		Header: 'Country',
		accessor: 'country',
		
	},
	{
		Header: 'button',
		accessor: "id",
		Cell: ({value})=>{return <button onClick={()=>{console.log(value)}}>button</button>},
	}
]