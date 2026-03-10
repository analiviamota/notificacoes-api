let eventos = [
  { id: 1, nome: "Workshop Node.js", data: "2025-08-10", local: "Sala 1" },
  { id: 2, nome: "Palestra JavaScript", data: "2025-08-12", local: "Auditório" }
];

let proximoId = 3;

function listarTodos() {
  return eventos;
}

function buscarPorId(id) {
  return eventos.find(e => e.id === id);
}

function criar(dados) {
  const novoEvento = {
    id: proximoId++,
    nome: dados.nome,
    data: dados.data,
    local: dados.local
  };

  eventos.push(novoEvento);
  return novoEvento;
}

function atualizar(id, dados) {
  const index = eventos.findIndex(e => e.id === id);
  if (index === -1) return null;

  eventos[index] = { ...eventos[index], ...dados, id };
  return eventos[index];
}

function deletar(id) {
  const index = eventos.findIndex(e => e.id === id);
  if (index === -1) return false;

  eventos.splice(index, 1);
  return true;
}

module.exports = { listarTodos, buscarPorId, criar, atualizar, deletar };