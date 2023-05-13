import { makeStyles } from "@mui/styles";
import { SYSTEM_CONFIG } from "../../utils/common";

export default makeStyles(() => {
    return {
        conBox: {
            padding: SYSTEM_CONFIG.pH
        },
        conContent: {
            paddingTop: SYSTEM_CONFIG.pH
        }
    }
})