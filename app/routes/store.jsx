

export async function loader(){
    const response = await fetch (`${process.env.API.URL}/guitars?populate=image`)
    const result = await response.json()

    console.log(result)
    console.log(process.env.API.URL)
    return {}
}

function Store() {
  return (
    <div>store</div>
  )
}

export default Store