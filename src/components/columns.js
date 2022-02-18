
export const COLUMNS = [
	{
		Header: 'id',
		accessor: 'i',
	},
	{
		Header: 'Name',
		accessor: 'name',		
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
		accessor: "o",
		Cell: ({ row : {original} })=>( <button onClick={()=>{alert("Name : " + original.name)}}>button</button>),
	}
]