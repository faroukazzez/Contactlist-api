import React, { Component } from "react";
import { connect } from "react-redux";
import { getMangas, deleteManga } from "../actions/contactsActions";
import ModalManga from "./ModalContacts";

class Mangas extends Component {
  UNSAFE_componentWillMount() {
    this.props.getMangas();
  }
  delete = (id) => {
    this.props.deleteManga(id);
  };
  render() {
    return (
      <div className="boxes">
        {this.props.data.map((el) => (
          <div className="box">
            <h4>{el.name}</h4>
            <h4>{el.author}</h4>
            <h4>{el.year}</h4>
            <button onClick={() => this.delete(el._id)}>delete</button>
            <ModalManga editMode={true} MangaToUpdate={el} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.MangasReducer.listMangas,
  };
};

export default connect(mapStateToProps, { getMangas, deleteManga })(Mangas);