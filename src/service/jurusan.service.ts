import { IBaseResponse } from "../interface/global.interface";
import {
  ICreateJurusan,
  IGetJurusan,
  IUpdateJurusan,
} from "../interface/jurusan.interface";
import { gocareer } from "../prisma/client.prisma";

export const SCreateJurusan = async (
  data: ICreateJurusan
): Promise<IBaseResponse> => {
  try {
    await gocareer.jurusan.create({
      data: {
        tipe_sekolah: data.tipe_sekolah,
        nama: data.nama,
      },
    });
    return { status: true, message: "Success create jurusan!" };
  } catch (error: any) {
    throw Error(error.message || "Failed create jurusan");
  }
};

export const SUpdateJurusan = async (
  data: IUpdateJurusan
): Promise<IBaseResponse> => {
  try {
    await gocareer.jurusan.update({ where: { id: data.id }, data });
    return { status: true, message: "Success update jurusan!" };
  } catch (error: any) {
    throw Error(error.message || "Failed update jurusan");
  }
};

export const SDeleteJurusan = async (id: number): Promise<IBaseResponse> => {
  try {
    await gocareer.jurusan.delete({ where: { id } });
    return { status: true, message: "Success delete jurusan!" };
  } catch (error: any) {
    throw Error(error.message || "Failed delete jurusan");
  }
};


export const SGetAllJurusan = async (
  tipeSekolah?: string
): Promise<IBaseResponse<IGetJurusan[]>> => {
  try {
    const rows = await gocareer.jurusan.findMany({
      where: tipeSekolah
        ? { tipe_sekolah: tipeSekolah.toLowerCase() }
        : {},
      orderBy: { id: "asc" },
    });

    return {
      status: true,
      message: "Success get jurusan!",
      data: rows.map((j) => ({
        id: j.id,
        nama: j.nama ?? null,
        tipe_sekolah: j.tipe_sekolah ?? null,
      })),
    };
  } catch (error: any) {
    throw Error(error.message || "Failed get jurusan");
  }
};
