import { useState } from 'react';

const list = [1,2,3, 7,8,9];
const coll = [...list,100,...list];


console.log(coll);
interface IMember {
  name:string;
  role: string;
}

const cap:IMember = {
    name: 'Luffy D Dragon',
    role: 'Captain',
}
const mem:IMember = {...cap};
console.log(mem);


function Member({member, onDelete}: {member: IMember, onDelete: VoidFunction}) {
  return (<li className='container rounded-md my-3 p-3 bg-slate-700'>
    {member.name} 
      <button
        className='rounded-md bg-slate-600 px-2 ml-2 bg-red-600'
        onClick={onDelete}
      >Delete</button>
    <div className='font-bold'>({member.role})</div>
  
  </li>);
}
export function Team({name}: {name: string, age?: number}) {
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberRole, setNewMemberRole] = useState('');
  const [members, setMembers] = useState([
    { name: 'Luffy D Dragon', role: 'Captain'}, 
    { name: 'Roronoa Zoro', role: 'Right Hand'},
    { name: 'Nami', role: 'Navigator'}
  ] as IMember[]);

  function onRegister() {
    if (newMemberName && newMemberRole) {
        setMembers([...members, {
            name: newMemberName,
            role: newMemberRole
        }])
        setNewMemberName('');
        setNewMemberRole('');
    }
  }
  function onDeleteMember(target: IMember) {
    const index = members.findIndex(m => m.name == target.name);
    if (index >= 0) {
      members.splice(index, 1);
      setMembers([...members]);
    }
  }
  return (
    <div className='container rounded-md mt-5 mx-auto align-middle px-5 py-7 bg-center w-4/12 bg-gray-800'>
      <h2 className='text-2xl'>
      This is team <span className='text-red-500 font-bold'>{name}</span>
      </h2>
      <div className='mt-2 flex gap-2'>
        <input 
          placeholder='Member' 
          type='text' 
          value={newMemberName} 
          onChange={(e) => setNewMemberName(e.target.value)}
          className='rounded-md px-1 w-40'
          />
        <input 
          placeholder='Position'
          type="text" 
          value={newMemberRole} 
          onChange={(e) => setNewMemberRole(e.target.value)}
          className='rounded-md px-1 w-40'
          />
        <button 
          type='button' 
          onClick={onRegister}
          className='bg-slate-200 text-slate-900 rounded-md px-2'
          >
          Register
        </button>
      </div>
      <ul>
        {Array.from(members, (m) => {
          return (<Member key={m.name} member={m} 
            onDelete={() => onDeleteMember(m) } />)
        })}
      </ul>
    </div>
  );
}