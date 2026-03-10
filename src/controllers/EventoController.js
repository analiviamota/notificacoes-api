const EventoModel = require("../models/EventoModel");

function index(req, res) {
  res.json(EventoModel.listarTodos());
}

function show(req, res) {
  const id = parseInt(req.params.id);
  const evento = EventoModel.buscarPorId(id);

  if (!evento) {
    return res.status(404).json({ erro: "Evento não encontrado" });
  }

  res.json(evento);
}

function store(req, res) {
  const { nome, data, local } = req.body;

  if (!nome || !data || !local) {
    return res.status(400).json({ erro: "Nome, data e local são obrigatórios" });
  }

  const novo = EventoModel.criar({ nome, data, local });
  res.status(201).json(novo);
}

function update(req, res) {
  const id = parseInt(req.params.id);
  const atualizado = EventoModel.atualizar(id, req.body);

  if (!atualizado) {
    return res.status(404).json({ erro: "Evento não encontrado" });
  }

  res.json(atualizado);
}

function destroy(req, res) {
  const id = parseInt(req.params.id);
  const excluido = EventoModel.deletar(id);

  if (!excluido) {
    return res.status(404).json({ erro: "Evento não encontrado" });
  }

  res.status(204).send();
}

module.exports = { index, show, store, update, destroy };