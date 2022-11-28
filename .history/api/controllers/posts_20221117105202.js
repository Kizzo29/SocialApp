export const getPosts =(req,res) =>{
  const q = `SELECT p.*,u.id AS userId, FROM posts AS p JOIN users AS u ON (u.id = p.userId)`  
}