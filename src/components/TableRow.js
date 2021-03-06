import React from 'react';
import NumberFormat from 'react-number-format';

const TableRow = ({ item, onEdit, onDelete, collapse }) => {
  return (
    <tr className={collapse}>
      <td></td>
      <td>{item.subcategory}</td>
      <td>{item.description}</td>
      <td className='right-align'><NumberFormat value={item.amount} displayType={'text'} thousandSeparator={true} prefix={'₡ '} /></td>
      <td></td>
      <td className='center'>
        <a onClick={onEdit}><i className='fa fa-pencil-square fa-lg table-icon'></i></a>
        <a onClick={onDelete} id='icon-delete'><i className='fa fa-trash fa-lg table-icon'></i></a>
      </td>
    </tr>
  )
}

export default TableRow;