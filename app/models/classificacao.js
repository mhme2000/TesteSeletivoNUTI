module.exports = (sequelize, DataTypes) => {
    const classificacao = sequelize.define('Classificacao', {
      id_campeonato: DataTypes.INTEGER,
      id_time: DataTypes.INTEGER,
      pontos: DataTypes.INTEGER,
    });
  
    return classificacao;
  }