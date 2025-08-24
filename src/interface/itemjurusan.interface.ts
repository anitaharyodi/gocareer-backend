export interface ICreateItemJurusan {
  id_jurusan?: number | null;
  nama?: string | null;
  youtube?: string | null;
}

export interface IUpdateItemJurusan extends ICreateItemJurusan {
  id: number;
}
