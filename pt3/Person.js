const MAX_NAME_LENGTH_TO_SHOW = 6;

function Person({ age, hobbies, name }){
  const voteText = age >=18 ? "Go vote! : "Go Study!";
  
  const hobbiesLIs = hobbies.map(hobby => <li>{hobby}</li>);
  return(
    <div>
      <p> Learn some info on this person: </p>
      <ul>
        <li> Name: {name.slice(0, MAX_NAME_LENGTH_TO_SHOW)} </li>
        <li> Age: {age} </li>
        <ul> Hobbies: {hobbiesLIs} </ul>
      </ul>
      <h3> {voteText} </h3>
    </div>
  );
}
