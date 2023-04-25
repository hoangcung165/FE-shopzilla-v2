import { makeStyles } from "@mui/styles";
import { Colors } from '../../utils/common/color'

export default makeStyles(() => {
    return {
        conLayout: {
            height: '60%',
            background: 'white',
            borderRadius: '10px',
            width: 500,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        },
        conInput: {
            width: '90%'
        },
        conTitle: {
            paddingTop: '0px !important'
        },
        textTitle: {
            fontSize: '2.6rem',
            fontWeight: 600,
            color: '#333',
        },
        buttonLogin: {
            width: '100%',
            background: `${Colors.backgroudLogin}`,
            color: 'white',
            borderRadius: '15px',
            "&:hover": {
                background: `${Colors.backgroudLoginRoll}`
            }
        }
    }
}
)