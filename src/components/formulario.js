import React from "react";
import "./style.scss";


export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/moqvvpby"
        method="POST"
      >
        <div className="field">
            <label className="label">Nombre:</label>
            <input className="input is-success" type="text" name="name" />
        </div>

        <div className="field">
          
 
          <label className="label">Email:</label>
          <input className="input is-success" type="email" name="email" />

        </div>

        <div className="field">
          <label>Mensaje:</label>
          <input className="textarea" type="text" name="message" />
          {status === "SUCCESS" ? <p>Gracias!</p> : <button className="button is-text has-text-white is-primary">Enviar</button>}
          {status === "ERROR" && <p>Ooops! Hubo un error</p>}
        </div>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
