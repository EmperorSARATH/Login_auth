class Login {
	constructor(form, fields) {
		this.form = form;
		this.fields = fields;
		this.validateonSubmit();
	}

	validateonSubmit() {
		let self = this;

		this.form.addEventListener("submit", (e) => {
			e.preventDefault();
			var error = 0;
			self.fields.forEach((field) => {
				const input = document.querySelector(`#${field}`);
				if (self.validateFields(input) == false) {
					error++;
				}
			});
			if (error == 0) {
				//do login api here
				localStorage.setItem("auth", 1);
				
				this.form.submit();
			}
		});
	}

	validateFields(field) {
		if (field.value.trim() === "") {
			if(field.id== "username"){
				this.setStatus(
					field,
					`${field.innerText} (username cannot be blank)`,
					"error"
				);   
			}
			else if(field.type== "password"){
				this.setStatus(
					field,
					`${field.innerText} (password cannot be blank)`,
					"error"
				);   
			} 
			return false;
		} else {
			if (field.type == "password") {
				if (field.value.length < 8) {
					this.setStatus(
						field,
						`${field.innerText} (must be at least 8 characters)`,
						"error"
					);
					return false;
				} else{
					this.setStatus(field, null, "error");
					return true;
				}
			} else {
				this.setStatus(field, null, "error");
				return true;
			}
		}
	}

	setStatus(field, message, status) {
		const userErrorMessage = field.parentElement.querySelector(".user-error-message");
		const passErrorMessage = field.parentElement.querySelector(".error-message");

		if (status == "success") {
			userErrorMessage.innerText = "";
			passErrorMessage.innerText = "";
		}

		if (status == "error") {
			if(field.id == "username"){
				userErrorMessage.innerText=message;
			} else if(field.type == "password") {
					passErrorMessage.innerText = message;
			}
		}
	}
}

const form = document.querySelector(".loginForm");
if (form) {
	const fields = ["username", "password"];
	const validator = new Login(form, fields);
}