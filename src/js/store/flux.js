const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacto: { full_name: "", email: "", agenda_slug: "panchoagenda", address: "", phone: "" },
			listaContactos: []
		},
		actions: {
			//crear --> get, post, put. POST: el nuevo contacto

			getContact: async () => {
				const config = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(
					"https://assets.breatheco.de/apis/fake/contact/agenda/panchoagenda",
					config
				);
				const json = await response.json();
				setStore({ listaContactos: json });
			},
			onChangeContact: evento => {
				const store = getStore();
				const { contacto } = store;
				contacto[evento.target.name] = evento.target.value;
				setStore({ contacto });
				// console.log("---ONCHANGE----", hola);
				console.log("---Contacto----", contacto);
			},
			postContact: e => {
				e.preventDefault();
				const store = getStore();
				const { contacto } = store;

				const postC = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contacto)
				};
				console.log(postC);
				fetch("https://assets.breatheco.de/apis/fake/contact/", postC)
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},
			putContact: (e, contact_id) => {
				//To access to data from the store(obj), use getstore. You will use frequently to change the data stored.
				e.preventDefault();
				const store = getStore();
				const { contacto } = store;
				const putC = {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contacto)
				};
				fetch(`https://assets.breatheco.de/apis/fake/contact/${contact_id}`, putC)
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},
			delContact: (e, contact_id) => {
				//To access to data from the store(obj), use getstore. You will use frequently to change the data stored.
				e.preventDefault();
				const store = getStore();
				const { contacto } = store;
				const delC = {
					method: "DELETE",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contacto)
				};
				fetch(`https://assets.breatheco.de/apis/fake/contact/${contact_id}`, delC)
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			}

			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
