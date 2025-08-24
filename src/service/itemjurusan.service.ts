import { IBaseResponse } from "../interface/global.interface";
import {
  ICreateItemJurusan,
  IUpdateItemJurusan,
} from "../interface/itemjurusan.interface";
import { gocareer } from "../prisma/client.prisma";

export const SCreateItemJurusan = async (
  data: ICreateItemJurusan
): Promise<IBaseResponse> => {
  try {
    await gocareer.item_jurusan.create({ data });
    return { status: true, message: "Success create item jurusan!" };
  } catch (error: any) {
    throw Error(error.message);
  }
};

export const SUpdateItemJurusan = async (
  data: IUpdateItemJurusan
): Promise<IBaseResponse> => {
  try {
    await gocareer.item_jurusan.update({ where: { id: data.id }, data });
    return { status: true, message: "Success update item jurusan!" };
  } catch (error: any) {
    throw Error(error.message);
  }
};

export const SDeleteItemJurusan = async (
  id: number
): Promise<IBaseResponse> => {
  try {
    await gocareer.item_jurusan.delete({ where: { id } });
    return { status: true, message: "Success delete item jurusan!" };
  } catch (error: any) {
    throw Error(error.message);
  }
};

export const SGetItemJurusanByJurusan = async (
  id_jurusan: number
): Promise<IBaseResponse> => {
  try {
    const rows = await gocareer.item_jurusan.findMany({
      where: { id_jurusan },
    });
    return { status: true, message: "Success get item jurusan!", data: rows };
  } catch (error: any) {
    throw Error(error.message);
  }
};
