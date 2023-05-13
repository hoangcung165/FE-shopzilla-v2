import { makeStyles } from "@mui/styles";
import { Colors } from "../../utils/common/color";
import { SYSTEM_CONFIG } from "../../utils/common";

export default makeStyles(() => {
    return {
        conHeaderTable: {
            padding: '1rem',
            padding: SYSTEM_CONFIG.pH
        },
        labelSearch: {
            fontWeight: 500,
            lineHeight: 1.2
        },
        btnSearch: {
            border: `${Colors.__bs_gray_500} 1px solid`,
            padding: '0.2rem 0.5rem',
            borderRadius: '5px'
        },
        btnAction: {
            color: `${Colors.__bs_gray_700}`,
            border: `${Colors.__bs_gray_300} 1px solid`,
            minWidth: `36px`
        },

    }
})