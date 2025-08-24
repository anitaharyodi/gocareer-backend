import { IBaseResponse } from "../interface/global.interface";
import {
  ICreateSekolah,
  IGetSekolah,
  IUpdateSekolah,
} from "../interface/sekolah.interface";
import { gocareer } from "../prisma/client.prisma";

export const SCreateSekolah = async (
  data: ICreateSekolah
): Promise<IBaseResponse> => {
  try {
    await gocareer.sekolah.create({ data });
    return { status: true, message: "Success create sekolah!" };
  } catch (error: any) {
    throw Error(error.message);
  }
};

export const SUpdateSekolah = async (
  data: IUpdateSekolah
): Promise<IBaseResponse> => {
  try {
    await gocareer.sekolah.update({ where: { id: data.id }, data });
    return { status: true, message: "Success update sekolah!" };
  } catch (error: any) {
    throw Error(error.message);
  }
};

export const SDeleteSekolah = async (id: number): Promise<IBaseResponse> => {
  try {
    await gocareer.sekolah.delete({ where: { id } });
    return { status: true, message: "Success delete sekolah!" };
  } catch (error: any) {
    throw Error(error.message);
  }
};

export const SGetAllSekolah = async (
  kabupatenId?: number
): Promise<IBaseResponse<any[]>> => {
  try {
    const rows = await gocareer.sekolah.findMany({
      where: kabupatenId
        ? { kabupaten: { id: kabupatenId } }
        : {},
      include: { kabupaten: true },
      orderBy: { id: "asc" },
    });

    const grouped: Record<
      string,
      { kabupaten: string; sma: any[]; smk: any[] }
    > = {};

    rows.forEach((s) => {
      const kabName = s.kabupaten?.nama || "Unknown";
      if (!grouped[kabName]) {
        grouped[kabName] = {
          kabupaten: kabName,
          sma: [],
          smk: [],
        };
      }

      const sekolahData = {
        id: s.id,
        nama: s.nama ?? null,
      };

      if (s.tipe_sekolah?.toLowerCase() === "sma") {
        grouped[kabName].sma.push(sekolahData);
      } else if (s.tipe_sekolah?.toLowerCase() === "smk") {
        grouped[kabName].smk.push(sekolahData);
      }
    });

    return {
      status: true,
      message: "Success get sekolah!",
      data: Object.values(grouped),
    };
  } catch (error: any) {
    throw Error(error.message || "Failed get sekolah");
  }
};



