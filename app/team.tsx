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


function Member(props: {member: IMember}) {
  return (<li>
    {props.member.name} <button style={{border: '1px solid white'}}>Delete</button>
    <div style={{'font-weight': 'bold'}}>({props.member.role})</div>
    
  </li>);
}
export function Team({name}: {name: string, age?: number}) {
  const [newMember, setNewMember] = useState('');
  const [members, setMembers] = useState([
    { name: 'Luffy D Dragon', role: 'captain'}, 
    { name: 'Roronoa Zoro', role: 'Right hand'},
    { name: 'Nami', role: 'Navigator'}
  ] as IMember[]);
  function onRegister() {
    if (newMember) {
        setMembers([...members, {
            name: newMember,
            role: 'Snipper'
        }])
        setNewMember('');
    }
  }
  return (
    <div>
      This is team {name}
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
          return (<Member key={m.name} member={m} />)
        })}
      </ul>
    </div>
  );
}