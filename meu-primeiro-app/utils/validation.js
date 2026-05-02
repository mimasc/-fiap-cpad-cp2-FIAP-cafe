export function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export function validateRegister({ name, email, password, confirmPassword }) {
  const errors = {};

  if (!name.trim()) {
    errors.name = 'O nome completo é obrigatório.';
  }

  if (!email.trim()) {
    errors.email = 'O e-mail é obrigatório.';
  } else if (!validateEmail(email)) {
    errors.email = 'Digite um e-mail válido. Ex: usuario@dominio.com';
  }

  if (!password) {
    errors.password = 'A senha é obrigatória.';
  } else if (password.length < 6) {
    errors.password = 'A senha deve ter no mínimo 6 caracteres.';
  }

  if (!confirmPassword) {
    errors.confirmPassword = 'Confirme sua senha.';
  } else if (confirmPassword !== password) {
    errors.confirmPassword = 'As senhas não conferem.';
  }

  return errors;
}

export function validateLogin({ email, password }) {
  const errors = {};

  if (!email.trim()) {
    errors.email = 'O e-mail é obrigatório.';
  } else if (!validateEmail(email)) {
    errors.email = 'Digite um e-mail válido.';
  }

  if (!password) {
    errors.password = 'A senha é obrigatória.';
  }

  return errors;
}
