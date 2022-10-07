import db from "../../config/firestore.config";
import createRestfulFunction, { MethodEnum } from "../../utils/helpers";


const deleteComment = createRestfulFunction({
    method:MethodEnum.DELETE,
    callback: async (req,res)=>{
        try{
            const docId = req.params["0"];

            const query = db.collection("comments").doc(docId);
            await query.delete();

            res.status(200).json({
                message:"Comment deleted",
                data:{
                    id:docId,
                },
            });
        }catch(err){
            res.status(500).json({
                message:"Error",
                err,
            });
        }
    },
});

export default deleteComment;