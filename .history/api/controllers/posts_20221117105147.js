export const getPosts =(req,res) =>{
  const q = `SELECT p.*,u FROM posts AS p JOIN users AS u ON (u.id = p.userId)`  
}