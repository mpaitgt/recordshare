module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define('Artist', {
    artist: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      default: Date.now
    }
  }, 
  {
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
  }
  )
  return Artist;
}