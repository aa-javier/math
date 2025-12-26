export default function LoadingScreen() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#2563eb",
      color: "white",
      textAlign: "center"
    }}>
      <h1>Simulasi Bangun Ruang</h1>
      <p>Materi dan simulasi, dilengkapi dengan animasi bangun ruang</p>
      <p style={{ marginTop: 20 }}>Loading...</p>
    </div>
  )
}
