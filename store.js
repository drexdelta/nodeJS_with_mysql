console.log(" this is the store.js ");


module.exports = {

	createUser({userName , password}){

		console.log(` add user ${userName} with password ${password} `);
		// console.log(xyz(1000));
		return Promise.resolve();

	},

	xyz(pqr){
		console.log("here");
		console.log(pqr-100);
		console.log("returning form xyz");
		// return pqr-100;
		return Promise.resolve();
	}



}