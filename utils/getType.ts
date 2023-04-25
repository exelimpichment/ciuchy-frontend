const getType = (inputFor: string, passwordShown: boolean) => {
  if (inputFor !== 'password') return;
  const type = passwordShown ? 'text' : 'password';
  return type;
};

export default getType;
