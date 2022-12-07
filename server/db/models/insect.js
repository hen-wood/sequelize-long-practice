"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Insect extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Insect.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					upper(val) {
						const array = val.split(" ");
						if (
							!array.every(
								(word) => word[0] === word[0].toUpperCase()
							)
						)
							throw new Error(`Every Word should be uppercased`);
					},
				},
			},
			description: {
				type: DataTypes.STRING,
			},
			territory: {
				type: DataTypes.STRING,
			},
			fact: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [0,240]
          }
        }
			},
			millimeters: {
        type: DataTypes.FLOAT,
        allowNull: false,
				validate: {
					min: 0,
				},
			},
		},
		{
			sequelize,
			modelName: "Insect",
		}
	);
	return Insect;
};
