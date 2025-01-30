import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "ipfs_user",
  host: "/home/runner/postgres_data", // Make sure this is the correct path
  database: "ipfs_storage",
  password: "mypassword",
  port: 5432,
});

export default pool; // Use ES module export
