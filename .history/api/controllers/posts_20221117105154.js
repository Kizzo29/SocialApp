export const getPosts =(req,res) =>{
  const q = `SELECT p.*,u.id AS  FROM posts AS p JOIN users AS u ON (u.id = p.userId)`  
}