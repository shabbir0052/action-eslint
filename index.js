const snowflake = require('snowflake-sdk')

const connection = snowflake.createConnection({
  account: 'csaa',
  username: 'SVC_DEV_MARBLE_API',
  password: 'MarbleAPI21!',
  database: 'DEV_CUST_DB',
  schema: 'LOYALTY',
  warehouse: 'DEV_WHS'
})

connection.connect(function (err, conn) {
  if (err) {
    console.error('Unable to connect: ' + err.message)
  } else {
    console.log('Successfully connected to Snowflake.')
    // Optional: store the connection ID.
    const connection_ID = conn.getId()
    const statement = conn.execute({
      sqlText:
        "select * from LOYALTY_EVENTS where policynumber = 'COSS202147149'",
      complete: function (err, stmt, rows) {
        if (err) {
          console.error(
            'Failed to execute statement due to the following error: ' +
              err.message
          )
        } else {
          console.log('Successfully executed statement: ' + stmt.getSqlText())
          console.log(`rows returned --> ${JSON.stringify(rows)}`)
        }
      }
    })
  }
})
