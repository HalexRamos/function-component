import FormularioCadastro from "./components/FormularioCadastro/formularioCadastro";

import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
      <FormularioCadastro onSubmitForm={onSubmitForm} validateCPF={validateCPF} />
    </Container>
  );
}

function onSubmitForm(dados) {
  console.log(dados);
}

function validateCPF(cpf) {
  if (cpf.length !== 11) {
    return {valido: false, texto: "CPF deve ter 11 digitos."}
  } else
    return {valido: true, texto: ""}
}

export default App;
