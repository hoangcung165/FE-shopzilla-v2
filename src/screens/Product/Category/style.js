import { makeStyles } from "@mui/styles";
import { Colors } from "../../../utils/common/color";

export default makeStyles(() => {
    return {
        conContainer: {
            padding: '20px 15px'
        },
        conContent: {
            padding: '20px 0px'
        },
        inputNewName: {
            border: `1px solid ${Colors.__bs_gray_400}`,
            borderRadius: '5px',
            width: '100%',
            marginLeft: '0px ',
            padding: '8px',
            '&:focus': {
                background: Colors.__bs_white,
            },
        },
        conBtnActionNewCategory: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        focusCategory: {
            background: Colors.__bs_primary,
        },
        discardNewBtn: {
            background: Colors.__bs_red,
            color: Colors.__bs_white,
            padding: '5px',
            '&:hover': {
                background: Colors.__bs_danger,
            },
        },
        submitNewBtn: {
            background: Colors.__bs_success,
            color: Colors.__bs_white,
            padding: '5px',
            '&:hover': {
                background: Colors.__bs_success,
            },
        }
    }

})