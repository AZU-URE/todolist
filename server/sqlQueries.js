const sql = require('./config/db')

const func = async () => {
    await sql.query("USE practice_project_db")
    const name = await sql.query("SHOW TABLES")
    console.log(name);
}

func();


