// components/Table.js
import React from 'react';

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <button type='button' className='bg-black hover:bg-slate-400 rounded-md w-40 text-white' >Button</button>
      <table className="table-auto">
        <thead className='bg-orange-300'>
          <tr>
            <th className="px-4 py-2">No</th>
            <th className="px-4 py-2">Ketinggian Air</th>
            <th className="px-4 py-2">Waktu</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className=' bg-lime-200'>
              <td className="px-4 py-2">{item.id}</td>
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.location}</td>
              <td className="px-4 py-2">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;