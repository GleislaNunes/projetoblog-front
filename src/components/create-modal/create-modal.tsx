import { useEffect, useState } from 'react';
import { usePostDataMutate } from '../../hooks/usePostDataMutate';
import { PostData } from '../../interface/PostData';
import './modal.css';

interface InputProps {
  //Essa linha define uma interface chamada InputProps. Essa interface define os dados que serão passados para a função Input().
  label: string;
  value: string;
  updateValue(value: string): void;
}

interface ModalProps {
  closeModal(): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  //Essa linha declara a função Input(). A função Input() recebe um objeto como parâmetro. Esse objeto deve ter as propriedades label, value e updateValue().
  return (
    <>
      <label>{label}</label>
      <input value={value} onChange={e => updateValue(e.target.value)}></input>
    </>
  );
};

const Textarea = ({ label, value, updateValue }: InputProps) => {
  //Esta linha declara um componente React chamado Textarea. O componente Textarea recebe três propriedades
  return (
    <>
      <label>{label}</label>
      <textarea
        value={value}
        onChange={e => updateValue(e.target.value)} //Esta linha atribui um manipulador de eventos onChange ao elemento textarea. O manipulador de eventos é chamado quando o usuário altera o valor da área de texto. O manipulador de eventos chama a função updateValue(), passando como argumento o valor atual da área de texto.
      ></textarea>
    </>
  );
};

export function CreateModal({ closeModal }: ModalProps) {
  //Esta linha declara uma função chamada CreateModal. A função recebe uma propriedade chamada closeModal. A propriedade closeModal é um objeto do tipo Modal Props.
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [text, setText] = useState('');
  const { mutate, isSuccess, isPending } = usePostDataMutate();

  const submit = () => {
    //Esta linha declara uma função chamada submit. A função recebe um parâmetro sem nome, que será passado como um argumento na chamada da função.
    const postData: PostData = {
      //Esta linha declara uma variável chamada postData do tipo PostData. O tipo PostData é um objeto que contém os dados de um post, como o título, a data, a imagem e o texto.
      title,
      date,
      image,
      text
    };
    mutate(postData); //Esta linha chama a função mutate(), passando como argumento o objeto postData. A função mutate() atualiza o estado do componente com os dados do objeto postData.
  };

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [isSuccess]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Faça um novo Post!</h2>
        <form className="input-container">
          <Input label="title" value={title} updateValue={setTitle} />
          <Input label="date" value={date} updateValue={setDate} />
          <Input label="image" value={image} updateValue={setImage} />
          <Input label="text" value={text} updateValue={setText} />
        </form>
        <div className="btns">
          <button onClick={submit} className="btn-postar">
            {isPending ? 'Postando...' : 'Postar'}
          </button>
          <button onClick={closeModal} className="btn-voltar">
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
