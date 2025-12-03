function MathExpression() {
const harga = 20000;
const diskon = 0.2;
const hargaSetelahDiskon = harga - harga * diskon;


function sapa(nama) {
return `Halo, ${nama}!`;
}


return (
<div className="p-4 border rounded-xl mt-4">
<h3>Contoh Ekspresi JavaScript dalam JSX</h3>
<p>Harga awal: {harga}</p>
<p>Diskon: {diskon * 100}%</p>
<p>Harga Setelah Diskon: {hargaSetelahDiskon}</p>
<p>{sapa("Raihan")}</p>
</div>
);
}


export default MathExpression;