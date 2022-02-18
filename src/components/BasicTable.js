import React, {useMemo} from 'react'
import {useTable, useSortBy, useGlobalFilter, usePagination} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import './table.css';
import GlobalFilter from './GlobalFilter';

const BasicTable = () => {

	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

		const {
			getTableProps,
			getTableBodyProps,
			headerGroups,
			prepareRow,
			page,
			nextPage,
			previousPage,
			canNextPage,
			canPreviousPage,
			pageOptions,
			state, 
			setGlobalFilter,
		} = useTable({
		columns,
		data,
		},
		 useGlobalFilter,
		useSortBy, 
		usePagination);


	const {globalFilter, pageIndex} = state;

	return (
		<>
		<div style={{display: 'flex', justifyContent: 'space-around'}}>
			<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
			<span onClick={()=>setGlobalFilter('bdaffey')} >bdaffey</span>
			<span onClick={()=>setGlobalFilter('Berkeley Sammon')} >Berkeley Sammon</span>
			<span onClick={()=>setGlobalFilter('')} >All</span>
			
			<select onChange={e=>setGlobalFilter(e.target.value)}>
				{
					['@dmoz.org', "Talaga", "China", "257", "Berkeley Sammon", "bdaffey"].map((value, i) => (
						<option key={i} value={value}>{value}</option>
					))
				}
			</select>
		</div>
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
						<th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
						<span>
							{column.isSorted ? (column.isSortedDesc ? '<': '>'): ''}
						</span>
						</th>
						))} 
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{page.map((row) => {
					prepareRow(row)
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return (
									<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
								)
							})}
						</tr>
					)
				})}
			</tbody>
		</table>
		<div style={{display: 'flex', justifyContent: 'space-around'}}>
			<button onClick={()=>previousPage()} disabled={!canPreviousPage}>{'<'}</button>
			<strong>Page {pageIndex + 1} of {pageOptions.length}</strong>
			<button onClick={()=>nextPage()} disabled={!canNextPage}>{'>'} </button>
		</div>
		</>
	)
}


export default BasicTable;
