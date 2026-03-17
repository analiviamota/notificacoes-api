const express = require("express");
const router = express.Router();
const ParticipanteController = require("../controllers/ParticipanteController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Participante:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do participante
 *         nome:
 *           type: string
 *           description: Nome do participante
 *         email:
 *           type: string
 *           description: Email do participante
 *       example:
 *         id: 1
 *         nome: Ana Silva
 *         email: ana@email.com
 */

/**
 * @swagger
 * /participantes:
 *   get:
 *     summary: Listar todos os participantes
 *     tags: [Participantes]
 *     responses:
 *       200:
 *         description: Lista de participantes
 */
router.get("/", ParticipanteController.index);

/**
 * @swagger
 * /participantes/{id}:
 *   get:
 *     summary: Buscar participante por ID
 *     tags: [Participantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Participante encontrado
 *       404:
 *         description: Participante não encontrado
 */
router.get("/:id", ParticipanteController.show);

/**
 * @swagger
 * /participantes:
 *   post:
 *     summary: Criar novo participante
 *     tags: [Participantes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Participante'
 *     responses:
 *       201:
 *         description: Participante criado
 */
router.post("/", ParticipanteController.store);

/**
 * @swagger
 * /participantes/{id}:
 *   put:
 *     summary: Atualizar participante
 *     tags: [Participantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Participante atualizado
 *       404:
 *         description: Participante não encontrado
 */
router.put("/:id", ParticipanteController.update);

/**
 * @swagger
 * /participantes/{id}:
 *   delete:
 *     summary: Deletar participante
 *     tags: [Participantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Participante deletado
 *       404:
 *         description: Participante não encontrado
 */
router.delete("/:id", ParticipanteController.destroy);

module.exports = router;