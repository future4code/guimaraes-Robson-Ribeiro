import { connection } from '../data/connection'

export const getActorById = async (id: string ) : Promise<any> =>{
   const result = await connection.raw(`SELECT * FROM Actor WHERE id = ${id}`)

   return result[0][0]
}

export const searchActor = async (name: string): Promise<any> => {
   const result = await connection.raw(`
     SELECT * FROM Actor WHERE name = "${name}"
   `)
   return result
 }

 export const countActors = async (gender: string): Promise<any> => {
   const result = await connection.raw(`
     SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
   `);
   const count = result[0][0].count;
   return count;
 };


 export const updateActor = async (id: string, salary: number): Promise<any> => {
   await connection("Actor")
     .update({
       salary: salary,
     })
     .where("id", id);
 };