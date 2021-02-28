import { reactive, readonly } from 'vue';

interface AuthData {
  user: {
    email: string;
    name: string;
  };
  token: string | null;
}

interface AuthDataMutation {
  user: {
    email: string;
    name: string;
  };
  token: string;
}

const state = reactive<AuthData>({
  user: {
    email: '',
    name: '',
  },
  token: null,
});

export default function useStore() {
  return readonly(state);
}

export function setAuthData({ user, token }: AuthDataMutation) {
  state.user = user;
  state.token = token;
}
