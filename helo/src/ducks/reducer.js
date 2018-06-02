const initialState ={
    username:'',
    profile_pic: '',
    }

const UPDATE_STATE = 'UPDATE_STATE';


export default function reducer( state = initialState, action){
        console.log('action', action);

        switch(action.type){
            case UPDATE_STATE:
                return {...state, username: action.payload.username, profile_pic: action.payload.profile_pic} 
            default:
                return state;
             }
        }

export function updateState(username, profile_pic){
    console.log(username, profile_pic);

    return {
        type: UPDATE_STATE,
        payload:{
            username: username,
            profile_pic: profile_pic
        }
    }
}
