const fdk = require("@fnproject/fdk");
const oracledb = require("oracledb");
oracledb.outFormat = oracledb.OBJECT;
// oracledb.fetchAsString = [oracledb.CLOB];

let pool;

fdk.handle(async function(input) {
  if (!pool) {
    pool = await oracledb.createPool({
      user: process.env.DB_USER || "admin",
      password: process.env.DB_PASSWORD || "123QWEasdZXC.",
      connectString: process.env.CONNECT_STRING || "madhack2_low"
    });
  }
  const connection = await pool.getConnection();
  const records = await connection.execute(
    `SELECT
      PRODUCT,
      CUSTOMER,
      PURCHASECOUNT,
      ECOMMERCE_PRODUCT_NAME,
      CURRENT_PRICE,
      REGULAR_PRICE,
      URL
    FROM
        JOSUELOZANO.SHOPPINGFREQUENCY
    WHERE
        "CUSTOMER" = '${input.user}'`
  );
  // const result = records.rows.map(row => {
  //   return {
  //     product: row.PRODUCT,
  //     popularity: row.POPULARITY
  //   };
  // });
  await connection.close();
  return records;
}, {});
