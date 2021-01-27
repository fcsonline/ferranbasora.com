const TableDemo = () => {
  const value = `
    \`\`\`kanban
      ## Progress

      - Task 1
      - Task 2

      ## Done
      - Task 3
      - Task 4
    \`\`\`
  `

  return (
    <div className="border-4 border-indigo-600 p-4" onClick={() => alert('MDX!')}>
      <h2 className="mt-4 mb-2 text-4xl font-black leading-none font-display">
        Markdown UI - Table
      </h2>
      <div className="flex flex-row sm:flex-column gap-2">
        <div className="border-4 border-indigo-600 w-1/2 p-4">
          <h3 className="my-2 font-black leading-none font-display">
            Markdown
          </h3>
          <textarea defaultValue={value}>
          </textarea>
        </div>
        <div className="border-4 border-red-600 w-1/2 p-4">
          <h3 className="my-2 font-black leading-none font-display">
            React
          </h3>
          <div className="border-2 border-red-600">
              Progress
              Done
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableDemo
