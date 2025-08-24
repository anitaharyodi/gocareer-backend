import { NextFunction, Request, Response } from "express";
import {
  SCreateSekolah,
  SDeleteSekolah,
  SGetAllSekolah,
  SUpdateSekolah,
} from "../service/sekolah.service";

export const CCreateSekolah = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const r = await SCreateSekolah(req.body);
    res.status(200).json(r);
  } catch (e: any) {
    res
      .status(400)
      .json({ status: false, message: e.message || "Internal server error!" });
  }
};

export const CUpdateSekolah = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const r = await SUpdateSekolah({ ...req.body, id });
    res.status(200).json(r);
  } catch (e: any) {
    res
      .status(400)
      .json({ status: false, message: e.message || "Internal server error!" });
  }
};

export const CGetAllSekolah = async (req: Request, res: Response) => {
  try {
    const { kabupatenId } = req.query;
    const response = await SGetAllSekolah(
      kabupatenId ? Number(kabupatenId) : undefined
    );
    res.json(response);
  } catch (error: any) {
    res.status(500).json({ status: false, message: error.message });
  }
};

export const CDeleteSekolah = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const r = await SDeleteSekolah(id);
    res.status(200).json(r);
  } catch (e: any) {
    res
      .status(400)
      .json({ status: false, message: e.message || "Internal server error" });
  }
};
