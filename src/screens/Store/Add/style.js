import { makeStyles } from "@mui/styles";
import { Colors } from "../../../utils/common/color";
import { SYSTEM_CONFIG } from "../../../utils/common";

export default makeStyles(() => {
    return {
        conModal: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: SYSTEM_CONFIG.pH,
            borderRadius: 16,
            backgroundColor: Colors.__bs_white,
            minWidth: 600
        },
        conBoxField: {
            padding: '0.5rem'
        },
        conFieldInput: {
            minWidth: 600,
            borderRadius: 5
        },
        txtLabelInput: {
            fontWeight: 600
        },
        conBoxFooter: {
            display: 'flex',
            justifyContent: 'flex-end'
        },
        btnAdd: {
            color: Colors.__bs_white,
            background: Colors.__bs_primary,
            fontSize: 16,
            '&:hover': {
                background: Colors.__bs_orange,
            }
        },
        btnCancel: {
            color: Colors.__bs_white,
            background: Colors.__bs_gray_500,
            fontSize: 16,
            marginRight: 7,
            '&:hover': {
                background: Colors.__bs_gray_700,
            }
        }
    }
})