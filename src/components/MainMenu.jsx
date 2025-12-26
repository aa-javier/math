export default function MainMenu({ onSelect }) {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 20
    }}>
      <h2>Menu Utama</h2>

      <button onClick={() => onSelect("rumus")}>
        Rumus & Sifat
      </button>

      <button onClick={() => onSelect("jaring")}>
        Jaring-jaring
      </button>
    </div>
  )
}
