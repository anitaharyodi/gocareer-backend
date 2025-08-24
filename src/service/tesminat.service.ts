import { IBaseResponse } from "../interface/global.interface";
import { IGetTesMinat } from "../interface/tesminat.interface";
import { gocareer } from "../prisma/client.prisma";

export const SGetTesMinat = async (): Promise<
  IBaseResponse<IGetTesMinat[]>
> => {
  try {
    const rows = await gocareer.tes_minat.findMany({
      include: { pilihan: true },
      orderBy: { id: "asc" },
    });
    return {
      status: true,
      message: "Success get tes minat!",
      data: rows.map((t) => ({
        id: t.id,
        soal: t.soal ?? null,
        pilihan: t.pilihan.map((p) => p.pilihan),
      })),
    };
  } catch (error: any) {
    throw Error(error.message);
  }
};
