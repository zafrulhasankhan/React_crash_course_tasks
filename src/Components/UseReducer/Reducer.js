export const Reducer = (state, action) => {
    console.log(state, action);
    // return state;

    if (action.type === "add_item") {
        const newPeople = [...state.people, action.payload];
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalcontent: 'Item added'
        }
    }

    if (action.type === "no_value") {
        return { ...state, isModalOpen: true, modalcontent: 'please enter a name' }
    }
    
    if (action.type === "close_modal") {
      return {...state,isModalOpen:false}
    }

    if(action.type === "remove_item"){
        const newPeople = state.people.filter((person)=>person.name !== action.payload)
        return {...state,isModalOpen:true, people:newPeople,modalcontent:'item removed'}
    }

    throw new Error('no matching action')
};