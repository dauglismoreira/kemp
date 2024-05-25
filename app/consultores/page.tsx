import './styles.css';

export default function Consultants(){

  const data = [
    {
      photo:'/placeholder_light.jpg',
      name:'João da Silva',
      creci:'CRECI'
    },
    {
      photo:'/placeholder_light.jpg',
      name:'João da Silva',
      creci:'CRECI'
    },
    {
      photo:'/placeholder_light.jpg',
      name:'João da Silva',
      creci:'CRECI'
    },
    {
      photo:'/placeholder_light.jpg',
      name:'João da Silva',
      creci:'CRECI'
    },
    {
      photo:'/placeholder_light.jpg',
      name:'João da Silva',
      creci:'CRECI'
    },
    {
      photo:'/placeholder_light.jpg',
      name:'João da Silva',
      creci:'CRECI'
    },
    {
      photo:'/placeholder_light.jpg',
      name:'João da Silva',
      creci:'CRECI'
    },
    {
      photo:'/placeholder_light.jpg',
      name:'João da Silva',
      creci:'CRECI'
    },
  ]

  return(
    <div className="consultants-container">
      <h1>Nossos consultores</h1>
      <div className="content">
        {data.map((item, index) => (
          <div key={index} className="consultants-card">
            <img src={item.photo}/>
            <h3>{item.name}</h3>
            <p>{item.creci}</p>
          </div>
        ))}
      </div>
    </div>
  )
}