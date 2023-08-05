import { makeStyles } from "@mui/styles";
import { SYSTEM_CONFIG } from "../../utils/common";
import { Colors } from "../../utils/common/color";

export default makeStyles(() => {
    return {
        conBox: {
            padding: SYSTEM_CONFIG.pH
        },
        conContent: {
            paddingTop: SYSTEM_CONFIG.pH
        },
        conActionBox: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly'
        },
        actionBtn: {
            textTransform: 'none',
            fontSize: '15px',
            color: 'white',
            borderRadius: '20px'
        },
        detailBtn: {
            background: Colors.__bs_info,

        },
        disableBtn: {
            background: Colors.__bs_red,
            '&:hover': {
                background: Colors.__bs_danger,
            }
        },
        btnSearch: {
            border: `${Colors.__bs_gray_500} 1px solid`

        }
        ,
        iconButton: {
            fontSize: '18px !important',
            paddingRight: '5px'
        },

        activeStatus: {
            color: 'white',
            background: Colors.__bs_success
        }
    }
})