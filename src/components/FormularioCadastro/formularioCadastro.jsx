import React, { useState } from 'react';

import  { TextField, Switch, Button, FormControlLabel } from '@material-ui/core/';

function FormularioCadastro({onSubmitForm, validateCPF}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(false);
  const [novidades, setNovidades] = useState(false);
  const [erros, setErros] = useState({cpf: {valido:true, texto: ""}});
  return (
    <form onSubmit={(event) => {event.preventDefault(); onSubmitForm({nome, sobrenome, cpf, novidades, promocoes})}}>
      <TextField 
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }} 
        id="nome"
        fullWidth
        variant="outlined"
        label="Nome"
        margin="normal"
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }} 
        id="sobrenome"
        fullWidth variant="outlined"
        label="Sobrenome"
        margin="normal" 
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(event) => {
          const ehValido = validateCPF(cpf);
          setErros({cpf: ehValido})
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        fullWidth
        variant="outlined"
        label="CPF"
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch checked={promocoes} onChange={(event) => {setPromocoes(event.target.checked)}} name="promocoes" color="primary" />}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch checked={novidades} onChange={(event) => {setNovidades(event.target.checked)}} name="novidades" color="primary" />}
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
      >
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
