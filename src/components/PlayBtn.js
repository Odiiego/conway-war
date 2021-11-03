import { Link } from "react-router-dom";

const PlayBtn = () => {

  // TODO: verificar se os usuarios são válidos
  // ou se é nescessário simular um dos jogadores
  // usar esse link para substituir os dois botões de submit

  return <Link to={"/game"}>Play</Link>;
};

export default PlayBtn;
