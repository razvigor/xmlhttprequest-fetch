//xmlhttprequest
const root = document.getElementById('root');
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

let xhr = new XMLHttpRequest();

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
