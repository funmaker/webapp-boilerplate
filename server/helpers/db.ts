import { Pool } from 'pg';
import SQL, { SQLStatement } from "sql-template-strings";
import configs from './configs';
import migrate from './migration';

export const pool = new Pool(configs.db);

export const migration = migrate(pool).catch(console.error);

const db = {
  pool,
  
  async queryFirst<T>(query: SQLStatement) {
    await migration;
    const { rows } = await pool.query<T>(query);
    if(rows.length <= 0) return null;
    return rows[0];
  },
  
  async queryAll<T>(query: SQLStatement) {
    await migration;
    const { rows } = await pool.query<T>(query);
    return rows;
  },
  
  async query<T>(query: SQLStatement) {
    await migration;
    return await pool.query<T>(query);
  },
  
  updateFields<T>(fields: Partial<T>) {
    let update = SQL``;
    
    for(const field of Object.keys(fields) as Array<keyof T>) {
      if(fields[field] === undefined) continue;
      
      update = update.append(`"${field}"`).append(SQL` = ${fields[field]}`);
    }
    
    if(update.query.length <= 0) return null;
    else return update;
  },
};

export default db;
