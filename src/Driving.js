import React,{useState} from'react'
const Driving=()=>{

  const[data,setData]=useState( [
                                {
                                  "name": "Alfreda Cole",
                                  "email": "alfredacole@micronaut.com",
                                  "username": "alfredacole@micronaut.com",
                                  "password": "Blanco",
                                  "gender": "female",
                                  "age": 13
                                },
                                {
                                  "name": "Casey Kidd",
                                  "email": "caseykidd@micronaut.com",
                                  "username": "caseykidd@micronaut.com",
                                  "password": "Rose",
                                  "gender": "female",
                                  "age": 68
                                },
                                {
                                  "name": "May Hardin",
                                  "email": "mayhardin@micronaut.com",
                                  "username": "mayhardin@micronaut.com",
                                  "password": "Cliffside",
                                  "gender": "female",
                                  "age": 53
                                },
                                {
                                  "name": "Tanisha Dejesus",
                                  "email": "tanishadejesus@micronaut.com",
                                  "username": "tanishadejesus@micronaut.com",
                                  "password": "Drummond",
                                  "gender": "female",
                                  "age": 23
                                },
                                {
                                  "name": "Dolores Yang",
                                  "email": "doloresyang@micronaut.com",
                                  "username": "doloresyang@micronaut.com",
                                  "password": "Greensburg",
                                  "gender": "female",
                                  "age": 52
                                },
                                {
                                  "name": "Phyllis Washington",
                                  "email": "phylliswashington@micronaut.com",
                                  "username": "phylliswashington@micronaut.com",
                                  "password": "Eden",
                                  "gender": "female",
                                  "age": 21
                                },
                                {
                                  "name": "Adeline Flynn",
                                  "email": "adelineflynn@micronaut.com",
                                  "username": "adelineflynn@micronaut.com",
                                  "password": "Kanauga",
                                  "gender": "female",
                                  "age": 37
                                },
                                {
                                  "name": "Whitney Mclean",
                                  "email": "whitneymclean@micronaut.com",
                                  "username": "whitneymclean@micronaut.com",
                                  "password": "Derwood",
                                  "gender": "female",
                                  "age": 58
                                },
                                {
                                  "name": "Paula Nolan",
                                  "email": "paulanolan@micronaut.com",
                                  "username": "paulanolan@micronaut.com",
                                  "password": "Dixonville",
                                  "gender": "female",
                                  "age": 48
                                },
                                {
                                  "name": "Tonya Sullivan",
                                  "email": "tonyasullivan@micronaut.com",
                                  "username": "tonyasullivan@micronaut.com",
                                  "password": "Orviston",
                                  "gender": "female",
                                  "age": 63
                                },
                                {
                                  "name": "Patton Barlow",
                                  "email": "pattonbarlow@micronaut.com",
                                  "username": "pattonbarlow@micronaut.com",
                                  "password": "Woodruff",
                                  "gender": "male",
                                  "age": 15
                                },
                                {
                                  "name": "Cheryl Tillman",
                                  "email": "cheryltillman@micronaut.com",
                                  "username": "cheryltillman@micronaut.com",
                                  "password": "Coultervillle",
                                  "gender": "female",
                                  "age": 54
                                },
                                {
                                  "name": "Bray Hebert",
                                  "email": "brayhebert@micronaut.com",
                                  "username": "brayhebert@micronaut.com",
                                  "password": "Richville",
                                  "gender": "male",
                                  "age": 68
                                },
                                {
                                  "name": "Ball Hodge",
                                  "email": "ballhodge@micronaut.com",
                                  "username": "ballhodge@micronaut.com",
                                  "password": "Steinhatchee",
                                  "gender": "male",
                                  "age": 27
                                },
                                {
                                  "name": "Glenn Pope",
                                  "email": "glennpope@micronaut.com",
                                  "username": "glennpope@micronaut.com",
                                  "password": "Hondah",
                                  "gender": "male",
                                  "age": 28
                                },
                                {
                                  "name": "Latasha Buck",
                                  "email": "latashabuck@micronaut.com",
                                  "username": "latashabuck@micronaut.com",
                                  "password": "Marenisco",
                                  "gender": "female",
                                  "age": 29
                                },
                                {
                                  "name": "Bullock Cohen",
                                  "email": "bullockcohen@micronaut.com",
                                  "username": "bullockcohen@micronaut.com",
                                  "password": "Nutrioso",
                                  "gender": "male",
                                  "age": 37
                                },
                                {
                                  "name": "Jefferson Morales",
                                  "email": "jeffersonmorales@micronaut.com",
                                  "username": "jeffersonmorales@micronaut.com",
                                  "password": "Springville",
                                  "gender": "male",
                                  "age": 70
                                },
                                {
                                  "name": "Hawkins Shepard",
                                  "email": "hawkinsshepard@micronaut.com",
                                  "username": "hawkinsshepard@micronaut.com",
                                  "password": "Avoca",
                                  "gender": "male",
                                  "age": 20
                                },
                                {
                                  "name": "Sutton Bright",
                                  "email": "suttonbright@micronaut.com",
                                  "username": "suttonbright@micronaut.com",
                                  "password": "Leeper",
                                  "gender": "male",
                                  "age": 59
                                },
                                {
                                  "name": "Lesa Mercer",
                                  "email": "lesamercer@micronaut.com",
                                  "username": "lesamercer@micronaut.com",
                                  "password": "Clarence",
                                  "gender": "female",
                                  "age": 32
                                },
                                {
                                  "name": "Trevino Guerra",
                                  "email": "trevinoguerra@micronaut.com",
                                  "username": "trevinoguerra@micronaut.com",
                                  "password": "Rivers",
                                  "gender": "male",
                                  "age": 32
                                },
                                {
                                  "name": "Ines Manning",
                                  "email": "inesmanning@micronaut.com",
                                  "username": "inesmanning@micronaut.com",
                                  "password": "Churchill",
                                  "gender": "female",
                                  "age": 33
                                },
                                {
                                  "name": "Curtis Kim",
                                  "email": "curtiskim@micronaut.com",
                                  "username": "curtiskim@micronaut.com",
                                  "password": "Teasdale",
                                  "gender": "male",
                                  "age": 13
                                },
                                {
                                  "name": "Felicia Johns",
                                  "email": "feliciajohns@micronaut.com",
                                  "username": "feliciajohns@micronaut.com",
                                  "password": "Adamstown",
                                  "gender": "female",
                                  "age": 34
                                },
                                {
                                  "name": "Ester Greer",
                                  "email": "estergreer@micronaut.com",
                                  "username": "estergreer@micronaut.com",
                                  "password": "Venice",
                                  "gender": "female",
                                  "age": 23
                                },
                                {
                                  "name": "Craig Howard",
                                  "email": "craighoward@micronaut.com",
                                  "username": "craighoward@micronaut.com",
                                  "password": "Machias",
                                  "gender": "male",
                                  "age": 21
                                },
                                {
                                  "name": "Patsy Blair",
                                  "email": "patsyblair@micronaut.com",
                                  "username": "patsyblair@micronaut.com",
                                  "password": "Greenock",
                                  "gender": "female",
                                  "age": 43
                                },
                                {
                                  "name": "Carlene Workman",
                                  "email": "carleneworkman@micronaut.com",
                                  "username": "carleneworkman@micronaut.com",
                                  "password": "Wikieup",
                                  "gender": "female",
                                  "age": 60
                                },
                                {
                                  "name": "Dorsey May",
                                  "email": "dorseymay@micronaut.com",
                                  "username": "dorseymay@micronaut.com",
                                  "password": "Robinson",
                                  "gender": "male",
                                  "age": 21
                                },
                                {
                                  "name": "Santiago Hartman",
                                  "email": "santiagohartman@micronaut.com",
                                  "username": "santiagohartman@micronaut.com",
                                  "password": "Gilgo",
                                  "gender": "male",
                                  "age": 37
                                },
                                {
                                  "name": "Jami Horne",
                                  "email": "jamihorne@micronaut.com",
                                  "username": "jamihorne@micronaut.com",
                                  "password": "Gracey",
                                  "gender": "female",
                                  "age": 60
                                },
                                {
                                  "name": "Estela Luna",
                                  "email": "estelaluna@micronaut.com",
                                  "username": "estelaluna@micronaut.com",
                                  "password": "Veyo",
                                  "gender": "female",
                                  "age": 62
                                },
                                {
                                  "name": "York Mccarty",
                                  "email": "yorkmccarty@micronaut.com",
                                  "username": "yorkmccarty@micronaut.com",
                                  "password": "Marne",
                                  "gender": "male",
                                  "age": 53
                                },
                                {
                                  "name": "Christian Dyer",
                                  "email": "christiandyer@micronaut.com",
                                  "username": "christiandyer@micronaut.com",
                                  "password": "Clinton",
                                  "gender": "female",
                                  "age": 63
                                },
                                {
                                  "name": "Christi Miller",
                                  "email": "christimiller@micronaut.com",
                                  "username": "christimiller@micronaut.com",
                                  "password": "Barclay",
                                  "gender": "female",
                                  "age": 50
                                },
                                {
                                  "name": "Twila Harrison",
                                  "email": "twilaharrison@micronaut.com",
                                  "username": "twilaharrison@micronaut.com",
                                  "password": "Castleton",
                                  "gender": "female",
                                  "age": 22
                                },
                                {
                                  "name": "Nguyen Hopkins",
                                  "email": "nguyenhopkins@micronaut.com",
                                  "username": "nguyenhopkins@micronaut.com",
                                  "password": "Veguita",
                                  "gender": "male",
                                  "age": 26
                                },
                                {
                                  "name": "Dianna Dixon",
                                  "email": "diannadixon@micronaut.com",
                                  "username": "diannadixon@micronaut.com",
                                  "password": "Jenkinsville",
                                  "gender": "female",
                                  "age": 49
                                },
                                {
                                  "name": "Lynn Ellison",
                                  "email": "lynnellison@micronaut.com",
                                  "username": "lynnellison@micronaut.com",
                                  "password": "Thornport",
                                  "gender": "female",
                                  "age": 29
                                },
                                {
                                  "name": "Michael Soto",
                                  "email": "michaelsoto@micronaut.com",
                                  "username": "michaelsoto@micronaut.com",
                                  "password": "Welda",
                                  "gender": "male",
                                  "age": 43
                                }
                              ])
  
  return(
    
      <>
    
        <table className="table">

          <thead >
            <tr>
              <th  scope="col">person</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">userName</th>
              <th scope="col">password </th>
              <th scope="col">gender</th>
              <th scope="col">age</th>
            </tr>
          </thead>
        
          <tbody>{
            data.map((ele,index)=>{
              return <tr>
                <th scope="row">{index+1}</th>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>@{ele.username}</td>
                 <td>{ele.password}</td>
                <td>{ele.gender}</td>
  <td style={{color:ele.age>25?'green':'red'}}>{ele.age>25?'legal':'not legal'}</td>
              </tr>
            })
          }
            
          </tbody>
            </table>
           
        </>
  )
}
  export default Driving