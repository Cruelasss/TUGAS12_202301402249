function kirimData() {
    const nama = document.getElementById("nama").value;
    const nim = document.getElementById("nim").value;
    const alamat = document.getElementById("alamat").value;
    const angkatan = document.getElementById("angkatan").value;
    const tanggal = document.getElementById("tanggal").value;

    const perminatan = document.querySelector('input[name="perminatan"]:checked')?.value || "Belum dipilih";

    alert(
        `Nama : ${nama}\n` +
        `NIM : ${nim}\n` +
        `Perminatan : ${perminatan}\n` +
        `Alamat : ${alamat}\n` +
        `Angkatan : ${angkatan}\n` +
        `Tanggal : ${tanggal}`
    );
}