import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Pagination from "./Paginate"
import axios from "axios";

const Exercise = props => (
    <tr>
        <td>{props.exercise.title}</td>
        <td>{props.exercise.key[0]}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.source}</td>
        <td>{props.exercise.resourceType.case}</td>
        <td>{props.exercise.coverage}</td>
        <td>
            <button className="btn btn-secondary"><Link to={"/edit/" + props.exercise._id} style={{ color: "white" }}>Editar</Link></button> | <button className="btn btn-danger" onClick={() => { props.deleteExercise(props.exercise._id) }}>Eliminar</button>
        </td>
    </tr>
)

class ExercisesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: []
        }

        this.deleteExercise = this.deleteExercise.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/resource/')
            .then(res => {
                this.setState({ exercises: res.data.data })
            })
            .catch(error => console.log(error));
    }

    deleteExercise(id) {
        axios.delete('http://localhost:5000/resource/' + id)
            .then(res => console.log(res.data));

        this.setState({ exercises: this.state.exercises.filter(el => el._id !== id) })
    }

    exercisesList() {
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />
        })
    }

    render() {
        return (
            <div className="container">
                <h3>Recursos</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Título</th>
                            <th>Claves</th>
                            <th>Descripción</th>
                            <th>Fuente</th>
                            <th>Tipo del Recurso</th>
                            <th>Cobertura</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exercisesList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ExercisesList;