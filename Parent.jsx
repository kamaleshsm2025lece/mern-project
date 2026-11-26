import Child from "./Child"

const Parent = () => {
  return (
    <div>
        <Child name="Kamallll"
        email ="kamallll@example.com"
        phone = {1111111111}
        mark = {[100 ,99, 98,97, 96]}
        dept={{
            PL: "JAVASCRIPT",
            Stack: "MERN",
        }}
        isActive = {true}
        />
         <Child name="Aruj" 
        email="Aruj@example.com"
        phone = {1234567890}
        mark = {[90,95,90,95,99]}
        dept={{
          PL: "JAVASCRIPT",
          Stack: "MERN",
        }}
        isActive = {false}
        />

    </div>
  )
}

export default Parent