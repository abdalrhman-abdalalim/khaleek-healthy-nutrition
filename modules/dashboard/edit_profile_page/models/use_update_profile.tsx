import { useMutation } from "@tanstack/react-query";
import { UpdateProfilePayload, UpdateProfileResponse } from "./type";
import { updateProfile } from "../lib/api_edit_profile";

export const useUpdateProfile = () => {
  return useMutation<UpdateProfileResponse, unknown, UpdateProfilePayload>({
    mutationFn: (payload) => updateProfile(payload),
  });
};
