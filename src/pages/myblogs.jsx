import React, { useState, useEffect } from "react";
import Container from "../components/container";
import axios from "axios";
import Table from "../components/table";
import { Modal } from "@material-ui/core";
import UseForm from "../hooks/UseForm";
import { uploadFile } from "../firebase/config";

const Myblog = () => {
  const [form, handlerChangeForm, handlerResetForm] = UseForm({
    title: "",
    description: "",
    file: "",
  });
  const { title, description, file } = form;

  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [submitError, setSubmitError] = useState("");

  const abrirCerrarModal = (caso) => {
    caso === "edit" ? setModalEdit(!modalEdit) : setModalAdd(!modalAdd);
  };

  //procedimiento para obtener datos
  const [images, setImage] = useState([]);
  useEffect(() => {
    GetImage();
  }, []);

  const GetImage = async () => {
    const res = await axios.get(
      "https://blog-backend-production-9b56.up.railway.app/blog"
    );
    setImage(res.data.images);
  };
  // procedimiento para guardar imagenes

  // procedimiento para guardar datos
  const [Image, setImages] = useState(null);
  const store = async (e) => {
    e.preventDefault();
    if (!title) {
      setTitleError("Enter a title");
    }
    if (!description) {
      setDescriptionError("Enter a description");
    }
    if (title && description) {
      try {
        const result = await uploadFile(Image);
        const response = await axios.post(
          "https://blog-backend-production-9b56.up.railway.app/blog/upload",
          {
            title: title,
            description: description,
            filename: result,
          }
        );
        handlerResetForm();
        abrirCerrarModal(false);
        GetImage();
      } catch (error) {
        submitError("se produjo un error al iniciar sesion");
        console.log(error);
      }
    }
  };

  const deleteBlog = async (imageID) => {
    await axios.delete(
      `https://blog-backend-production-9b56.up.railway.app/blog/delete/${imageID}`
    );
    GetImage();
  };

  return (
    <Container>
      <div>
        <h1 class="text-primary display-5 text-center">
          TABLA DE PUBLICACIONES
        </h1>
        <div>
          <button onClick={abrirCerrarModal} className="add">
            <i className="bi bi-plus-square"></i>
          </button>
        </div>
        <Table
          images={images}
          deleteBlog={deleteBlog}
          abrirCerrarModal={abrirCerrarModal}
        />
        <Modal open={modalAdd} onClose={abrirCerrarModal}>
          <div onSubmit={store}>
            <form className="ModalWindow">
              <div className="formTitulo">
                <h2>Add User</h2>
              </div>
              <label>
                <h3>Title</h3>
                <input
                  className="input1"
                  type="text"
                  placeholder="Enter title"
                  name="title"
                  value={title}
                  onChange={handlerChangeForm}
                />
              </label>
              {titleError && <p className="text-danger">{titleError}</p>}
              <br />
              <br />
              <label> Select Image</label>
              <input
                type="file"
                id=""
                onChange={(e) => setImages(e.target.files[0])}
              />
              <br />
              <br />
              <label>
                <h3>Description</h3>
                <textarea
                  name="description"
                  id=""
                  cols="33"
                  rows="6"
                  value={description}
                  onChange={handlerChangeForm}
                  placeholder="Enter the description"
                ></textarea>
              </label>
              {descriptionError && (
                <p className="text-danger">{descriptionError}</p>
              )}
              <br />
              <br />
              <button className="modalbutton3">Add</button>
              <button className="modalbutton4" onClick={abrirCerrarModal}>
                Cancel
              </button>
            </form>
          </div>
        </Modal>
        <Modal open={modalEdit} onClose={setModalEdit}>
          <div>
            <form className="ModalWindow">
              <div className="formTitulo">
                <h2>Update user</h2>
              </div>
              <label>
                <h3>Title</h3>
                <input
                  className="input1"
                  type="text"
                  placeholder=""
                  name="title"
                  value={title}
                  onChange={(e) => setTitleUpdate(e.targe.value)}
                />
              </label>
              <br />
              <br />
              <label> Select Image</label>
              <input type="file" id="" />
              <br />
              <br />
              <label>
                <h3>Description</h3>
                <textarea
                  name=""
                  id=""
                  cols="33"
                  rows="6"
                  placeholder=""
                ></textarea>
              </label>
              <br />
              <br />
              <button className="modalbutton3">Update</button>
              <button
                className="modalbutton4"
                onClick={() => setModalEdit(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </Container>
  );
};

export default Myblog;
