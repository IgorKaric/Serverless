import * as functions from "firebase-functions"
import { Comment } from "../models/comment";

var censure= ["pussy","penis","dick","tits","tit","loncar","asshole","fucking","fuck","bitch","bbc","niggas","nigga"];

const onCreateComment = functions.firestore
    .document("comments/{commentId}")
    .onCreate(async (snapshot,context)=>{
        const comment = <Comment>snapshot.data();

        censure.forEach(word=>{

            if(comment.description.includes(word)){
                var newWord = "";
                for(let i=0;i<word.length;i++){
                    newWord+="*";
                }
                comment.description = comment.description.replace(new RegExp(word,"g"), newWord);
                console.log(comment.description);

                return snapshot.ref.update({description:comment.description});
            }
            
            return null;
        });';\'
        return null;
    });
export default onCreateComment;

