function StatusInfo({ status }) {
  let content;

  switch (status) {
    case "loading":
      content = <p>Loading data...</p>;
      break;

    case "success":
      content = <p>Data berhasil diambil!</p>;
      break;

    case "error":
      content = <p>Terjadi kesalahan saat mengambil data.</p>;
      break;

    default:
      content = <p>Status tidak dikenal.</p>;
  }

  return <div>{content}</div>;
}

export default StatusInfo;
