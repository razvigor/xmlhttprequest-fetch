//xmlhttprequest
const root = document.getElementById('root');
const btnGet = document.getElementById('get-data');
const btnPost = document.getElementById('post-data');
let data = null;

function render(data) {
	let UI = data.map((item) => {
		return `
      <div class="user">
        <h2>Name: ${item.name}, Username: ${item.username}</h2>
        <p>Email: ${item.email}</p>
        <h3>Address:</h3>
        <ul>
          <li>City: ${item.address.city}</li>
          <li>Street: ${item.address.street}</li>
          <li>Zip code: ${item.address.zipcode}</li>
        </ul>
      </div>
    `;
	});
	return UI.join('');
}

//Get Data
let xhr = new XMLHttpRequest();

function getState() {
	xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

	xhr.send();

	xhr.onload = function () {
		if (xhr.status === 200) {
			console.log(xhr);
			const res = xhr.response;
			data = JSON.parse(res);
			root.innerHTML = render(data);
		}
	};

	xhr.onerror = function () {
		console.log(xhr.status);
		root.innerText = 'Something went wrong. Please try latter!';
	};
}

btnGet.addEventListener('click', getState);

//Post Data

let formdata = {
	name: 'Trkulja Sasa',
	username: 'Razvigor',
	email: 'razvigor@gmail.com',
	phone: '+38765222222',
};

function postState() {
	xhr.open('POST', 'https://jsonplaceholder.typicode.com/users');
	xhr.send(JSON.stringify(formdata));

	xhr.onerror = function () {
		console.log(xhr);
		root.innerText = 'Something went wrong. Please try latter!';
	};

	xhr.onload = function () {
		if (xhr.status === 201) {
			root.innerText = `Success!!! Your id is ${JSON.parse(xhr.response).id}.`;
		}
	};
}
btnPost.addEventListener('click', postState);

// Fetch Get

// function getData() {
// 	fetch('https://jsonplaceholder.typicode.com/users')
// 		.then((res) => {
// 			return res.json();
// 		})
// 		.then((data) => {
// 			root.innerHTML = render(data);
// 		})
// 		.catch((err) => {
// 			root.innerTect = err.message;
// 		});
// }

// btnGet.addEventListener('click', getData);

// function sendData() {
// 	fetch('https://jsonplaceholder.typicode.com/users', {
// 		method: 'POST',
// 		body: JSON.stringify(formdata),
// 		headers: {
// 			'Content-type': 'application/json; charset=UTF-8',
// 		},
// 	})
// 		.then((res) => res.json())
// 		.then((data) => (root.innerText = `Success!!! Your id is ${data.id}`))
// 		.catch((err) => (root.innerText = err.message));
// }

// btnPost.addEventListener('click', sendData);
