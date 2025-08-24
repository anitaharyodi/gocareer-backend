import { NextFunction, Request, Response } from "express";
import {
  SCreateItemJurusan,
  SDeleteItemJurusan,
  SGetItemJurusanByJurusan,
  SUpdateItemJurusan,
} from "../service/itemjurusan.service";

export const CCreateItemJurusan = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const r = await SCreateItemJurusan(req.body);
    res.status(200).json(r);
  } catch (e: any) {
    res
      .status(400)
      .json({ status: false, message: e.message || "Internal server error!" });
  }
};

export const CUpdateItemJurusan = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const r = await SUpdateItemJurusan({ ...req.body, id });
    res.status(200).json(r);
  } catch (e: any) {
    res
      .status(400)
      .json({ status: false, message: e.message || "Internal server error!" });
  }
};

export const CGetItemJurusanByJurusan = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id_jurusan = Number(req.params.id_jurusan);
    const r = await SGetItemJurusanByJurusan(id_jurusan);
    res.status(200).json(r);
  } catch (e: any) {
    res
      .status(400)
      .json({ status: false, message: e.message || "Internal server error" });
  }
};

export const CDeleteItemJurusan = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const r = await SDeleteItemJurusan(id);
    res.status(200).json(r);
  } catch (e: any) {
    res
      .status(400)
      .json({ status: false, message: e.message || "Internal server error" });
  }
};
