import axios, { AxiosPromise } from 'axios';
import { PostData } from '../interface/PostData';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const API_URL = 'http://localhost:8080';

const postData = async (data: PostData): AxiosPromise<any> => { 
  const reponse = axios.post(API_URL + '/posts', data); //Esta linha faz uma solicitação HTTP POST para o URL da API. A solicitação HTTP POST inclui os dados do post no corpo da solicitação.
  return reponse;
};

export function usePostDataMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({ //Esta linha inicia a utilização do hook useMutation. O hook useMutation é usado para executar operações de alteração de estado.
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
    queryClient.invalidateQueries({queryKey: ['post-data']});
    }
  });

  return mutate;
}