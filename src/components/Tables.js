import Table from "./Table";

const Tables = ({ values: {started, resetKey, tableValues, pcValues, userValues}}) => {
    const pcTable = (started) ? <Table key={`B${resetKey}`} values={{...tableValues, ...pcValues}}/> : null;

    return (
        <div className='tables-display'>
            <Table
                key={`A${resetKey}`}
                values={{...tableValues, ...userValues}}
            />
            {pcTable}
        </div>
    )
}

export default Tables;