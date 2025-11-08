type LoginReturnType = {
  error: { password: null | string; email: string | null };
  success: boolean;
};

export type { LoginReturnType };
