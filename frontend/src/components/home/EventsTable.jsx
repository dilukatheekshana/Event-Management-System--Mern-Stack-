import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const EventsTable = () => {
    return (
        <div><table className='w-full border-separate border-spacing-2'>
        <thead>
          <tr>
            <th className='border border-slate-600 rounded-md'>No</th>
            <th className='border border-slate-600 rounded-md'>Title</th>
            <th className='border border-slate-600 rounded-md max-md:hidden'>Description</th>
            <th className='border border-slate-600 rounded-md max-md:hidden'>Date</th>
            <th className='border border-slate-600 rounded-md max-md:hidden'>Location</th>
            <th className='border border-slate-600 rounded-md'>Operations</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={events._id} className='h-8'>
              <td className='border border-slate-700 rounded-md text-center'>
                {index + 1}
              </td>
              <td className='border border-slate-700 rounded-md text-center'>
                {event.title}
              </td>
              <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                {event.description}
              </td>
              <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                {event.date}
              </td>
              <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                {event.location}
              </td>
              <td className='border border-slate-700 rounded-md text-center'>
                <div className='flex justify-center gap-x-4'>
                  <Link to={`/events/details/${event._id}`}>
                    <BsInfoCircle className='text-2xl text-green-800' />
                  </Link>
                  <Link to={`/events/edit/${event._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600' />
                  </Link>
                  <Link to={`/events/delete/${event._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600' />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table></div>
      )
}

export default EventsTable