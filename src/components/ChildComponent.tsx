export function ChildComponent(props: {setCounter: any}){

    const {setCounter} = props
    return <div>
        <button
          onClick={() => {
            setCounter((currentValue: number)=>{
                return currentValue + 1
            })
          }}
        >
          Click
        </button>
    </div>
}