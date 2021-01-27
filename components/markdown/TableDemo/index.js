import * as React from 'react'

const TableDemo = () => {
  const [source, setSource] = React.useState('2.3,6,9\n12,3.44,5\n9,2,2')
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(true)
  const [store, setStore] = React.useState(() => {})
  const [parse, setParse] = React.useState(() => {})
  const [records, setRecords] = React.useState([])

  React.useEffect(() => {
    import('./csvlib').then(({ parse, store }
    ) => {
      setRecords(parse(`${source}\n`))
      setParse(() => parse)
      setStore(() => store)
      setLoading(false)
      setError(false)
    })
  }, [])

  const onChange = (event) => {
    const value = event.target.value

    try {
      setError(false)
      setSource(value)
      setRecords(parse(`${value}\n`))
    } catch {
      setError(true)
    }
  }

  const onClick = () => {
    const value = prompt('Add a new row. Floats separated by commas:')
    const items = parse(`${value}\n`)
    const newRecords = [...records, ...items]

    setRecords(newRecords)
    setSource(store(newRecords))
  }

  return (
    <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-10 mb-6">
      <h3 className="mt-4 mb-2 text-4xl font-black leading-none font-display">
        Markdown UI - Table
      </h3>

      <div className="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 mb-4 shadow-md" role="alert">
        <div className="flex">
          <div className="py-1"><svg className="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
          <div>
            <p className="font-bold">✨ Check this out 👇</p>
            <p className="text-sm">This textarea is interactive. Change the markdown value or add rows to React table. They are in sync</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="w-full p-4 shadow-md shadow-md bg-white rounded-md">
          <h4 className="my-2 font-black leading-none font-display">
            <svg className="w-5 h-5 inline text-gray-800 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Markdown
          </h4>
          <textarea value={source} onChange={onChange} className="font-mono w-full h-40 resize-none"/>
        </div>
        <div className="flex justify-center">
          <svg className="w-5 h-5 inline text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
        <div className="w-full p-4 shadow-md shadow-md bg-white rounded-md">
          <h4 className="my-2 font-black leading-none font-display">
            <svg className="w-5 h-5 inline text-gray-800 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
            React
          </h4>
          <div className="text-center">
            {loading && (
              <span>
                Loading...
              </span>
            )}
            {!loading && error && (
              <span className="text-red-800 font-bold py-2 px-4">
                Error: Unable to parse this markdown table!
              </span>
            )}
            {!loading && !error && (
              <>
                <table className="table-auto border-collapse border border-green-800">
                  <tbody>
                    {records.map((record, index) => (
                      <tr key={index}>
                        {record.fields.map((field, index) => (
                          <td key={index} className="border-2 border-green-600 px-6 py-2 text-center w-1/3">
                            {field.value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex flex-row justify-center">
                  <button onClick={onClick} className="w-48 text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                    <span>Add new row</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableDemo
