const { response } = require("express");

const usuariosGet = (req, res = response) => {
  const { q, nombre, apellido } = req.query;

  res.json({
    msg: "Get API - controlador",
    q,
    nombre,
    apellido,
  });
};

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: "Post API - controlador",
    nombre,
    edad,
  });
};

const usuariosPut = (req, res = response) => {
  const id = req.params.id; // Se obtiene el parámetro id del endpoint de forma dinámica

  res.json({
    msg: "Put API - controlador",
    id,
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "Patch API - controlador",
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "Delete API - controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
