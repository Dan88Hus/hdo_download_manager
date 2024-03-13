import React from 'react';

function ListHistory(uriMapped){
    return (
        <React.Fragment>
            <tr>
                <th scope='row'>U.gid</th>
                <td>u.status</td>
                <td className='text-center'>u.progress</td>
                <td>u.path</td>
            </tr>
        </React.Fragment>
    )
}
export default ListHistory