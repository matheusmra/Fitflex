import React, { useState } from "react";
import styles from "./redefinir.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Redefinir() {
  const [novaSenha, setNovaSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Pega o token da URL
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem("");
    try {
      const resp = await fetch("http://localhost:4567/usuario/redefinir-senha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, novaSenha }),
      });
      const data = await resp.json();
      setMensagem(data.mensagem || data.erro);
    } catch (err) {
      setMensagem("Erro ao redefinir senha.");
    }
  };

  if (!token) {
    return <p className={styles.message}>Token inválido ou ausente na URL.</p>;
  }

  return (
    <div className={styles.pai}>
      <form onSubmit={handleSubmit} className={styles.container}>
        <h2 className={styles.title}>Redefinir senha</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Nova senha"
            value={novaSenha}
            onChange={e => setNovaSenha(e.target.value)}
            required
            className={styles.input}
            style={{ flexGrow: 1 }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={styles.button}
            style={{
              marginLeft: "10px",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
              fontSize: "1.1rem",
              color: "#555",
              width: "20px",
              height: "20px",
            }}
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            title={showPassword ? "Ocultar senha" : "Mostrar senha"}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
        </div>
        <button type="submit" className={styles.button}>Redefinir</button>
        {mensagem && <p className={styles.message}>{mensagem}</p>}
      </form>
    </div>
  );
}