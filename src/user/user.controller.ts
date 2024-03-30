import { Request, Response } from "express";
export const userInfo = async (req: Request, res: Response, next: any) => {
  return res.json({ message: "hellow world iam mohamed" });
};
