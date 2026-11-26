
const Child = ({name, email, phone, mark, isActive, dept}) => {
  return (
    <div>NAME:{name}
    <p>email: {email}</p>
    <p>phone: {phone}</p>
    <p>Is Active: {isActive ? "Yes" : "No"}</p>
    <p>Department: {dept.PL}</p>
    <p>Stack: {dept.Stack}</p>
     {mark.map((m, i) => (
        <p key={i}>mark: {m}</p>
       
     ))}
    </div>
  )
}

export default Child