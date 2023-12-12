// App.js
import { useState } from "react";
import { Navbar } from "./components/navbar/navbar";
import { Card } from "./components/card/card";
import { usePostData } from "./hooks/usePostData";
import { CreateModal } from "./components/create-modal/create-modal";
import { deletePostData } from "./hooks/useDeleteData";

function App() {
  const { data, refetch } = usePostData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDeletePost = async (postId: any) => {
    if (window.confirm("Tem certeza que deseja excluir este post?")) {
      await deletePostData(postId);
      refetch();
    }
  };

  return (
    <div className="container">
      <Navbar />
      <div className="card-grid">
        {data?.map((postData) => (
          <Card
            key={postData.id}
            title={postData.title}
            date={postData.date}
            image={postData.image}
            text={postData.text}
            idPost={postData.id}
            onDelete={handleDeletePost}
          />
        ))}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button className="btn.secundary" onClick={handleOpenModal}>
        New Post
      </button>
    </div>
  );
}

export default App;
