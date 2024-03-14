import React from 'react';

function ListHistory({uriMapped}){
    //uriMaped is taken as object

    return (
        <React.Fragment>
            <tr>
                <th scope='row'>{uriMapped.gid}</th>
                <td>{uriMapped.status}</td>
                <td className='text-center'>u.progress</td>
                <td>u.path</td>
            </tr>
        </React.Fragment>
    )
}
export default ListHistory