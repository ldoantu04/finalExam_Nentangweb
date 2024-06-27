import React from 'react';
import '../css/table.css';

export default function Table({ prod, onEdit, onDelete }) {
  return (
    <div className='container-fluid'>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Năm sinh</th>
            <th>Chức vụ</th>
            <th>Tình trạng</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {prod.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.birth}</td>
              <td>{user.position}</td>
              <td>
                <i className='fa-solid fa-dot-circle'></i>{user.status}</td>
              <td>
                <i className="fa-solid fa-gear" ></i>
                <i className="fa-solid fa-xmark-circle"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}