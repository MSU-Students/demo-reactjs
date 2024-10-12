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
  const [newMember, setNewMember] = useState('');
  const [members, setMembers] = useState([
    { name: 'Luffy D Dragon', role: 'Captain'}, 
    { name: 'Roronoa Zoro', role: 'Right Hand'},
    { name: 'Nami', role: 'Navigator'}
  ] as IMember[]);
  function onRegister() {
    if (newMember) {
        setMembers([...members, {
            name: newMember,
            role: 'Sniper'
        }])
        setNewMember('');
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
    <div className='container rounded-md mx-auto align-middle px-5 py-7 bg-center w-4/12 bg-gray-800'>
      <h2 className='text-2xl'>
      This is team <span className='text-red-500 font-bold'>{name}</span>
      </h2>
      <div>
        <input 
          placeholder='Member' 
          type='text' 
          value={newMember} 
          onChange={(e) => setNewMember(e.target.value)}
          />
        <button type='button' onClick={onRegister} >Register</button>
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