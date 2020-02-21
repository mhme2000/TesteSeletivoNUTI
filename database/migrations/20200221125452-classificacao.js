module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Classificacao', {
      id_campeonato: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_time: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      pontos: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Classificacao');
  }
};