import { NextFunction, Request, Response } from "express";
import { SGetTesMinat } from "../service/tesminat.service";

export const CGetTesMinat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const r = await SGetTesMinat();
    res.status(200).json(r);
  } catch (e: any) {
    res
      .status(400)
      .json({ status: false, message: e.message || "Internal server error" });
  }
};
