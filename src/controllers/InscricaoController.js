const inscricoes = [];

module.exports = {

  index(req, res) {
    res.json(inscricoes);
  },

  store(req, res) {
    const nova = {
      id: inscricoes.length + 1,
      ...req.body,
      status: "confirmada",
      dataInscricao: new Date()
    };

    inscricoes.push(nova);
    res.status(201).json(nova);
  },

  showByEvento(req, res) {
    const { eventoId } = req.params;
    const lista = inscricoes.filter(i => i.eventoId == eventoId);
    res.json(lista);
  },

  cancelar(req, res) {
    const { id } = req.params;
    const inscricao = inscricoes.find(i => i.id == id);

    if (!inscricao) {
      return res.status(404).json({ erro: "Não encontrada" });
    }

    inscricao.status = "cancelada";
    res.json(inscricao);
  }

};