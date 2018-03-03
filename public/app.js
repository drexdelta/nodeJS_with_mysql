// const CreateUser = document.querySelector('.CreateUser');
// console.log(CreateUser);

// CreateUser.addEventListener('submit' , function(e) {

// 	e.preventDefault();
// 	// const username = CreateUser.querySelector('.username').value;
// 	// const password = CreateUser.querySelector('.')
// 	const username = "drex";
// 	const password = "delta";
// 	post('/createUser' , {username , password});

// })

// // function post( path, data){

// // 	return window.fetch( path , {
// // 		method : 'POST',
// // 		headers: {
// // 			'Accept' : 'application/json',
// // 			'Content-type' : 'application/json'
// // 		},
// // 		body: JSON.stringify(data)
// // 	});

// // }


const CreateUser = document.querySelector('.CreateUser')
console.log(CreateUser);
CreateUser.addEventListener('submit', (e) => {
  e.preventDefault()
  username = CreateUser.querySelector('.username').value
  password = CreateUser.querySelector('.password').value
  post('/createUser', { username, password })
})


function post (path, data) {
  return window.fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
