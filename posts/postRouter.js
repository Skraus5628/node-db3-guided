const express = require("express")
const db = require("../data/config")
const postModel = require("./postModel");
const router = express.Router({
    mergeParams: true,
})

router.get("/", async (req, res, next) =>{
    try{
        const { id } = req.params
        const posts = await postModel.findByUserId(id)
        //  same as 'const id = req.params.id
        // const posts = await db("posts as p") 
        //     // FROM posts AS p
        //     .join("users as u", "u.id", "p.user_id")
        //     // INNER JOIN users AS u ON u.id = p.user_id
        //     .where("user_id", id)
        //     // WHERE user_id = ?
        //     .select("p.id", "p.contents", "u.username")
        //     // SELECT p.id, p.contents, u.username
        res.json(posts)
    } catch(err){
        next(err)
    }
})

module.exports = router