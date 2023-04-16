import React, { useEffect, useState } from "react";
import Link from "next/link";

const Table = ({ images, deleteBlog, abrirCerrarModal }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">title</th>
            <th scope="col">descirption</th>
            <th scope="col">Imagen</th>
            <th scope="col"> Operaciones</th>
          </tr>
        </thead>
        <tbody>
          {images.map((image) => (
            <tr key={image.id}>
              <th scope="row"></th>
              <td>{image.title}</td>
              <td>{image.description}</td>
              <td>
                <img accept="image/*" src={image.filename} alt="" width="80" />
              </td>
              <td width="10%">
                <button
                  className="delete"
                  onClick={() => deleteBlog(image._id)}
                >
                  <i className="bi bi-trash"></i>
                </button>

                <button
                  className="edit"
                  onClick={() => abrirCerrarModal("edit")}
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
