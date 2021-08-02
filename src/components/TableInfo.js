const TableInfo = (props) => {
    const {tableName, status, started} = props.info;
    const tableStatus = (started) ? <h2>{status} Ships Available {started}</h2>: null;

    return (
        <div>
            <div className='table-name'>
                <h2>{tableName} Board</h2>
            </div>
            <div className='table-status'>
                {tableStatus}
            </div>
        </div>
    )
}

export default TableInfo;