const ParticipanteModel = require("../models/ParticipanteModel");

function index(req, res) {
  res.json(ParticipanteModel.listarTodos());
}

function show(req, res) {
  const id = parseInt(req.params.id);
  const participante = ParticipanteModel.buscarPorId(id);

  if (!participante) {
    return res.status(404).json({ erro: "Participante não encontrado" });
  }

  res.json(participante);
}

function store(req, res) {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ erro: "Nome e email são obrigatórios" });
  }

  const novo = ParticipanteModel.criar({ nome, email });
  res.status(201).json(novo);
}

function update(req, res) {
  const id = parseInt(req.params.id);
  const atualizado = ParticipanteModel.atualizar(id, req.body);

  if (!atualizado) {
    return res.status(404).json({ erro: "Participante não encontrado" });
  }

  res.json(atualizado);
}

function destroy(req, res) {
  const id = parseInt(req.params.id);
  const excluido = ParticipanteModel.deletar(id);

  if (!excluido) {
    return res.status(404).json({ erro: "Participante não encontrado" });
  }

  res.status(204).send();
}

module.exports = { index, show, store, update, destroy };