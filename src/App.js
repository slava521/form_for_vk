import {Container, Typography} from "@mui/material";
import Form from "./Form/Form";
function App() {
    return (
        <Container sx={{mt:'30px',mb:'30px'}}>
            <Typography variant='h3' component='h1' sx={{mb:'20px'}}>Форма бронирования переговорной</Typography>
            <Form/>
        </Container>
    );
}

export default App;