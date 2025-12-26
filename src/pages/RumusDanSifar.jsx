export default function RumusDanSifat({ onBack }) {
  return (
    <div style={{ padding: 20 }}>
      <button onClick={onBack}>← Kembali</button>
      <h2>Kubus</h2>
      <ul>
        <li>6 sisi</li>
        <li>12 rusuk</li>
        <li>8 titik sudut</li>
      </ul>
      <p><b>Volume:</b> s³</p>
      <p><b>Luas Permukaan:</b> 6s²</p>
    </div>
  )
}
