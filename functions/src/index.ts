// import * as functions from "firebase-functions";

import onCreateComment from "./comments/reactive/onCreateComment";
import createComment from "./comments/restful/createComment";
import deleteComment from "./comments/restful/deleteComment";
import getAllComments from "./comments/restful/getComments";
import updateComment from "./comments/restful/updateComment";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

// export const helloWorld = functions.https.onRequest((request, response) => {
//     if(request.method ==="GET"){
//         response.status(200).json({message:"Hello from Firebase!"});
//     }else{
//         response.status(400).json({message:"Bad request"});
//     }
// });

exports.createComment = createComment;
exports.getAllComments = getAllComments;
exports.deleteComment = deleteComment;
exports.updateComment = updateComment;
exports.onCreateComment = onCreateComment;