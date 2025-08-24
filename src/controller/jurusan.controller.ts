import { NextFunction, Request, Response } from "express";
import {
  SCreateJurusan,
  SDeleteJurusan,
  SGetAllJurusan,
  SUpdateJurusan,
} from "../service/jurusan.service";

export const CCreateJurusan = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const r = await SCreateJurusan(req.body);
    res.status(200).json(r);
  } catch (e: any) {
    res
      .status(400)
      .json({ status: false, message: e.message || "Internal server error!" });
  }
};

export const CUpdateJurusan = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id))
      return res.status(400).json({ status: false, message: "Invalid ID" });
    const r = await SUpdateJurusan({ ...req.body, id });
    res.status(200).json(r);
  } catch (e: any) {
    res
      .status(400)
      .json({ status: false, message: e.message || "Internal server error!" });
  }
};

export const CGetAllJurusan = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tipeSekolah = (req.query.tipeSekolah as string) || undefined;

    const r = await SGetAllJurusan(tipeSekolah);
    res.status(200).json(r);
  } catch (e: any) {
    res
      .status(400)
      .json({ status: false, message: e.message || "Internal server error" });
  }
};

export const CDeleteJurusan = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const r = await SDeleteJurusan(id);
    res.status(200).json(r);
  } catch (e: any) {
    res
      .status(400)
      .json({ status: false, message: e.message || "Internal server error" });
  }
};
