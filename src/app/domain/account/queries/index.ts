// Import Api
import RestClient from '@rest-client/index';

// Import Store
import {store} from '@store/store';
import {setTokens} from '@store/slices/user';

// Import React Query
import {useQuery, useMutation} from '@tanstack/react-query';

export const useLogin = () => {
  return useMutation({
    mutationKey: ['ACCOUNT.LOGIN'],
    mutationFn: async (data: unknown) =>
      RestClient.request({
        url: '/auth/login',
        method: 'POST',
        data,
      }),

    onSuccess: data => {
      const {access_token, refresh_token} = data?.data;
      store.dispatch(
        setTokens({
          accessToken: access_token,
          refreshToken: refresh_token,
        }),
      );
    },
  });
};

export const useProfile = () => {
  return useQuery({
    queryKey: ['ACCOUNT.USER_PROFILE'],
    queryFn: async () =>
      await RestClient.request({
        url: '/auth/profile',
        method: 'GET',
      }),
  });
};
