function ConditionalMessage({ isLogin, pesan }) {
return (
<div className="p-4 border rounded-xl mt-4">
<h3>Conditional Rendering</h3>


{/* Menggunakan ternary */}
<p>{isLogin ? "Anda sudah login" : "Silakan login terlebih dahulu"}</p>


{/* Menggunakan && */}
{pesan > 0 && <p>Anda memiliki {pesan} pesan baru</p>}
</div>
);
}


export default ConditionalMessage;