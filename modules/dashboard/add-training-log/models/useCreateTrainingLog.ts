import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateTrainingLogPayload, CreateTrainingLogResponse } from "./type";
import { createTrainingLog } from "../lib/trainingLogs";


export const useCreateTrainingLog = () => {
  const queryClient = useQueryClient();

  return useMutation<
    CreateTrainingLogResponse,
    Error,
    CreateTrainingLogPayload
  >({
    mutationFn: createTrainingLog,

    onSuccess: () => {
     queryClient.invalidateQueries({
        queryKey: ["training-logs"],
    });

    },
  });
};
