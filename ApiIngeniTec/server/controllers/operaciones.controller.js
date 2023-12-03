const operacionesCtrl = {};

operacionesCtrl.suma = async(req, res) => {
    const numero1 = Number(req.query.numero1);
    const numero2 = Number(req.query.numero2);
    const resultado = numero1 + numero2;

    console.log(`el resultado de ${numero1} + ${numero2} es igual a ${resultado}`);
  
  res.send({ resultado });
};

module.exports = operacionesCtrl;