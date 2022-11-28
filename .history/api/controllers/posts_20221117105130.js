export const getPosts =(req,res) =>{
  const q = `SELECT p FROM posts AS p JOIN users AS u ON (u.id = p.userId)`  
}