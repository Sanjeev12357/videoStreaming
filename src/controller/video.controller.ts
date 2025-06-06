import { Request, Response } from "express";


export const uploadVideoController = async (req: Request, res: Response) => {
    if(!req.file){
         res.status(400).json({ message: "No file uploaded" });
        return;
    }

    const videoPath=req.file?.path;
    res.status(200).json({ message: "Video uploaded successfully", videoPath });
}