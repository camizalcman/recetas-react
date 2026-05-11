import Card from '@/components/Card'

const CardsGrid = ({ items, title }) => {

  return (
    <div className='w-[90%]'>
      <h2>{title}</h2>

      <div className="flex flex-wrap">
        { items.map (({ id, name, rating, image}, index) =>
          <Card key={index} name={name} rating={rating} image={image} id={id}/>
        )}
      </div>

    </div>
  )
}

export default CardsGrid