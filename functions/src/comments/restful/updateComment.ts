import db from "../../config/firestore.config";
import createRestfulFunction, { MethodEnum } from "../../utils/helpers";

const updateComment = createRestfulFunction({
    method:MethodEnum.PATCH,
    callback: async (req,res)=>{
        try{
            const docId = req.params["0"];
            const description = req.body["description"];
            
            const query = db.collection("comments").doc(docId);
            await query.set({description},{merge:true});
            const snap = await query.get();

            res.status(200).json({
                message: "Comment updated",
                data:{
                    id:docId,
                    comment: snap.data(),
                },
            });
        } catch(err){
            res.status(500).json({
                message:"Error",
                err,
            });
        }
    },
});

export default updateComment;