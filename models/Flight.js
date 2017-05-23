module.exports = function(sequelize,DataTypes){
	var Flight = sequelize.define("Flight",{
		flight:{
			type:DataTypes.STRING
		}
	})
	return Flight;
}