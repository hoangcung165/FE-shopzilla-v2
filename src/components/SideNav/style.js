import { makeStyles } from "@mui/styles";
import { Colors } from "../../utils/common/color";

export default makeStyles(() => {
    return {
        conNavContainer: {
            background: Colors.__bs_white,

        },
        conMenuIcon: {
            background: Colors.__bs_white,
            margin: '0.5rem 0.25rem',
            borderRadius: '5px',
            '&:hover': {
                background: Colors.__bs_primary,
                color: Colors.__bs_white
            }

        },
        conMenuIconActive: {
            background: Colors.__bs_primary
        },
        textMenu: {
            color: Colors.__bs_gray_500,
            fontSize: `14px !important`,
         
        },
        textMenuActive: {
            color: `${Colors.__bs_gray_900} !important`
        },
        iconMenu: {
            fontSize: '18px'
        }
    }
})