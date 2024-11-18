import { Pool } from "pg";

const pool = new Pool({
  user: "neondb_owner",
  host: "ep-winter-meadow-a1rl5fyt.ap-southeast-1.aws.neon.tech",
  database: "portfolio",
  password: "wKjitN0ag6eO",
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
