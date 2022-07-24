import initSqlite from 'sql.js'

async function main() {
  console.log(`downloading`);
  console.time('fetch')
  const response = await fetch('/khmer-dict.db')
  const arrayBuffer = await response.arrayBuffer();
  const fileSize = arrayBuffer.byteLength / 1024 / 1024;
  console.timeEnd('fetch')
  console.log(`file size = ${fileSize}mb`);

  const SQL = await initSqlite({
    locateFile: file => `https://sql.js.org/dist/${file}`
  })

  const db = new SQL.Database(new Uint8Array(arrayBuffer));
  const result = await db.exec('SELECT * FROM dict LIMIT 10');
  console.log(result);

}

main()