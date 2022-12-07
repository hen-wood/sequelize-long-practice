"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Insects",
			[
				{
					name: "Western Pygmy Blue Butterfly",
					description: "Butterfly",
					territory: "North America",
					fact: "Average Adult Male Wingspan",
					millimeters: 12,
				},
				{
					name: "Patu Digua Spider",
					description: "Not harmful.",
					territory: "Mr Worldwide",
					fact: "Males are smaller than females.",
					millimeters: 0.33,
				},
				{
					name: "Scarlet Dwarf Dragonfly",
					description: "Largest Flying Bugs",
					territory: "Southeast Asia",
					fact: "Ancestor used to be one of the largest insects ever known.",
					millimeters: 20,
				},
				{
					name: "Midget Moths",
					description: "Night dwelling.",
					territory: null,
					fact: 'Leaves a unique imprint on leaves they feed on.',
					millimeters: 3,
				},
				{
					name: "Bolbe Pygmaea Mantis",
					description: "Symbol of courage",
					territory: "Egypt",
					fact: "Kept and raised as pets.",
					millimeters: 10,
				},
				{
					name: "Microtityus Minimus Scorpion",
					description: "Venomous Stinger",
					territory: "Hispaniola",
					fact: "Thick exoskeleton, functions as body armor.",
					millimeters: 11,
				},
				{
					name: "Euryplatea Nanaknihali Fly",
					description: "Smallest fly species",
					territory: null,
					fact: "Devour host from inside out.",
					millimeters: 0.5,
				},
				{
					name: "Uranotaenia Iowii Mosquito",
					description: "Suck enough blood to double their weight.",
					territory: "North America",
					fact: "Prefers to bite frogs.",
					millimeters: 2.5,
				},
				{
					name: "Fairfly Wasp",
					description: "Thrive in wet rainforests to dry deserts",
					territory: "Mr Worldwide",
					fact: "Possess neither wings nor eyes.",
					millimeters: 1,
				},
				{
					name: "American Cockroach",
					description: "Most primitive living winged insects.",
					territory: "Africa",
					fact: "Not affected by radiation.",
					millimeters: 120,
				},

			],
		);
	},

	down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Insects", null);
	},
};
