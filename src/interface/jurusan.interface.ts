export interface ICreateJurusan {
  tipe_sekolah: string;
  nama: string;
}

export interface IUpdateJurusan extends ICreateJurusan {
  id: number;
}

export interface IGetJurusan {
  id: number;
  tipe_sekolah: string;
  nama: string;
}
