export default function logger(reducer) {
    return (preState, action, args) => {
        console.group(action)
        console.log('Pre State: ', preState)
        console.log('Action Args: ', args)

        const nextState = reducer(preState, action, args)
        console.log('Next State: ', nextState)

        console.groupEnd()
        return nextState
    }
}