import React, { Component } from 'react';
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

class CreateResource extends Component {

    constructor(props) {
        super();
        this.state = {
            title: "",
            description: "",
            key: '',
            source: '',
            testimony: '',
            report: '',
            case: '',
            coverage: ''
        }
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeKey = this.onChangeKey.bind(this);
        this.onChangeSource = this.onChangeSource.bind(this);
        this.onChangeTestimony = this.onChangeTestimony.bind(this);
        this.onChangeCase = this.onChangeCase.bind(this);
        this.onChangeReport = this.onChangeReport.bind(this);

        this.onChangeCoverage = this.onChangeCoverage.bind(this);


        this.onSubmit = this.onSubmit.bind(this);

    }



    onChangeTitle(e) {
        this.setState({ title: e.target.value })
    }
    onChangeDescription(e) {
        this.setState({ description: e.target.value })
    }
    onChangeKey(e) {
        this.setState({ key: e.target.value })
    }
    onChangeSource(e) {
        this.setState({ source: e.target.value })
    }
   
    onChangeCoverage(e) {
        this.setState({ coverage: e.target.value })
    }
    onChangeTestimony(e) {
        this.setState({ testimony: e.target.value })
    }
    onChangeReport(e) {
        this.setState({ report: e.target.value })
    }
    onChangeCase(e) {
        this.setState({ case: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        const data = {
            title: this.state.title,
            description: this.state.description,
            key:  this.state.key.split(','),
            source: this.state.source,
            resourceType: {
                testimony: this.state.testimony,
                report: this.state.report,
                case: this.state.case
            },
            coverage: this.state.coverage
        }
        console.log(data);

        axios.post('http://localhost:5000/resource/create', data)
            .then(res => alert("Datos Guardados de manera Correcta"))
            .catch(error => alert("ha Ocurrido un errors"));

        // window.location = "/";
    }

    render() {
        return (
            <div className="container">
                <h3>Registrar nuevos datos</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">

                        <label>title: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Claves (Separe por ,): </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.key}
                            onChange={this.onChangeKey}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Fuente: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.source}
                            onChange={this.onChangeSource}
                        />
                    </div>
                    <div className="form-group">
                        <hr/>
                        <label>Tipo del Recurso: </label>
                        <br/>
                        <label>Testimonio</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.testimony}
                            onChange={this.onChangeTestimony}
                        />
                        <br/>
                        <label>Informe</label>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.report}
                            onChange={this.onChangeReport}
                        />
                        <br/>
                        <label>Caso</label>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.Case}
                            onChange={this.onChangeCase}
                        />
                        <hr/>
                    </div>
                    <div className="form-group">
                        <label>Fuente: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.coverage}
                            onChange={this.onChangeCoverage}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Crear recurso" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateResource;