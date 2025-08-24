export interface ICreateSekolah {
  id_kabupaten: number;
  tipe_sekolah?: string | null;
  nama?: string | null;
}

export interface IUpdateSekolah extends ICreateSekolah {
  id: number;
}

export interface IGetSekolah {
  id: number;
  nama: string | null;
  tipe_sekolah: string | null;
  kabupaten: string | null;
}
