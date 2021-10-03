const TableInfo = ({ info: {tableName, status, started} }) => {
    const tableStatus = (started) ? <h2>{status} Ships Available {started}</h2>: null;

    return (
        <div className='table-info'>
            <h2>{tableName} Board</h2>
            {tableStatus}
        </div>
    )
}

export default TableInfo;