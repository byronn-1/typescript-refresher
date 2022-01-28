


const EventComponent: React.FC = () => {

  const onChange = (event: React.ChangeEventHandler<HTMLInputElement>) => {
    console.log(event)
  }

  const onDragStart = (event: React.DragEventHandler<HTMLDivElement>) => {
    console.log('Im being dragged')
  }

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>Drag Me</div>
    </div>
  )
}

export default EventComponent;