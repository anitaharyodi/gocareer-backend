import { Router } from 'express';
import { CCreateJurusan, CDeleteJurusan, CGetAllJurusan, CUpdateJurusan } from '../controller/jurusan.controller';
import { CCreateSekolah, CDeleteSekolah, CGetAllSekolah, CUpdateSekolah } from '../controller/sekolah.controller';
import { CGetTesMinat } from '../controller/tesminat.controller';
import { CCreateItemJurusan, CDeleteItemJurusan, CGetItemJurusanByJurusan, CUpdateItemJurusan } from '../controller/itemjurusan.controller';


const router = Router();


// Jurusan
router.get('/jurusan', CGetAllJurusan);
router.post('/jurusan', CCreateJurusan);
router.put('/jurusan/:id', CUpdateJurusan);
router.delete('/jurusan/:id', CDeleteJurusan);


// Sekolah
router.get('/sekolah', CGetAllSekolah);
router.post('/sekolah', CCreateSekolah);
router.put('/sekolah/:id', CUpdateSekolah);
router.delete('/sekolah/:id', CDeleteSekolah);


// Tes Minat
router.get('/tes-minat', CGetTesMinat);


// Item Jurusan Item
router.get('/jurusan/:id_jurusan/item', CGetItemJurusanByJurusan);
router.post('/jurusan/item', CCreateItemJurusan);
router.put('/jurusan/item/:id', CUpdateItemJurusan);
router.delete('/jurusan/item/:id', CDeleteItemJurusan);


export default router;