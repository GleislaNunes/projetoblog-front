
import axios, { AxiosPromise } from 'axios';
import { PostData } from '../interface/PostData';
import { useQuery } from '@tanstack/react-query';

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<PostData[]> => { //Esta linha declara uma função chamada fetchData. A função fetchData é usada para recuperar os dados dos posts da API. A função fetchData retorna uma promessa que resolve em um array de objetos PostData.
  const reponse = axios.get(API_URL + '/posts'); //Esta linha faz uma solicitação HTTP GET para o URL da API.
  return reponse;
};

export function usePostData() { //Esta linha define a chave do query do estado do componente. A chave do query é usada para identificar o estado do componente.
  const query = useQuery({ //Esta linha inicia a utilização do hook useQuery. O hook useQuery é usado para obter dados do estado do componente.
    queryFn: fetchData, //Esta linha define a função que é usada para recuperar os dados do estado do componente. A função fetchData é usada para recuperar os dados dos posts da API.
    queryKey: ['post-data'],
    retry: 2
  });

  return {
    ...query,
    data: query.data?.data //Esta linha retorna apenas os dados dos posts.
  };
}