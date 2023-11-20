

const BookingTable = ({service, idx}) => {

    const {date,serviceName, photo,email, price }= service;
    return (
        <tr>
        <th>
        {idx+1}
        </th>
        <td>
            <div className="avatar">
              <div className="rounded-xl w-24 h-24">
             <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
        </td>
        <td>
          {serviceName}
        </td>
        <td>{date}</td>
        <td>{price}</td>
        
        <th>
        <td>{email}</td>
        </th>
      </tr>
    );
};

export default BookingTable;