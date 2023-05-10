import {useState} from "react";
import {Box, Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";

export default function Form() {
    const [tower, setTower] = useState("");
    const [floor, setFloor] = useState("");
    const [room, setRoom] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [comment, setComment] = useState("");

    const handleTowerChange = (event) => {
        setTower(event.target.value);
    };

    const handleFloorChange = (event) => {
        setFloor(event.target.value);
    };

    const handleRoomChange = (event) => {
        setRoom(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            tower,
            floor,
            room,
            date,
            time,
            comment,
        };
        console.log(JSON.stringify(formData));
    };

    const handleClear = () => {
        setTower("");
        setFloor("");
        setRoom("");
        setDate("");
        setTime("");
        setComment("");
    };



    return (
        <Box>
            <form style={{display: "flex", flexDirection: "column", gap: "1rem"}} onSubmit={handleSubmit}>
                <FormControl sx={{minWidth: "120px"}}>
                    <InputLabel id="tower-label">Башня</InputLabel>
                    <Select
                        labelId="tower-label"
                        id="tower-select"
                        value={tower}
                        label="Башня"
                        onChange={handleTowerChange}
                        required
                    >
                        <MenuItem value="A">А</MenuItem>
                        <MenuItem value="B">Б</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{minWidth: "120px"}}>
                    <InputLabel id="floor-label">Этаж</InputLabel>
                    <Select
                        labelId="floor-label"
                        id="floor-select"
                        value={floor}
                        label="Этаж"
                        onChange={handleFloorChange}
                        required
                    >
                        {Array.from({length: 25}, (_, index) => index + 3).map(
                            (floorNumber) => (
                                <MenuItem key={floorNumber} value={floorNumber}>
                                    {floorNumber}
                                </MenuItem>
                            )
                        )}
                    </Select>
                </FormControl>
                <FormControl sx={{minWidth: "120px"}}>
                    <InputLabel id="room-label">Переговорка</InputLabel>
                    <Select
                        labelId="room-label"
                        id="room-select"
                        value={room}
                        label="Переговорка"
                        onChange={handleRoomChange}
                        required
                    >
                        {Array.from({length: 10}, (_, index) => index + 1).map(
                            (roomNumber) => (
                                <MenuItem key={roomNumber} value={roomNumber}>
                                    {roomNumber}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>
                <TextField
                    id="date"
                    label="Дата"
                    type="date"
                    value={date}
                    onChange={handleDateChange}
                    sx={{minWidth: "120px"}}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    required
                />
                <TextField
                    id="time"
                    label="Время"
                    type="time"
                    value={time}
                    onChange={handleTimeChange}
                    sx={{minWidth: "120px"}}
                    inputProps={{
                        step: 1800, // 30 min
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    required
                />
                <TextField
                    id="comment"
                    label="Комментарий"
                    value={comment}
                    onChange={handleCommentChange}
                    multiline
                    rows={4}
                />
                <Box sx={{display: "flex", gap: "1rem"}}>
                    <Button variant="contained" type='submit'>
                        Отправить
                    </Button>
                    <Button variant="outlined" onClick={handleClear}>
                        Очистить
                    </Button>
                </Box>
            </form>
        </Box>
    )
}