export default function html([first, ...string], ...values) {
    return values.reduce(
        (acc, cur) => acc.concat(cur, string.shift()),
        [first]
    )
        .filter(x => x && x !== true || x === 0)
        .join('')
}

export function createStore(reducer) {
    let state = reducer() //tu viet

    const roots = new Map()

    function render() {
        for (const [root, component] of roots) {
            const output = component()
            root.innerHTML = output
        }
    }

    return {
        attach(component, root) {
            roots.set(root, component)
            render() //render ra view
        },
        connect(selector = state => state) { //đẩy dữ liệu từ store vào view
            return component => (props, ...args) => //on lai
                component(Object.assign({}, props, selector(state), ...args)) //hợp nhất
        },
        dispatch(action, ...args) {
            state = reducer(state, action, args)
            render()
        }
    }
}