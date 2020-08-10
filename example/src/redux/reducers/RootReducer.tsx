
import { CHANGE_THEME, change_theme_type } from '../actions/ThemeActions';

const get_api_reducer = (
    state = {
        is_dark:false,
        palette_type: "light",
    }, 
    action: change_theme_type) => {
    switch (action.type) {
        case CHANGE_THEME:
            console.log("Changing theme...")
            return {
                ...state,
                is_dark: !state.is_dark,
                palette_type: state.is_dark ? "light" : "dark",
            };
        default:
            return {...state};
    }
};

export default get_api_reducer;