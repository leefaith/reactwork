const defaultState = {
    inputValue: 'hello lisa',
    list: ['早上4点起床，锻炼身体',
        '中午下班游泳一小时',
        '晚上8点到10点，学习两个小时']
}
export default (state = defaultState, action) => {
    if (action.type === 'change_input') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === 'add_item') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    return state
}