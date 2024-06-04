import { useState, useReducer, useMemo } from 'react'
import { useReactTable , getCoreRowModel, flexRender, createColumnHelper, getSortedRowModel } from '@tanstack/react-table'
import jsonData from './data.json'

function App({
  customState,
  setSortingCallback
}) {
  const rerender = useReducer(() => ({}), {})[1]

  const [sorting, setSorting] = useState([])
  const [data, setData] = useState(jsonData)

  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName',
        cell: info => info.getValue(),
        //this column will sort in ascending order by default since it is a string column
      },
      {
        accessorFn: row => row.lastName,
        id: 'lastName',
        cell: info => info.getValue(),
        header: () => <span>Last Name</span>,
        sortUndefined: 'last', //force undefined values to the end
        sortDescFirst: false, //first sort order will be ascending (nullable values can mess up auto detection of sort order)
      },
      {
        accessorKey: 'age',
        header: () => 'Age',
        //this column will sort in descending order by default since it is a number column
      },
      {
        accessorKey: 'visits',
        header: () => <span>Visits</span>,
        sortUndefined: 'last', //force undefined values to the end
      },
      {
        accessorKey: 'status',
        header: 'Status',
        //sortingFn: sortStatusFn, //use our custom sorting function for this enum column
      },
      {
        accessorKey: 'progress',
        header: 'Profile Progress',
        // enableSorting: false, //disable sorting for this column
      },
      {
        accessorKey: 'rank',
        header: 'Rank',
        invertSorting: true, //invert the sorting order (golf score-like where smaller is better)
      },
      {
        accessorKey: 'createdAt',
        header: 'Created At',
        // sortingFn: 'datetime' //make sure table knows this is a datetime column (usually can detect if no null values)
      },
    ],
    []
  )



  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(), //client-side sorting
    //onSortingChange: setSorting, //optionally control sorting state in your own scope for easy access
    // sortingFns: {
    //   sortStatusFn, //or provide our custom sorting function globally for all columns to be able to use
    // },
    //no need to pass pageCount or rowCount with client-side pagination as it is calculated automatically
    //state: { sorting,},
    // autoResetPageIndex: false, // turn off page index reset when sorting or filtering - default on/true
    // enableMultiSort: false, //Don't allow shift key to sort multiple columns - default on/true
    // enableSorting: false, // - default on/true
    // enableSortingRemoval: false, //Don't allow - default on/true
    // isMultiSortEvent: (e) => true, //Make all clicks multi-sort - default requires `shift` key
    // maxMultiSortColCount: 3, // only allow 3 columns to be sorted at once - default is Infinity
    state: customState,
    onSortingChange: setSortingCallback
  })

  //access sorting state from the table instance
  console.log(table.getState().sorting)

  return (
    <div className="p-2">
      <div className="h-2" />
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        className={
                          header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : ''
                        }
                        onClick={header.column.getToggleSortingHandler()}
                        title={
                          header.column.getCanSort()
                            ? header.column.getNextSortingOrder() === 'asc'
                              ? 'Sort ascending'
                              : header.column.getNextSortingOrder() === 'desc'
                                ? 'Sort descending'
                                : 'Clear sort'
                            : undefined
                        }
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted()] ?? null}
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table
            .getRowModel()
            .rows.slice(0, 10)
            .map(row => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
        </tbody>
      </table>
      <div>{table.getRowModel().rows.length.toLocaleString()} Rows</div>
      
    </div>
  )
}

export default App
