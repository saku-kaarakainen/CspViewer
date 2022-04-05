import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logo from './logo.svg';
import './App.css';

const formatMinified = (value: string) => {
    const ret = value
        .replace(/(\r\n|\n|\r)/gm, ' ')
        .replace(/(\t)/gm, ' ')
        .replace(/\s+/g, ' ')
        .trim()

    return ret;
}

const formatPretty = (value: string) => {
    const ret = value
        .replace(/;/gm, ';\r\n\r\n')
        .replace(/ /gm, '\r\n\t')

    return ret;
}

function App() {
    const [minified, setMinified] = React.useState('')
    const [prettyPrint, setPrettyPrint] = React.useState('')

    function handleMinified(value: string) {
        const min = formatMinified(value)
        const pretty = formatPretty(min.replace(/; /gm, ';'))

        setMinified(min)
        setPrettyPrint(pretty)
    }

    return (
        <div className="App">
            <Box component="form" sx={{
                '& .MuiTextField-root': { m: 1, width: 0.95 },
            }} noValidate autoComplete="off" >
                <div>
                    <TextField
                        id="outlined-multiline-static"
                        label="minified"
                        multiline
                        rows={1}
                        value={minified}
                        onChange={e => handleMinified(e.target.value)}
                    />

                    <TextField
                        id="outlined-multiline-static"
                        label="Prettty print"
                        multiline
                        rows={64}
                        value={prettyPrint}
                        onChange={e => handleMinified(e.target.value)}
                    />
                </div>
            </Box>
        </div>
    )
}

export default App;
