
//Action Types
export const CHANGE_THEME = "CHANGE_THEME";


//type
type change_theme_action_type = {
    type: typeof CHANGE_THEME
}
  
//Action Creator
export const change_theme = () => ({
    type: CHANGE_THEME    
});


export type change_theme_type = change_theme_action_type