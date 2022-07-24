
async function main() {
  console.log(`downloading`);
  console.time('fetch')
  const response = await fetch('/khmer-dict.db')
  const arrayBuffer = await response.arrayBuffer();
  const fileSize = arrayBuffer.byteLength / 1024 / 1024;
  console.timeEnd('fetch')
  console.log(`file size = ${fileSize}mb`);
}


main()