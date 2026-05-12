import Card from '@/components/Card'

const CardsGrid = ({ items, title }) => {

  return (
    <div className='w-[90%] flex flex-col items-center'>
      <h2 className='mb-4 font-medium text-[2em] font-[Philosopher]'>{title}</h2>

      <div className="flex flex-wrap justify-between">
        { items.map (({ id, name, rating, image}, index) =>
          <Card key={index} name={name} rating={rating} image={image} id={id}/>
        )}
      </div>

    </div>
  )
}

export default CardsGrid