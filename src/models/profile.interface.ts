export interface Profile {
    id: number;
    uid: string;
    no_rekam_medis: string;
    title_id: number;
    title: string;
    nama: string;
    jenis_kelamin: string;
    kewarganegaraan: string;
    alamat: string;
    provinsi_id: number;
    provinsi: string;
    kabupaten_id: number;
    kabupaten: string;
    kecamatan_id: number;
    kecamatan: string;
    kelurahan_id: number;
    kelurahan: string;
    kodepos: number;
    identitas_id: number;
    identitas: string;
    no_identitas: string;
    no_telepon_1: string;
    no_telepon_2: string;
    tempat_lahir: string;
    tgl_lahir: string;
    gol_darah_id: number;
    gol_darah: string;
    agama_id: number;
    agama: string;
    suku: string;
    status_kawin_id: number;
    status_kawin: string;
    pendidikan_id: number;
    pendidikan: string;
    pekerjaan_id: number;
    pekerjaan: string;
    foto: string;
    status: string;
}