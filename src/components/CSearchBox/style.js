import { makeStyles } from "@mui/styles";
import { Colors } from "../../utils/common/color";

export default makeStyles(() => {
    return {
        conBoxSearch: {
            border: `${Colors.__bs_gray_500} 1px solid`,
            borderRadius: '5px',
            padding: '3px',
            width: '100%'
        }
    }


})