import "./card.css";

interface CardProps {
  title: string;
  date: string;
  image: string;
  text: string;
  idPost: any;
  onDelete: (postId: number) => void; // Adicionando a prop onDelete
}

export function Card({
  title,
  date,
  image,
  text,
  idPost,
  onDelete,
}: CardProps) {
  // Componente Card simplificado sem lógica de exclusão
  return (
    <div className="card">
      <h2>{title}</h2>
      <h2>{date}</h2>
      <img src={image} alt="Post" />
      <p>{text}</p>
      <button className="btn" onClick={() => onDelete(idPost)}>
        {" "}
        {/* Mudança para um elemento button */}
        Excluir
      </button>
    </div>
  );
}
