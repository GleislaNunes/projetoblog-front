import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

export async function deletePostData(postId: any) {
  console.log(postId);
  await axios.delete(`${API_URL}/posts/${Number(postId)}`);
}

// export function useDeletePostData() {
//   const queryClient = useQueryClient();

//   const { mutate, isError, isSuccess } = useMutation<void, Error, number>(
//     (postId: number) => deletePostData(postId), // Usando uma função anônima para chamar deletePostData
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries({ queryKey: ["post-data"] });
//       },
//     }
//   );

//   return {
//     deletePost: mutate,
//     isError,
//     isSuccess,
//   };
// }
